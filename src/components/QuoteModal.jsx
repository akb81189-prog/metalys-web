import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, lang, t, prefillData }) {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'Kingdom of Saudi Arabia (KSA)',
    category: 'Low Voltage Switchgears & MCC',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        category: prefillData.model 
          ? `Product Model: ${prefillData.model} (${prefillData.nameEn})`
          : prefillData.industry || prev.category,
        message: prefillData.ipRating 
          ? `AI Configuration Parameters:\n- Target: ${prefillData.industry || ''}\n- Environment: ${prefillData.environment || ''}\n- IP Rating: ${prefillData.ipRating}\n- Busbar Rating: ${prefillData.current || ''}\n- Separation: ${prefillData.form || ''}\n- Material: ${prefillData.material || ''}`
          : prev.message
      }));
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white max-w-xl w-full rounded-2xl border border-slate-300 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900">
              {isAr ? 'تم استلام طلب التسعير بنجاح' : 'RFQ Submitted Successfully'}
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {t.contact.form.success}
            </p>
            <div className="p-3 rounded-lg bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-slate-800">
              REFERENCE TICKET: #MTL-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase"
            >
              {isAr ? 'إغلاق النافذة' : 'Close Window'}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-orange-600 font-mono font-bold text-xs mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>OFFICIAL TENDER & COMMERCIAL RFQ</span>
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900 mb-1">
              {t.contact.form.title}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {isAr 
                ? 'فريقنا الهندسي والتجاري بالدوحة يقوم بمراجعة المخططات وإصدار العروض خلال 4 ساعات عمل.'
                : 'Direct engineering submittal. Our Doha estimation team reviews specifications and responds within 4 business hours.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">{t.contact.form.name} *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-500 focus:bg-white focus:outline-none"
                    placeholder="e.g. Eng. Fahad Al-Subaie"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">{t.contact.form.company} *</label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-500 focus:bg-white focus:outline-none"
                    placeholder="e.g. Petrofac / Al Fanar MEP"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">{t.contact.form.email} *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-500 focus:bg-white focus:outline-none"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">{t.contact.form.phone} *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-500 focus:bg-white focus:outline-none"
                    placeholder="+966 5X XXX XXXX / +974 XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">{t.contact.form.country}</label>
                  <select
                    value={formData.country}
                    onChange={e => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-500 focus:bg-white focus:outline-none"
                  >
                    <option value="Kingdom of Saudi Arabia (KSA)">Kingdom of Saudi Arabia (KSA)</option>
                    <option value="State of Qatar">State of Qatar</option>
                    <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                    <option value="Sultanate of Oman">Sultanate of Oman</option>
                    <option value="Kingdom of Bahrain">Kingdom of Bahrain</option>
                    <option value="State of Kuwait">State of Kuwait</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">{t.contact.form.category}</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">{t.contact.form.message} *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-500 focus:bg-white focus:outline-none"
                  placeholder="Include tender references, enclosure dimensions, quantity, busbar current, and target delivery timeframe..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? t.contact.form.submitting : t.contact.form.submit}</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
