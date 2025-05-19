import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="text-tertiary mr-2" size={32} />
            <span className="text-secondary font-bold text-xl">JB Assessoria</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-secondary hover:text-tertiary transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
            <button className="bg-tertiary text-primary px-4 py-2 rounded-md font-semibold hover:brightness-110 transition-all">
              Fale Conosco
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="px-4 py-3 space-y-3">
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block text-secondary hover:text-tertiary transition-colors duration-200 py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="w-full bg-tertiary text-primary px-4 py-2 rounded-md font-semibold hover:brightness-110 transition-all mt-2"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;