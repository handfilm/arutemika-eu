/* ============================================================
   ARUTEMIKA — SITE SCRIPT
   Sections: Language toggle, mobile nav, scroll reveal,
   product filter, RFQ form, progress bar, nav active state,
   and the photo gallery (data-driven, lightbox, WhatsApp CTA).
   ============================================================ */

const galleryPhotos = [
  { src: "images/gallery/1787550810891.jpg", alt: "Arutemika leather craftsmanship detail 01", caption: "Craft Detail — Photo 01" },
  { src: "images/gallery/1787551269477.jpg", alt: "Arutemika leather craftsmanship detail 02", caption: "Craft Detail — Photo 02" },
  { src: "images/gallery/1787551605652.jpg", alt: "Arutemika leather craftsmanship detail 03", caption: "Craft Detail — Photo 03" },
  { src: "images/gallery/1787551672194.jpg", alt: "Arutemika leather craftsmanship detail 04", caption: "Craft Detail — Photo 04" },
  { src: "images/gallery/1787551717581.jpg", alt: "Arutemika leather craftsmanship detail 05", caption: "Craft Detail — Photo 05" },
  { src: "images/gallery/1787551830347.jpg", alt: "Arutemika leather craftsmanship detail 06", caption: "Craft Detail — Photo 06" },
  { src: "images/gallery/1787551969487.jpg", alt: "Arutemika leather craftsmanship detail 07", caption: "Craft Detail — Photo 07" },
  { src: "images/gallery/1787552013314.jpg", alt: "Arutemika leather craftsmanship detail 08", caption: "Craft Detail — Photo 08" },
  { src: "images/gallery/1787552073876.jpg", alt: "Arutemika leather craftsmanship detail 09", caption: "Craft Detail — Photo 09" },
  { src: "images/gallery/1787553258401.jpg", alt: "Arutemika leather craftsmanship detail 10", caption: "Craft Detail — Photo 10" },
  { src: "images/gallery/1787557025434.jpg", alt: "Arutemika leather craftsmanship detail 11", caption: "Craft Detail — Photo 11" },
  { src: "images/gallery/1787557173371.jpg", alt: "Arutemika leather craftsmanship detail 12", caption: "Craft Detail — Photo 12" },
  { src: "images/gallery/1787557369321.jpg", alt: "Arutemika leather craftsmanship detail 13", caption: "Craft Detail — Photo 13" },
  { src: "images/gallery/1787557416857.jpg", alt: "Arutemika leather craftsmanship detail 14", caption: "Craft Detail — Photo 14" },
  { src: "images/gallery/1787557544868.jpg", alt: "Arutemika leather craftsmanship detail 15", caption: "Craft Detail — Photo 15" },
  { src: "images/gallery/1787557594549.jpg", alt: "Arutemika leather craftsmanship detail 16", caption: "Craft Detail — Photo 16" },
  { src: "images/gallery/1787557652729.jpg", alt: "Arutemika leather craftsmanship detail 17", caption: "Craft Detail — Photo 17" },
  { src: "images/gallery/1787557707461.jpg", alt: "Arutemika leather craftsmanship detail 18", caption: "Craft Detail — Photo 18" },
  { src: "images/gallery/1787561311966.jpg", alt: "Arutemika leather craftsmanship detail 19", caption: "Craft Detail — Photo 19" },
  { src: "images/gallery/1787561410420.jpg", alt: "Arutemika leather craftsmanship detail 20", caption: "Craft Detail — Photo 20" },
  { src: "images/gallery/1787561462248.jpg", alt: "Arutemika leather craftsmanship detail 21", caption: "Craft Detail — Photo 21" },
  { src: "images/gallery/1787561525859.jpg", alt: "Arutemika leather craftsmanship detail 22", caption: "Craft Detail — Photo 22" },
  { src: "images/gallery/1787561599325.jpg", alt: "Arutemika leather craftsmanship detail 23", caption: "Craft Detail — Photo 23" },
  { src: "images/gallery/1787561677651.jpg", alt: "Arutemika leather craftsmanship detail 24", caption: "Craft Detail — Photo 24" },
  { src: "images/gallery/1787561758761.jpg", alt: "Arutemika leather craftsmanship detail 25", caption: "Craft Detail — Photo 25" },
  { src: "images/gallery/1787564870422.jpg", alt: "Arutemika leather craftsmanship detail 26", caption: "Craft Detail — Photo 26" },
  { src: "images/gallery/1787565013745.jpg", alt: "Arutemika leather craftsmanship detail 27", caption: "Craft Detail — Photo 27" },
  { src: "images/gallery/1787565140109.jpg", alt: "Arutemika leather craftsmanship detail 28", caption: "Craft Detail — Photo 28" },
  { src: "images/gallery/1787565223331.jpg", alt: "Arutemika leather craftsmanship detail 29", caption: "Craft Detail — Photo 29" },
  { src: "images/gallery/1787565346234.jpg", alt: "Arutemika leather craftsmanship detail 30", caption: "Craft Detail — Photo 30" },
  { src: "images/gallery/1787565452471.jpg", alt: "Arutemika leather craftsmanship detail 31", caption: "Craft Detail — Photo 31" },
  { src: "images/gallery/1787565530184.jpg", alt: "Arutemika leather craftsmanship detail 32", caption: "Craft Detail — Photo 32" },
  { src: "images/gallery/1787565728682.jpg", alt: "Arutemika leather craftsmanship detail 33", caption: "Craft Detail — Photo 33" },
  { src: "images/gallery/1787573171171.jpg", alt: "Arutemika leather craftsmanship detail 34", caption: "Craft Detail — Photo 34" },
  { src: "images/gallery/1787573265365.jpg", alt: "Arutemika leather craftsmanship detail 35", caption: "Craft Detail — Photo 35" },
  { src: "images/gallery/1787573404119.jpg", alt: "Arutemika leather craftsmanship detail 36", caption: "Craft Detail — Photo 36" },
  { src: "images/gallery/1787573622537.jpg", alt: "Arutemika leather craftsmanship detail 37", caption: "Craft Detail — Photo 37" },
  { src: "images/gallery/1787573861268.jpg", alt: "Arutemika leather craftsmanship detail 38", caption: "Craft Detail — Photo 38" },
  { src: "images/gallery/1787573950184.jpg", alt: "Arutemika leather craftsmanship detail 39", caption: "Craft Detail — Photo 39" },
  { src: "images/gallery/1787574036435.jpg", alt: "Arutemika leather craftsmanship detail 40", caption: "Craft Detail — Photo 40" },
  { src: "images/gallery/1787574045729.jpg", alt: "Arutemika leather craftsmanship detail 41", caption: "Craft Detail — Photo 41" },
  { src: "images/gallery/1787574154554.jpg", alt: "Arutemika leather craftsmanship detail 42", caption: "Craft Detail — Photo 42" },
  { src: "images/gallery/1787574408352.jpg", alt: "Arutemika leather craftsmanship detail 43", caption: "Craft Detail — Photo 43" },
  { src: "images/gallery/1787574484439.jpg", alt: "Arutemika leather craftsmanship detail 44", caption: "Craft Detail — Photo 44" },
  { src: "images/gallery/1787574910544.jpg", alt: "Arutemika leather craftsmanship detail 45", caption: "Craft Detail — Photo 45" },
  { src: "images/gallery/1787574958982.jpg", alt: "Arutemika leather craftsmanship detail 46", caption: "Craft Detail — Photo 46" },
  { src: "images/gallery/1787575027407.jpg", alt: "Arutemika leather craftsmanship detail 47", caption: "Craft Detail — Photo 47" },
  { src: "images/gallery/1787575083348.jpg", alt: "Arutemika leather craftsmanship detail 48", caption: "Craft Detail — Photo 48" },
  { src: "images/gallery/1787575154943.jpg", alt: "Arutemika leather craftsmanship detail 49", caption: "Craft Detail — Photo 49" },
  { src: "images/gallery/1787575216064.jpg", alt: "Arutemika leather craftsmanship detail 50", caption: "Craft Detail — Photo 50" },
  { src: "images/gallery/1787575348067.jpg", alt: "Arutemika leather craftsmanship detail 51", caption: "Craft Detail — Photo 51" },
  { src: "images/gallery/1787575514691.jpg", alt: "Arutemika leather craftsmanship detail 52", caption: "Craft Detail — Photo 52" },
  { src: "images/gallery/1787575574325.jpg", alt: "Arutemika leather craftsmanship detail 53", caption: "Craft Detail — Photo 53" },
  { src: "images/gallery/1787577181709.jpg", alt: "Arutemika leather craftsmanship detail 54", caption: "Craft Detail — Photo 54" },
  { src: "images/gallery/1787577332631.jpg", alt: "Arutemika leather craftsmanship detail 55", caption: "Craft Detail — Photo 55" },
  { src: "images/gallery/1787577403532.jpg", alt: "Arutemika leather craftsmanship detail 56", caption: "Craft Detail — Photo 56" },
  { src: "images/gallery/1787577609195.jpg", alt: "Arutemika leather craftsmanship detail 57", caption: "Craft Detail — Photo 57" },
  { src: "images/gallery/1787577782894.jpg", alt: "Arutemika leather craftsmanship detail 58", caption: "Craft Detail — Photo 58" },
  { src: "images/gallery/1787577893123.jpg", alt: "Arutemika leather craftsmanship detail 59", caption: "Craft Detail — Photo 59" },
  { src: "images/gallery/1787578055688.jpg", alt: "Arutemika leather craftsmanship detail 60", caption: "Craft Detail — Photo 60" },
  { src: "images/gallery/1787578308773.jpg", alt: "Arutemika leather craftsmanship detail 61", caption: "Craft Detail — Photo 61" },
  { src: "images/gallery/1787578378987.jpg", alt: "Arutemika leather craftsmanship detail 62", caption: "Craft Detail — Photo 62" },
  { src: "images/gallery/1787578638969.jpg", alt: "Arutemika leather craftsmanship detail 63", caption: "Craft Detail — Photo 63" },
  { src: "images/gallery/1787578740302.jpg", alt: "Arutemika leather craftsmanship detail 64", caption: "Craft Detail — Photo 64" },
  { src: "images/gallery/1787578815200.jpg", alt: "Arutemika leather craftsmanship detail 65", caption: "Craft Detail — Photo 65" },
  { src: "images/gallery/1787578885386.jpg", alt: "Arutemika leather craftsmanship detail 66", caption: "Craft Detail — Photo 66" },
  { src: "images/gallery/1787578945102.jpg", alt: "Arutemika leather craftsmanship detail 67", caption: "Craft Detail — Photo 67" },
  { src: "images/gallery/1787579023213.jpg", alt: "Arutemika leather craftsmanship detail 68", caption: "Craft Detail — Photo 68" },
  { src: "images/gallery/1787579145119.jpg", alt: "Arutemika leather craftsmanship detail 69", caption: "Craft Detail — Photo 69" },
  { src: "images/gallery/1787579231739.jpg", alt: "Arutemika leather craftsmanship detail 70", caption: "Craft Detail — Photo 70" },
];

// LANGUAGE TOGGLE
function setLang(lang, btn) {
  document.body.className = 'lang-' + lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// MOBILE NAV
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// PRODUCT FILTER
function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    if (cat === 'all' || card.dataset.category === cat) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// OPEN RFQ WITH PRE-FILL
function openRFQ(product) {
  document.getElementById('productCat').value = product;
  document.getElementById('rfq').scrollIntoView({ behavior: 'smooth' });
}

// SUBMIT RFQ
function submitRFQ() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const company = document.getElementById('company').value.trim();
  const email = document.getElementById('email').value.trim();
  const country = document.getElementById('country').value;
  const productCat = document.getElementById('productCat').value;
  const quantity = document.getElementById('quantity').value;
  const material = document.getElementById('material').value;
  const message = document.getElementById('message').value;

  if (!firstName || !email || !productCat) {
    alert('Please fill in Name, Email and Product Category at minimum.');
    return;
  }

  const submitBtn = document.querySelector('.form-submit');
  submitBtn.textContent = 'SENDING...';
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.6';

  const payload = {
    firstName, lastName, company, email, country,
    productCat, quantity, material, message,
    timestamp: new Date().toISOString(),
    source: 'arutemika-eu-portal'
  };

  fetch('YOUR_MAKE_COM_WEBHOOK_URL_HERE', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(response => {
    document.getElementById('rfqForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  })
  .catch(error => {
    console.error('Webhook Error:', error);
    submitBtn.textContent = 'SEND REQUEST — RESPONSE IN 24H →';
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    alert('System error. Please contact directly: himon@handsandhead.com');
  });
}

// PROGRESS BAR ANIMATE ON SCROLL
const progressFill = document.querySelector('.progress-fill');
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      progressFill.style.width = '68%';
    }
  });
}, { threshold: 0.5 });
if (progressFill) progressObserver.observe(progressFill.parentElement);

// NAV ACTIVE STATE ON SCROLL
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--gold)' : '';
  });
});

// =====================================================
// PHOTO GALLERY — DATA-DRIVEN, LIGHTBOX + WHATSAPP
// To add new photos later: just add a new line to the
// galleryPhotos array above with the image filename.
// Upload the matching file to images/gallery/ — nothing
// else in the code needs to change.
// =====================================================
const WA_NUMBER = '8801974518600';

function waLinkForPhoto(photo, index) {
  const msg = `Hi Arutemika, I'm interested in this product — ${photo.caption} (Ref #${index + 1}). Could you share pricing and MOQ?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function renderGallery() {
  const grid = document.getElementById('photoGallery');
  if (!grid) return;
  grid.innerHTML = galleryPhotos.map((photo, i) => {
    // Dynamic grid: every 7th card is a big feature tile, every 4th is a tall tile,
    // so the gallery reads as an intentional mosaic instead of a flat grid.
    let sizeClass = '';
    if (i % 7 === 3) sizeClass = ' lg';
    else if (i % 4 === 1) sizeClass = ' tall';
    return `
    <div class="photo-item${sizeClass}" data-index="${i}" onclick="openLightbox(${i})">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
      <div class="photo-item-overlay">
        <span class="photo-zoom-hint">🔍 Zoom</span>
        <a class="photo-wa-btn" href="${waLinkForPhoto(photo, i)}" target="_blank" onclick="event.stopPropagation()" title="Ask about this on WhatsApp">💬</a>
      </div>
    </div>
  `;
  }).join('');
}

let currentPhotoIndex = 0;

function openLightbox(index) {
  currentPhotoIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function navLightbox(direction) {
  currentPhotoIndex = (currentPhotoIndex + direction + galleryPhotos.length) % galleryPhotos.length;
  updateLightbox();
}

function updateLightbox() {
  const photo = galleryPhotos[currentPhotoIndex];
  document.getElementById('lightboxImg').src = photo.src;
  document.getElementById('lightboxImg').alt = photo.alt;
  document.getElementById('lightboxCounter').textContent = `${photo.caption} — ${currentPhotoIndex + 1} / ${galleryPhotos.length}`;
  document.getElementById('lightboxWaBtn').href = waLinkForPhoto(photo, currentPhotoIndex);
}

// close on background click, keyboard nav
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

renderGallery();

// =====================================================
// SAKURA — subtle falling cherry-blossom petals
// Purely decorative, pointer-events disabled, respects
// prefers-reduced-motion (handled in CSS).
// =====================================================
function initSakura(count = 18) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = document.createElement('div');
  layer.className = 'sakura-layer';
  layer.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    const left = Math.random() * 100;
    const fallDuration = 10 + Math.random() * 12;
    const swayDuration = 3 + Math.random() * 3;
    const delay = Math.random() * 18;
    const size = 8 + Math.random() * 10;
    petal.style.left = left + 'vw';
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
    petal.style.animationDelay = `${delay}s, ${delay}s`;
    layer.appendChild(petal);
  }
  document.body.appendChild(layer);
}
initSakura();
