import React from 'react';
import { Truck, Coins, Zap, MessageSquare, Compass, CheckCircle2 } from 'lucide-react';

export default function StrategicAdvantage({ lang, t }) {
  const isAr = lang === 'ar';

  const icons = [
    <Truck className="w-6 h-6 text-orange-600" />,
    <Coins className="w-6 h-6 text-amber-600" />,
    <Zap className="w-6 h-6 text-blue-600" />,
    <MessageSquare className="w-6 h-6 text-slate-700" />
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Compass className="w-4 h-4 text-orange-600" />
            <span>{t.advantage.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.advantage.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {isAr ? (
              'يمتاز مصنع شركة ميتاليس في الدوحة بموقع جغرافي استراتيجي يتيح تسليماً برياً مباشراً وفائق السرعة لكافة أرجاء الخليج العربي، مما يلغي تماماً مخاطر وتأخيرات الشحن البحري، ويوفر تواصلاً هندسياً مباشراً وتكلفة تنافسية عالية بفضل اتفاقيات التجارة الحرة بين دول مجلس التعاون.'
            ) : (
              'Our state-of-the-art manufacturing plant in Doha unlocks unprecedented logistics velocity, zero intra-GCC import customs duties, and dedicated project engineering submittals for major industrial developers, utilities, and EPC contractors throughout the Arabian Gulf.'
            )}
          </p>
        </div>

        {/* 4 Core Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.advantage.items.map((item, idx) => (
            <div 
              key={idx}
              className="silver-card rounded-2xl p-8 border border-slate-200 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold font-mono">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isAr ? 'ميزة تنافسية معتمدة لمشاريع الخليج' : 'Verified GCC Project Competitive Edge'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Vision 2030 Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="text-xs font-bold font-mono text-orange-400 uppercase tracking-widest">
              {isAr ? 'رؤية مستقبلية · تمكين الصناعة الإقليمية' : 'FUTURE VISION · POWERING REGIONAL INDUSTRY'}
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold font-display text-white">
              {isAr ? 'شريك هندسي معتمد داعم لرؤية السعودية 2030 ورؤية قطر الوطنية 2030' : 'Strategic Engineering Partner Supporting Saudi Vision 2030 & Qatar National Vision'}
            </h4>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              {isAr 
                ? 'نعمل جنباً إلى جنب مع كبرى شركات التطوير الصناعي والمقاولات في المنطقة لتوطين صناعة اللوحات الكهربائية والهياكل المعدنية بأعلى المواصفات العالمية ومرونة إنتاجية تبدأ من وحدة واحدة وحتى أكثر من ألف وحدة.'
                : 'Accelerating regional industrial autonomy and localization across the GCC. Delivering bespoke prototype panels to multi-thousand unit utility rollouts with uncompromised engineering precision and full traceability.'}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4 font-mono text-xs">
            <div className="text-center p-4 rounded-xl bg-white/10 border border-white/10">
              <div className="text-white font-extrabold text-base">ZERO TARIFF</div>
              <div className="text-[10px] text-slate-300 uppercase">INTRA-GCC TRADE</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-orange-500/20 border border-orange-400/40">
              <div className="text-orange-400 font-extrabold text-base">24 - 48 HRS</div>
              <div className="text-[10px] text-slate-300 uppercase">TO RIYADH / DAMMAM</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
