import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart3, DollarSign, PieChart, ClipboardCheck, Mouse, ChevronDown } from 'lucide-react';

const Hero = () => {
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
    <div id="início" className="relative overflow-x-hidden bg-primary min-h-screen pt-16 md:pt-20">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.25),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,249,249,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full py-12 md:py-0">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              <span className="block">Simplificamos sua</span>
              <span className="block">contabilidade com</span>
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
              className="mt-6 text-secondary/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed"
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
                className="w-full sm:w-auto bg-tertiary hover:bg-tertiary/90 text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-tertiary/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center text-base sm:text-lg">
                  Conheça nossos serviços
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >→</motion.span>
                </span>
              </motion.button>
              <motion.button 
                className="w-full sm:w-auto bg-transparent border-2 border-tertiary text-tertiary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-tertiary/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center text-base sm:text-lg">
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
            className="hidden md:block w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
              {icons.map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center group perspective"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay, duration: 0.5 }}
                  whileHover={{
                    rotateX: 15,
                    rotateY: 15,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <Icon className="w-12 h-12 text-tertiary transform translate-z-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent rounded-xl -z-10" />
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
        {/* Desktop Scroll Indicator */}
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
            <Mouse className="w-6 h-6" />
          </motion.div>
          <span className="text-sm">Role para baixo</span>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex md:hidden flex-col items-center gap-2">
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
            <ChevronDown className="w-8 h-8" />
          </motion.div>
          <span className="text-sm">Role para baixo</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;