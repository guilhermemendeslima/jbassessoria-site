import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart3, DollarSign, PieChart, ClipboardCheck, Mouse, ChevronDown } from 'lucide-react';

const Hero = () => {
  // ... resto do código permanece igual até o return

  return (
    <div id="início" className="relative bg-primary min-h-[calc(100vh-4rem)] md:min-h-screen pt-16 md:pt-20">
      {/* ... resto do código permanece igual até o container principal */}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full py-12 md:py-24">
          {/* ... resto do conteúdo permanece igual */}
        </div>
      </div>

      {/* Scroll Indicator ajustado para melhor responsividade */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-secondary/80 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
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
      </motion.div>
    </div>
  );
};

export default Hero;