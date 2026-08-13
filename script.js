// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = 'var(--nav-h)';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'var(--bg)';
    navLinks.style.padding = '20px 28px';
    navLinks.style.borderBottom = '1px solid var(--line)';
    navLinks.style.gap = '18px';
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// Contact form
const contactForm = document.getElementById('quote-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Brief received — we\'ll reply within 48 hours.';
    status.classList.add('visible', 'ok');
    contactForm.reset();
  });
}
