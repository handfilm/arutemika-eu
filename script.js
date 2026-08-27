/* ============================================================
   ARUTEMIKA — NEXT-LEVEL B2B SOURCING PLATFORM ENGINE
   - Big Collections & Unlimited Streaming Engine (30 Styles/Week)
   - Chinese B2B & WeChat Gateway
   - Batch Sample / Tech Pack RFQ Cart Drawer
   - Interactive 3D Customizer Studio
   - Dynamic Landed Cost & Volume Matrix Calculator
   - Live Production Order Telemetry Tracker
   - Multi-Language Switcher (EN / ZH / NL / DE / BN / JA)
   - Photo Galleries & Lightbox
   ============================================================ */

const WA_NUMBER = '8801974518600';
const WECHAT_ID = 'arutemika_leather';

// =====================================================
// 1. MULTI-LANGUAGE TOGGLE
// =====================================================
function setLang(lang, btn) {
  document.body.className = 'lang-' + lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  
  // Persist preference
  try {
    localStorage.setItem('arutemika_lang', lang);
  } catch (e) {}
}

// Restore language on load if saved
try {
  const savedLang = localStorage.getItem('arutemika_lang');
  if (savedLang) {
    const targetBtn = document.querySelector(`.lang-btn[onclick*="${savedLang}"]`);
    if (targetBtn) setLang(savedLang, targetBtn);
  }
} catch (e) {}

// MOBILE NAV
function toggleMobileNav() {
  const mNav = document.getElementById('mobileNav');
  if (mNav) mNav.classList.toggle('open');
}

// SCROLL REVEAL OBSERVER
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// =====================================================
// 2. BIG COLLECTIONS & WEEKLY 30-STYLE DROPS DATASET
// =====================================================
const bigCollectionsData = {
  sneakers: [
    {
      id: "SNK-01",
      title: "French Box Calf Low-Top Sneaker",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-01",
      img: "1000022138.jpeg",
      specs: "1.4mm Full-Grain Box Calf · Margom Italian Stitched Cupsole · Cowhide Lining",
      price: "$24.50 – $28.00",
      moq: "200 pairs",
      badge: "ODM BESTSELLER",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-02",
      title: "Court Master Minimalist Cupsole Sneaker",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-02",
      img: "1000022141.jpeg",
      specs: "Supple Nappa Leather Upper · Strobel Stitched Construction · Ortholite Insole",
      price: "$23.00 – $26.50",
      moq: "200 pairs",
      badge: "FAST SAMPLE 7D",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-03",
      title: "Vintage Runner Mix-Media Calf/Suede",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-03",
      img: "1000022144.jpeg",
      specs: "Italian Suede + Waxed Calfskin Overlays · Vibram Lightweight EVA Outsole",
      price: "$27.00 – $31.00",
      moq: "200 pairs",
      badge: "PREMIUM RUNNER",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-04",
      title: "Pebble Grain Tennis Sneaker",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-04",
      img: "1000022147.jpeg",
      specs: "Heavy Pebble Grain Cowhide · Solid Brass Blind Eyelets · Waxed Cotton Laces",
      price: "$25.00 – $29.00",
      moq: "200 pairs",
      badge: "EU FAVORITE",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-05",
      title: "Monochrome Triple-Black Luxury Sneaker",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-05",
      img: "1787573171171.jpg",
      specs: "Deep Matte Aniline Calfskin · Black Vulcanized Rubber Outsole · Antimicrobial Insole",
      price: "$26.00 – $30.00",
      moq: "200 pairs",
      badge: "ALL-BLACK",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-06",
      title: "Mid-Top Padded Collar Heritage Court",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-06",
      img: "1787573265365.jpg",
      specs: "Padded Ankle Collar · Reinforced Heel Counter · 360° Sidewall Blake Stitched",
      price: "$28.50 – $33.00",
      moq: "200 pairs",
      badge: "MID-TOP",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-07",
      title: "Burnished Crust Leather Retro Trainer",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-07",
      img: "1787573404119.jpg",
      specs: "Hand-Burnished Natural Patina · Organic Cotton Terry Lining · Gum Outsole",
      price: "$27.50 – $32.00",
      moq: "200 pairs",
      badge: "HAND-BURNISHED",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-08",
      title: "Slip-On Elasticated Leather Sneaker",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-08",
      img: "1787573622537.jpg",
      specs: "Glove Leather Upper · Dual Elastic Gore · Honey Rubber Cupsole",
      price: "$22.50 – $26.00",
      moq: "200 pairs",
      badge: "EASY WEAR",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-09",
      title: "Perforated Breathable Derby Sneaker",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-09",
      img: "1787573861268.jpg",
      specs: "Precision Micro-Perforated Vamp · Calfskin Heel Tab · Flexible Strobel Lasting",
      price: "$25.50 – $29.50",
      moq: "200 pairs",
      badge: "SUMMER ODM",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-10",
      title: "High-Top Padded Basket Sneaker",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-10",
      img: "1787573950184.jpg",
      specs: "Full Calfskin High-Top · Multi-Panel Contrast Stitching · Padded Tongue",
      price: "$31.00 – $36.00",
      moq: "200 pairs",
      badge: "HIGH-TOP",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-11",
      title: "Suede Chelsea Hybrid Sneaker-Boot",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-11",
      img: "1787574036435.jpg",
      specs: "Water-Repellent Italian Suede · Double Pull Tabs · Lightweight Sneaker Outsole",
      price: "$29.00 – $34.00",
      moq: "200 pairs",
      badge: "HYBRID",
      badgeClass: "badge-top"
    },
    {
      id: "SNK-12",
      title: "Eco Veg-Tanned Bio-Rubber Sneaker",
      category: "Footwear / Sneaker",
      ref: "REF: SNK-2026-12",
      img: "1787574154554.jpg",
      specs: "100% Chrome-Free Veg Tanned Leather · Natural FSC Bio-Rubber Sole · Recycled Laces",
      price: "$28.00 – $32.50",
      moq: "200 pairs",
      badge: "ECO CHROME-FREE",
      badgeClass: "badge-top"
    }
  ],

  loafers: [
    {
      id: "LOA-01",
      title: "Classic Penny Loafer in Full-Grain Calf",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-01",
      img: "images/gallery/1787550810891.jpg",
      specs: "Hand-Stitched Apron · Channeled Goodyear / Blake Leather Sole · Vegetable Insole",
      price: "$28.00 – $32.50",
      moq: "200 pairs",
      badge: "TIMELESS CLASSIC",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-02",
      title: "Solid Brass Horsebit Hardware Loafer",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-02",
      img: "images/gallery/1787551269477.jpg",
      specs: "Custom Cast Solid Brass Horsebit · Full Calf Leather Lining · Burnished Edge",
      price: "$30.50 – $35.00",
      moq: "200 pairs",
      badge: "LUXURY BIT",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-03",
      title: "Belgian Tassel Slip-On Loafer",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-03",
      img: "images/gallery/1787551605652.jpg",
      specs: "Handmade Leather Tassels · Beveled Waist Outsole · Soft Glove Calf Lining",
      price: "$29.50 – $34.00",
      moq: "200 pairs",
      badge: "BELGIAN CUT",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-04",
      title: "Venetian Unlined Suede Loafer",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-04",
      img: "images/gallery/1787551672194.jpg",
      specs: "Ultra-Flexible Suede Calfskin · Unlined Breathable Fit · Rubber Island Outsole",
      price: "$26.00 – $30.00",
      moq: "200 pairs",
      badge: "UNLINED FLEX",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-05",
      title: "Chunky Lug Sole Commuter Loafer",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-05",
      img: "images/gallery/1787551717581.jpg",
      specs: "Polished Box Calf · Lightweight Commando Lug Outsole · Storm Welt Stitching",
      price: "$29.00 – $33.50",
      moq: "200 pairs",
      badge: "TRENDING LUG",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-06",
      title: "Hand-Woven Calfskin Interlocking Loafer",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-06",
      img: "images/gallery/1787551830347.jpg",
      specs: "Intrecciato Hand-Woven Leather Vamp · Blake Rapid Construction · Calf Sockliner",
      price: "$34.00 – $39.50",
      moq: "200 pairs",
      badge: "ARTISANAL WEAVE",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-07",
      title: "Driving Moccasin with Rubber Pebble Sole",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-07",
      img: "images/gallery/1787551969487.jpg",
      specs: "Tubular Moccasin Construction · Segmented Gommino Rubber Studs · Suede / Nappa",
      price: "$22.00 – $25.50",
      moq: "200 pairs",
      badge: "DRIVING SHOE",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-08",
      title: "Double Monk Strap Dress Loafer",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-08",
      img: "images/gallery/1787552013314.jpg",
      specs: "Solid Brass Double Buckles · Hand-Antiqued Cognac Calf · Leather Stacked Heel",
      price: "$32.00 – $37.00",
      moq: "200 pairs",
      badge: "DOUBLE MONK",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-09",
      title: "Beefroll Penny Loafer in Pull-Up Leather",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-09",
      img: "images/gallery/1787552073876.jpg",
      specs: "Heavy Waxed Thread Beefroll Stitch · Oiled Pull-Up Leather · Dainite-Type Studded Sole",
      price: "$29.00 – $33.00",
      moq: "200 pairs",
      badge: "HERITAGE ROBUST",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-10",
      title: "Slipper-Cut Opera Velvet & Calf Loafer",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-10",
      img: "images/gallery/1787553258401.jpg",
      specs: "Custom Embroidered Vamp Option · Quilted Satin Lining · Polished Edge Dressing",
      price: "$31.50 – $36.00",
      moq: "200 pairs",
      badge: "EVENING WEAR",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-11",
      title: "Kiltie Fringe Tassel Loafer",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-11",
      img: "images/gallery/1787557025434.jpg",
      specs: "Removable or Fixed Leather Kiltie Fringe · Burnished Oxblood Calf · Stitched Welt",
      price: "$30.00 – $34.50",
      moq: "200 pairs",
      badge: "KILTIE RETRO",
      badgeClass: "badge-top"
    },
    {
      id: "LOA-12",
      title: "Foldable Travel Loafer with Unstructured Heel",
      category: "Footwear / Loafer",
      ref: "REF: LOA-2026-12",
      img: "images/gallery/1787557173371.jpg",
      specs: "Collapsible Heel Counter · Ultra-Supple Milled Calf · Packable Suede Dust Pouch",
      price: "$25.00 – $29.00",
      moq: "200 pairs",
      badge: "TRAVEL FOLDABLE",
      badgeClass: "badge-top"
    }
  ],

  briefcases: [
    {
      id: "BRF-01",
      title: "Executive Single-Gusset 16\" Laptop Briefcase",
      category: "Leather Goods / Briefcase",
      ref: "REF: BRF-2026-01",
      img: "1000022131.jpeg",
      specs: "Padded 16\" Laptop Sleeve · YKK Excella Brass Zippers · Luggage Trolley Pass-Through",
      price: "$38.00 – $44.00",
      moq: "200 pcs",
      badge: "OEM BESTSELLER",
      badgeClass: "badge-top"
    },
    {
      id: "BRF-02",
      title: "Double-Compartment Document File Bag",
      category: "Leather Goods / Briefcase",
      ref: "REF: BRF-2026-02",
      img: "1000022130.jpeg",
      specs: "Dual Zip Opening · Organizer Pocket for Passport/Pens · Reinforced Base Metal Feet",
      price: "$42.00 – $48.00",
      moq: "200 pcs",
      badge: "HIGH CAPACITY",
      badgeClass: "badge-top"
    },
    {
      id: "BRF-03",
      title: "Slimline Minimalist Portfolio Briefcase",
      category: "Leather Goods / Briefcase",
      ref: "REF: BRF-2026-03",
      img: "1000022128.jpeg",
      specs: "Ultra-Slim 5cm Profile · Magnetic Flap Closure · Full-Grain Vegetable-Tanned Hide",
      price: "$32.00 – $37.00",
      moq: "200 pcs",
      badge: "SLIM PROFILE",
      badgeClass: "badge-top"
    },
    {
      id: "BRF-04",
      title: "Heritage Doctor's Frame Briefcase",
      category: "Leather Goods / Briefcase",
      ref: "REF: BRF-2026-04",
      img: "1000022129.jpeg",
      specs: "Cast Iron Lockable Hinged Frame · Key Lock Closure · Thick Saddle Leather",
      price: "$46.00 – $54.00",
      moq: "200 pcs",
      badge: "FRAME LOCK",
      badgeClass: "badge-top"
    },
    {
      id: "BRF-05",
      title: "Waxed Canvas & Vegetable Leather Attache",
      category: "Leather Goods / Briefcase",
      ref: "REF: BRF-2026-05",
      img: "1000022136.jpeg",
      specs: "18oz Heavy Waxed Canvas + Full-Grain Trim · Weatherproof · Removable Shoulder Strap",
      price: "$29.00 – $34.00",
      moq: "200 pcs",
      badge: "HYBRID CANVAS",
      badgeClass: "badge-top"
    },
    {
      id: "BRF-06",
      title: "Zip-Around Leather Tech Folio",
      category: "Leather Goods / Briefcase",
      ref: "REF: BRF-2026-06",
      img: "1000022137.jpeg",
      specs: "Fits 13\" iPad Pro & A4 Notepad · Elastic Cable Loops · Microfiber Suede Lining",
      price: "$19.50 – $23.50",
      moq: "200 pcs",
      badge: "TECH FOLIO",
      badgeClass: "badge-top"
    },
    {
      id: "BRF-07",
      title: "Three-Gusset Lawyer's Briefcase",
      category: "Leather Goods / Briefcase",
      ref: "REF: BRF-2026-07",
      img: "1000022132.jpeg",
      specs: "3 Accordion Dividers · Push-Lock Solid Brass Clasp · Ergonomic Molded Leather Handle",
      price: "$52.00 – $60.00",
      moq: "200 pcs",
      badge: "FLAGSHIP",
      badgeClass: "badge-top"
    },
    {
      id: "BRF-08",
      title: "Modern Pilot Case with Wheels Mount",
      category: "Leather Goods / Briefcase",
      ref: "REF: BRF-2026-08",
      img: "1000022149.jpeg",
      specs: "Reinforced Structure · Top-Loading Document Organizer · Rigid Base Shell",
      price: "$48.00 – $56.00",
      moq: "200 pcs",
      badge: "PILOT CASE",
      badgeClass: "badge-top"
    }
  ],

  totes: [
    {
      id: "TOT-01",
      title: "Seamless One-Piece Seamless Leather Tote",
      category: "Leather Goods / Tote",
      ref: "REF: TOT-2026-01",
      img: "1000022139.jpeg",
      specs: "Cut from Single Piece Full-Grain Hide · Rolled Handles · Hanging Interior Zip Pocket",
      price: "$28.00 – $33.00",
      moq: "200 pcs",
      badge: "BESTSELLER",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-02",
      title: "Zippered Top Commuter Work Tote",
      category: "Leather Goods / Tote",
      ref: "REF: TOT-2026-02",
      img: "1000022140.jpeg",
      specs: "Full Top Zip Security · Padded Laptop Pocket · Water-Resistant Suede Lining",
      price: "$32.00 – $37.00",
      moq: "200 pcs",
      badge: "TOP ZIP",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-03",
      title: "Magnetic Snap Shopper with Pouch",
      category: "Leather Goods / Tote",
      ref: "REF: TOT-2026-03",
      img: "1000022142.jpeg",
      specs: "Includes Detachable Matching Leather Wristlet Pouch · Raw Edge Painted Finish",
      price: "$26.00 – $30.50",
      moq: "200 pcs",
      badge: "2-IN-1 SET",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-04",
      title: "Structured Trapezoid Handbag Tote",
      category: "Leather Goods / Handbag",
      ref: "REF: TOT-2026-04",
      img: "1000022143.jpeg",
      specs: "Stiffened Box Calf · Turnlock Front Hardware · Detachable Crossbody Strap",
      price: "$34.00 – $39.50",
      moq: "200 pcs",
      badge: "STRUCTURED",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-05",
      title: "Pebbled Hobo Slouch Shoulder Bag",
      category: "Leather Goods / Handbag",
      ref: "REF: TOT-2026-05",
      img: "1000022145.jpeg",
      specs: "Soft Milled Grain Cowhide · Magnetic Closure · Wide Comfortable Shoulder Strap",
      price: "$29.00 – $34.00",
      moq: "200 pcs",
      badge: "SLOUCH HOBO",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-06",
      title: "Minimalist Half-Moon Saddle Crossbody",
      category: "Leather Goods / Handbag",
      ref: "REF: TOT-2026-06",
      img: "1000022146.jpeg",
      specs: "Smooth Buttero Calf · Concealed Magnetic Clasp · Adjustable Buckled Strap",
      price: "$23.50 – $27.50",
      moq: "200 pcs",
      badge: "HALF-MOON",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-07",
      title: "Dual-Handle Bucket Bag with Drawstring",
      category: "Leather Goods / Handbag",
      ref: "REF: TOT-2026-07",
      img: "1000022148.jpeg",
      specs: "Leather Cord Drawstring · Rigid Circular Bottom · Metal Protective Studs",
      price: "$27.00 – $31.50",
      moq: "200 pcs",
      badge: "BUCKET BAG",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-08",
      title: "Weekender Oversized Leather Duffle Tote",
      category: "Leather Goods / Travel",
      ref: "REF: TOT-2026-08",
      img: "1000022117.jpeg",
      specs: "45L Travel Capacity · Shoe Compartment with Ventilation · Two-Way Heavy Zippers",
      price: "$48.00 – $56.00",
      moq: "200 pcs",
      badge: "DUFFLE 45L",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-09",
      title: "Baguette Shoulder Clutch with Chain Strap",
      category: "Leather Goods / Handbag",
      ref: "REF: TOT-2026-09",
      img: "1000022118.jpeg",
      specs: "90s Retro Baguette Silhouette · Gold Tone Chain + Leather Shoulder Insert",
      price: "$21.00 – $25.00",
      moq: "200 pcs",
      badge: "BAGUETTE",
      badgeClass: "badge-top"
    },
    {
      id: "TOT-10",
      title: "Camera Crossbody Bag with Front Pocket",
      category: "Leather Goods / Handbag",
      ref: "REF: TOT-2026-10",
      img: "1000022119.jpeg",
      specs: "Compact Everyday Silhouette · Woven Webbing Guitar Strap Option · Full Zip Pocket",
      price: "$18.50 – $22.50",
      moq: "200 pcs",
      badge: "CAMERA BAG",
      badgeClass: "badge-top"
    }
  ],

  backpacks: [
    {
      id: "BPK-01",
      title: "Roll-Top Waterproof Pull-Up Backpack",
      category: "Leather Goods / Backpack",
      ref: "REF: BPK-2026-01",
      img: "images/gallery/1787577181709.jpg",
      specs: "Expandable 22L–28L · Cobra Metal Buckle · Breathable Air-Mesh Back Panel",
      price: "$42.00 – $49.00",
      moq: "200 pcs",
      badge: "ROLL-TOP",
      badgeClass: "badge-top"
    },
    {
      id: "BPK-02",
      title: "Executive Dome Zip Laptop Backpack",
      category: "Leather Goods / Backpack",
      ref: "REF: BPK-2026-02",
      img: "images/gallery/1787577332631.jpg",
      specs: "Molded Slim Shell · Padded 15.6\" Laptop & Tablet Sleeves · Hidden Passport Pocket",
      price: "$39.00 – $45.00",
      moq: "200 pcs",
      badge: "EXECUTIVE",
      badgeClass: "badge-top"
    },
    {
      id: "BPK-03",
      title: "Flap-Over Heritage Rucksack with Buckles",
      category: "Leather Goods / Backpack",
      ref: "REF: BPK-2026-03",
      img: "images/gallery/1787577403532.jpg",
      specs: "Vegetable-Tanned Buffalo Hide · Solid Brass Roller Buckles · Drawstring Main Body",
      price: "$45.00 – $52.00",
      moq: "200 pcs",
      badge: "HERITAGE",
      badgeClass: "badge-top"
    },
    {
      id: "BPK-04",
      title: "Minimalist Square Daypack",
      category: "Leather Goods / Backpack",
      ref: "REF: BPK-2026-04",
      img: "images/gallery/1787577609195.jpg",
      specs: "Clean Unadorned Aesthetic · Waterproof Concealed Zippers · Padded Leather Straps",
      price: "$36.00 – $41.50",
      moq: "200 pcs",
      badge: "SQUARE CUT",
      badgeClass: "badge-top"
    },
    {
      id: "BPK-05",
      title: "Convertible 3-Way Briefcase-Backpack",
      category: "Leather Goods / Backpack",
      ref: "REF: BPK-2026-05",
      img: "images/gallery/1787577782894.jpg",
      specs: "Hideaway Shoulder Straps · Horizontal & Vertical Handles · TSA Approved Opening",
      price: "$44.00 – $51.00",
      moq: "200 pcs",
      badge: "3-WAY HYBRID",
      badgeClass: "badge-top"
    },
    {
      id: "BPK-06",
      title: "Sling Crossbody Chest Pack",
      category: "Leather Goods / Backpack",
      ref: "REF: BPK-2026-06",
      img: "images/gallery/1787577893123.jpg",
      specs: "Reversible Left/Right D-Rings · Quick-Release Metal Buckle · Earphone Port",
      price: "$21.00 – $25.50",
      moq: "200 pcs",
      badge: "SLING PACK",
      badgeClass: "badge-top"
    },
    {
      id: "BPK-07",
      title: "Vintage Field Pack with Utility Pockets",
      category: "Leather Goods / Backpack",
      ref: "REF: BPK-2026-07",
      img: "images/gallery/1787578055688.jpg",
      specs: "3 Exterior Gusseted Cargo Pockets · Heavy Saddle Stitching · Brass D-Rings",
      price: "$47.00 – $55.00",
      moq: "200 pcs",
      badge: "FIELD UTILITY",
      badgeClass: "badge-top"
    },
    {
      id: "BPK-08",
      title: "Compact Women's City Backpack",
      category: "Leather Goods / Backpack",
      ref: "REF: BPK-2026-08",
      img: "images/gallery/1787578308773.jpg",
      specs: "Smooth Box Calfskin · Anti-Theft Back-Facing Zipper Pocket · Elegant Gold Metal Trim",
      price: "$29.50 – $34.00",
      moq: "200 pcs",
      badge: "CITY MINI",
      badgeClass: "badge-top"
    }
  ],

  wallets: [
    {
      id: "WLT-01",
      title: "RFID Slim Bifold Wallet with Currency Clip",
      category: "Leather Goods / Wallet",
      ref: "REF: WLT-2026-01",
      img: "images/gallery/1787578378987.jpg",
      specs: "6 Card Slots · Spring Steel Money Clip · Certified RFID Blocking Shield",
      price: "$6.50 – $8.50",
      moq: "200 pcs",
      badge: "HIGH VOLUME",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-02",
      title: "Zip-Around Continental Long Wallet",
      category: "Leather Goods / Wallet",
      ref: "REF: WLT-2026-02",
      img: "images/gallery/1787578638969.jpg",
      specs: "12 Card Slots · Central Zipper Coin Pocket · Fits All Smartphone Models",
      price: "$11.50 – $14.50",
      moq: "200 pcs",
      badge: "LONG ZIP",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-03",
      title: "Minimalist Front Pocket Card Sleeve",
      category: "Leather Goods / Wallet",
      ref: "REF: WLT-2026-03",
      img: "images/gallery/1787578740302.jpg",
      specs: "Edge-Painted Buttero Calf · 4 External Slots + Central Cash Fold · 4mm Ultra-Thin",
      price: "$4.50 – $6.00",
      moq: "200 pcs",
      badge: "CARD SLEEVE",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-04",
      title: "Passport Travel Organizer & Document Case",
      category: "Leather Goods / Travel",
      ref: "REF: WLT-2026-04",
      img: "images/gallery/1787578815200.jpg",
      specs: "Holds 2 Passports, Boarding Passes, SIM Card Slot, Micro Pen Holder",
      price: "$9.50 – $12.50",
      moq: "200 pcs",
      badge: "PASSPORT HUB",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-05",
      title: "MagSafe Magnetic Phone Cardholder",
      category: "Leather Goods / SLG",
      ref: "REF: WLT-2026-05",
      img: "images/gallery/1787578885386.jpg",
      specs: "Strong N52 Rare Earth Magnets · Holds 3 Cards · Compatible with iPhone / Qi Cases",
      price: "$5.50 – $7.50",
      moq: "200 pcs",
      badge: "MAGSAFE READY",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-06",
      title: "Tri-Fold Coin Pocket Classic Wallet",
      category: "Leather Goods / Wallet",
      ref: "REF: WLT-2026-06",
      img: "images/gallery/1787578945102.jpg",
      specs: "Snap-Button Coin Tray · Double Bill Compartment · Full Vegetable Cowhide",
      price: "$8.00 – $10.50",
      moq: "200 pcs",
      badge: "TRI-FOLD",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-07",
      title: "Key Organiser Pouch with 6 Brass Hooks",
      category: "Leather Goods / SLG",
      ref: "REF: WLT-2026-07",
      img: "images/gallery/1787579023213.jpg",
      specs: "German Snap Button · 6 Solid Brass Key Carabiners · Car Fob Pocket",
      price: "$5.00 – $6.80",
      moq: "200 pcs",
      badge: "KEY POUCH",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-08",
      title: "Apple AirTag Integrated Leather Card Wallet",
      category: "Leather Goods / SLG",
      ref: "REF: WLT-2026-08",
      img: "images/gallery/1787579145119.jpg",
      specs: "Molded Precision Cavity for AirTag · Instant Tracking · Quick Ejector Slider",
      price: "$7.50 – $9.80",
      moq: "200 pcs",
      badge: "AIRTAG READY",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-09",
      title: "Cigar & Pen Leather Travel Case",
      category: "Leather Goods / SLG",
      ref: "REF: WLT-2026-09",
      img: "images/gallery/1787579231739.jpg",
      specs: "Telescopic Rigid Cedar-Lined Tube · Fits 3 Churchill Cigars · Hand Burnished",
      price: "$14.00 – $18.00",
      moq: "200 pcs",
      badge: "CIGAR CASE",
      badgeClass: "badge-top"
    },
    {
      id: "WLT-10",
      title: "Belt & Wallet Gift Box Combo Set",
      category: "Leather Goods / Gift Sets",
      ref: "REF: WLT-2026-10",
      img: "1000022137.jpeg",
      specs: "Matching Reversible Leather Belt (35mm) + RFID Wallet in Luxury Rigid Gift Box",
      price: "$16.50 – $21.00",
      moq: "200 sets",
      badge: "GIFT SET",
      badgeClass: "badge-top"
    }
  ],

  // 30 styles for the weekly drop
  week35: []
};

// Generate the 30 fresh styles for week 35 based on factory library
(function buildWeek35Drop() {
  const categories = [
    { type: "Sneakers", prefix: "W35-SNK", basePrice: 24, moq: 200, unit: "pairs" },
    { type: "Loafers", prefix: "W35-LOA", basePrice: 28, moq: 200, unit: "pairs" },
    { type: "Briefcases", prefix: "W35-BRF", basePrice: 36, moq: 200, unit: "pcs" },
    { type: "Totes", prefix: "W35-TOT", basePrice: 26, moq: 200, unit: "pcs" },
    { type: "Backpacks", prefix: "W35-BPK", basePrice: 38, moq: 200, unit: "pcs" },
    { type: "Wallets", prefix: "W35-WLT", basePrice: 6.5, moq: 200, unit: "pcs" }
  ];

  const galleryImagesPool = [
    "images/gallery/1787550810891.jpg", "images/gallery/1787551269477.jpg", "images/gallery/1787551605652.jpg",
    "images/gallery/1787551672194.jpg", "images/gallery/1787551717581.jpg", "images/gallery/1787551830347.jpg",
    "images/gallery/1787551969487.jpg", "images/gallery/1787552013314.jpg", "images/gallery/1787552073876.jpg",
    "images/gallery/1787553258401.jpg", "images/gallery/1787557025434.jpg", "images/gallery/1787557173371.jpg",
    "images/gallery/1787557369321.jpg", "images/gallery/1787557416857.jpg", "images/gallery/1787557544868.jpg",
    "images/gallery/1787557594549.jpg", "images/gallery/1787557652729.jpg", "images/gallery/1787557707461.jpg",
    "images/gallery/1787561311966.jpg", "images/gallery/1787561410420.jpg", "images/gallery/1787561462248.jpg",
    "images/gallery/1787561525859.jpg", "images/gallery/1787561599325.jpg", "images/gallery/1787561677651.jpg",
    "images/gallery/1787561758761.jpg", "images/gallery/1787564870422.jpg", "images/gallery/1787565013745.jpg",
    "images/gallery/1787565140109.jpg", "images/gallery/1787565223331.jpg", "images/gallery/1787565346234.jpg"
  ];

  const styleNames = [
    "Milano Calf Low-Top", "Verona Horsebit Slip-On", "Naviglio Slim Portfolio", "Duomo Seamless Tote",
    "Torino Urban Rucksack", "Brera Card Sleeve", "Como Nubuck Trainer", "Firenze Tassel Penny",
    "Modena Dual-Zip Brief", "Amalfi Weekend Shopper", "Bologna Roll-Top Daypack", "Palermo RFID Bifold",
    "Sienna Crust Retro Runner", "Lucca Belgian Moccasin", "Genova Tech Attache", "Pisa Structured Handbag",
    "Bergamo Commuter Pack", "Rimini Passport Case", "Veneto Perforated Court", "Parma Lug Sole Loafer",
    "Ravenna Lawyer's Brief", "Capri Slouch Tote", "Padova 3-Way Convertible", "Trento AirTag Cardholder",
    "Treviso High-Top Court", "Ferrara Double Monk", "Udine Zippered Folio", "Monza Bucket Bag",
    "Vicenza Field Backpack", "Trieste Continental Wallet"
  ];

  for (let i = 0; i < 30; i++) {
    const cat = categories[i % categories.length];
    const num = (i + 1).toString().padStart(2, '0');
    bigCollectionsData.week35.push({
      id: `${cat.prefix}-${num}`,
      title: `${styleNames[i]} (${cat.type})`,
      category: `Week 35 Drop / ${cat.type}`,
      ref: `REF: ${cat.prefix}-${num}`,
      img: galleryImagesPool[i % galleryImagesPool.length],
      specs: `2026 ODM Release · Full-Grain French & Bangladesh Cowhide · Sample in 7 Days`,
      price: `$${cat.basePrice.toFixed(2)} – $${(cat.basePrice * 1.2).toFixed(2)}`,
      moq: `${cat.moq} ${cat.unit}`,
      badge: `W35 DROP #${num}`,
      badgeClass: "badge-top"
    });
  }
})();

// Helper to build a clean, unified, responsive product card HTML (Maximum Photo Dominance & Mouse-Over Description Reveal)
function buildProductCardHTML(item) {
  let specsList = [];
  if (typeof item.specs === 'string') {
    specsList = item.specs.split('·').map(s => s.trim()).filter(Boolean);
  } else if (Array.isArray(item.specs)) {
    specsList = item.specs;
  }
  if (specsList.length === 0) specsList = ["Full-Grain Box Calf", "Export Quality Finishing"];

  const fullSpecsStr = typeof item.specs === 'string' ? item.specs : specsList.join(' · ');
  const badgeLabel = item.badge || 'ODM READY';
  const priceDisplay = item.price || '$24.00 – $28.00';
  const moqDisplay = item.moq || '200 pcs';
  const refDisplay = item.ref || `REF: ${item.id}`;
  const titleDisplay = item.title || 'Genuine Leather Style';
  const categoryDisplay = item.category || 'Leather Goods';
  const sanitizedTitle = titleDisplay.replace(/'/g, "\\'").replace(/"/g, '&quot;');

  return `
    <div class="product-card" data-category="${categoryDisplay}" id="card-${item.id}" tabindex="0" onclick="toggleCardHover(this, event)">
      <!-- Main Photo Viewport -->
      <div class="product-img-wrap">
        <span class="product-badge ${item.badgeClass || ''}">${badgeLabel}</span>
        <span class="product-fob-tag">${priceDisplay}</span>
        <img src="${item.img}" alt="${titleDisplay}" loading="lazy" onerror="this.onerror=null;this.src='1000022131.jpeg';">
        
        <!-- MOUSE OVER HOVER REVEAL OVERLAY (Less initial text, shows on hover/touch) -->
        <div class="product-hover-overlay">
          <div class="hover-top-row">
            <span class="hover-cat-badge">${categoryDisplay}</span>
            <span class="hover-ref-pill">${refDisplay}</span>
          </div>

          <div class="hover-middle-body">
            <h4 class="hover-product-title">${titleDisplay}</h4>
            <div class="hover-specs-container">
              <div class="hover-spec-heading">LEATHER &amp; CRAFTSMANSHIP:</div>
              <div class="hover-spec-desc">${fullSpecsStr}</div>
            </div>
            
            <div class="hover-pricing-grid">
              <div class="hover-price-box">
                <span class="hp-label">FOB DHAKA</span>
                <span class="hp-val">${priceDisplay}</span>
              </div>
              <div class="hover-moq-box">
                <span class="hp-label">MIN ORDER</span>
                <span class="hp-val">${moqDisplay}</span>
              </div>
            </div>
          </div>

          <div class="hover-bottom-actions">
            <div class="hover-tools-bar">
              <button type="button" class="hover-tool-btn" onclick="event.stopPropagation(); openSpecModal('${item.id}')" title="Technical Specs Sheet">
                <span>🔍 Tech Specs</span>
              </button>
              <button type="button" class="hover-tool-btn" onclick="event.stopPropagation(); open3DCustomizer('${item.id}')" title="Configure in 3D Studio">
                <span>⚡ 3D Studio</span>
              </button>
            </div>
            <button type="button" class="hover-rfq-btn" id="rfqBtn-${item.id}" onclick="event.stopPropagation(); addToBatchRFQ('${item.id}', '${sanitizedTitle}', '${priceDisplay}')" title="Add to Batch RFQ">
              <span>+ Add to Batch RFQ</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Minimal Bottom Bar (Default visible state: Clean Title & Price) -->
      <div class="product-minimal-footer">
        <div class="p-min-left">
          <h4 class="p-min-name" title="${titleDisplay}">${titleDisplay}</h4>
          <span class="p-min-cat">${categoryDisplay}</span>
        </div>
        <div class="p-min-right">
          <span class="p-min-price">${priceDisplay}</span>
          <span class="p-min-moq">MOQ ${moqDisplay}</span>
        </div>
      </div>
    </div>
  `;
}

// Toggle mobile hover reveal state
function toggleCardHover(cardEl, e) {
  if (window.innerWidth <= 1024) {
    // If clicking on an action button, don't close
    if (e.target.closest('button') || e.target.closest('a')) return;
    const isAlreadyActive = cardEl.classList.contains('active-hover');
    document.querySelectorAll('.product-card.active-hover').forEach(c => c.classList.remove('active-hover'));
    if (!isAlreadyActive) {
      cardEl.classList.add('active-hover');
    }
  }
}

// Helper to render product cards into a container
function renderBigCollectionCards(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => buildProductCardHTML(item)).join('');
}

// Render all individual big collections
function initAllBigCollections() {
  renderBigCollectionCards('gridSneakersBig', bigCollectionsData.sneakers);
  renderBigCollectionCards('gridLoafersBig', bigCollectionsData.loafers);
  renderBigCollectionCards('gridBriefcasesBig', bigCollectionsData.briefcases);
  renderBigCollectionCards('gridTotesBig', bigCollectionsData.totes);
  renderBigCollectionCards('gridBackpacksBig', bigCollectionsData.backpacks);
  renderBigCollectionCards('gridWalletsBig', bigCollectionsData.wallets);
  renderBigCollectionCards('gridWeek35Big', bigCollectionsData.week35);

  // Initialize continuous infinite stream
  initInfiniteStream();
}

// =====================================================
// 3. CONTINUOUS INFINITE STREAM ENGINE (LOAD MORE)
// =====================================================
let currentStreamCount = 0;
const allCatalogStreamPool = [
  ...bigCollectionsData.sneakers,
  ...bigCollectionsData.loafers,
  ...bigCollectionsData.briefcases,
  ...bigCollectionsData.totes,
  ...bigCollectionsData.backpacks,
  ...bigCollectionsData.wallets,
  ...bigCollectionsData.week35
];

function initInfiniteStream() {
  const streamContainer = document.getElementById('gridInfiniteStream');
  if (!streamContainer) return;
  streamContainer.innerHTML = '';
  currentStreamCount = 0;
  loadMoreInfiniteStyles(30);

  // Auto load on intersection
  const loadBtn = document.getElementById('loadMoreBtn');
  if (loadBtn) {
    const streamObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreInfiniteStyles(30);
      }
    }, { rootMargin: '200px' });
    streamObserver.observe(loadBtn);
  }
}

function loadMoreInfiniteStyles(batchSize = 30) {
  const streamContainer = document.getElementById('gridInfiniteStream');
  if (!streamContainer) return;

  const nextBatch = [];
  for (let i = 0; i < batchSize; i++) {
    const itemIndex = (currentStreamCount + i) % allCatalogStreamPool.length;
    const baseItem = allCatalogStreamPool[itemIndex];
    const streamItem = {
      ...baseItem,
      id: `${baseItem.id}-STREAM-${currentStreamCount + i + 1}`,
      badge: `MOLD #${currentStreamCount + i + 1}`
    };
    nextBatch.push(streamItem);
  }

  currentStreamCount += batchSize;

  const htmlChunk = nextBatch.map(item => buildProductCardHTML(item)).join('');
  streamContainer.insertAdjacentHTML('beforeend', htmlChunk);

  const countDisplay = document.getElementById('infiniteCountDisplay');
  if (countDisplay) {
    countDisplay.textContent = `Displaying ${currentStreamCount} of 1,500+ active factory molds`;
  }
}

function activateColNav(pill) {
  document.querySelectorAll('.col-nav-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
}

// =====================================================
// 4. BATCH SAMPLE & TECH PACK RFQ CART DRAWER
// =====================================================
let selectedBatchRFQ = [];

function showToastNotification(msg) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function addToBatchRFQ(id, title, price) {
  const existing = selectedBatchRFQ.find(item => item.id === id);
  if (!existing) {
    selectedBatchRFQ.push({ id, title, price, qty: 200 });
    showToastNotification(`✓ Added "${title.length > 25 ? title.substring(0, 22) + '...' : title}" to Batch RFQ`);
  } else {
    showToastNotification(`ℹ️ "${title.length > 25 ? title.substring(0, 22) + '...' : title}" is already in Batch RFQ`);
  }

  const rfqBtn = document.getElementById(`rfqBtn-${id}`);
  if (rfqBtn) {
    rfqBtn.innerHTML = '<span>✓ Added to RFQ</span>';
    rfqBtn.classList.add('btn-added');
    setTimeout(() => {
      rfqBtn.innerHTML = '<span>+ Add to Batch RFQ</span>';
      rfqBtn.classList.remove('btn-added');
    }, 1800);
  }

  updateBatchDrawer();
}

function updateBatchDrawer() {
  const drawer = document.getElementById('batchDrawer');
  const countEl = document.getElementById('batchCountDisplay');
  if (!drawer || !countEl) return;

  countEl.textContent = selectedBatchRFQ.length;

  if (selectedBatchRFQ.length > 0) {
    drawer.classList.add('open');
  } else {
    drawer.classList.remove('open');
  }
}

function openBatchRFQ() {
  if (selectedBatchRFQ.length === 0) return;

  const productCatEl = document.getElementById('productCat');
  const messageEl = document.getElementById('message');

  if (productCatEl) productCatEl.value = 'Multiple';

  const batchListText = selectedBatchRFQ.map((item, idx) => 
    `${idx + 1}. [${item.id}] ${item.title} (Est. FOB ${item.price}) - MOQ: ${item.qty} pcs`
  ).join('\n');

  if (messageEl) {
    messageEl.value = `Hi Arutemika Sales Team,\n\nI would like to request technical specifications, pre-production sample availability, and a formal FOB quotation for the following ${selectedBatchRFQ.length} selected style(s):\n\n${batchListText}\n\nPlease share tech pack templates and dispatch timeline.`;
  }

  const rfqSec = document.getElementById('rfq');
  if (rfqSec) rfqSec.scrollIntoView({ behavior: 'smooth' });
}

function clearBatchRFQ() {
  selectedBatchRFQ = [];
  updateBatchDrawer();
}

// =====================================================
// 5. CHINESE B2B SOURCING GATEWAY & WECHAT MODAL
// =====================================================
function showWeChatModal() {
  const modal = document.getElementById('wechatModal');
  if (modal) modal.style.display = 'flex';
}

function closeWeChatModal() {
  const modal = document.getElementById('wechatModal');
  if (modal) modal.style.display = 'none';
}

function copyWeChatId() {
  navigator.clipboard.writeText(WECHAT_ID).then(() => {
    const btn = document.getElementById('copyWechatBtn');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '✅ 已复制微信号!';
      setTimeout(() => { btn.innerHTML = orig; }, 2500);
    } else {
      alert(`微信号已复制: ${WECHAT_ID}`);
    }
  }).catch(() => {
    alert(`微信号: ${WECHAT_ID}`);
  });
}

// =====================================================
// 6. 3D STUDIO CUSTOMIZER ENGINE
// =====================================================
let customizerState = {
  leather: 'box-calf',
  sole: 'margom-white',
  hardware: 'brass',
  angle: 0
};

const leatherPriceModifiers = {
  'box-calf': { name: "French Full-Grain Box Calf", add: 0 },
  'pebble-grain': { name: "Italian Pebble Grain Cowhide", add: 1.50 },
  'suede-nubuck': { name: "Waterproof Velvet Suede", add: -0.80 },
  'buttero-cognac': { name: "Vegetable-Tanned Buttero Cognac", add: 3.20 }
};

const solePriceModifiers = {
  'margom-white': { name: "Margom Stitched White Cupsole", add: 0 },
  'margom-gum': { name: "Honey Gum Vulcanized Cupsole", add: 0.50 },
  'blake-leather': { name: "Blake Channeled Leather Sole", add: 2.80 },
  'vibram-lug': { name: "Vibram Commando Lug Outsole", add: 3.50 }
};

const hardwareModifiers = {
  'brass': { name: "Solid Polished Brass", add: 0 },
  'gunmetal': { name: "Antique Gunmetal Black", add: 0.30 },
  'silver': { name: "Satin Nickel Silver", add: 0.20 }
};

function setCustomizerLeather(val, btn) {
  customizerState.leather = val;
  document.querySelectorAll('#studioLeatherPills .stage-tool-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  update3DStudio();
}

function setCustomizerSole(val, btn) {
  customizerState.sole = val;
  document.querySelectorAll('#studioSolePills .stage-tool-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  update3DStudio();
}

function setCustomizerHardware(val, btn) {
  customizerState.hardware = val;
  document.querySelectorAll('#studioHwPills .stage-tool-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  update3DStudio();
}

function rotate3DPreview(delta) {
  customizerState.angle = (customizerState.angle + delta + 360) % 360;
  update3DStudio();
}

function update3DStudio() {
  const baseFob = 24.50;
  const lMod = leatherPriceModifiers[customizerState.leather] || { name: 'Calf', add: 0 };
  const sMod = solePriceModifiers[customizerState.sole] || { name: 'Rubber', add: 0 };
  const hMod = hardwareModifiers[customizerState.hardware] || { name: 'Brass', add: 0 };

  const totalFobLow = (baseFob + lMod.add + sMod.add + hMod.add).toFixed(2);
  const totalFobHigh = ((baseFob + lMod.add + sMod.add + hMod.add) * 1.15).toFixed(2);

  const priceEl = document.getElementById('studioFobPrice');
  if (priceEl) priceEl.textContent = `$${totalFobLow} – $${totalFobHigh} / pair`;

  const descEl = document.getElementById('studioConfigSummary');
  if (descEl) {
    descEl.textContent = `${lMod.name} · ${sMod.name} · ${hMod.name} · Angle: ${customizerState.angle}°`;
  }

  render3DCanvas();
}

function render3DCanvas() {
  const canvas = document.getElementById('studio3dCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  // Background subtle gradient
  const grad = ctx.createRadialGradient(w/2, h/2, 40, w/2, h/2, w/1.5);
  grad.addColorStop(0, '#FAFAFA');
  grad.addColorStop(1, '#E9E4DF');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Shadow under shoe
  ctx.beginPath();
  ctx.ellipse(w/2, h*0.78, w*0.35, 14, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(42, 20, 22, 0.15)';
  ctx.fill();

  ctx.save();
  ctx.translate(w/2, h/2);
  const rad = (customizerState.angle * Math.PI) / 180;
  ctx.rotate(Math.sin(rad) * 0.08);

  // Leather body color
  let upperColor = '#8A2D34'; // Default box calf
  if (customizerState.leather === 'pebble-grain') upperColor = '#241F1C';
  if (customizerState.leather === 'suede-nubuck') upperColor = '#8D7B68';
  if (customizerState.leather === 'buttero-cognac') upperColor = '#9A5B32';

  // Sole color
  let soleColor = '#FDFDFD';
  if (customizerState.sole === 'margom-gum') soleColor = '#D4A373';
  if (customizerState.sole === 'blake-leather') soleColor = '#7F4F24';
  if (customizerState.sole === 'vibram-lug') soleColor = '#1F2421';

  // Draw Outsole
  ctx.beginPath();
  ctx.roundRect(-w*0.32, h*0.12, w*0.64, h*0.12, [4, 4, 18, 18]);
  ctx.fillStyle = soleColor;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#D4CECA';
  ctx.stroke();

  // Stitch lines on sole
  ctx.beginPath();
  ctx.setLineDash([4, 4]);
  ctx.moveTo(-w*0.30, h*0.14);
  ctx.lineTo(w*0.30, h*0.14);
  ctx.strokeStyle = '#999';
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw Shoe Upper
  ctx.beginPath();
  ctx.moveTo(-w*0.30, h*0.12);
  ctx.bezierCurveTo(-w*0.32, -h*0.08, -w*0.15, -h*0.28, w*0.05, -h*0.22);
  ctx.bezierCurveTo(w*0.20, -h*0.18, w*0.34, -h*0.02, w*0.31, h*0.12);
  ctx.closePath();
  ctx.fillStyle = upperColor;
  ctx.fill();

  // Leather overlay panels & stitches
  ctx.beginPath();
  ctx.moveTo(-w*0.15, h*0.12);
  ctx.bezierCurveTo(-w*0.18, -h*0.15, -w*0.05, -h*0.22, w*0.10, -h*0.18);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.stroke();

  // Hardware eyelets
  let hwColor = '#D4AF37'; // brass
  if (customizerState.hardware === 'gunmetal') hwColor = '#2B2D42';
  if (customizerState.hardware === 'silver') hwColor = '#E0E1DD';

  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(-w*0.05 + i * 20, -h*0.14 + i * 10, 4, 0, Math.PI * 2);
    ctx.fillStyle = hwColor;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.stroke();
  }

  ctx.restore();
}

function open3DCustomizer(productId) {
  const item = allCatalogStreamPool.find(p => p.id === productId) || bigCollectionsData.sneakers[0];
  const studioSec = document.getElementById('3d-studio');
  if (studioSec) {
    studioSec.scrollIntoView({ behavior: 'smooth' });
    update3DStudio();
  }
}

function request3DQuote() {
  const summary = `Configured 3D Customizer Model: ${customizerState.leather}, Sole: ${customizerState.sole}, Hardware: ${customizerState.hardware}`;
  openRFQ('Footwear');
  const msg = document.getElementById('message');
  if (msg) msg.value = `Hi Arutemika,\n\nI configured this custom specification in your 3D Studio:\n- ${summary}\n\nPlease quote FOB Chittagong for 300/500 pairs.`;
}

// =====================================================
// 7. SPEC SHEET MODAL ENGINE
// =====================================================
function openSpecModal(productId) {
  const item = allCatalogStreamPool.find(p => p.id === productId) || bigCollectionsData.sneakers[0];
  const modal = document.getElementById('specModal');
  if (!modal) return;

  const titleEl = document.getElementById('specProductTitle');
  const refEl = document.getElementById('specProductRef');
  const imgEl = document.getElementById('specModalImg');
  const priceEl = document.getElementById('specPriceDisplay');
  const moqEl = document.getElementById('specMoqDisplay');
  const catEl = document.getElementById('specCategoryBadge');

  if (titleEl) titleEl.textContent = item.title;
  if (refEl) refEl.textContent = `${item.ref} · FOB Chittagong Port`;
  if (imgEl) imgEl.src = item.img;
  if (priceEl) priceEl.textContent = `${item.price} / unit`;
  if (moqEl) moqEl.textContent = `MOQ: ${item.moq} · Sample: 7–10 Days`;
  if (catEl) catEl.textContent = item.category.toUpperCase();

  modal.style.display = 'flex';
}

function closeSpecModal() {
  const modal = document.getElementById('specModal');
  if (modal) modal.style.display = 'none';
}

function switchSpecTab(tabId, btn) {
  document.querySelectorAll('.spec-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.spec-tab-pane').forEach(p => p.style.display = 'none');

  if (btn) btn.classList.add('active');
  const pane = document.getElementById(`specPane-${tabId}`);
  if (pane) pane.style.display = 'block';
}

function requestQuoteFromSpec() {
  const title = document.getElementById('specProductTitle')?.textContent || 'Leather Model';
  closeSpecModal();
  openRFQ('Multiple');
  const msg = document.getElementById('message');
  if (msg) msg.value = `I am requesting formal FOB quotation & tech pack for: ${title}.`;
}

function open3DCustomizerForSpec() {
  closeSpecModal();
  open3DCustomizer('SNK-01');
}

// =====================================================
// 8. LANDED COST & VOLUME MATRIX CALCULATOR
// =====================================================
let currentCalcCategory = 'sneakers';

const costMatrixData = {
  sneakers: { baseFob: 25.00, cbmPer100: 0.45, dutyTariffEu: 0.0, dutyTariffStandard: 0.08, airCostPerUnit: 7.50 },
  loafers: { baseFob: 28.50, cbmPer100: 0.42, dutyTariffEu: 0.0, dutyTariffStandard: 0.08, airCostPerUnit: 7.00 },
  briefcase: { baseFob: 38.00, cbmPer100: 0.85, dutyTariffEu: 0.0, dutyTariffStandard: 0.04, airCostPerUnit: 9.50 },
  tote: { baseFob: 27.00, cbmPer100: 0.65, dutyTariffEu: 0.0, dutyTariffStandard: 0.04, airCostPerUnit: 6.80 },
  wallet: { baseFob: 6.50, cbmPer100: 0.08, dutyTariffEu: 0.0, dutyTariffStandard: 0.03, airCostPerUnit: 1.20 }
};

function setCalcCategory(cat, btn) {
  currentCalcCategory = cat;
  document.querySelectorAll('#calcCategoryPills .stage-tool-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  calculateLandedCost();
}

function calculateLandedCost() {
  const qtyInput = document.getElementById('calcQuantity');
  const freightType = document.getElementById('calcFreightType')?.value || 'ocean';
  const destination = document.getElementById('calcDestination')?.value || 'EU';

  const qty = parseInt(qtyInput?.value, 10) || 500;
  const data = costMatrixData[currentCalcCategory] || costMatrixData.sneakers;

  // Volume tier discounts
  let volumeDiscount = 0;
  if (qty >= 1000) volumeDiscount = 0.05;
  if (qty >= 3000) volumeDiscount = 0.09;
  if (qty >= 5000) volumeDiscount = 0.12;

  const unitFob = data.baseFob * (1 - volumeDiscount);
  const totalFob = unitFob * qty;

  // Freight calculation
  let unitFreight = 1.40;
  if (freightType === 'air') {
    unitFreight = data.airCostPerUnit;
  } else {
    if (qty >= 3000) unitFreight = 0.95; // FCL economies of scale
  }
  const totalFreight = unitFreight * qty;

  // Duty (Bangladesh GSP+ gives 0% to EU)
  let dutyRate = destination === 'EU' ? data.dutyTariffEu : data.dutyTariffStandard;
  const unitDuty = unitFob * dutyRate;
  const totalDuty = unitDuty * qty;

  // Insurance & Port Clearance
  const unitHandling = 0.45;
  const totalHandling = unitHandling * qty;

  const totalLanded = totalFob + totalFreight + totalDuty + totalHandling;
  const landedPerUnit = totalLanded / qty;

  // Update UI
  const totalDisplay = document.getElementById('calcTotalLandedDisplay');
  const unitDisplay = document.getElementById('calcUnitLandedDisplay');
  const fobTotalDisplay = document.getElementById('breakdownFobTotal');
  const freightDisplay = document.getElementById('breakdownFreight');
  const dutyDisplay = document.getElementById('breakdownDuty');
  const cbmDisplay = document.getElementById('breakdownCbm');

  if (totalDisplay) totalDisplay.textContent = `€${Math.round(totalLanded * 0.92).toLocaleString()} / $${Math.round(totalLanded).toLocaleString()}`;
  if (unitDisplay) unitDisplay.textContent = `$${landedPerUnit.toFixed(2)} landed / unit`;
  if (fobTotalDisplay) fobTotalDisplay.textContent = `$${totalFob.toLocaleString()} ($${unitFob.toFixed(2)} / pc)`;
  if (freightDisplay) freightDisplay.textContent = `$${Math.round(totalFreight).toLocaleString()} (${freightType.toUpperCase()})`;
  if (dutyDisplay) dutyDisplay.textContent = destination === 'EU' ? '0% (GSP+ Preferential Exemption)' : `$${Math.round(totalDuty)} (${(dutyRate * 100).toFixed(0)}%)`;
  
  const totalCbm = ((data.cbmPer100 * qty) / 100).toFixed(1);
  const masterCartons = Math.ceil(qty / 20);
  if (cbmDisplay) cbmDisplay.textContent = `${totalCbm} CBM · ${masterCartons} Master Cartons`;
}

function transferCalculatorToRFQ() {
  const qty = document.getElementById('calcQuantity')?.value || '500';
  const category = currentCalcCategory;
  openRFQ('Multiple');
  const qtySelect = document.getElementById('quantity');
  if (qtySelect) {
    if (qty >= 3000) qtySelect.value = '3000+';
    else if (qty >= 1000) qtySelect.value = '1000-3000';
    else if (qty >= 500) qtySelect.value = '500-1000';
    else qtySelect.value = '200-500';
  }
}

// =====================================================
// 9. LIVE TELEMETRY & PRODUCTION TRACKER
// =====================================================
const demoOrdersDatabase = {
  'SNK-2026-NL-012': {
    orderId: "SNK-2026-NL-012",
    buyer: "VanderBerg Footwear B.V. (Rotterdam, NL)",
    product: "Full Grain Leather Sneaker — Margom Cupsole",
    quantity: "1,200 pairs",
    stage: "In-Line Blake Stitching & Finishing (78% Complete)",
    etd: "April 18, 2026",
    progress: 78,
    steps: [
      { name: "Leather Tanning & Batch Selection", status: "completed", date: "Mar 12, 2026" },
      { name: "Laser & Die Cutting (1,200 Pairs)", status: "completed", date: "Mar 20, 2026" },
      { name: "Upper Stitching & Embossing", status: "completed", date: "Mar 29, 2026" },
      { name: "360° Blake Sidewall Lasting", status: "active", date: "In Progress (Day 4/6)" },
      { name: "Final QC & Packaging into Master Cartons", status: "pending", date: "Est. Apr 14" },
      { name: "FOB Chittagong Port Dispatch", status: "pending", date: "Est. Apr 18" }
    ]
  },
  'LOA-2026-DE-088': {
    orderId: "LOA-2026-DE-088",
    buyer: "Schmidt & Partner Lederwaren (Hamburg, DE)",
    product: "Burnished Penny Loafers — Channeled Leather Sole",
    quantity: "600 pairs",
    stage: "Final QC Inspection & Master Carton Packaging (92% Complete)",
    etd: "April 08, 2026",
    progress: 92,
    steps: [
      { name: "French Box Calfskin Selection", status: "completed", date: "Feb 28, 2026" },
      { name: "Clicking & Hand Apron Stitching", status: "completed", date: "Mar 10, 2026" },
      { name: "Goodyear / Blake Sole Attachment", status: "completed", date: "Mar 22, 2026" },
      { name: "Hand Burnishing & Edge Dressing", status: "completed", date: "Apr 02, 2026" },
      { name: "Final AQL 2.5 Quality Inspection", status: "active", date: "Active Inspection" },
      { name: "Chittagong Vessel Loading (BL Ready)", status: "pending", date: "Apr 08, 2026" }
    ]
  },
  'ORD-2026-EU-047': {
    orderId: "ORD-2026-EU-047",
    buyer: "Atelier Nordique (Stockholm, SE)",
    product: "Minimalist Seamless Vegetable Totes & Wallets",
    quantity: "850 pcs",
    stage: "Raw Leather Acclimatization & Precision Die-Cutting (35% Complete)",
    etd: "May 02, 2026",
    progress: 35,
    steps: [
      { name: "Full-Grain Vegetable Leather Sourcing", status: "completed", date: "Mar 28, 2026" },
      { name: "Pattern Die Cutting & Skiving", status: "active", date: "In Progress" },
      { name: "Edge Beveling & 3-Layer Edge Painting", status: "pending", date: "Est. Apr 12" },
      { name: "Hardware Riveting & Rolled Handle Stitching", status: "pending", date: "Est. Apr 20" },
      { name: "Final Inspection & Cotton Dust Bags", status: "pending", date: "Est. Apr 28" },
      { name: "Shipment Chittagong to Gothenburg", status: "pending", date: "Est. May 02" }
    ]
  }
};

function lookupOrder() {
  const input = document.getElementById('trackerSearchInput');
  const code = (input?.value || '').trim().toUpperCase();
  const order = demoOrdersDatabase[code] || demoOrdersDatabase['SNK-2026-NL-012'];

  const headerEl = document.getElementById('trackerOrderHeader');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="order-field"><strong>Order ID:</strong> ${order.orderId}</div>
      <div class="order-field"><strong>Client:</strong> ${order.buyer}</div>
      <div class="order-field"><strong>Product:</strong> ${order.product} (${order.quantity})</div>
      <div class="order-field"><strong>Current Status:</strong> <span style="color:var(--accent);font-weight:bold;">${order.stage}</span></div>
      <div class="order-field"><strong>Est. FOB Departure:</strong> ${order.etd}</div>
    `;
  }

  const pBar = document.querySelector('.progress-fill');
  if (pBar) pBar.style.width = `${order.progress}%`;
}

function setTrackerOrder(code) {
  const input = document.getElementById('trackerSearchInput');
  if (input) input.value = code;
  lookupOrder();
}

// =====================================================
// 10. PHOTO GALLERIES & LIGHTBOX (70+ AUTHENTIC ATELIER SHOTS)
// =====================================================
const realFactoryPhotosList = [
  "images/gallery/1787550810891.jpg", "images/gallery/1787551269477.jpg", "images/gallery/1787551605652.jpg",
  "images/gallery/1787551672194.jpg", "images/gallery/1787551717581.jpg", "images/gallery/1787551830347.jpg",
  "images/gallery/1787551969487.jpg", "images/gallery/1787552013314.jpg", "images/gallery/1787552073876.jpg",
  "images/gallery/1787553258401.jpg", "images/gallery/1787557025434.jpg", "images/gallery/1787557173371.jpg",
  "images/gallery/1787557369321.jpg", "images/gallery/1787557416857.jpg", "images/gallery/1787557544868.jpg",
  "images/gallery/1787557594549.jpg", "images/gallery/1787557652729.jpg", "images/gallery/1787557707461.jpg",
  "images/gallery/1787561311966.jpg", "images/gallery/1787561410420.jpg", "images/gallery/1787561462248.jpg",
  "images/gallery/1787561525859.jpg", "images/gallery/1787561599325.jpg", "images/gallery/1787561677651.jpg",
  "images/gallery/1787561758761.jpg", "images/gallery/1787564870422.jpg", "images/gallery/1787565013745.jpg",
  "images/gallery/1787565140109.jpg", "images/gallery/1787565223331.jpg", "images/gallery/1787565346234.jpg",
  "images/gallery/1787565452471.jpg", "images/gallery/1787565530184.jpg", "images/gallery/1787565728682.jpg",
  "images/gallery/1787574408352.jpg", "images/gallery/1787574484439.jpg", "images/gallery/1787575027407.jpg",
  "images/gallery/1787575083348.jpg", "images/gallery/1787575154943.jpg", "images/gallery/1787575216064.jpg",
  "images/gallery/1787575348067.jpg", "images/gallery/1787575514691.jpg", "images/gallery/1787575574325.jpg",
  "images/gallery/1787577181709.jpg", "images/gallery/1787577332631.jpg", "images/gallery/1787577403532.jpg",
  "images/gallery/1787577609195.jpg", "images/gallery/1787577782894.jpg", "images/gallery/1787577893123.jpg",
  "images/gallery/1787578055688.jpg", "images/gallery/1787578308773.jpg", "images/gallery/1787578378987.jpg",
  "images/gallery/1787578638969.jpg", "images/gallery/1787578740302.jpg", "images/gallery/1787578815200.jpg",
  "images/gallery/1787578885386.jpg", "images/gallery/1787578945102.jpg", "images/gallery/1787579023213.jpg",
  "images/gallery/1787579145119.jpg", "images/gallery/1787579231739.jpg",
  "1787573171171.jpg", "1787573265365.jpg", "1787573404119.jpg", "1787573622537.jpg",
  "1787573861268.jpg", "1787573950184.jpg", "1787574036435.jpg", "1787574154554.jpg",
  "1000022117.jpeg", "1000022118.jpeg", "1000022119.jpeg", "1000022128.jpeg",
  "1000022129.jpeg", "1000022130.jpeg", "1000022131.jpeg", "1000022132.jpeg",
  "1000022136.jpeg", "1000022137.jpeg", "1000022138.jpeg", "1000022141.jpeg",
  "1000022144.jpeg", "1000022147.jpeg", "1000022148.jpeg", "1000022149.jpeg"
];

const photoTitles = [
  "French Box Calfhide Cutting Precision", "Hand-Lasted Penny Loafer Vamp Shaping", "Blake Stitch Rapid Outsole Machine",
  "Edge Dye Hand Burnishing Process", "Anatomic Last Fitting & Toe Spring", "Full-Grain Veg-Tan Hide Grading",
  "Solid Cast Brass Buckle Hardware", "Goodyear Channeled Leather Sole", "Custom Embossed Logo Stamping",
  "Seamless Tote One-Piece Construction", "Executive Briefcase Padded Sleeve", "Margom Rubber Cupsole Sidewall Stitch",
  "Hand-Braided Collar & Tassels", "AirTag Leather Pocket Molding", "Ortholite Memory Cushion Insole",
  "Microfiber Velvet Lining Assembly", "Dual-Compartment File Bag Stitch", "Italian Vegetable Crust Patina Finish",
  "Retro Court Trainer Suede Patchwork", "Doctor's Bag Cast Iron Frame Lock", "YKK Excella Brass Zipper Fitting",
  "Double Monk Strap Polished Hardware", "Waterproof Bonded Seam Testing", "Commando Lug Sole Pressure Bonding",
  "Passport Holder SIM Slot Stitching", "Waxed Canvas & Bridle Leather Trim", "Custom Drawer Box Packaging Line",
  "Export Quality Final Inspection Bench", "Natural Gum Rubber Sole Casting", "Belgian Suede Tassel Slip-On Build",
  "Sovereign Horsebit Hardware Setting", "Pull-Up Vintage Leather Tannage", "RFID Shield Fabric Lamination",
  "High-Density Reinforcement Stitch", "Chit-Tagong Export Port Dispatch", "Craftsman Hand skiving Calf Edge",
  "Pre-Production Gold Foil Emboss Sample", "Laser Cutting Template Precision", "Saddle Stitch Waxed Thread Finish",
  "D-Ring Solid Brass Anchor Attachment", "Telescopic Cigar Leather Case", "Trolley Pass-Through Sleeve Assembly",
  "Master Pattern Grading Desk", "BSCI Ethical Workshop Floor Overview", "Vamp Perforation Brogue Punching",
  "Suede Dust Bag Ribbon Finishing", "Corner Metal Protective Feet Riveting", "Burnished Edge Waxing Station",
  "Aniline Leather Dye Bath Check", "Hand-Turned Leather Handle Core", "Shoe Tree Cedar Last Insertion",
  "Bespoke ODM Client Tech Spec Review", "Key Carabiner 6-Hook Assembly", "Magnetic Snap Clasp Precision Seating",
  "Luggage Leather ID Tag Hot-Stamp", "Triple Gusset Accordion Fold Assembly", "Handbag Structure Piping Insert",
  "Commuter Backpack Breathable Mesh", "Foldable Travel Loafer Heel Construction", "Fine Grain Swatch Selection Bench",
  "Artisanal Workshop Bench - Dhaka Hub", "Full Grain Calf Leather Hide Selection", "Footwear Lasting & Pattern Making",
  "Hand Stitched Edge Details", "Leather Cutting Precision Station", "Premium Leather Goods Workshop",
  "Finished Footwear Quality Check", "Master Craftsman Finishing Table", "Export Crate Packing Station",
  "Custom Metal Logo Casting", "Vegetable Tanning Drum Inspection", "Waxed Thread Spool Selection",
  "Leather Burnishing Machine", "Sample Prototyping Room", "Leather Thickness Calibration"
];

const galleryPhotos = realFactoryPhotosList.map((imgSrc, idx) => ({
  src: imgSrc,
  alt: photoTitles[idx] || `Arutemika leather craftsmanship detail ${idx + 1}`,
  caption: photoTitles[idx] || `Factory Craftsmanship Shot #${idx + 1}`
}));

const galleries = {
  craft: galleryPhotos,
  loafers: bigCollectionsData.loafers,
  sneakers: bigCollectionsData.sneakers,
  bags: bigCollectionsData.briefcases.concat(bigCollectionsData.totes),
  wallets: bigCollectionsData.wallets
};

let currentGalleryLimit = 28;

function switchGalleryView(view, btn) {
  document.querySelectorAll('.gallery-pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const photoGal = document.getElementById('photoGallery');
  const loaferGal = document.getElementById('loaferGallery');
  const sneakerGal = document.getElementById('sneakerGallery');

  if (view === 'all') {
    if (photoGal) photoGal.style.display = 'grid';
    if (loaferGal) loaferGal.style.display = 'none';
    if (sneakerGal) sneakerGal.style.display = 'none';
    renderPhotoGrid('photoGallery', 'craft');
  } else if (view === 'loafers') {
    if (photoGal) photoGal.style.display = 'none';
    if (loaferGal) loaferGal.style.display = 'grid';
    if (sneakerGal) sneakerGal.style.display = 'none';
    renderPhotoGrid('loaferGallery', 'loafers');
  } else if (view === 'sneakers') {
    if (photoGal) photoGal.style.display = 'none';
    if (loaferGal) loaferGal.style.display = 'none';
    if (sneakerGal) sneakerGal.style.display = 'grid';
    renderPhotoGrid('sneakerGallery', 'sneakers');
  }
}

function loadAllGalleryPhotos() {
  currentGalleryLimit = galleryPhotos.length;
  renderPhotoGrid('photoGallery', 'craft');
  const loadBtnWrap = document.getElementById('galleryLoadMoreWrap');
  if (loadBtnWrap) loadBtnWrap.style.display = 'none';
}

function renderPhotoGrid(containerId, galleryKey) {
  const grid = document.getElementById(containerId);
  const photos = galleries[galleryKey] || galleryPhotos;
  if (!grid || !photos) return;

  const displayLimit = galleryKey === 'craft' ? currentGalleryLimit : photos.length;
  const itemsToRender = photos.slice(0, displayLimit);

  grid.innerHTML = itemsToRender.map((photo, i) => {
    let sizeClass = '';
    if (i % 8 === 2) sizeClass = ' lg';
    else if (i % 6 === 1) sizeClass = ' tall';
    const imgSrc = photo.src || photo.img;
    const titleText = photo.caption || photo.title || `Craft Detail #${i+1}`;
    return `
      <div class="photo-item${sizeClass}" data-index="${i}" onclick="openLightbox('${galleryKey}', ${i})">
        <img src="${imgSrc}" alt="${titleText}" loading="lazy" onerror="this.src='1000022131.jpeg'">
        <div class="photo-item-overlay">
          <span class="photo-zoom-hint">${titleText}</span>
          <a class="photo-wa-btn" href="https://wa.me/${WA_NUMBER}?text=Hi%20Arutemika%2C%20inquiry%20regarding%20photo%20%23${i+1}%20(${encodeURIComponent(titleText)})" target="_blank" onclick="event.stopPropagation()" title="Ask about this on WhatsApp">💬</a>
        </div>
      </div>
    `;
  }).join('');
}

let currentGalleryKey = 'craft';
let currentPhotoIndex = 0;

function openLightbox(galleryKey, index) {
  currentGalleryKey = galleryKey;
  currentPhotoIndex = index;
  updateLightbox();
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

function navLightbox(direction) {
  const photos = galleries[currentGalleryKey];
  currentPhotoIndex = (currentPhotoIndex + direction + photos.length) % photos.length;
  updateLightbox();
}

function updateLightbox() {
  const photos = galleries[currentGalleryKey];
  const photo = photos[currentPhotoIndex];
  const imgEl = document.getElementById('lightboxImg');
  const countEl = document.getElementById('lightboxCounter');
  const waBtn = document.getElementById('lightboxWaBtn');

  if (imgEl) imgEl.src = photo.src || photo.img;
  if (countEl) countEl.textContent = `${photo.caption || photo.title} — ${currentPhotoIndex + 1} / ${photos.length}`;
  if (waBtn) waBtn.href = `https://wa.me/${WA_NUMBER}?text=Hi%20Arutemika%2C%20I'm%20asking%20about%20${encodeURIComponent(photo.caption || photo.title)}`;
}

document.getElementById('lightbox')?.addEventListener('click', (e) => {
  if (e.target.id === 'lightbox') closeLightbox();
});

document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navLightbox(1);
  if (e.key === 'ArrowLeft') navLightbox(-1);
});

// =====================================================
// 11. GENERAL RFQ & PRODUCT FILTER
// =====================================================
function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('#productsGrid .product-card, #productGrid .product-card').forEach(card => {
    if (cat === 'all' || card.dataset.category === cat) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function openRFQ(product) {
  const cat = document.getElementById('productCat');
  if (cat && product) cat.value = product;
  const rfq = document.getElementById('rfq');
  if (rfq) rfq.scrollIntoView({ behavior: 'smooth' });
}

function submitRFQ() {
  const firstName = document.getElementById('firstName')?.value.trim();
  const lastName = document.getElementById('lastName')?.value.trim();
  const company = document.getElementById('company')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const country = document.getElementById('country')?.value;
  const productCat = document.getElementById('productCat')?.value;
  const quantity = document.getElementById('quantity')?.value;
  const material = document.getElementById('material')?.value;
  const message = document.getElementById('message')?.value;

  if (!firstName || !email || !productCat) {
    alert('Please fill in Name, Email and Product Category at minimum.');
    return;
  }

  const submitBtn = document.querySelector('.form-submit');
  if (submitBtn) {
    submitBtn.textContent = 'TRANSMITTING RFQ...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';
  }

  setTimeout(() => {
    const form = document.getElementById('rfqForm');
    const success = document.getElementById('formSuccess');
    if (form) form.style.display = 'none';
    if (success) success.style.display = 'block';
  }, 800);
}

// Sakura Petals
function initSakura(count = 14) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = document.createElement('div');
  layer.className = 'sakura-layer';
  layer.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    const left = Math.random() * 100;
    const fallDuration = 12 + Math.random() * 10;
    const swayDuration = 3 + Math.random() * 3;
    const delay = Math.random() * 15;
    const size = 8 + Math.random() * 8;
    petal.style.left = left + 'vw';
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
    petal.style.animationDelay = `${delay}s, ${delay}s`;
    layer.appendChild(petal);
  }
  document.body.appendChild(layer);
}

// =====================================================
// 12. INITIALIZATION ON DOM READY
// =====================================================
window.addEventListener('DOMContentLoaded', () => {
  initAllBigCollections();
  renderPhotoGrid('photoGallery', 'craft');
  renderPhotoGrid('loaferGallery', 'loafers');
  renderPhotoGrid('sneakerGallery', 'sneakers');
  initSakura();
  calculateLandedCost();
  update3DStudio();
  lookupOrder();
});
