import React from 'react';
import { 
  Zap, 
  Layers, 
  Gauge, 
  Cpu, 
  Anchor, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function CapabilitiesSection({ lang, t, onOpenQuote }) {
  const isAr = lang === 'ar';

  const icons = [
    <Zap className="w-7 h-7 text-orange-600" />,
    <Layers className="w-7 h-7 text-slate-700" />,
    <Gauge className="w-7 h-7 text-emerald-600" />,
    <Cpu className="w-7 h-7 text-blue-600" />,
    <Anchor className="w-7 h-7 text-cyan-600" />
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Layers className="w-4 h-4 text-orange-600" />
            <span>{t.capabilities.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.capabilities.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {isAr ? (
              'منشأة متطورة تجمع بين أحدث ماكينات القص الليزري وثني المعادن بالتحكم الرقمي CNC مع خبرة فنية وهندسية رفيعة في التجميع الكهربائي لتوفير لوحات وخزائن معتمدة ومطابقة لأدق المعايير القياسية.'
            ) : (
              'From raw metal sheet processing to fully integrated switchboards, our manufacturing capacity combines high-precision CNC automation with certified electrical integration under comprehensive quality assurance protocols.'
            )}
          </p>
        </div>

        {/* 5 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.capabilities.list.map((cap, idx) => (
            <div 
              key={cap.id}
              className={`silver-card rounded-2xl p-8 border border-slate-200 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white via-slate-50 to-slate-100' : 'bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700">
                    CAPABILITY 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {cap.desc}
                </p>

                {/* Specs List with Metallic Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                  {cap.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>IEC 61439 TESTED</span>
                </span>
                <button
                  onClick={onOpenQuote}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-slate-800 hover:text-orange-600 transition-colors"
                >
                  <span>{isAr ? 'طلب مواصفة تفصيلية' : 'Request Detailed Specs'}</span>
                  <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
