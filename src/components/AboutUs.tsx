import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-secondary transform -translate-y-1">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-tertiary/20 absolute -inset-4 rounded-xl rotate-3 transform"></div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Equipe JB Assessoria" 
                className="relative rounded-xl shadow-lg w-full h-auto object-cover z-10"
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 z-20">
                <p className="text-primary font-bold text-4xl">35<span className="text-tertiary">+</span></p>
                <p className="text-gray-600">Anos de experiência</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-tertiary uppercase tracking-wider">Sobre nós</h2>
              <h3 className="mt-2 text-3xl md:text-4xl font-bold text-primary">
                Sua contabilidade em boas mãos desde 1988
              </h3>
            </div>

            <p className="text-gray-700 mb-6">
              A JB Assessoria Empresarial é uma empresa de contabilidade com mais de 35 anos de atuação em Sete Lagoas e região. Fundada com o compromisso de oferecer serviços contábeis de alta qualidade, nos tornamos referência no mercado por nossa abordagem que une tradição e inovação.
            </p>
            <p className="text-gray-700 mb-8">
              Nossa equipe é formada por profissionais qualificados e atualizados com as mais recentes mudanças na legislação e tecnologias do setor. Entendemos que cada cliente tem necessidades únicas, por isso oferecemos soluções personalizadas que atendem às demandas específicas de cada negócio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Award className="text-tertiary w-8 h-8" />, title: "Excelência", text: "Comprometimento com a qualidade em cada serviço" },
                { icon: <Users className="text-tertiary w-8 h-8" />, title: "Equipe", text: "Profissionais qualificados e atualizados" },
                { icon: <TrendingUp className="text-tertiary w-8 h-8" />, title: "Resultados", text: "Soluções que impulsionam seu negócio" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-primary text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;