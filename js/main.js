/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ============================================================
   SCROLL-SPY — highlight active nav link
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav__links a[href^="#"]');

function updateActiveLink() {
  const scrollY = window.scrollY + 80; // offset for sticky nav

  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop) current = section.id;
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

/* ============================================================
   FADE-IN ON SCROLL (IntersectionObserver)
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
}

/* ============================================================
   ACCORDION (coursework)
   ============================================================ */
document.querySelectorAll('.accordion__header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion__item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.accordion__item').forEach(i => i.classList.remove('open'));

    // Open clicked (unless it was already open)
    if (!isOpen) item.classList.add('open');
  });
});

/* ============================================================
   MASONRY GRID
   ============================================================ */
const msnry = new Masonry('.projects-grid', {
  itemSelector: '.card:not(.hidden)',
  columnWidth: 300,
  gutter: 24,
  fitWidth: true,
});

/* ============================================================
   PROJECT TAB FILTER
   ============================================================ */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.projects-grid .card').forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const cats = (card.dataset.category || '').split(' ');
        card.classList.toggle('hidden', !cats.includes(filter));
      }
    });

    msnry.options.itemSelector = '.card:not(.hidden)';
    msnry.reloadItems();
    msnry.layout();
  });
});

/* ============================================================
   LIGHTBOX — click image grid images to enlarge
   ============================================================ */
(function() {
  const lightbox = document.createElement('div');
  lightbox.style.cssText = `
    display:none; position:fixed; inset:0; background:rgba(0,0,0,.85);
    z-index:9999; align-items:center; justify-content:center; cursor:zoom-out;
    padding:20px;
  `;
  const lightboxImg = document.createElement('img');
  lightboxImg.style.cssText = `
    max-width:90vw; max-height:90vh; border-radius:8px;
    box-shadow:0 8px 40px rgba(0,0,0,.5); object-fit:contain;
  `;
  lightbox.appendChild(lightboxImg);
  document.body.appendChild(lightbox);

  document.querySelectorAll('.img-grid img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => { lightbox.style.display = 'none'; });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.style.display = 'none';
  });
})();
