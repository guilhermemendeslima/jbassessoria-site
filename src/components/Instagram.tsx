import React, { useRef } from 'react';
import { Instagram as InstagramIcon, Heart, MessageCircle, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Instagram = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg",
      caption: "Novidades sobre a declaração do Imposto de Renda 2025! Entre em contato para garantir que sua declaração esteja correta e otimizada.",
      likes: "234",
      comments: "45"
    },
    {
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg",
      caption: "Nossa equipe em constante aprimoramento! Participando de treinamentos para melhor atender nossos clientes.",
      likes: "187",
      comments: "32"
    },
    {
      image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg",
      caption: "Simplificando a gestão financeira da sua empresa com serviços contábeis personalizados para o seu negócio.",
      likes: "312",
      comments: "56"
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -288 : 288; // 288px is the width of one card
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/jbassessoriaecontabilidade', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
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

        {/* Mobile Instagram Carousel */}
        <div className="relative md:hidden">
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post, index) => (
              <motion.div 
                key={index}
                className="flex-none w-72 bg-white rounded-xl shadow-lg snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-3 border-b">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                      <InstagramIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="ml-2 font-medium">@jbassessoriaecontabilidade</span>
                  </div>
                </div>
                <div className="aspect-square">
                  <img 
                    src={post.image}
                    alt="Instagram post"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-4 mb-3">
                    <button className="flex items-center space-x-1">
                      <Heart className="w-6 h-6" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <MessageCircle className="w-6 h-6" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-sm line-clamp-3">{post.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg md:hidden"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg md:hidden"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Desktop Instagram Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              className="instagram-grid-item relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={handleInstagramClick}
            >
              <div className="aspect-square">
                <img 
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
                <div className="instagram-overlay absolute inset-0 flex flex-col justify-end p-4">
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