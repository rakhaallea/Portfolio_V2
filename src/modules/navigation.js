/**
 * Adaptive Dual-Navigation & Scrollspy
 * Handles Desktop Left Sidebar (>=768px) and Mobile Bottom Bar (<768px)
 */

export function initNavigation() {
  const desktopLinks = document.querySelectorAll('.sidebar .nav-link');
  const mobileLinks = document.querySelectorAll('.bottom-nav .bottom-nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll to section on click with smooth offset handling
  function handleNavClick(e) {
    const targetHref = e.currentTarget.getAttribute('href');
    if (!targetHref || !targetHref.startsWith('#')) return;

    e.preventDefault();
    const targetSection = document.querySelector(targetHref);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Update browser URL hash without jump
      history.pushState(null, '', targetHref);
      updateActiveNav(targetHref.substring(1));
    }
  }

  desktopLinks.forEach((link) => link.addEventListener('click', handleNavClick));
  mobileLinks.forEach((link) => link.addEventListener('click', handleNavClick));

  function updateActiveNav(activeId) {
    desktopLinks.forEach((link) => {
      const href = link.getAttribute('href')?.replace('#', '');
      if (href === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach((link) => {
      const href = link.getAttribute('href')?.replace('#', '');
      if (href === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // IntersectionObserver for active section highlight
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -50% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) {
          updateActiveNav(id);
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}
