import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calculator, FileText, BarChart3, DollarSign, PieChart, ClipboardCheck, MousePointer, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-500, 500], [10, -10]);
  const rotateY = useTransform(x, [-500, 500], [-10, 10]);

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

  const icons = [
    { Icon: Calculator, delay: 0 },
    { Icon: FileText, delay: 0.1 },
    { Icon: BarChart3, delay: 0.2 },
    { Icon: DollarSign, delay: 0.3 },
    { Icon: PieChart, delay: 0.4 },
    { Icon: ClipboardCheck, delay: 0.5 }
  ];

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <>
      <div id="início" className="relative overflow-hidden bg-primary min-h-[90vh] pt-16 md:pt-20">
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

        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.25),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,249,249,0.15),transparent_70%)]"
            style={{ rotateX, rotateY }}
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-20">
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight mb-6">
                Simplificamos sua contabilidade com{' '}
                <motion.span 
                  className="relative inline-block text-tertiary"
                  animate={{ 
                    color: ['#d6b16a', '#f3d5a5', '#d6b16a'],
                    textShadow: [
                      '0 0 20px rgba(214,177,106,0.3)',
                      '0 0 40px rgba(214,177,106,0.3)',
                      '0 0 20px rgba(214,177,106,0.3)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  tradição e inovação
                </motion.span>
              </h1>
              <motion.p 
                className="mt-6 text-secondary/80 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Há mais de 35 anos oferecendo soluções contábeis personalizadas para empresas em Sete Lagoas e região. Conte com nossa experiência para impulsionar o crescimento do seu negócio com segurança e eficiência.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button 
                  className="group bg-tertiary hover:bg-tertiary/90 text-primary px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-tertiary/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center text-lg">
                    Conheça nossos serviços
                    <motion.span 
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >→</motion.span>
                  </span>
                </motion.button>
                <motion.button 
                  className="group bg-transparent border-2 border-tertiary text-tertiary px-8 py-4 rounded-lg font-semibold hover:bg-tertiary/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center text-lg">
                    Fale com um especialista
                    <motion.span 
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >→</motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hidden md:block flex-1 md:flex-none md:w-[40%] relative perspective-1000"
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 rounded-2xl backdrop-blur-sm transform-style-preserve-3d hover:transform-style-3d transition-all duration-500">
                {icons.map(({ Icon, delay }, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square icon-3d-gradient icon-3d-shadow icon-3d-reflection rounded-xl flex items-center justify-center transform-style-preserve-3d hover:transform-style-3d transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      rotateX: 10,
                      rotateY: 10,
                      z: 50
                    }}
                  >
                    <Icon className="w-12 h-12 text-tertiary transform-style-preserve-3d" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-secondary/80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="hidden md:flex flex-col items-center gap-2">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MousePointer className="w-6 h-6" />
            </motion.div>
            <span className="text-sm">Role para baixo</span>
          </div>
          <div className="md:hidden flex flex-col items-center gap-2">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
            <span className="text-sm">Deslize para baixo</span>
          </div>
        </motion.div>
      </div>
      <div className="h-32 bg-gradient-to-b from-primary to-secondary transform -translate-y-1" />
    </>
  );
};

export default Hero;