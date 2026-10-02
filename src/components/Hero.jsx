import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  DownloadCloud, 
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { generateCompanyProfilePDF } from '../utils/pdfGenerator';

export default function Hero({ lang, t, onOpenQuote, onOpenAi }) {
  const isAr = lang === 'ar';

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center pt-14 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-slate-900">
      
      {/* Full-Width 100vw Switchgear Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/assets/hero_enclosure.jpg" 
          alt="Metalys Switchgear and Industrial Enclosure Manufacturing" 
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
        />
        {/* Elegant Corporate Gradient Overlay for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      {/* Full-Width Responsive Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Large Prominent Logo Stamp */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-slate-200 via-white to-slate-400 shadow-2xl shrink-0 border-2 border-white/60">
            <img 
              src="/assets/logo.jpg" 
              alt="Metalys Enclosures Manufacturing 3D Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black font-display tracking-tight text-white uppercase">
              {isAr ? 'ميتاليس لصناعة الهياكل والمفاتيح الكهربائية' : 'METALYS ENCLOSURES MANUFACTURING W.L.L.'}
            </span>
            <div className="text-xs sm:text-sm font-bold text-slate-300 tracking-wider uppercase mt-1">
              {isAr ? 'هندسة المعادن الدقيقة وتجميع اللوحات الكهربائية المتكاملة · الدوحة، قطر' : 'Precision Sheet Metal Engineering · Fully Assembled Switchgear · Doha, Qatar'}
            </div>
          </div>
        </div>

        {/* Stately Corporate Heading (Voltamp Style) */}
        <div className="max-w-4xl space-y-4 mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black font-display tracking-tight text-white leading-[1.12]">
            {isAr ? (
              <>
                <span className="block text-white">شركة ميتاليس لصناعة الهياكل</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 mt-2">
                  والمفاتيح الكهربائية ذ.م.م
                </span>
              </>
            ) : (
              <>
                <span className="block text-white">METALYS ENCLOSURES</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 mt-1">
                  MANUFACTURING W.L.L.
                </span>
              </>
            )}
          </h1>

          {/* Subheading: Extensive, Authoritative Corporate Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl pt-2">
            {isAr ? (
              <>
                الشركة الصناعية الرائدة في دولة قطر المتخصصة في هندسة وتصنيع هياكل اللوحات الصناعية فائقة الدقة، ومراكز التحكم بالمحركات (MCC)، وخزائن التوزيع الكهربائي منخفضة الجهد المجمعة والمختبرة بالكامل. نوفر حلولاً هندسية متطورة مصممة لمقاومة الظروف المناخية القاسية للخليج العربي، مع تسليم بري فوري ومباشر لكبرى مشاريع البنية التحتية والنفط والغاز والمقاولات في المملكة العربية السعودية والإمارات وسائر دول الخليج.
              </>
            ) : (
              <>
                Qatar’s premier manufacturer of custom precision sheet metal enclosures, low voltage motor control centers (MCC), and turnkey fully assembled switchgear solutions. Built in strict accordance with IEC 61439-1/2 and IEC 60529 standards, we provide EPC contractors, utilities, and panel builders across the GCC with unmatched manufacturing agility, 100% Factory Acceptance Testing (FAT), and rapid direct road logistics throughout Saudi Arabia and the wider Gulf region.
              </>
            )}
          </p>
        </div>

        {/* Corporate CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#products"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
          >
            <span>{isAr ? 'استعراض المنتجات والكتالوج' : 'Explore Our Products'}</span>
            <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
          </a>

          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all"
          >
            <span>{isAr ? 'طلب تسعير هندسي فوري' : 'Request RFQ & Quote'}</span>
          </button>

          <button
            onClick={onOpenAi}
            className="flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-600 text-white font-bold text-sm tracking-wide transition-all shadow-md"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>{isAr ? 'نظام التوصيف الذكي' : 'AI Spec Advisor'}</span>
          </button>

          <button
            onClick={() => generateCompanyProfilePDF(lang)}
            className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all"
          >
            <DownloadCloud className="w-4 h-4 text-slate-300" />
            <span>{isAr ? 'تحميل الملف التعريفي (PDF)' : 'Corporate Profile (PDF)'}</span>
          </button>
        </div>

        {/* Key Metrics Bar: Full Width, Clean Contrast */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl text-slate-900">
          
          <div className="p-3 text-center sm:text-start border-r last:border-r-0 border-slate-200">
            <div className="text-2xl sm:text-4xl font-black font-display text-slate-900">
              7+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {isAr ? 'سنوات من الخبرة الدقيقة' : 'Years Experience'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {isAr ? 'هندسة دقيقة معتمدة في قطر' : 'Precision engineering in Qatar'}
            </div>
          </div>

          <div className="p-3 text-center sm:text-start border-r last:border-r-0 border-slate-200">
            <div className="text-2xl sm:text-4xl font-black font-display text-slate-900">
              8,000+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {isAr ? 'م² مساحة المصنع المتطور' : 'sq.m Facility'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {isAr ? 'مصنع مؤتمت متطور بالدوحة' : 'Modern automated plant in Doha'}
            </div>
          </div>

          <div className="p-3 text-center sm:text-start border-r last:border-r-0 border-slate-200">
            <div className="text-2xl sm:text-4xl font-black font-display text-slate-900">
              6+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {isAr ? 'دول مجلس التعاون' : 'GCC Countries'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {isAr ? 'شبكة إمداد لوجستي نشطة' : 'Active regional supply network'}
            </div>
          </div>

          <div className="p-3 text-center sm:text-start border-r last:border-r-0 border-slate-200">
            <div className="text-2xl sm:text-4xl font-black font-display text-slate-900">
              500+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {isAr ? 'مشروع منجز' : 'Projects Delivered'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {isAr ? 'في قطاعات الطاقة والمرافق' : 'Industrial & utility sectors'}
            </div>
          </div>

          <div className="p-3 text-center sm:text-start border-r last:border-r-0 border-slate-200">
            <div className="text-2xl sm:text-4xl font-black font-display text-slate-900">
              100+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {isAr ? 'فريق هندسي متخصص' : 'Skilled Workforce'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {isAr ? 'مهندسون وفنيون معتمدون' : 'Certified engineers & fabricators'}
            </div>
          </div>

          <div className="p-3 text-center sm:text-start">
            <div className="text-2xl sm:text-4xl font-black font-display text-orange-600">
              IEC
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {isAr ? 'مطابقة معتمدة 100%' : 'IEC 61439 & FAT'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {isAr ? 'فحص قبول مصنعي شامل' : 'Factory acceptance tested'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
