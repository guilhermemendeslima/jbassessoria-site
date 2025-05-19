import React from 'react';
import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div id="início" className="relative bg-primary min-h-screen flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.15),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,249,249,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="particle absolute rounded-full bg-tertiary/10"
          style={{
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 py-12 md:py-24">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div 
              className="max-w-xl mx-auto lg:mx-0"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
                Contabilidade com{' '}
                <span className="text-tertiary animate-gradient-text bg-gradient-to-r from-tertiary via-[#f3d5a5] to-tertiary bg-clip-text">
                  tradição
                </span>{' '}
                e{' '}
                <span className="text-tertiary animate-gradient-text bg-gradient-to-r from-tertiary via-[#f3d5a5] to-tertiary bg-clip-text">
                  inovação
                </span>
              </h1>
              <p className="text-secondary/80 text-lg md:text-xl mb-8">
                Há mais de 35 anos oferecendo soluções contábeis completas para empresas em Sete Lagoas e região. Conte com nossa experiência para impulsionar seu negócio.
              </p>
              <a 
                href="#contato"
                className="bg-tertiary hover:brightness-110 text-primary px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover-shine inline-flex items-center justify-center"
              >
                Fale Conosco
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-tertiary/20 absolute -inset-4 rounded-xl rotate-3 transform"></div>
              <img 
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
                alt="JB Assessoria Empresarial" 
                className="relative rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3] z-10"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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