import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <div id="início" className="relative overflow-hidden bg-primary min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.1),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,249,249,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight mb-8">
              Simplificamos sua contabilidade com{' '}
              <span className="relative inline-block">
                <span className="relative z-10 animate-gradient-text bg-gradient-to-r from-[#d6b16a] via-[#f3d5a5] to-[#d6b16a] bg-clip-text text-transparent bg-[length:200%_auto]">
                  tradição e inovação
                </span>
              </span>
            </h1>
            <motion.p 
              className="mt-8 text-secondary/80 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Há mais de 35 anos oferecendo soluções contábeis personalizadas para empresas em Sete Lagoas e região. Conte com nossa experiência para impulsionar o crescimento do seu negócio com segurança e eficiência.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="group bg-tertiary hover:bg-tertiary/90 text-primary px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-tertiary/20 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  Conheça nossos serviços
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >→</motion.span>
                </span>
              </button>
              <button className="group bg-transparent border-2 border-tertiary text-tertiary px-8 py-4 rounded-lg font-semibold hover:bg-tertiary/10 transition-all duration-300">
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
            className="flex-1 md:flex-none md:w-[45%] relative perspective-1000"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="relative aspect-[3/4] md:aspect-square">
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                  alt="Professional"
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-tertiary/20 rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Calculator className="w-8 h-8 text-tertiary" />
                </motion.div>

                <motion.div
                  className="absolute top-1/3 -right-4 w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <FileText className="w-6 h-6 text-tertiary" />
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -right-4 w-14 h-14 bg-tertiary/20 rounded-full flex items-center justify-center"
                  animate={{
                    y: [-20, 0, -20],
                    rotate: [0, 360],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <BarChart3 className="w-5 h-5 text-tertiary" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;