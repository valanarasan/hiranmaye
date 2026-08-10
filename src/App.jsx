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
    <div className="min-h-screen bg-[#FAFAFE] text-[#0F172A] flex flex-col font-sans selection:bg-[#C026D3] selection:text-white relative">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Global Interactive Strategy Consultation Modal */}
      <StrategyModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Floating WhatsApp Live Inquiry Widget */}
      <WhatsAppWidget />

    </div>
  );
}
