import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StrategyModal from './components/StrategyModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { seoPageMeta } from './data/siteData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Dynamic SEO Title updater
  useEffect(() => {
    const meta = seoPageMeta[activePage] || seoPageMeta.home;
    if (meta && meta.title) {
      document.title = meta.title;
    }
  }, [activePage]);

  // Global scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal, .stagger-children');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'services':
        return <ServicesPage setActivePage={setActivePage} onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'blog':
        return <BlogPage onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'contact':
        return <ContactPage onOpenConsultation={() => setIsConsultationOpen(true)} />;
      default:
        return <HomePage setActivePage={setActivePage} onOpenConsultation={() => setIsConsultationOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#A1A1AA] flex flex-col font-sans relative">
      
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer
        setActivePage={setActivePage}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <StrategyModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <WhatsAppWidget />

    </div>
  );
}
