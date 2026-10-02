import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ApplicationsSection from './components/ApplicationsSection';
import ProductCatalog from './components/ProductCatalog';
import CapabilitiesSection from './components/CapabilitiesSection';
import FullyAssembledSolutions from './components/FullyAssembledSolutions';
import GccMap from './components/GccMap';
import ManufacturingProcess from './components/ManufacturingProcess';
import AiConfigurator from './components/AiConfigurator';
import QualityCompliance from './components/QualityCompliance';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { translations } from './data/translations';
import { Sparkles, PhoneCall } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState(null);

  const t = translations[lang] || translations.en;

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [lang]);

  const handleOpenQuoteWithProduct = (product) => {
    setQuotePrefill(product);
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithConfig = (configData) => {
    setQuotePrefill(configData);
    setIsQuoteOpen(true);
  };

  const handleOpenAi = () => {
    const el = document.getElementById('ai-configurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`w-full min-h-screen bg-white text-slate-800 ${lang === 'ar' ? 'font-arabic' : 'font-industrial'}`}>
      
      {/* Voltamp-Style Full-Width Header */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onOpenQuote={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
        onOpenAi={handleOpenAi}
      />

      {/* Voltamp-Style Full-Screen Edge-to-Edge Hero Banner */}
      <Hero 
        lang={lang} 
        t={t} 
        onOpenQuote={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
        onOpenAi={handleOpenAi}
      />

      {/* Voltamp-Style Corporate About Section */}
      <AboutSection 
        lang={lang} 
        t={t} 
        onOpenQuote={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
      />

      {/* Voltamp-Style 8 Industry Applications Grid */}
      <ApplicationsSection 
        lang={lang} 
        t={t} 
        onOpenQuote={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
      />

      {/* Full-Width Core Product Catalog & Certified Datasheets */}
      <ProductCatalog 
        lang={lang} 
        t={t} 
        onOpenQuoteWithProduct={handleOpenQuoteWithProduct}
      />

      {/* Manufacturing Capabilities */}
      <CapabilitiesSection 
        lang={lang} 
        t={t} 
        onOpenQuote={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
      />

      {/* Turnkey Fully Assembled Electrical Solutions */}
      <FullyAssembledSolutions 
        lang={lang} 
        t={t} 
        onOpenQuote={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
      />

      {/* Interactive GCC Logistics Map & Transit Corridors */}
      <GccMap 
        lang={lang} 
        t={t} 
        onOpenQuote={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
      />

      {/* End-to-End Factory Process & Technology */}
      <ManufacturingProcess lang={lang} t={t} />

      {/* Metalys AI Switchgear & Enclosure Configurator */}
      <AiConfigurator 
        lang={lang} 
        t={t} 
        onOpenQuoteWithConfig={handleOpenQuoteWithConfig}
      />

      {/* Quality Assurance, IEC Standards & FAT Certification */}
      <QualityCompliance 
        lang={lang} 
        t={t} 
      />

      {/* Corporate Footer */}
      <Footer 
        lang={lang} 
        t={t} 
        onOpenQuote={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
      />

      {/* Request For Quotation Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        lang={lang} 
        t={t} 
        prefillData={quotePrefill}
      />

      {/* Floating Action Button Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <button
          onClick={handleOpenAi}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          title="Open AI Engineering Advisor"
        >
          <Sparkles className="w-4 h-4 text-orange-600 animate-spin-slow" />
          <span className="hidden sm:inline">{lang === 'ar' ? 'المستشار الهندسي الذكي' : 'AI Spec Advisor'}</span>
        </button>

        <button
          onClick={() => { setQuotePrefill(null); setIsQuoteOpen(true); }}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="hidden sm:inline">{t.nav.requestQuote}</span>
        </button>
      </div>

    </div>
  );
}
