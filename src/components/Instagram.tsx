import React from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Instagram = () => {
  const posts = [
    {
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg",
      caption: "Novidades sobre a declaração do Imposto de Renda 2025! Entre em contato para garantir que sua declaração esteja correta e otimizada.",
    },
    {
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg",
      caption: "Nossa equipe em constante aprimoramento! Participando de treinamentos para melhor atender nossos clientes.",
    },
    {
      image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg",
      caption: "Simplificando a gestão financeira da sua empresa com serviços contábeis personalizados para o seu negócio.",
    },
  ];

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  });

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/jbassessoriaecontabilidade', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-tertiary uppercase tracking-wider section-title-decoration inline-block">
            Instagram
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-primary">
            Acompanhe nossas novidades
          </h3>
          <p className="mt-4 text-gray-600">
            Siga-nos no Instagram para dicas, novidades e atualizações sobre o mundo contábil.
          </p>
        </motion.div>

        <div ref={sliderRef} className="keen-slider mb-10">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              className="keen-slider__slide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={handleInstagramClick}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img 
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-white text-sm mb-2">{post.caption}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                      <InstagramIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="ml-2 text-white text-sm">@jbassessoriaecontabilidade</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={handleInstagramClick}
            className="hover-shine inline-flex items-center px-8 py-4 rounded-full font-semibold text-white transition-all hover:shadow-lg"
            style={{ background: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCAF45)' }}
          >
            <InstagramIcon className="w-5 h-5 mr-2" />
            Siga-nos no Instagram
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;