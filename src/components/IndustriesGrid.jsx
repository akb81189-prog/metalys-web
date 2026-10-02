import React from 'react';
import { 
  Zap, 
  Flame, 
  Droplet, 
  Building2, 
  Anchor, 
  Server, 
  Sun, 
  Waves, 
  Cpu, 
  Pickaxe, 
  Train, 
  HeartPulse, 
  Plane, 
  Home, 
  Factory,
  Globe
} from 'lucide-react';

export default function IndustriesGrid({ lang, t }) {
  const isAr = lang === 'ar';

  const icons = [
    <Zap className="w-6 h-6 text-orange-600" />,
    <Factory className="w-6 h-6 text-slate-700" />,
    <Flame className="w-6 h-6 text-red-600" />,
    <Droplet className="w-6 h-6 text-blue-600" />,
    <Globe className="w-6 h-6 text-emerald-600" />,
    <Anchor className="w-6 h-6 text-cyan-600" />,
    <Building2 className="w-6 h-6 text-slate-800" />,
    <Home className="w-6 h-6 text-amber-600" />,
    <Server className="w-6 h-6 text-indigo-600" />,
    <Sun className="w-6 h-6 text-amber-500" />,
    <Waves className="w-6 h-6 text-sky-600" />,
    <Cpu className="w-6 h-6 text-purple-600" />,
    <Pickaxe className="w-6 h-6 text-stone-600" />,
    <Train className="w-6 h-6 text-rose-600" />,
    <HeartPulse className="w-6 h-6 text-red-500" />,
    <Plane className="w-6 h-6 text-blue-500" />
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <span>{t.industries.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.industries.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.industries.desc}
          </p>
        </div>

        {/* 16 Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {t.industries.items.map((ind, idx) => (
            <div 
              key={idx}
              className="silver-card rounded-2xl p-5 border border-slate-200 hover:border-slate-400 transition-all flex flex-col items-center text-center justify-center min-h-[130px] group cursor-default shadow-sm hover:shadow bg-white"
            >
              <div className="mb-3 p-3 rounded-xl bg-slate-100 group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                {ind}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
