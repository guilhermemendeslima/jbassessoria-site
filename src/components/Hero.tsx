import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="início" className="relative bg-black min-h-[100svh] flex items-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transformando{' '}
              <span className="text-[#00ff00]">Ideias</span>{' '}
              em{' '}
              <br className="hidden sm:block" />
              <span className="text-white">Experiências</span>{' '}
              <span className="text-[#00ff00]">Visuais</span>
            </h1>
            
            <p className="text-white/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Especialistas em painéis LED para eventos, shows e instalações permanentes. Reparo, aluguel, venda e produção completa de eventos.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a 
                href="#serviços"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-[#00ff00] rounded-none hover:bg-[#00ff00]/90 transition-colors border-2 border-[#00ff00]"
              >
                NOSSOS SERVIÇOS
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;