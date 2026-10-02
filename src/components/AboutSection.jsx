import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, DownloadCloud, Factory, Award } from 'lucide-react';
import { generateCompanyProfilePDF } from '../utils/pdfGenerator';

export default function AboutSection({ lang, t, onOpenQuote }) {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Corporate Narrative (Voltamp Style) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm">
              <Factory className="w-4 h-4 text-orange-600" />
              <span>{isAr ? 'عن شركة ميتاليس' : 'About Metalys'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              {isAr ? 'رواد هندسة المعادن وتصنيع المفاتيح الكهربائية في دولة قطر' : 'Precision Sheet Metal & Switchgear Solutions Engineered for the GCC'}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {isAr ? (
                'شركة ميتاليس لصناعة الهياكل ذ.م.م هي شركة صناعية قطرية رائدة متخصصة في التصنيع الميكانيكي الدقيق للوحات وتجميع أنظمة المفاتيح والقواطع الكهربائية منخفضة الجهد. انطلاقاً من مصنعنا المتطور في المنطقة الصناعية بالدوحة الممتد على مساحة تتجاوز 8,000 متر مربع، نلتزم بتوفير أعلى معايير الجودة والاعتمادية لكبرى شركات المقاولات (EPC) وهيئات الكهرباء والماء وقطاع النفط والغاز في قطر وكافة دول مجلس التعاون.'
              ) : (
                'Metalys Enclosures Manufacturing W.L.L. is a premier Qatari industrial enterprise specializing in precision sheet metal engineering and turnkey electrical switchgear assemblies. Operating from our modern, fully equipped 8,000+ sq.m plant in the Doha Industrial Area, we are committed to delivering uncompromised quality, engineering agility, and site-ready solutions to EPC contractors, utilities, and industrial developers across the GCC.'
              )}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isAr ? (
                'نتميز بتقديم حلول متكاملة تبدأ من دراسة المخططات الهندسية ونمذجة 3D CAD، مروراً بالقص الليزري الدقيق والثني واللحام والطلاء الحراري، وحتى التوصيل الكهربائي الكامل وإجراء اختبارات القبول المصنعي (FAT) بنسبة 100%، مما يمنح عملاءنا ثقة مطلقة وسرعة قياسية في تنفيذ المشاريع.'
              ) : (
                'Our integrated manufacturing philosophy eliminates subcontractor risks. We take your project from initial 3D parametric CAD review and high-power fiber laser cutting directly through to copper busbar bending, certified component wiring, and exhaustive dielectric Factory Acceptance Testing before dispatch.'
              )}
            </p>

            {/* Core Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{isAr ? 'مطابقة لمعايير IEC 61439 و IEC 60529' : 'IEC 61439 & IEC 60529 Compliant'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{isAr ? 'شحن بري سريع ومباشر للسعودية والخليج' : '24–48h Direct Overland Road Freight'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{isAr ? 'إعفاء جمركي بين دول مجلس التعاون' : 'Zero Import Tariff Across GCC'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{isAr ? 'دعم فني وهندسي ثنائي اللغة' : 'Bilingual Project Engineering Team'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>{isAr ? 'تواصل مع فريقنا الهندسي' : 'Contact Our Engineers'}</span>
                <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => generateCompanyProfilePDF(lang)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <DownloadCloud className="w-4 h-4 text-orange-600" />
                <span>{isAr ? 'تحميل البروفايل الكامل (PDF)' : 'Download Profile (PDF)'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Factory & Assembly Showcase Imagery (Voltamp Style) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img 
                src="/assets/laser_cutting.jpg" 
                alt="Metalys CNC Fiber Laser Facility" 
                className="w-full h-[440px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Bottom Stamp Banner */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-orange-600 uppercase">DOHA CENTRAL PLANT</div>
                  <div className="text-lg font-bold font-display text-slate-900 mt-0.5">8,000+ m² Integrated Facility</div>
                  <div className="text-xs text-slate-500">CNC Fiber Laser · Multi-Axis Bending · FAT Testing</div>
                </div>

                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
