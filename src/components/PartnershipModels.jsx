import React from 'react';
import { Users, Handshake, Briefcase, FileCheck, Building } from 'lucide-react';

export default function PartnershipModels({ lang, t }) {
  const isAr = lang === 'ar';

  const icons = [
    <Building className="w-7 h-7 text-orange-600" />,
    <Briefcase className="w-7 h-7 text-slate-800" />,
    <FileCheck className="w-7 h-7 text-emerald-600" />,
    <Handshake className="w-7 h-7 text-blue-600" />
  ];

  const formats = [
    { en: "OEM Manufacturing", ar: "التصنيع للمعدات الأصلية (OEM)" },
    { en: "Private Label Manufacturing", ar: "التصنيع بالعلامة التجارية الخاصة (Private Label)" },
    { en: "Overflow Capacity Manufacturing", ar: "تصنيع الفائض وتغطية ذروة المشاريع" },
    { en: "Turnkey Contract Manufacturing", ar: "عقود التصنيع والتجميع المتكاملة" },
    { en: "Project-Based EPC Deliveries", ar: "التصنيع المخصص حسب متطلبات كل مشروع" },
    { en: "Long-Term Supply Agreements", ar: "اتفاقيات التوريد الإطارية طويلة الأجل" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Users className="w-4 h-4 text-orange-600" />
            <span>{t.partnerships.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.partnerships.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.partnerships.desc}
          </p>
        </div>

        {/* 4 Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {t.partnerships.types.map((partner, idx) => (
            <div 
              key={idx}
              className="silver-card rounded-2xl p-8 border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md bg-white"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                  {icons[idx]}
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {partner.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {partner.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs text-orange-600 font-bold uppercase">
                <span>{isAr ? 'برامج شراكة معتمدة' : 'Tailored Collaboration'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Formats Bar */}
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-300 shadow-sm">
          <div className="text-xs font-mono font-bold text-slate-800 uppercase tracking-widest mb-4">
            {isAr ? 'صيغ ونماذج التعاقد المتاحة بالمصنع:' : 'AVAILABLE PARTNERSHIP FORMATS:'}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {formats.map((f, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  {isAr ? f.ar : f.en}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
