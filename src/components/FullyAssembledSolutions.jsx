import React from 'react';
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  Activity,
  CheckCircle2
} from 'lucide-react';

export default function FullyAssembledSolutions({ lang, t, onOpenQuote }) {
  const isAr = lang === 'ar';

  return (
    <section id="assembly" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Zap className="w-4 h-4 text-orange-600" />
            <span>{t.assembly.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.assembly.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {isAr ? (
              'نقدم لعملائنا في قطر ودول الخليج منظومة تصنيع متكاملة تبدأ من تصنيع هيكل الصفيح الخام بالليزر وحتى تسليم لوحة switchgear متكاملة، مجمعة وموصلة بالكامل ومختبرة بأحدث أجهزة الفحص المعتمدة، لتصل موقع المشروع جاهزة للتوصيل المباشر.'
            ) : (
              'Eliminate on-site assembly bottlenecks and subcontracting risks. Metalys delivers fully factory-integrated switchgear assemblies — from bare sheet metal fabrication to busbar bending, component mounting, wire looming, and certified Factory Acceptance Testing (FAT).'
            )}
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-sm font-semibold flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
            <span>{t.assembly.benefitText}</span>
          </div>
        </div>

        {/* 3 Strategic Assembly Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.assembly.steps.map((step, idx) => (
            <div 
              key={idx}
              className="silver-card rounded-2xl p-8 border border-slate-200 hover:border-slate-400 transition-all duration-300 relative overflow-hidden group shadow-sm hover:shadow-md"
            >
              <div className="text-6xl font-black font-display text-slate-100 absolute top-4 right-6 select-none pointer-events-none group-hover:text-slate-200 transition-colors">
                {step.num}
              </div>

              <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-6 shadow-inner group-hover:scale-105 transition-transform">
                {idx === 0 && <Layers className="w-7 h-7 text-orange-600" />}
                {idx === 1 && <Cpu className="w-7 h-7 text-blue-600" />}
                {idx === 2 && <ShieldCheck className="w-7 h-7 text-emerald-600" />}
              </div>

              <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider mb-2">
                STAGE {step.num} // INTEGRATION
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {step.desc}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>100% FAT VERIFIED</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-slate-100 border border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display text-slate-900">
                {isAr ? 'هل تبحث عن لوحات مجمعة ومختبرة بالكامل لمشروعك القادم؟' : 'Ready to Procure Site-Ready Fully Assembled Switchgear Assemblies?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {isAr ? 'احصل على مسؤولية تصنيع واحدة متكاملة ومطابقة لاشتراطات كهرماء و SEC وهيئات الكهرباء.' : 'Single-source manufacturing accountability backed by verified IEC compliance and fast-track GCC logistics.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            <span>{isAr ? 'طلب عرض سعر للتجميع الكامل' : 'Inquire Assembly RFQ'}</span>
            <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </section>
  );
}
