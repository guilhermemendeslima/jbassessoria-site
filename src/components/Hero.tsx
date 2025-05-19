import React from 'react';
import { ChevronRight, MessageSquare, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="início" 
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3c2c23] via-[#2c1b11] to-[#1a0f0a]">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10%] opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-tertiary/15 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(214,177,106,0.15),transparent_70%)]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-4">
              <span className="inline sm:hidden">
                Simplificamos sua{' '}
                <span className="bg-gradient-to-r from-tertiary via-[#e8c88a] to-tertiary bg-clip-text text-transparent inline-block bg-[length:200%_100%]">
                  Contabilidade
                </span>
                {' '}com{' '}
                <span className="bg-gradient-to-r from-tertiary to-[#e8c88a] bg-clip-text text-transparent inline-block bg-[length:200%_100%]">
                  Tradição
                </span>
                {' '}e{' '}
                <span className="bg-gradient-to-br from-tertiary via-[#e8c88a] to-tertiary bg-clip-text text-transparent inline-block bg-[length:200%_100%]">
                  Inovação
                </span>
              </span>
              <span className="hidden sm:inline">
                Simplificamos sua{' '}
                <span className="bg-gradient-to-r from-tertiary via-[#e8c88a] to-tertiary bg-clip-text text-transparent bg-[length:200%_100%]">
                  Contabilidade
                </span>
                {' '}com{' '}
                <span className="bg-gradient-to-r from-tertiary to-[#e8c88a] bg-clip-text text-transparent bg-[length:200%_100%]">
                  Tradição
                </span>
                {' '}e{' '}
                <span className="bg-gradient-to-br from-tertiary via-[#e8c88a] to-tertiary bg-clip-text text-transparent bg-[length:200%_100%]">
                  Inovação
                </span>
              </span>
            </h1>
            
            <motion.p
              className="text-white/80 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Há mais de 35 anos oferecendo soluções contábeis personalizadas e inovadoras para empresas de todos os portes.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <motion.a
                href="#serviços"
                className="w-full sm:w-auto group relative px-6 sm:px-8 py-4 bg-tertiary text-primary rounded-lg font-semibold transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg overflow-hidden text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Nossos Serviços
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-tertiary to-[#e8c88a] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#contato"
                className="w-full sm:w-auto group relative px-6 sm:px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-tertiary hover:border-[#e8c88a] transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
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
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          className="text-white/80 flex flex-col items-center gap-2"
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
      </div>
    </section>
  );
};

export default Hero;