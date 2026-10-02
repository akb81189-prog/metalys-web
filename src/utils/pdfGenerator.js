import { jsPDF } from 'jspdf';

/**
 * Generates an executive technical engineering datasheet for a product
 */
export function generateProductDatasheet(product, lang = 'en') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const isAr = lang === 'ar';
  
  // Background Header
  doc.setFillColor(11, 15, 23); // dark industrial background
  doc.rect(0, 0, 210, 42, 'F');

  // Cyan engineering accent strip
  doc.setFillColor(0, 229, 255);
  doc.rect(0, 42, 210, 2, 'F');

  // Title & Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('METALYS ENCLOSURES MANUFACTURING W.L.L.', 15, 18);
  
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184);
  doc.text('DOHA, STATE OF QATAR · INDUSTRIAL AREA · SERVING KSA & THE GCC', 15, 25);
  doc.text('IEC 61439-1/2 · IEC 60529 · ISO 9001:2015 CERTIFIED FACILITY', 15, 32);

  // Right-aligned model badge
  doc.setFillColor(31, 43, 62);
  doc.roundedRect(145, 10, 50, 24, 2, 2, 'F');
  doc.setTextColor(0, 229, 255);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(product.model, 170, 20, { align: 'center' });
  doc.setTextColor(203, 213, 225);
  doc.setFontSize(7.5);
  doc.text('OFFICIAL DATASHEET', 170, 28, { align: 'center' });

  // Document Title
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  const title = isAr ? `${product.nameEn} (${product.model})` : product.nameEn;
  doc.text(title, 15, 55);

  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.setFont('helvetica', 'normal');
  doc.text(product.taglineEn, 15, 62);

  // Technical Specifications Table Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, 70, 180, 74, 'FD');

  doc.setFillColor(15, 23, 42);
  doc.rect(15, 70, 180, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('ENGINEERING SPECIFICATIONS', 20, 75.5);
  doc.text('VERIFIED PARAMETERS', 110, 75.5);

  const specs = [
    { label: 'Model Identifier', val: product.model },
    { label: 'Ingress Protection (IP)', val: product.ipRating },
    { label: 'Form Factor / Separation', val: product.formFactor },
    { label: 'Busbar Current Capacity', val: product.busbarRating },
    { label: 'Sheet Material & Thickness', val: product.sheetThickness },
    { label: 'Standard Dimensions', val: product.standardDimensions },
    { label: 'Surface Finish / Coating', val: product.coating },
    { label: 'Compliance Standards', val: product.standards }
  ];

  doc.setFontSize(8.5);
  let yPos = 85;
  specs.forEach((item, index) => {
    if (index % 2 === 1) {
      doc.setFillColor(241, 245, 249);
      doc.rect(15, yPos - 5, 180, 7.5, 'F');
    }
    doc.setTextColor(71, 85, 105);
    doc.setFont('helvetica', 'bold');
    doc.text(item.label, 20, yPos);
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'normal');
    doc.text(item.val, 85, yPos);
    yPos += 7.5;
  });

  // Key Engineering Features Section
  doc.setFillColor(15, 23, 42);
  doc.rect(15, 152, 180, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('KEY DESIGN FEATURES & CAPABILITIES', 20, 157.5);

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, 160, 180, 56, 'D');

  let featureY = 168;
  product.featuresEn.forEach((feat) => {
    // Bullet
    doc.setFillColor(0, 229, 255);
    doc.circle(20, featureY - 1, 1.2, 'F');
    doc.setTextColor(51, 65, 85);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    const splitFeat = doc.splitTextToSize(feat, 165);
    doc.text(splitFeat, 25, featureY);
    featureY += (splitFeat.length * 5) + 3;
  });

  // Factory Acceptance & GCC Logistics Notice
  doc.setFillColor(240, 253, 250);
  doc.setDrawColor(45, 212, 191);
  doc.roundedRect(15, 222, 180, 32, 2, 2, 'FD');

  doc.setTextColor(13, 148, 136);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('QUALITY ASSURANCE & REGIONAL LOGISTICS', 20, 229);

  doc.setTextColor(51, 65, 85);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('• 100% Factory Acceptance Testing (FAT) conducted on every assembly prior to dispatch.', 20, 236);
  doc.text('• Complete mill test certificates, insulation reports, and IEC conformity documentation included.', 20, 242);
  doc.text('• Direct overland freight to Saudi Arabia (24-48 hrs to Riyadh/Dammam) & express delivery across the GCC.', 20, 248);

  // Footer Box
  doc.setFillColor(11, 15, 23);
  doc.rect(0, 265, 210, 32, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Metalys Enclosures Manufacturing W.L.L.', 15, 274);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(148, 163, 184);
  doc.setFontSize(7.5);
  doc.text('Street 41, Industrial Area, Doha, State of Qatar | Tel: +974 4450 8820 | Email: info@metalys.qa', 15, 280);
  doc.text('Web: metalysenclosuresmanufacturing.godaddysites.com | Serving: Qatar · KSA · UAE · Oman · Kuwait · Bahrain', 15, 286);

  doc.setTextColor(0, 229, 255);
  doc.text('ENGINEERED IN QATAR · BUILT FOR THE GCC', 140, 274);

  // Save the PDF
  doc.save(`Metalys_Datasheet_${product.model}.pdf`);
}

/**
 * Generates the full Corporate Profile & Product Catalog PDF
 */
export function generateCompanyProfilePDF(lang = 'en') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // PAGE 1: COVER
  doc.setFillColor(6, 8, 12);
  doc.rect(0, 0, 210, 297, 'F');

  // Decorative grid & border
  doc.setDrawColor(0, 229, 255);
  doc.setLineWidth(0.5);
  doc.line(20, 20, 190, 20);
  doc.line(20, 277, 190, 277);

  // Big Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.text('METALYS ENCLOSURES', 20, 75);
  doc.text('MANUFACTURING W.L.L.', 20, 87);

  doc.setTextColor(0, 229, 255);
  doc.setFontSize(13);
  doc.text('CORPORATE PROFILE & TECHNICAL CAPABILITIES', 20, 100);

  doc.setTextColor(148, 163, 184);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.text('Precision Sheet Metal Engineering · Fully Assembled Switchgear Solutions', 20, 110);
  doc.text('Engineered in Qatar · Built for the GCC', 20, 117);

  // Key Metrics on Cover
  const metricsBox = [
    { num: '20+', lbl: 'Years Experience' },
    { num: '5,000+ m²', lbl: 'Plant Facility' },
    { num: '6+', lbl: 'GCC Countries' },
    { num: '500+', lbl: 'Projects Delivered' }
  ];

  let x = 20;
  metricsBox.forEach(m => {
    doc.setFillColor(15, 22, 34);
    doc.roundedRect(x, 150, 38, 25, 2, 2, 'F');
    doc.setTextColor(0, 229, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text(m.num, x + 19, 161, { align: 'center' });
    doc.setTextColor(203, 213, 225);
    doc.setFontSize(7.5);
    doc.text(m.lbl, x + 19, 168, { align: 'center' });
    x += 44;
  });

  // Executive summary
  doc.setTextColor(226, 232, 240);
  doc.setFontSize(9.5);
  const summary = 'Metalys Enclosures Manufacturing W.L.L. is Qatar’s leading manufacturer of high-precision industrial enclosures and turnkey fully-wired electrical switchgear assemblies. Engineered to IEC 61439 and IEC 60529 standards, we provide EPC contractors, utilities, and panel builders across Qatar, Saudi Arabia, and the GCC with accelerated road logistics, in-house CAD engineering, and 100% Factory Acceptance Testing.';
  const splitSummary = doc.splitTextToSize(summary, 170);
  doc.text(splitSummary, 20, 200);

  // Cover footer
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(8);
  doc.text('Headquarters: Street 41, Industrial Area, Doha, State of Qatar', 20, 260);
  doc.text('Regional Coverage: Qatar · Saudi Arabia (KSA) · UAE · Oman · Kuwait · Bahrain', 20, 266);

  // PAGE 2: STRATEGIC ADVANTAGES & PRODUCT RANGE
  doc.addPage();
  doc.setFillColor(11, 15, 23);
  doc.rect(0, 0, 210, 297, 'F');

  doc.setFillColor(0, 229, 255);
  doc.rect(0, 0, 210, 4, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('STRATEGIC ADVANTAGES FOR GCC CLIENTS', 20, 22);

  const advantages = [
    { title: 'Faster Delivery to Saudi Arabia & GCC', desc: 'Direct highway road transit eliminates weeks of overseas maritime shipping delays and port customs bottlenecks. 24-48 hours transit to Riyadh and Eastern Province.' },
    { title: 'Zero Tariff Intra-GCC Trade', desc: 'Duty-free trade agreements within the GCC ensure competitive regional pricing without compromising on European or IEC engineering standards.' },
    { title: 'Turnkey Electrical Assembly & Wiring', desc: 'Complete integration including in-house copper busbar fabrication, circuit breaker mounting, wire looming, and 100% FAT verification.' },
    { title: 'Bilingual Technical Coordination', desc: 'Direct access to bilingual mechanical and electrical engineers in Doha for swift submittals, drawing approvals, and site coordination.' }
  ];

  let advY = 32;
  advantages.forEach((adv) => {
    doc.setFillColor(19, 27, 41);
    doc.roundedRect(20, advY, 170, 20, 2, 2, 'F');
    doc.setTextColor(0, 229, 255);
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.text(adv.title, 25, advY + 6.5);
    doc.setTextColor(203, 213, 225);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    const splitAdv = doc.splitTextToSize(adv.desc, 160);
    doc.text(splitAdv, 25, advY + 12);
    advY += 24;
  });

  // Product Range Section
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('CORE PRODUCT CATEGORIES', 20, 140);

  const prods = [
    { name: '1. Low Voltage Switchboards & MCC (IEC 61439)', desc: 'Up to 4000A busbar capacity, Form 2b/3b/4b separation, short-circuit withstand up to 85kA.' },
    { name: '2. Heavy-Duty Outdoor Weatherproof Enclosures', desc: 'IP66 rating, double-skin thermal insulation, robot-poured seamless gaskets, desert UV resistant.' },
    { name: '3. Marine & Offshore Grade 316L Stainless Steel', desc: 'High salinity and H2S resistant cabinets for petrochemical, coastal, and offshore environments.' },
    { name: '4. Variable Frequency Drive (VFD) & PLC Racks', desc: 'Optimized forced-air thermal cooling, EMC/RFI shielding, and integrated process control.' },
    { name: '5. Euro Enclosures & Utility Feeder Pillars', desc: 'Standardized utility cabinets approved by KAHRAMAA, SEC, DEWA with anti-tamper security locks.' },
    { name: '6. Marine Bridge Consoles & Battery Racks', desc: 'Seismic Zone 4 tested, heavy mechanical rigidity, acid-proof epoxy coating for DC battery banks.' }
  ];

  let prodY = 150;
  prods.forEach(p => {
    doc.setFillColor(15, 22, 34);
    doc.roundedRect(20, prodY, 170, 14, 1.5, 1.5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    doc.text(p.name, 25, prodY + 5.5);
    doc.setTextColor(148, 163, 184);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.text(p.desc, 25, prodY + 10.5);
    prodY += 17;
  });

  // Footer on page 2
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(7.5);
  doc.text('Metalys Enclosures Manufacturing W.L.L. · Doha, Qatar · Tel: +974 4450 8820 · tenders@metalys.qa', 20, 280);

  doc.save('Metalys_Corporate_Profile_2026.pdf');
}

/**
 * Generates an AI-configured preliminary engineering specification sheet
 */
export function generateConfiguratorSpecPDF(config, lang = 'en') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Header Dark
  doc.setFillColor(11, 15, 23);
  doc.rect(0, 0, 210, 42, 'F');

  doc.setFillColor(0, 229, 255);
  doc.rect(0, 42, 210, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('METALYS AI SPECIFICATION ADVISOR', 15, 18);

  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184);
  doc.text('AUTOMATED PRE-ENGINEERING SIZING SHEET · GENERATED VIA METALYS AI ENGINE', 15, 25);
  doc.text(`DATE: ${new Date().toLocaleDateString()} · REFERENCE ID: MTL-AI-${Math.floor(100000 + Math.random() * 900000)}`, 15, 32);

  // Configured Parameters Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, 52, 180, 100, 'FD');

  doc.setFillColor(15, 23, 42);
  doc.rect(15, 52, 180, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('USER CONFIGURED PARAMETERS & REQUIREMENTS', 20, 57.5);

  const userItems = [
    { label: 'Target Industry / Sector', val: config.industry || 'Oil & Gas / Energy' },
    { label: 'Installation Environment', val: config.environment || 'Outdoor Desert Climate' },
    { label: 'Selected Ingress Protection', val: config.ipRating || 'IP66 Weatherproof' },
    { label: 'Rated Busbar Current', val: config.current || '1600 A' },
    { label: 'Internal Segregation Form', val: config.form || 'Form 4b Type 7' },
    { label: 'Recommended Material Grade', val: config.material || 'AISI 316L Stainless Steel' },
    { label: 'Target Delivery Destination', val: config.country || 'Kingdom of Saudi Arabia (KSA)' },
    { label: 'Estimated Sheet Gauge', val: config.sheetThickness || '2.0mm Heavy Duty' }
  ];

  let y = 68;
  userItems.forEach((item, idx) => {
    if (idx % 2 === 1) {
      doc.setFillColor(241, 245, 249);
      doc.rect(15, y - 5, 180, 7.5, 'F');
    }
    doc.setTextColor(71, 85, 105);
    doc.setFont('helvetica', 'bold');
    doc.text(item.label, 20, y);
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'normal');
    doc.text(item.val, 95, y);
    y += 8;
  });

  // AI Engineering Analysis
  doc.setFillColor(240, 253, 250);
  doc.setDrawColor(45, 212, 191);
  doc.roundedRect(15, 160, 180, 48, 2, 2, 'FD');

  doc.setTextColor(13, 148, 136);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('AI PRE-ENGINEERING RECOMMENDATIONS', 20, 168);

  doc.setTextColor(51, 65, 85);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('• Thermal Dissipation: Forced convection louvers with sun-canopy shield recommended for 50°C+ ambient.', 20, 176);
  doc.text('• Busbar Sizing: 2x(60x10mm) electrolytic pure copper busbars per phase with heat-shrink color sleeving.', 20, 184);
  doc.text('• Ingress Sealing: Continuous robot-dispensed polyurethane gasket with 3-point espagnolette locking mechanism.', 20, 192);
  doc.text('• Estimated Manufacturing Lead Time: 7 - 12 working days from CAD engineering approval.', 20, 200);

  // Submission Call to Action
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(15, 216, 180, 40, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('PROCEED TO FORMAL ENGINEERING QUOTATION', 20, 226);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225);
  doc.text('To convert this preliminary specification into a stamped tender submittal and binding quotation,', 20, 233);
  doc.text('email your drawing attachments to tenders@metalys.qa or contact our engineering line at +974 4450 8820.', 20, 239);
  doc.setTextColor(0, 229, 255);
  doc.text('Metalys Enclosures Manufacturing W.L.L. — Doha, State of Qatar.', 20, 248);

  // Footer
  doc.setFillColor(11, 15, 23);
  doc.rect(0, 268, 210, 29, 'F');
  doc.setTextColor(148, 163, 184);
  doc.setFontSize(7.5);
  doc.text('Metalys Engineering Center · Street 41, Industrial Area, Doha, Qatar | Serving Qatar, KSA, UAE, Oman, Kuwait, Bahrain', 15, 282);

  doc.save(`Metalys_AI_Spec_${config.model || 'Custom'}.pdf`);
}
