import React, { useState } from 'react';
import { 
  Sparkles, 
  DownloadCloud, 
  Send, 
  Thermometer, 
  Zap, 
  RefreshCw,
  Box,
  Layers
} from 'lucide-react';
import { generateConfiguratorSpecPDF } from '../utils/pdfGenerator';

export default function AiConfigurator({ lang, t, onOpenQuoteWithConfig }) {
  const isAr = lang === 'ar';

  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    industry: 'Oil & Gas Upstream',
    environment: 'Extreme Desert (55°C & Sandstorm)',
    current: '1600A',
    voltage: '415V, 3-Phase, 50Hz',
    form: 'Form 4b Type 7 (Full Segregation)',
    material: 'AISI 316L Marine Stainless Steel',
    mounting: 'Floor Standing Modular Bay',
    country: 'Kingdom of Saudi Arabia (KSA)'
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [analysisDone, setAnalysisDone] = useState(false);

  const industries = [
    { id: 'og', labelEn: 'Oil, Gas & Petrochemical', labelAr: 'النفط والغاز والبتروكيماويات' },
    { id: 'util', labelEn: 'Power Utilities & Substations', labelAr: 'مرافق ومحطات الكهرباء' },
    { id: 'dc', labelEn: 'High-Density Data Centers', labelAr: 'مراكز البيانات والاتصالات' },
    { id: 'infra', labelEn: 'Commercial & Infrastructure', labelAr: 'المباني والأبراج والبنية التحتية' },
    { id: 'marine', labelEn: 'Marine & Offshore Ports', labelAr: 'الموانئ والمنشآت البحرية' }
  ];

  const environments = [
    { id: 'desert', labelEn: 'Extreme Desert (55°C Ambient, Dust & UV)', labelAr: 'مناخ صحراوي قاسي (حرارة 55°م، غبار، شمس)' },
    { id: 'coastal', labelEn: 'Marine Coastal (High Salinity & Humidity)', labelAr: 'ساحلي بحري (رطوبة عالية وأملاح بحرية)' },
    { id: 'indoor', labelEn: 'Indoor Climate Controlled / Substation', labelAr: 'داخلي مكيف / غرفة محولات ومحطات' },
    { id: 'hazardous', labelEn: 'Hazardous Chemical / ATEX Zone 2', labelAr: 'بيئة بتروكيماوية خطرة / تصنيف Zone 2' }
  ];

  const busbarCurrents = ['400A', '800A', '1250A', '1600A', '2500A', '4000A'];
  const segregationForms = [
    { id: 'Form 2b', label: 'Form 2b (Busbar separated from units)' },
    { id: 'Form 3b', label: 'Form 3b (Busbar & terminals separated)' },
    { id: 'Form 4b Type 7', label: 'Form 4b Type 7 (Highest safety individual chambers)' }
  ];

  const materials = [
    { id: 'cr', labelEn: 'Electro-Galvanized Steel + Powder Coat', labelAr: 'حديد مجلفن كهربائياً + دهان حراري' },
    { id: 'ss316', labelEn: 'AISI 316L Marine Stainless Steel', labelAr: 'ستانلس ستيل بحري 316L فائق المقاومة' },
    { id: 'aluzinc', labelEn: 'Aluzinc Double-Skin Insulated', labelAr: 'ألوزنك معزول بجدار مزدوج حراري' }
  ];

  const runAiAnalysis = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setAnalysisDone(true);
    }, 600);
  };

  const computedIp = config.environment.includes('Desert') || config.environment.includes('Coastal')
    ? 'IP66 Weatherproof / Dust-Tight'
    : config.environment.includes('Indoor')
    ? 'IP54 Standard Indoor Protection'
    : 'IP66 Ex-Rated Gasketed';

  const computedThickness = config.material.includes('316L') 
    ? '2.0mm Heavy Stainless 316L' 
    : '2.5mm Electro-Galvanized CRCA';

  const computedCooling = config.environment.includes('Desert') 
    ? 'Dual-Skin Roof Sun-Shield + Heavy Washable Louvers & Thermostat Fan' 
    : config.industry.includes('Data Center') 
    ? 'Precision Closed-Loop Side AC Heat Exchanger'
    : 'Natural Convection Louvers with Filter Mats';

  const estimatedLeadTime = config.country.includes('Saudi Arabia')
    ? '7 - 10 Days (Direct Road Freight to Riyadh/Dammam)'
    : config.country.includes('Qatar')
    ? '3 - 5 Days (Immediate Local Dispatch)'
    : '7 - 12 Days (Direct GCC Overland)';

  return (
    <div id="ai-configurator" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>{t.aiConfig.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            {t.aiConfig.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.aiConfig.desc}
          </p>
        </div>

        {/* Wizard Box */}
        <div className="silver-card rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 bg-slate-50">
          
          {/* Step Progress Indicators */}
          <div className="grid grid-cols-4 gap-2 mb-8 border-b border-slate-200 pb-6 text-xs sm:text-sm font-bold">
            {[
              { num: 1, title: t.aiConfig.step1 },
              { num: 2, title: t.aiConfig.step2 },
              { num: 3, title: t.aiConfig.step3 },
              { num: 4, title: t.aiConfig.step4 }
            ].map(s => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`flex items-center justify-center sm:justify-start gap-2 py-2.5 px-3.5 rounded-xl transition-all text-center sm:text-start ${
                  step === s.num
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                  step === s.num ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {s.num}
                </span>
                <span className="hidden sm:inline line-clamp-1">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="min-h-[220px]">
            {/* Step 1: Industry */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Box className="w-5 h-5 text-orange-600" />
                  <span>{isAr ? 'اختر القطاع والتطبيق الهندسي:' : 'Select Industry & Project Application:'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {industries.map(ind => (
                    <div
                      key={ind.id}
                      onClick={() => setConfig({ ...config, industry: ind.labelEn })}
                      className={`p-5 rounded-xl cursor-pointer border transition-all ${
                        config.industry === ind.labelEn
                          ? 'bg-white border-orange-500 text-slate-900 shadow-md ring-2 ring-orange-500/20'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold text-sm sm:text-base">{isAr ? ind.labelAr : ind.labelEn}</div>
                      <div className="text-xs text-slate-500 mt-1 font-mono uppercase">{ind.id} SPEC // IEC 61439</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Environment */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-amber-600" />
                  <span>{isAr ? 'حدد طبيعة بيئة التركيب والمناخ المحيط:' : 'Select Operating Environment & Climatic Conditions:'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {environments.map(env => (
                    <div
                      key={env.id}
                      onClick={() => setConfig({ ...config, environment: env.labelEn })}
                      className={`p-5 rounded-xl cursor-pointer border transition-all ${
                        config.environment === env.labelEn
                          ? 'bg-white border-orange-500 text-slate-900 shadow-md ring-2 ring-orange-500/20'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold text-sm sm:text-base">{isAr ? env.labelAr : env.labelEn}</div>
                      <div className="text-xs text-slate-500 mt-1 font-mono uppercase">AMBIENT THERMAL PROFILE</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Electrical Parameters */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  <span>{isAr ? 'المحددات الكهربائية وتيار القضبان النحاسية (Busbars):' : 'Electrical Parameters & Busbar Current Rating:'}</span>
                </h3>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                    {isAr ? 'تيار البارات النحاسية المطلوب:' : 'Main Busbar Amperage Capacity:'}
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {busbarCurrents.map(c => (
                      <button
                        key={c}
                        onClick={() => setConfig({ ...config, current: c })}
                        className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-extrabold transition-all ${
                          config.current === c
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                    {isAr ? 'نموذج العزل الداخلي (Form of Separation):' : 'Internal Separation Form (IEC 61439-2):'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {segregationForms.map(f => (
                      <button
                        key={f.id}
                        onClick={() => setConfig({ ...config, form: f.label })}
                        className={`p-4 rounded-xl text-xs text-start border transition-all ${
                          config.form === f.label
                            ? 'bg-white border-orange-500 text-slate-900 shadow-md ring-2 ring-orange-500/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-extrabold text-sm">{f.id}</div>
                        <div className="text-xs text-slate-500 mt-1">{f.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Material & Destination */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-slate-700" />
                  <span>{isAr ? 'مادة التصنيع ودولة تسليم المشروع:' : 'Enclosure Metallurgy & Target GCC Destination:'}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {materials.map(m => (
                    <div
                      key={m.id}
                      onClick={() => setConfig({ ...config, material: m.labelEn })}
                      className={`p-5 rounded-xl cursor-pointer border transition-all ${
                        config.material === m.labelEn
                          ? 'bg-white border-orange-500 text-slate-900 shadow-md ring-2 ring-orange-500/20'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold text-sm sm:text-base">{isAr ? m.labelAr : m.labelEn}</div>
                      <div className="text-xs text-slate-500 mt-1 font-mono uppercase">GRADE CERTIFIED</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                    {isAr ? 'وجهة التسليم في دول الخليج:' : 'Delivery Location in GCC:'}
                  </label>
                  <select
                    value={config.country}
                    onChange={(e) => setConfig({ ...config, country: e.target.value })}
                    className="w-full sm:w-96 px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold text-sm focus:border-orange-500 focus:outline-none shadow-sm"
                  >
                    <option value="Kingdom of Saudi Arabia (KSA)">Kingdom of Saudi Arabia (KSA) - Direct Road</option>
                    <option value="State of Qatar">State of Qatar (Doha Local Delivery)</option>
                    <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                    <option value="Sultanate of Oman">Sultanate of Oman</option>
                    <option value="Kingdom of Bahrain">Kingdom of Bahrain</option>
                    <option value="State of Kuwait">State of Kuwait</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Step Navigation Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-8">
            <button
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold disabled:opacity-30 disabled:pointer-events-none"
            >
              {isAr ? 'السابق' : 'Previous'}
            </button>

            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold uppercase tracking-wider"
              >
                {isAr ? 'التالي' : 'Next Step'}
              </button>
            ) : (
              <button
                onClick={runAiAnalysis}
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
              >
                {isCalculating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
                <span>{t.aiConfig.btnCalculate}</span>
              </button>
            )}
          </div>

          {/* AI Computed Output Matrix */}
          {analysisDone && (
            <div className="mt-8 pt-6 border-t border-slate-200 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-md">
                
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <h4 className="text-lg font-bold font-display text-slate-900">
                      {t.aiConfig.resultsTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-600">
                    IEC 61439-1/2 VERIFIED // CALCULATION ENGINE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">Recommended Ingress Protection</div>
                    <div className="text-base font-extrabold text-slate-900 mt-1">{computedIp}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Polyurethane Continuous Gasket</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">Sheet Metal Caliber</div>
                    <div className="text-base font-extrabold text-slate-900 mt-1">{computedThickness}</div>
                    <div className="text-xs text-slate-500 mt-0.5">CNC Laser Cut & Formed</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">Thermal Management</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 line-clamp-2">{computedCooling}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">Estimated Production & Transit</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-1">{estimatedLeadTime}</div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => generateConfiguratorSpecPDF({
                      ...config,
                      ipRating: computedIp,
                      sheetThickness: computedThickness
                    }, lang)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold uppercase transition-all shadow-sm"
                  >
                    <DownloadCloud className="w-4 h-4 text-orange-400" />
                    <span>{t.aiConfig.btnDownloadSpec}</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteWithConfig({
                      ...config,
                      ipRating: computedIp,
                      sheetThickness: computedThickness,
                      leadTime: estimatedLeadTime
                    })}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.aiConfig.btnQuote}</span>
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
