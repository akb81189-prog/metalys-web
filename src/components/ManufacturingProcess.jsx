import React from 'react';
import { 
  Workflow, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function ManufacturingProcess({ lang, t }) {
  const isAr = lang === 'ar';

  const techFeatures = [
    {
      titleEn: "CNC Fiber Laser Cutting",
      titleAr: "القص بالليزر عالي الاستطاعة (CNC)",
      descEn: "High-speed 8kW fiber laser cutting engineered for complex geometric contours with micron-level dimensional precision.",
      descAr: "قص ليزري متطور فايبر باستطاعة 8kW للتشكيل الهندسي الدقيق بسرعة فائقة ودقة متناهية بالميكرون.",
      stat: "±0.05 mm Accuracy",
      image: "/assets/laser_cutting.jpg"
    },
    {
      titleEn: "CNC Press Brake Forming",
      titleAr: "الثني الآلي الرقمي المتزامن",
      descEn: "Multi-axis computerized hydraulic press brakes delivering uniform, repeatable bends across high-volume production batches.",
      descAr: "مكابس ثني هيدروليكية مؤتمتة متعددة المحاور تضمن زوايا ثني متطابقة ودقيقة في كافة مراحل الإنتاج.",
      stat: "Up to 320 Ton Force",
      image: "/assets/hero_enclosure.jpg"
    },
    {
      titleEn: "Marine-Grade Structural Welding",
      titleAr: "اللحام الإنشائي البحري المعتمد",
      descEn: "Certified TIG, MIG, and robotic continuous welding ensuring complete structural integrity in demanding high-vibration offshore environments.",
      descAr: "لحام TIG و MIG آلي معتمد يمنح الهياكل صلابة هيكلية قصوى ومقاومة للاهتزازات البحرية القاسية.",
      stat: "DNV & AWS Certified",
      image: "/assets/stainless_enclosure.jpg"
    },
    {
      titleEn: "Electrostatic Eco-Powder Coating",
      titleAr: "الدهان الإلكتروستاتيكي الحراري",
      descEn: "Automated multi-stage chemical pre-treatment and electrostatic powder coating delivering superior 1,000+ hour salt-spray corrosion resistance.",
      descAr: "معالجة كيميائية متعددة المراحل وطلاء حراري بودرة يوفر مقاومة تآكل تتجاوز 1000 ساعة من رذاذ الملح.",
      stat: "80 - 120 µm Thickness",
      image: "/assets/hero_enclosure.jpg"
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Workflow className="w-4 h-4 text-orange-600" />
            <span>{t.process.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.process.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.process.desc}
          </p>
        </div>

        {/* 8-Stage Process Flow Ribbon */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3.5">
            {t.process.stages.map((stage, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl silver-card border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between group shadow-sm hover:shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-orange-600 mb-2">
                    <span>0{idx + 1}</span>
                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-orange-500"></span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {stage.name}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 line-clamp-3 leading-normal">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Factory Technology Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {techFeatures.map((tech, idx) => (
            <div 
              key={idx}
              className="silver-card rounded-2xl border border-slate-200 overflow-hidden flex flex-col group hover:border-slate-400 transition-all shadow-sm hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={tech.image} 
                  alt={tech.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-white text-slate-900 text-xs font-bold font-mono shadow">
                  {tech.stat}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-orange-600 transition-colors">
                    {isAr ? tech.titleAr : tech.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {isAr ? tech.descAr : tech.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>METROLOGY VERIFIED</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
