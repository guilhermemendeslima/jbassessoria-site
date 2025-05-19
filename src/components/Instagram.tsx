import React from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';

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

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/jbassessoriaecontabilidade', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-semibold text-tertiary uppercase tracking-wider">Instagram</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-primary">
            Acompanhe nossas novidades
          </h3>
          <p className="mt-4 text-gray-600">
            Siga-nos no Instagram para dicas, novidades e atualizações sobre o mundo contábil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
              onClick={handleInstagramClick}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{post.caption}</p>
                </div>
                <img 
                  src={post.image} 
                  alt="Instagram post" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="ml-2 text-gray-700 font-medium">@jbassessoriaecontabilidade</span>
                </div>
                <div className="text-gray-500 text-sm">Há 3 dias</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={handleInstagramClick}
            className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg"
            style={{ background: 'linear-gradient(to right, #833AB4, #FD1D1D, #FCAF45)' }}
          >
            <InstagramIcon className="w-5 h-5 mr-2" />
            Siga-nos no Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;