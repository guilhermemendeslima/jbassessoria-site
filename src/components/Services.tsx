import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FileText, Users, BarChart3, DollarSign, ChevronRight, MessageSquare } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

const ServiceModal = ({ isOpen, closeModal, service }: { 
  isOpen: boolean;
  closeModal: () => void;
  service: Service | null;
}) => {
  const handleWhatsAppClick = () => {
    if (service) {
      const message = encodeURIComponent(
        `Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`
      );
      const whatsappNumber = "5531996143534";
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center flex items-center justify-center">
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
              {service && (
                <>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-tertiary/10 rounded-xl">
                      <service.icon className="w-8 h-8 text-tertiary" />
                    </div>
                    <Dialog.Title className="text-2xl font-bold text-primary">
                      {service.title}
                    </Dialog.Title>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-4">
                      {service.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                    <button
                      className="w-full sm:w-auto bg-tertiary text-primary px-6 py-3 rounded-lg hover:bg-tertiary/90 transition-colors flex items-center justify-center gap-2"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageSquare className="w-5 h-5" />
                      Falar sobre este serviço
                    </button>
                    <button
                      className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      icon: FileText,
      title: "Contabilidade Empresarial",
      description: "Serviços contábeis completos para empresas de todos os portes",
      details: [
        "Escrituração contábil completa",
        "Elaboração de demonstrações financeiras",
        "Análise de balanços e resultados",
        "Planejamento tributário estratégico",
        "Consultoria contábil personalizada"
      ]
    },
    {
      icon: DollarSign,
      title: "Fiscal e Tributário",
      description: "Gestão fiscal estratégica e conformidade tributária",
      details: [
        "Apuração e declaração de impostos",
        "Planejamento tributário",
        "Recuperação de créditos tributários",
        "Acompanhamento de fiscalizações",
        "Consultoria em legislação fiscal"
      ]
    },
    {
      icon: BarChart3,
      title: "Gestão Empresarial",
      description: "Consultoria especializada para otimização de processos",
      details: [
        "Análise de viabilidade econômica",
        "Gestão de custos e orçamentos",
        "Planejamento financeiro",
        "Indicadores de desempenho",
        "Assessoria em decisões estratégicas"
      ]
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Gestão completa de recursos humanos",
      details: [
        "Folha de pagamento",
        "Admissões e demissões",
        "Obrigações trabalhistas",
        "Férias e 13º salário",
        "Gestão de benefícios"
      ]
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 200);
  };

  return (
    <section id="serviços" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-semibold text-tertiary uppercase tracking-wider section-title-decoration">
            Nossos Serviços
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-primary">
            Soluções completas para sua empresa
          </h3>
          <p className="mt-4 text-gray-600">
            Oferecemos uma gama completa de serviços contábeis e empresariais para impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => openModal(service)}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-tertiary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-tertiary" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 flex items-center text-tertiary font-medium">
                <span>Saiba mais</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        service={selectedService}
      />
    </section>
  );
};

export default Services;