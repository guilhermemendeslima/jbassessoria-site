import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageSquare, MousePointer, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="início" 
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#3c2c23]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#3c2c23] via-[#2c1b11] to-[#1a0f0a] opacity-80" />
      
      {/* Floating Shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-tertiary/10 to-transparent"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Simplificamos sua{' '}
              <motion.span
                className="text-tertiary inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Contabilidade
              </motion.span>
              {' '}com{' '}
              <span className="relative">
                <motion.span
                  className="text-tertiary inline-block"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  Tradição
                </motion.span>
                {' '}e{' '}
                <motion.span
                  className="text-tertiary inline-block"
                  animate={{
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  Inovação
                </motion.span>
              </span>
            </h1>
            
            <motion.p
              className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Há mais de 35 anos oferecendo soluções contábeis personalizadas e inovadoras para empresas de todos os portes.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#serviços"
                className="group relative px-8 py-4 bg-tertiary text-primary rounded-lg font-semibold transform hover:translate-y-[-2px] transition-all duration-300 shadow-[0_8px_16px_rgba(214,177,106,0.3)] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  Nossos Serviços
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-tertiary to-[#e8c88a] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#contato"
                className="group relative px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-tertiary hover:border-[#e8c88a] transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  Falar com Especialista
                  <MessageSquare className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-tertiary/10 to-[#e8c88a]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 flex flex-col items-center gap-2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-sm font-medium">Role para baixo</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,0.5)_var(--mouse-y,0.5),rgba(214,177,106,0.1),transparent_50%)]" />
    </section>
  );
};

export default Hero;