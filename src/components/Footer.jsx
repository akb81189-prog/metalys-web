import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  DownloadCloud, 
  ArrowUp
} from 'lucide-react';
import { generateCompanyProfilePDF } from '../utils/pdfGenerator';

export default function Footer({ lang, t, onOpenQuote }) {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-slate-900 text-slate-300 pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-slate-200 via-white to-slate-400 shadow-md shrink-0 border border-slate-300">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Metalys Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="text-2xl font-black font-display text-white tracking-tight">
                  METALYS
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {lang === 'ar' ? 'صناعة الهياكل والمفاتيح الكهربائية ذ.م.م' : 'Enclosures Manufacturing W.L.L.'}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              {t.footer.about}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-orange-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>IEC 61439-1/2 · IEC 60529 · ISO 9001:2015</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">{isAr ? 'عن ميتاليس' : 'About Us'}</a></li>
              <li><a href="#applications" className="hover:text-orange-400 transition-colors">{isAr ? 'القطاعات والتطبيقات' : 'Applications'}</a></li>
              <li><a href="#products" className="hover:text-orange-400 transition-colors">{t.nav.products}</a></li>
              <li><a href="#capabilities" className="hover:text-orange-400 transition-colors">{t.nav.capabilities}</a></li>
              <li><a href="#assembly" className="hover:text-orange-400 transition-colors">{t.nav.solutions}</a></li>
              <li><a href="#gcc-network" className="hover:text-orange-400 transition-colors">{t.nav.gcc}</a></li>
              <li><a href="#quality" className="hover:text-orange-400 transition-colors">{t.nav.quality}</a></li>
            </ul>
          </div>

          {/* GCC Network Coverage */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              {isAr ? 'شبكة التوريد اللوجستي الخليجي' : 'GCC Regional Logistics'}
            </h4>
            <div className="text-xs sm:text-sm space-y-2 text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span><strong>Qatar (HQ):</strong> Immediate Same-Day</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span><strong>Saudi Arabia:</strong> 24–48h Direct Highway</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span><strong>UAE:</strong> 36–48h Overland Corridor</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span><strong>Oman, Kuwait & Bahrain:</strong> Direct Transit</span>
              </div>
            </div>
            
            <div className="pt-3">
              <button
                onClick={() => generateCompanyProfilePDF(lang)}
                className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>{isAr ? 'تحميل الملف التعريفي الشامل (PDF)' : 'Download Corporate Profile (PDF)'}</span>
              </button>
            </div>
          </div>

          {/* Doha Headquarters & Contact */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              {t.contact.addressTitle}
            </h4>

            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
              <span>{t.contact.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300 font-medium">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-mono">{t.contact.phone}</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300 font-medium">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-mono">{t.contact.email}</span>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenQuote}
                className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                {t.nav.requestQuote}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.footer.legal}
          </div>

          <div className="text-center sm:text-end text-[11px]">
            {t.footer.complianceNote}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
