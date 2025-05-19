import React, { useEffect, useRef, useState } from 'react';
import { Calculator, FileText, BarChart3, DollarSign } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const startValue = 0;
          const changeInValue = end - startValue;

          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.floor(startValue + changeInValue * easeProgress);
            setCount(currentCount);

            if (progress < 1) {
              window.requestAnimationFrame(animateCount);
            }
          };

          window.requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className="flex items-center justify-center">
      <span className="text-4xl md:text-5xl font-bold">{count}{suffix}</span>
    </div>
  );
};

const Counter = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const counters = [
    { icon: Calculator, number: 35, suffix: "+", label: "Anos de experiência" },
    { icon: FileText, number: 850, suffix: "+", label: "Clientes atendidos" },
    { icon: BarChart3, number: 12000, suffix: "+", label: "Declarações entregues" },
    { icon: DollarSign, number: 98, suffix: "%", label: "Índice de satisfação" },
  ];

  return (
    <div ref={counterRef} className="relative overflow-hidden bg-primary py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Nossa trajetória em{' '}
            <span className="text-tertiary animate-gradient-text bg-gradient-to-r from-tertiary via-[#f3d5a5] to-tertiary bg-clip-text text-transparent">
              números
            </span>
          </h2>
          <p className="mt-4 text-secondary/80 max-w-xl mx-auto">
            Resultados que demonstram nossa dedicação e compromisso com a excelência em serviços contábeis.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8">
          {counters.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="counter-icon mb-6 flex justify-center">
                <item.icon className="w-12 h-12 text-tertiary transform-gpu transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="text-tertiary mb-2">
                <CountUp end={item.number} suffix={item.suffix} />
              </div>
              <p className="text-secondary/90 text-sm text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;