import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const message = encodeURIComponent(
      `Olá, sou ${formData.name}.\n\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`
    );
    
    // WhatsApp number from the requirements
    const whatsappNumber = "5531996143534";
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
    
    // Reset form and set success status
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Clear success message after a few seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-semibold text-tertiary uppercase tracking-wider">Contato</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-primary">
            Vamos conversar sobre o seu negócio
          </h3>
          <p className="mt-4 text-gray-600">
            Entre em contato conosco para uma consultoria especializada e descubra como podemos ajudar a sua empresa.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h4 className="text-2xl font-bold text-primary mb-6">Informações de Contato</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-tertiary/10 rounded-full">
                    <Phone className="w-6 h-6 text-tertiary" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-primary mb-1">Telefone</h5>
                    <p className="text-gray-600">(31) 9961-43534</p>
                    <p className="text-gray-600">(31) 3333-4444</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-tertiary/10 rounded-full">
                    <Mail className="w-6 h-6 text-tertiary" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-primary mb-1">E-mail</h5>
                    <p className="text-gray-600">contato@jbassessoria.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-tertiary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-tertiary" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-primary mb-1">Endereço</h5>
                    <p className="text-gray-600">Rua Principal, 123</p>
                    <p className="text-gray-600">Centro, Sete Lagoas - MG</p>
                    <p className="text-gray-600">CEP: 35700-000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-colors"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-colors"
                  placeholder="Como podemos ajudar sua empresa?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-success/10 text-success rounded-md text-center">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-error/10 text-error rounded-md text-center">
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;