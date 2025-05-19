import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart3, DollarSign, PieChart, ClipboardCheck, Mouse } from 'lucide-react';

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const iconGrid = [
    [Calculator, FileText, BarChart3],
    [DollarSign, PieChart, ClipboardCheck]
  ];

  return (
    <div id="início" className="relative bg-primary min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.15),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,249,249,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div 
              className="max-w-xl mx-auto md:mx-0"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
                Simplificamos sua contabilidade com{' '}
                <span className="text-tertiary animate-gradient-text bg-gradient-to-r from-tertiary via-[#f3d5a5] to-tertiary bg-clip-text">
                  tradição
                </span>{' '}
                e{' '}
                <span className="text-tertiary animate-gradient-text bg-gradient-to-r from-tertiary via-[#f3d5a5] to-tertiary bg-clip-text">
                  inovação
                </span>
              </h1>
              <p className="text-secondary/80 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                Mais de 35 anos de experiência em soluções contábeis personalizadas para o seu negócio crescer com segurança e confiança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#serviços"
                  className="bg-tertiary hover:brightness-110 text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:shadow-lg hover-shine inline-flex items-center justify-center text-sm sm:text-base"
                >
                  Ver nossos serviços
                </a>
                <a 
                  href="#contato"
                  className="bg-white/10 hover:bg-white/20 text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center backdrop-blur-sm text-sm sm:text-base"
                >
                  Falar com especialista
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Icon Grid */}
          <motion.div 
            className="w-full md:w-1/2 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-6 md:gap-8 perspective-1000">
              {iconGrid.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((Icon, colIndex) => (
                    <motion.div
                      key={`${rowIndex}-${colIndex}`}
                      className="aspect-square bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform-style-preserve-3d group"
                      whileHover={{
                        scale: 1.05,
                        rotateX: 10,
                        rotateY: 10,
                        z: 50
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (rowIndex * 3 + colIndex) * 0.1 }}
                    >
                      <div className="h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-12 h-12 text-tertiary" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent rounded-2xl -z-10" />
                    </motion.div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-secondary/80 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Hero;