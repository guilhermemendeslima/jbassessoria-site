import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Counter from './components/Counter';
import ContactForm from './components/ContactForm';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fff9f9] font-montserrat">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Counter />
      <ContactForm />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;