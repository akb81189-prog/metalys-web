import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Menu, 
  X, 
  Sparkles, 
  Phone, 
  Mail, 
  ArrowRight,
  Search
} from 'lucide-react';

export default function Navbar({ lang, setLang, t, onOpenQuote, onOpenAi }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const navLinks = [
    { label: lang === 'ar' ? 'المنتجات' : 'Products', href: "#products" },
    { label: lang === 'ar' ? 'القدرات التصنيعية' : 'Capabilities', href: "#capabilities" },
    { label: lang === 'ar' ? 'التجميع الكهربائي' : 'Assembly Solutions', href: "#assembly" },
    { label: lang === 'ar' ? 'التطبيقات والقطاعات' : 'Applications', href: "#applications" },
    { label: lang === 'ar' ? 'عن ميتاليس' : 'About Us', href: "#about" },
    { label: lang === 'ar' ? 'شبكة دول الخليج' : 'GCC Network', href: "#gcc-network" },
    { label: lang === 'ar' ? 'الجودة والمطابقة' : 'Quality & QA', href: "#quality" },
  ];

  return (
    <header className="relative w-full z-30 bg-white shadow-sm border-b border-slate-200">
      
      {/* Voltamp-Style Top Utility Bar (Full Width) */}
      <div className="w-full bg-slate-900 text-slate-300 text-xs py-2 px-6 sm:px-10 lg:px-16 2xl:px-24 hidden md:flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-6 rtl:space-x-reverse font-medium">
          <a href="tel:+97444508820" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-mono">Tel: +974 4450 8820</span>
          </a>
          <span className="text-slate-700">|</span>
          <a href="mailto:sales@metalys.qa" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-orange-400" />
            <span>Email: sales@metalys.qa</span>
          </a>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">
            {lang === 'ar' ? 'المنطقة الصناعية، الدوحة، دولة قطر' : 'Industrial Area, Doha, State of Qatar'}
          </span>
        </div>

        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {/* AI Advisor Link */}
          <button 
            onClick={onOpenAi}
            className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-bold tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'المستشار الذكي للمواصفات' : 'AI Spec Advisor'}</span>
          </button>

          <span className="text-slate-700">|</span>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 font-bold">
            <span className="text-slate-400">{lang === 'ar' ? 'اللغة:' : 'Language:'}</span>
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-orange-400 transition-colors uppercase tracking-wider"
            >
              {lang === 'en' ? 'العربية' : 'ENG'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Full Width, Equidistant & Clean Spacing) */}
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-4 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-4 shrink-0 group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-slate-200 via-white to-slate-400 shadow-md border border-slate-300 shrink-0">
            <img 
              src="/assets/logo.jpg" 
              alt="Metalys Enclosures Manufacturing Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black font-display tracking-tight text-slate-900 leading-none">
              METALYS
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-600 uppercase tracking-wider mt-1">
              {lang === 'ar' ? 'صناعة الهياكل والمفاتيح الكهربائية ذ.م.م' : 'Enclosures Manufacturing W.L.L.'}
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              {lang === 'ar' ? 'هندسة قطرية · تلبي احتياجات الخليج' : 'Engineered in Qatar · Built for GCC'}
            </span>
          </div>
        </a>

        {/* Equidistant, Spacious Desktop Navigation Links with Ample Margins */}
        <div className="hidden xl:flex items-center">
          <nav className="flex items-center gap-6 2xl:gap-9">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                className="text-[14px] 2xl:text-[15px] font-bold text-slate-800 hover:text-orange-600 transition-colors whitespace-nowrap tracking-wide py-1.5 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-orange-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button separated with generous, distinct space */}
          <div className="ms-8 2xl:ms-12 shrink-0">
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex xl:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800"
          >
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Full Screen Compatible Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-bold text-slate-900 hover:text-orange-600 py-2 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAi(); }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 font-bold text-sm"
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>{lang === 'ar' ? 'المستشار الذكي للمواصفات' : 'AI Spec Advisor'}</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-md"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
