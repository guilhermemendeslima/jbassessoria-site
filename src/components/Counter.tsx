import React, { useEffect, useRef, useState } from 'react';
import { Calculator, FileText, BarChart3, DollarSign } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-500, 500], [5, -5]);
  const rotateY = useTransform(x, [-500, 500], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const counters = [
    { icon: Calculator, number: 35, suffix: "+", label: "Anos de experiência" },
    { icon: FileText, number: 850, suffix: "+", label: "Clientes atendidos" },
    { icon: BarChart3, number: 200, suffix: "+", label: "Empresas parceiras" },
    { icon: DollarSign, number: 98, suffix: "%", label: "Índice de satisfação" },
  ];

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-primary py-24 md:py-32">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle absolute rounded-full bg-tertiary/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay
          }}
        />
      ))}

      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.25),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,249,249,0.15),transparent_70%)]"
        style={{ rotateX, rotateY }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary">
            Nossa trajetória em{' '}
            <span className="text-tertiary animate-gradient-text bg-gradient-to-r from-tertiary via-[#f3d5a5] to-tertiary bg-clip-text text-transparent">
              números
            </span>
          </h2>
          <p className="mt-6 text-secondary/80 max-w-2xl mx-auto text-lg">
            Resultados que demonstram nossa dedicação e compromisso com a excelência em serviços contábeis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((item, index) => (
            <motion.div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                rotateX: 10,
                rotateY: 10,
                z: 50
              }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="counter-icon mb-6 flex justify-center transform translate-z-20">
                <item.icon className="w-14 h-14 text-tertiary" />
              </div>
              <div className="text-tertiary mb-4 transform translate-z-20">
                <CountUp end={item.number} suffix={item.suffix} />
              </div>
              <p className="text-secondary/90 text-lg text-center transform translate-z-20">{item.label}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent rounded-xl -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;