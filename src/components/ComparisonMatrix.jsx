import React from 'react';
import { Check, X, Shield } from 'lucide-react';

export default function ComparisonMatrix({ lang, t }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Shield className="w-4 h-4 text-orange-600" />
            <span>{t.comparison.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.comparison.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.comparison.desc}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="silver-card rounded-2xl border border-slate-300 overflow-hidden shadow-md bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th className="py-5 px-6 text-slate-800 font-extrabold text-start uppercase tracking-wider text-xs">
                    {t.comparison.headers[0]}
                  </th>
                  <th className="py-5 px-6 text-orange-950 font-black text-start bg-orange-100/60 border-l border-r border-orange-200 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
                      <span>{t.comparison.headers[1]}</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-600 font-bold text-start uppercase tracking-wider text-xs">
                    {t.comparison.headers[2]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {t.comparison.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-900 text-sm">
                      {row.capability}
                    </td>
                    <td className="py-5 px-6 text-slate-900 font-bold bg-orange-50/40 border-l border-r border-orange-200">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>{row.metalys}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-500 font-medium">
                      <div className="flex items-center gap-2.5">
                        <X className="w-5 h-5 text-rose-500 shrink-0" />
                        <span>{row.typical}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
