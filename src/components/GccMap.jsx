import React from 'react';
import { MapPin, Truck, ShieldCheck, CheckCircle2, ArrowRight, Building2, Globe } from 'lucide-react';

export default function GccMap({ lang, t, onOpenQuote }) {
  const isAr = lang === 'ar';

  const countries = [
    {
      id: 'qatar',
      nameEn: 'State of Qatar',
      nameAr: 'دولة قطر',
      roleEn: 'Central Plant & Global Headquarters',
      roleAr: 'المصنع الرئيسي والمقر العام',
      detailsEn: 'Industrial Area, Doha. 8,000+ sq.m automated fabrication & assembly plant. 100% FAT testing and immediate site dispatch.',
      detailsAr: 'المنطقة الصناعية، الدوحة. مصنع مؤتمت متطور بمساحة 8,000+ م². اختبارات قبول مصنعية 100% وتسليم فوري للمواقع.',
      isHQ: true,
      tagEn: 'Manufacturing HQ',
      tagAr: 'المقر والمصنع'
    },
    {
      id: 'ksa',
      nameEn: 'Kingdom of Saudi Arabia',
      nameAr: 'المملكة العربية السعودية',
      roleEn: 'Strategic GCC Growth Market',
      roleAr: 'سوق استراتيجي رئيسي',
      detailsEn: 'Serving Riyadh, Eastern Province (Dammam & Jubail), Neom, and Western projects via daily bonded road transit through Abu Samra / Salwa border.',
      detailsAr: 'خدمة الرياض، المنطقة الشرقية (الدمام والجبيل)، نيوم ومشاريع البحر الأحمر عبر شحن بري يومي مباشر عبر منفذ أبو سمرة / سلوى.',
      isHQ: false,
      tagEn: 'Direct Daily Road Freight',
      tagAr: 'شحن بري يومي مباشر'
    },
    {
      id: 'uae',
      nameEn: 'United Arab Emirates',
      nameAr: 'الإمارات العربية المتحدة',
      roleEn: 'Industrial & Utility Hubs',
      roleAr: 'المراكز الصناعية والمرافق',
      detailsEn: 'Supplying industrial estates, utilities, and commercial infrastructure across Abu Dhabi, Dubai, Sharjah, and northern Emirates.',
      detailsAr: 'توريد مستمر للهيئات الحكومية، المدن الصناعية، ومقاولي الكهرباء في أبوظبي، دبي، والشارقة.',
      isHQ: false,
      tagEn: 'Bonded Transit',
      tagAr: 'نقل جمركي مباشر'
    },
    {
      id: 'oman',
      nameEn: 'Sultanate of Oman',
      nameAr: 'سلطنة عُمان',
      roleEn: 'Energy & Infrastructure Sector',
      roleAr: 'قطاع الطاقة والمشاريع',
      detailsEn: 'Delivering specialized marine-grade and utility-rated switchgear to Muscat, Sohar Industrial Port, and Duqm special economic zone.',
      detailsAr: 'توريد لوحات معزولة ومقاومة للملوحة لمشاريع مسقط، ميناء صحار الصناعي، والمنطقة الاقتصادية بالدقم.',
      isHQ: false,
      tagEn: 'Overland & Sea Route',
      tagAr: 'شحن بري وبحري'
    },
    {
      id: 'kuwait',
      nameEn: 'State of Kuwait',
      nameAr: 'دولة الكويت',
      roleEn: 'Power & Downstream Facilities',
      roleAr: 'قطاع الطاقة والنفط',
      detailsEn: 'Custom motor control centers and distribution boards engineered for oil & gas downstream complexes and power distribution projects.',
      detailsAr: 'لوحات تحكم بالمحركات ومراكز توزيع مصممة للمنشآت النفطية ومحطات التحويل الكهربائي.',
      isHQ: false,
      tagEn: 'Direct Logistics',
      tagAr: 'إمداد لوجستي'
    },
    {
      id: 'bahrain',
      nameEn: 'Kingdom of Bahrain',
      nameAr: 'مملكة البحرين',
      roleEn: 'Commercial & Light Industrial',
      roleAr: 'المشاريع التجارية والصناعية',
      detailsEn: 'Rapid cross-border dispatch for manufacturing plants, substations, and major civil infrastructure developments.',
      detailsAr: 'وصول بري سريع للهياكل المعدنية واللوحات المجمعة لقطاعات التصنيع والبنية التحتية.',
      isHQ: false,
      tagEn: 'Rapid Dispatch',
      tagAr: 'شحن سريع'
    }
  ];

  return (
    <section id="gcc-network" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Truck className="w-4 h-4 text-orange-600" />
            <span>{isAr ? 'شبكة التوزيع الإقليمية في دول الخليج' : 'Regional GCC Supply Network'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {isAr ? 'خدمة المشاريع الكبرى في كافة دول مجلس التعاون الخليجي' : 'Serving Strategic Projects Across All GCC Countries'}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {isAr 
              ? 'انطلاقاً من مصنعنا المركزي في الدوحة بدولة قطر، تقدم شركة ميتاليس حلولاً هندسية سريعة ودقيقة مع شبكة نقل بري يومية مباشرة تربطنا بجميع دول الخليج العربي.'
              : 'Operating from our central manufacturing facility in Doha, Qatar, Metalys provides turnkey enclosures and assembled switchgear backed by continuous bonded overland logistics across Saudi Arabia, UAE, Oman, Kuwait, and Bahrain.'
            }
          </p>
        </div>

        {/* Side-by-Side Map & Countries Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Static Regional Outline Map Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-2 text-slate-900 uppercase tracking-wider font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
                  {isAr ? 'خارطة التواجد الخليجي' : 'GCC Regional Coverage'}
                </span>
                <span className="text-orange-600 font-mono font-bold">
                  {isAr ? 'الدوحة · دولة قطر' : 'DOHA · QATAR'}
                </span>
              </div>

              {/* High-Res Static Map Outline Image */}
              <div className="relative w-full aspect-square flex items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100 overflow-hidden">
                <img 
                  src="/assets/gcc_outline_map.png" 
                  alt="GCC Regional Map - Qatar, Saudi Arabia, UAE, Oman, Kuwait, Bahrain"
                  className="w-full h-full object-contain filter contrast-[1.05]"
                />
              </div>

              {/* Map Footer Note */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{isAr ? 'نقل بري سريع · تخليص جمركي مباشر' : 'Fast Overland Freight · Direct Customs Transit'}</span>
                <span className="font-bold text-slate-800">{isAr ? '٦ دول خليجية' : '6 GCC Nations'}</span>
              </div>
            </div>
          </div>

          {/* Clean Static Countries Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {countries.map((c) => (
              <div 
                key={c.id}
                className={`p-5 rounded-2xl transition-all ${
                  c.isHQ 
                    ? 'bg-white border-2 border-orange-500/70 shadow-md ring-2 ring-orange-500/10' 
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 shrink-0 ${c.isHQ ? 'text-orange-600' : 'text-slate-500'}`} />
                    <h3 className="text-base sm:text-lg font-black font-display text-slate-900">
                      {isAr ? c.nameAr : c.nameEn}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shrink-0 ${
                    c.isHQ 
                      ? 'bg-orange-100 text-orange-800 border border-orange-200' 
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {isAr ? c.tagAr : c.tagEn}
                  </span>
                </div>

                <div className="text-xs font-bold text-orange-600 mb-2">
                  {isAr ? c.roleAr : c.roleEn}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {isAr ? c.detailsAr : c.detailsEn}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Corporate Logistics Capabilities Strip (Eurotech / Voltamp Style) */}
        <div className="mt-14 w-full p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-6 text-slate-800">
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                {isAr ? 'شحن بري يومي مباشر' : 'Daily Bonded Road Freight'}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {isAr ? 'قوافل نقل مجهزة ومباشرة للمشاريع عبر المنافذ البرية' : 'Regular direct truck dispatches across Saudi Arabia & GCC corridors'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                {isAr ? 'تغليف بحري وصناعي ثقيل' : 'Heavy Export Sea & Road Packing'}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {isAr ? 'صناديق خشبية معالجة حرارياً لحماية اللوحات أثناء النقل' : 'ISPM-15 certified export crates and moisture-barrier vacuum packaging'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                {isAr ? 'تخليص جمركي متكامل' : 'Simplified GCC Customs Clear'}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {isAr ? 'شهادات منشأ قطرية ورقم تعريفي مطابق لمواصفات الخليج' : 'Duty exemptions under GCC Unified Economic Agreement with full paperwork'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <button
              onClick={onOpenQuote}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>{isAr ? 'طلب تسعير لمشروع خليجي' : 'Inquire GCC Project Transit'}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
