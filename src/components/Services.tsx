import React, { useState } from 'react';
import { Calculator, FileText, BarChart3, DollarSign, Building2, FileSearch, X } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceList = [
  {
    icon: <Calculator className="w-10 h-10 text-tertiary group-hover:text-primary transition-colors duration-300" />,
    title: 'Contabilidade Empresarial',
    description: 'Serviços completos de contabilidade para empresas de todos os portes e segmentos.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os serviços de Contabilidade Empresarial da JB Assessoria.',
    details: {
      fullDescription: 'Nossa equipe especializada oferece serviços completos de contabilidade empresarial, incluindo escrituração contábil, elaboração de demonstrações financeiras, relatórios gerenciais personalizados e análise detalhada dos resultados financeiros da sua empresa.',
      benefits: [
        'Demonstrações financeiras precisas e pontuais',
        'Relatórios gerenciais customizados',
        'Análise de desempenho financeiro',
        'Suporte contábil especializado'
      ],
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg'
    }
  },
  {
    icon: <FileText className="w-10 h-10 text-tertiary group-hover:text-primary transition-colors duration-300" />,
    title: 'Fiscal e Tributário',
    description: 'Planejamento tributário e orientação para redução da carga tributária dentro da legalidade.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os serviços Fiscais e Tributários da JB Assessoria.',
    details: {
      fullDescription: 'Oferecemos consultoria fiscal e tributária completa, focando na otimização da carga tributária da sua empresa através de estratégias legais e eficientes. Nossa equipe mantém-se constantemente atualizada sobre as legislações fiscais.',
      benefits: [
        'Planejamento tributário estratégico',
        'Redução legal da carga tributária',
        'Prevenção de problemas fiscais',
        'Acompanhamento de obrigações acessórias'
      ],
      image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg'
    }
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-tertiary group-hover:text-primary transition-colors duration-300" />,
    title: 'Gestão Empresarial',
    description: 'Consultoria para gestão financeira e assessoria para tomada de decisões estratégicas.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os serviços de Gestão Empresarial da JB Assessoria.',
    details: {
      fullDescription: 'Fornecemos consultoria especializada em gestão empresarial, auxiliando na análise financeira, planejamento estratégico e tomada de decisões. Nosso objetivo é contribuir para o crescimento sustentável do seu negócio.',
      benefits: [
        'Análise financeira detalhada',
        'Planejamento estratégico',
        'Consultoria empresarial',
        'Indicadores de desempenho'
      ],
      image: 'https://images.pexels.com/photos/7681897/pexels-photo-7681897.jpeg'
    }
  },
  {
    icon: <DollarSign className="w-10 h-10 text-tertiary group-hover:text-primary transition-colors duration-300" />,
    title: 'Departamento Pessoal',
    description: 'Administração completa da folha de pagamento e rotinas trabalhistas.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os serviços de Departamento Pessoal da JB Assessoria.',
    details: {
      fullDescription: 'Gerenciamos todas as rotinas do departamento pessoal, desde admissões e demissões até o processamento da folha de pagamento e cumprimento das obrigações trabalhistas, garantindo conformidade com a legislação.',
      benefits: [
        'Gestão completa da folha de pagamento',
        'Admissões e demissões',
        'Cálculo de encargos e benefícios',
        'Conformidade com a legislação trabalhista'
      ],
      image: 'https://images.pexels.com/photos/7681897/pexels-photo-7681897.jpeg'
    }
  },
  {
    icon: <Building2 className="w-10 h-10 text-tertiary group-hover:text-primary transition-colors duration-300" />,
    title: 'Abertura de Empresas',
    description: 'Assessoria completa para constituição de empresas e obtenção de licenças.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os serviços de Abertura de Empresas da JB Assessoria.',
    details: {
      fullDescription: 'Oferecemos suporte completo para abertura de empresas, desde a escolha do regime tributário até o registro nos órgãos competentes. Cuidamos de toda a documentação e processos necessários para iniciar seu negócio.',
      benefits: [
        'Análise do melhor regime tributário',
        'Registro em órgãos competentes',
        'Obtenção de licenças necessárias',
        'Suporte jurídico especializado'
      ],
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg'
    }
  },
  {
    icon: <FileSearch className="w-10 h-10 text-tertiary group-hover:text-primary transition-colors duration-300" />,
    title: 'Auditoria e Consultoria',
    description: 'Serviços de auditoria contábil e financeira, due diligence e revisão de processos.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os serviços de Auditoria e Consultoria da JB Assessoria.',
    details: {
      fullDescription: 'Realizamos auditorias contábeis e financeiras detalhadas, além de serviços de consultoria especializada para situações específicas. Nossa equipe possui vasta experiência em due diligence e revisão de processos.',
      benefits: [
        'Auditoria contábil e financeira',
        'Due diligence',
        'Revisão de processos internos',
        'Consultoria especializada'
      ],
      image: 'https://images.pexels.com/photos/7681897/pexels-photo-7681897.jpeg'
    }
  }
];

const ServiceModal = ({ isOpen, closeModal, service }: any) => {
  const handleWhatsAppRedirect = () => {
    const whatsappNumber = "5531996143534";
    const message = encodeURIComponent(service.whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    closeModal();
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-2">
                <div className="aspect-video overflow-hidden rounded-lg mb-6">
                  <img
                    src={service.details.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold text-primary mb-4 flex items-center"
                >
                  {service.icon}
                  <span className="ml-3">{service.title}</span>
                </Dialog.Title>

                <p className="text-gray-600 mb-6">
                  {service.details.fullDescription}
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    Benefícios
                  </h4>
                  <ul className="space-y-3">
                    {service.details.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-tertiary rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-tertiary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-tertiary/90 transition-colors flex items-center justify-center"
                  >
                    <span>Solicitar este serviço via WhatsApp</span>
                    <motion.span 
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >→</motion.span>
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="serviços" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-1 bg-gradient-to-r from-tertiary/20 via-tertiary to-tertiary/20"></div>
          </div>
          <h2 className="text-sm font-semibold text-tertiary uppercase tracking-wider">Nossos Serviços</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
            Soluções completas para sua empresa
          </h3>
          <p className="mt-4 text-gray-600">
            Oferecemos uma ampla gama de serviços contábeis e financeiros para atender todas as necessidades da sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-secondary border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-tertiary/50"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold text-primary mb-3">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4">
                <button 
                  onClick={() => openModal(service)}
                  className="text-tertiary group-hover:text-primary font-medium flex items-center transition-colors duration-300"
                >
                  Saiba mais
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default Services;