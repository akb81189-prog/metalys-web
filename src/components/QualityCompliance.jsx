import React from 'react';
import { ShieldCheck, Award, FileCheck2, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function QualityCompliance({ lang, t }) {
  const isAr = lang === 'ar';

  const certificates = [
    { code: "IEC 61439-1/2", org: "International Electrotechnical Commission", desc: "Short-circuit withstand, temperature rise limits, dielectric verification for low voltage assemblies." },
    { code: "IEC 60529 (IP66)", org: "Ingress Protection Standards", desc: "Hermetic dust-tight sealing and high-pressure water jet resistance testing for harsh desert/marine environments." },
    { code: "ISO 9001:2015", org: "Quality Management System", desc: "Certified precision sheet metal fabrication, robotic welding, and complete electrical switchgear integration." },
    { code: "100% FAT Protocol", org: "Factory Acceptance Testing", desc: "Primary & secondary injection tests, high-voltage flash testing, insulation resistance, verified FAT dossier." }
  ];

  return (
    <section id="quality" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Award className="w-4 h-4 text-orange-600" />
            <span>{t.quality.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.quality.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.quality.desc}
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificates.map((cert, idx) => (
            <div 
              key={idx}
              className="silver-card rounded-2xl p-7 border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shadow-inner group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    VERIFIED
                  </span>
                </div>

                <h3 className="text-xl font-mono font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {cert.code}
                </h3>
                <div className="text-xs text-slate-500 font-semibold mt-1">
                  {cert.org}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold font-mono text-emerald-600">
                <FileCheck2 className="w-4 h-4" />
                <span>AUDIT TEST REPORT INCLUDED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Framework Detailed Box */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md">
          <h3 className="text-xl font-bold font-display text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-orange-600" />
            <span>{isAr ? 'بروتوكول ضبط وتأكيد الجودة بالمصنع (QA Framework):' : 'Factory Quality Assurance (QA) Framework:'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>{isAr ? 'التحقق من دقة الأبعاد بالميكرون' : 'Dimensional Accuracy Verification'}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {isAr ? 'فحص دقيق لكافة زوايا الثني وأبعاد الليزر بواسطة أجهزة قياس ليزرية معتمدة.' : 'Automated CMM and digital caliper checks on every laser-cut and formed piece.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>{isAr ? 'تتبع شهادات المواد الأصلية' : 'Material Mill Test Traceability'}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {isAr ? 'شهادات فحص معتمدة بنسبة 100% لكافة ألواح الحديد وقضبان النحاس النقي.' : '100% mill test certificates logged for all sheet metals and 99.9% ETP copper bars.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>{isAr ? 'اختبارات العزل والجهد العالي (FAT)' : 'Dielectric & Megger Insulation Testing'}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {isAr ? 'فحص عزل 2.5kV إلى 5kV واختبارات التسلسل المنطقي للقواطع قبل الإفراج.' : 'High-voltage flash testing and phase-to-phase insulation verification before dispatch.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
