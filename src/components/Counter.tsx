import React, { useEffect, useRef, useState } from 'react';

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

  return <div ref={countRef}>{count}{suffix}</div>;
};

const Counter = () => {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!counterRef.current) return;
      const elements = counterRef.current.querySelectorAll('.animation-element');
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      elements.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        const speed = 1 + index * 0.2;
        const xOffset = (x - 0.5) * speed * 15;
        const yOffset = (y - 0.5) * speed * 15;
        
        htmlEl.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={counterRef} className="relative overflow-hidden bg-primary py-16 md:py-24">
      {/* 3D Animated Background Elements - Same as hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animation-element absolute top-[10%] left-[10%] w-16 h-16 rounded-full bg-tertiary/10 animate-float"></div>
        <div className="animation-element absolute top-[30%] left-[80%] w-24 h-24 rounded-full bg-tertiary/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="animation-element absolute top-[70%] left-[20%] w-32 h-32 rounded-full bg-tertiary/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="animation-element absolute top-[50%] left-[50%] w-40 h-40 rounded-full bg-tertiary/5 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="animation-element absolute top-[20%] left-[40%] w-20 h-20 rounded-full bg-tertiary/15 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Nossa trajetória em <span className="text-tertiary">números</span>
          </h2>
          <p className="mt-4 text-secondary/80 max-w-xl mx-auto">
            Resultados que demonstram nossa dedicação e compromisso com a excelência em serviços contábeis.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: 35, suffix: "+", label: "Anos de experiência" },
            { number: 850, suffix: "+", label: "Clientes atendidos" },
            { number: 12000, suffix: "+", label: "Declarações entregues" },
            { number: 98, suffix: "%", label: "Índice de satisfação" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-tertiary text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={item.number} suffix={item.suffix} />
              </div>
              <p className="text-secondary/90">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;