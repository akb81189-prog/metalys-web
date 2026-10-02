import React, { useState } from 'react';
import { 
  DownloadCloud, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Maximize2, 
  X,
  ArrowRight
} from 'lucide-react';
import { productsData } from '../data/products';
import { generateProductDatasheet, generateCompanyProfilePDF } from '../utils/pdfGenerator';

export default function ProductCatalog({ lang, t, onOpenQuoteWithProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const isAr = lang === 'ar';

  const categories = [
    { id: 'all', label: t.productsSection.filterAll },
    { id: 'lv', label: t.productsSection.filterLV },
    { id: 'outdoor', label: t.productsSection.filterOutdoor },
    { id: 'stainless', label: t.productsSection.filterStainless },
    { id: 'control', label: t.productsSection.filterControl }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Full Width Fluid Container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-sm">
              <Layers className="w-4 h-4 text-orange-600" />
              <span>{t.productsSection.subtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              {t.productsSection.title}
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
              {t.productsSection.desc}
            </p>
          </div>

          {/* Download Corporate Catalog Button */}
          <button
            onClick={() => generateCompanyProfilePDF(lang)}
            className="self-start md:self-auto flex items-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md group shrink-0"
          >
            <DownloadCloud className="w-4 h-4 text-orange-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>{isAr ? 'تحميل الكتالوج الشامل (PDF)' : 'Download Full Catalog (PDF)'}</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-3 border-b border-slate-200">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase transition-all ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid - Full Width Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => {
            const name = isAr ? product.nameAr : product.nameEn;
            const tagline = isAr ? product.taglineAr : product.taglineEn;

            return (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col group hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Product Image Frame */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-white/95 backdrop-blur-md text-slate-900 font-mono text-xs font-black shadow">
                      {product.model}
                    </span>
                    <span className="px-3 py-1 rounded bg-slate-900/90 text-white font-mono text-xs font-bold shadow">
                      {product.ipRating}
                    </span>
                  </div>

                  {/* Standards stamp */}
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono font-bold text-white flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{product.standards}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-orange-600 transition-colors">
                      {name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {tagline}
                    </p>

                    {/* Spec Highlights Table */}
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5 text-xs font-mono">
                      <div className="flex justify-between text-slate-600">
                        <span>{isAr ? 'القضبان النحاسية:' : 'Busbar Current:'}</span>
                        <span className="text-slate-900 font-bold">{product.busbarRating}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>{isAr ? 'سماكة الصفيح:' : 'Sheet Metal:'}</span>
                        <span className="text-slate-900 font-bold">{product.sheetThickness}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>{isAr ? 'نموذج العزل:' : 'Form Factor:'}</span>
                        <span className="text-orange-600 font-bold">{product.formFactor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    
                    {/* Instant PDF Download */}
                    <button
                      onClick={() => generateProductDatasheet(product, lang)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white text-xs font-extrabold uppercase transition-all shadow-sm"
                      title="Download Certified PDF Datasheet"
                    >
                      <DownloadCloud className="w-4 h-4 text-orange-400" />
                      <span>{isAr ? 'تحميل المواصفة (PDF)' : 'Datasheet (PDF)'}</span>
                    </button>

                    {/* Detail Modal */}
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="p-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 hover:text-slate-900 transition-all"
                      title="Inspect Engineering Specs"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Extended Product Specs */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white max-w-2xl w-full rounded-2xl border border-slate-300 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
              
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-orange-600 font-mono font-bold text-xs mb-2">
                <span>{activeModalProduct.model}</span>
                <span>•</span>
                <span>{activeModalProduct.standards}</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                {isAr ? activeModalProduct.nameAr : activeModalProduct.nameEn}
              </h3>

              <p className="text-sm text-slate-600 mb-6">
                {isAr ? activeModalProduct.taglineAr : activeModalProduct.taglineEn}
              </p>

              {/* Specs Table */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6 space-y-2.5 text-xs">
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-bold">Ingress Protection:</span>
                  <span className="text-slate-900 font-mono font-extrabold">{activeModalProduct.ipRating}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-bold">Busbar Current Rating:</span>
                  <span className="text-slate-900 font-mono font-bold">{activeModalProduct.busbarRating}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-bold">Sheet Material & Gauge:</span>
                  <span className="text-slate-900 font-mono font-bold">{activeModalProduct.sheetThickness}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-bold">Standard Dimensions:</span>
                  <span className="text-slate-900 font-mono font-bold">{activeModalProduct.standardDimensions}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-500 font-bold">Surface Coating:</span>
                  <span className="text-slate-900 font-mono font-bold">{activeModalProduct.coating}</span>
                </div>
              </div>

              {/* Feature Points */}
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-3">
                {isAr ? 'الميزات الهندسية المعتمدة:' : 'Verified Engineering Highlights:'}
              </h4>
              <ul className="space-y-2 mb-6">
                {(isAr ? activeModalProduct.featuresAr : activeModalProduct.featuresEn).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Modal Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => generateProductDatasheet(activeModalProduct, lang)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
                >
                  <DownloadCloud className="w-4 h-4" />
                  <span>{isAr ? 'تحميل المواصفة الفنية المعتمدة (PDF)' : 'Download Certified Datasheet (PDF)'}</span>
                </button>

                <button
                  onClick={() => {
                    const prod = activeModalProduct;
                    setActiveModalProduct(null);
                    onOpenQuoteWithProduct(prod);
                  }}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase"
                >
                  {isAr ? 'طلب تسعير لهذا الموديل' : 'Inquire Model RFQ'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
