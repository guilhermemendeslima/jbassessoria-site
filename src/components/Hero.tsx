import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart3, DollarSign, PieChart, ClipboardCheck } from 'lucide-react';

const Hero = () => {
  const icons = [
    { Icon: Calculator, delay: 0 },
    { Icon: FileText, delay: 0.1 },
    { Icon: BarChart3, delay: 0.2 },
    { Icon: DollarSign, delay: 0.3 },
    { Icon: PieChart, delay: 0.4 },
    { Icon: ClipboardCheck, delay: 0.5 }
  ];

  return (
    <div id="início" className="relative overflow-hidden bg-primary min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.1),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,249,249,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50"></div>
      </div>

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
                <span className="relative z-10 animate-gradient-text bg-gradient-to-r from-tertiary via-[#f3d5a5] to-tertiary bg-clip-text text-transparent">
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-white/5 rounded-2xl backdrop-blur-sm transform-style-preserve-3d hover:transform-style-3d transition-all duration-500">
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
    </div>
  );
};

export default Hero;