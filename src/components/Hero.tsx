import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const elements = heroRef.current.querySelectorAll('.animation-element');
      
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
    <div id="início" ref={heroRef} className="relative overflow-hidden bg-primary min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-tertiary/10"></div>

      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animation-element absolute top-[10%] left-[10%] w-24 h-24 rounded-full bg-tertiary/10 animate-float"></div>
        <div className="animation-element absolute top-[30%] left-[80%] w-32 h-32 rounded-full bg-tertiary/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="animation-element absolute top-[70%] left-[20%] w-40 h-40 rounded-full bg-tertiary/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="animation-element absolute top-[50%] left-[50%] w-48 h-48 rounded-full bg-tertiary/5 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="animation-element absolute top-[20%] left-[40%] w-28 h-28 rounded-full bg-tertiary/15 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
              Simplificamos sua contabilidade com{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-tertiary shimmer-text">
                  tradição e inovação
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-tertiary/0 via-tertiary/30 to-tertiary/0 shimmer-effect"></span>
              </span>
            </h1>
            <motion.p 
              className="mt-6 text-secondary/80 text-lg md:text-xl max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Há mais de 35 anos oferecendo soluções contábeis personalizadas para empresas em Sete Lagoas e região.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="group bg-tertiary hover:bg-tertiary/90 text-primary font-semibold py-4 px-8 rounded-md shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Conheça nossos serviços
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >→</motion.span>
                </span>
              </button>
              <button className="group bg-transparent border-2 border-secondary hover:border-tertiary text-secondary hover:text-tertiary font-semibold py-4 px-8 rounded-md transition-all hover:shadow-[0_0_15px_rgba(214,177,106,0.3)]">
                <span className="flex items-center justify-center">
                  Fale com um especialista
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >→</motion.span>
                </span>
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 md:flex-none md:w-[45%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-tertiary/20 rounded-2xl blur-2xl animate-pulse"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg"
                  alt="Profissional de contabilidade" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;