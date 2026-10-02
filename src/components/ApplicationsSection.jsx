import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

export default function ApplicationsSection({ lang, t, onOpenQuote }) {
  const isAr = lang === 'ar';

  const applications = [
    {
      titleEn: "Power Generation & Substations",
      titleAr: "توليد الطاقة ومحطات التحويل الكهربائي",
      descEn: "Heavy-duty LV power switchboards, auxiliary distribution cabinets, and control panels engineered for high-capacity generation facilities.",
      descAr: "لوحات توزيع الجهد المنخفض وخزائن الخدمات المساعدة المصممة لتحمل ظروف محطات التوليد وشبكات النقل.",
      image: "/assets/hero_enclosure.jpg"
    },
    {
      titleEn: "Oil, Gas & Petrochemicals",
      titleAr: "قطاع النفط والغاز والبتروكيماويات",
      descEn: "Corrosion-resistant AISI 316L stainless steel enclosures engineered to withstand H2S gas, coastal salinity, and harsh refinery climates.",
      descAr: "هياكل ستانلس ستيل 316L مقاومة للتآكل الكيميائي وغاز كبريتيد الهيدروجين والظروف القاسية في مصافي النفط.",
      image: "/assets/stainless_enclosure.jpg"
    },
    {
      titleEn: "Infrastructure & Commercial Mega-Towers",
      titleAr: "البنية التحتية والأبراج والمجمعات التجارية",
      descEn: "Custom meter panel boards, feeder pillars, and modular sub-distribution units approved by GCC electricity and water authorities.",
      descAr: "صناديق عدادات معيارية وخزائن تغذية أرضية معتمدة لدى كهرماء والشركة السعودية للكهرباء وهيئات الطاقة.",
      image: "/assets/hero_enclosure.jpg"
    },
    {
      titleEn: "High-Density Data Centers",
      titleAr: "مراكز البيانات والذكاء الاصطناعي",
      descEn: "High-reliability uninterruptible power distribution boards and server busbar tap-off units with zero-downtime segregation.",
      descAr: "أنظمة توزيع كهربائي فائقة الاستمرارية ووحدات تفريع قضبان التغذية بمستوى عزل متقدم يمنع انقطاع التيار.",
      image: "/assets/laser_cutting.jpg"
    },
    {
      titleEn: "Renewable Energy & Solar Inverters",
      titleAr: "الطاقة المتجددة ومحطات الطاقة الشمسية",
      descEn: "IP66 outdoor inverter skid enclosures and combiner boxes with integrated solar thermal heat shields and UV-resistant powder finish.",
      descAr: "خزائن محولات شمسية خارجية بحماية IP66 معزولة ضد أشعة الشمس المباشرة ومطلية بدهان مقاوم للأشعة فوق البنفسجية.",
      image: "/assets/stainless_enclosure.jpg"
    },
    {
      titleEn: "Offshore Platforms & Marine Vessels",
      titleAr: "المنصات البحرية والسفن والأوفشور",
      descEn: "Marine bridge control consoles and seismic-rated battery containment racks built to strict naval vibration standards.",
      descAr: "منصات قيادة بحرية وحوامل بطاريات قوية مقاومة للاهتزازات البحرية الشديدة ومطلية بمواد مقاومة للأحماض.",
      image: "/assets/laser_cutting.jpg"
    },
    {
      titleEn: "Industrial Automation & Manufacturing",
      titleAr: "الأتمتة الصناعية والتحكم بالمصانع",
      descEn: "Precision PLC cabinets, variable frequency drive (VFD) panels, and SCADA automation enclosures with engineered forced cooling.",
      descAr: "خزائن التحكم المنطقي المبرمج (PLC) ومغيرات السرعة (VFD) وأنظمة SCADA المزودة بتبريد حراري مدروس.",
      image: "/assets/hero_enclosure.jpg"
    },
    {
      titleEn: "Railways, Metro & Aviation Hubs",
      titleAr: "المترو والسكك الحديدية والمطارات",
      descEn: "Trackside power distribution, signaling supply enclosures, and airport ground service electrical panels built for 24/7 reliability.",
      descAr: "لوحات تغذية مسارات السكك الحديدية وأنظمة الإشارات وخزائن الخدمات الأرضية للمطارات المصممة للعمل الدائم.",
      image: "/assets/stainless_enclosure.jpg"
    }
  ];

  return (
    <section id="applications" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Layers className="w-4 h-4 text-orange-600" />
            <span>{isAr ? 'القطاعات والتطبيقات الهندسية' : 'Key Industry Applications'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {isAr ? 'حلول هندسية متقدمة لأكثر القطاعات الحيوية دقة' : 'Engineered for the Region’s Most Critical Applications'}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {isAr ? (
              'من منشآت النفط والغاز في عرض البحر إلى شبكات المترو ومراكز البيانات العملاقة، تلبي منتجاتنا أعلى اشتراطات الأمان والعزل الكهربائي في كافة دول مجلس التعاون.'
            ) : (
              'From offshore hydrocarbon installations to urban transit networks and mega data centers, Metalys switchgear and custom enclosures deliver uninterrupted electrical distribution across demanding environments.'
            )}
          </p>
        </div>

        {/* Voltamp-Style 4-Column Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {applications.map((app, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img 
                  src={app.image} 
                  alt={app.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-bold font-mono uppercase bg-black/60 px-2.5 py-1 rounded backdrop-blur-xs">
                  GCC SPECIFICATION // VERIFIED
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-orange-600 transition-colors">
                    {isAr ? app.titleAr : app.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {isAr ? app.descAr : app.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-600 hover:text-orange-700 transition-colors uppercase tracking-wider"
                  >
                    <span>{isAr ? 'طلب تسعير ومواصفات' : 'Inquire Application'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
