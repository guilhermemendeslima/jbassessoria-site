import React from 'react';
import { FileText, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <FileText className="text-tertiary mr-2" size={24} />
              <span className="font-bold text-xl">JB Assessoria</span>
            </div>
            <p className="text-secondary/70 mb-4">
              Simplificamos sua contabilidade com tradição e inovação há mais de 35 anos.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-tertiary/10 hover:bg-tertiary/20 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-tertiary" />
              </a>
              <a href="https://www.instagram.com/jbassessoriaecontabilidade" target="_blank" rel="noopener noreferrer" className="bg-tertiary/10 hover:bg-tertiary/20 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-tertiary" />
              </a>
              <a href="#" className="bg-tertiary/10 hover:bg-tertiary/20 p-2 rounded-full transition-colors">
                <Linkedin className="w-5 h-5 text-tertiary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-tertiary">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-secondary/70 hover:text-tertiary transition-colors block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-tertiary">Serviços</h4>
            <ul className="space-y-2">
              {['Contabilidade Empresarial', 'Fiscal e Tributário', 'Gestão Empresarial', 'Departamento Pessoal', 'Abertura de Empresas'].map((item) => (
                <li key={item}>
                  <a 
                    href="#serviços" 
                    className="text-secondary/70 hover:text-tertiary transition-colors block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-tertiary">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-tertiary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary/70">(31) 9961-43534</p>
                  <p className="text-secondary/70">(31) 3333-4444</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-tertiary mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary/70">contato@jbassessoria.com.br</p>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-tertiary mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary/70">Rua Principal, 123, Centro<br />Sete Lagoas - MG<br />CEP: 35700-000</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JB Assessoria Empresarial. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 text-secondary/60 text-sm">
            <a href="#" className="hover:text-tertiary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-tertiary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;