import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart3, DollarSign, Building2, FileSearch } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const elements = heroRef.current.querySelectorAll('.icon-element');
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      elements.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        const depth = 1 + index * 0.5;
        const translateX = (x - 0.5) * depth * 30;
        const translateY = (y - 0.5) * depth * 30;
        const rotateX = (y - 0.5) * depth * 20;
        const rotateY = (x - 0.5) * depth * 20;
        
        htmlEl.style.transform = `
          perspective(1000px)
          translate3d(${translateX}px, ${translateY}px, ${depth * 50}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const iconComponents = [
    { Icon: Calculator, position: 'top-10 -right-4', delay: 0 },
    { Icon: FileText, position: 'top-1/4 -right-8', delay: 0.2 },
    { Icon: BarChart3, position: 'top-1/2 -right-4', delay: 0.4 },
    { Icon: DollarSign, position: 'bottom-1/4 -right-8', delay: 0.6 },
    { Icon: Building2, position: 'bottom-20 -right-4', delay: 0.8 },
    { Icon: FileSearch, position: 'bottom-0 right-1/4', delay: 1 }
  ];

  return (
    <div id="início" ref={heroRef} className="relative overflow-hidden bg-primary min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,177,106,0.1),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,249,249,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="flex-1 text-center md:text-left md:max-w-[60%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
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
              className="mt-8 text-secondary/80 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            >
              Há mais de 35 anos oferecendo soluções contábeis personalizadas para empresas em Sete Lagoas e região. Conte com nossa experiência para impulsionar o crescimento do seu negócio com segurança e eficiência.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            >
              <button className="group bg-tertiary hover:bg-tertiary/90 text-primary px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-tertiary/20 transition-all duration-800 ease-in-out transform hover:scale-105">
                <span className="flex items-center justify-center">
                  Conheça nossos serviços
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >→</motion.span>
                </span>
              </button>
              <button className="group bg-transparent border-2 border-tertiary text-tertiary px-8 py-4 rounded-lg font-semibold hover:bg-tertiary/10 transition-all duration-800 ease-in-out">
                <span className="flex items-center justify-center">
                  Fale com um especialista
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >→</motion.span>
                </span>
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 md:flex-none md:w-[40%] relative transform-style-preserve-3d"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/20 to-transparent mix-blend-overlay"></div>
              <motion.img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Professional team"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              
              {iconComponents.map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  className={`icon-element absolute ${position} p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg`}
                  initial={{ opacity: 0, scale: 0, z: -100 }}
                  animate={{ opacity: 1, scale: 1, z: 0 }}
                  transition={{ delay: delay + 0.5, duration: 0.8, ease: "easeInOut" }}
                >
                  <Icon className="w-8 h-8 text-tertiary" />
                </motion.div>
              ))}

              <motion.div 
                className="absolute -bottom-1 -right-1 transform translate-y-1/4 translate-x-1/4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-full p-6 shadow-xl">
                  <p className="text-primary font-bold text-4xl">35<span className="text-tertiary">+</span></p>
                  <p className="text-gray-600 whitespace-nowrap">Anos de experiência</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;