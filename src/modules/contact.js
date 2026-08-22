/**
 * Contact Form & Copy-To-Clipboard Module
 * Features validation and interactive toast feedback
 */

export function initContact() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const copyButtons = document.querySelectorAll('.copy-btn');

  function showToast(message, type = 'info') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${type === 'success' ? '#34d399' : '#38bdf8'}" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Copy buttons (Email / Discord)
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
        }).catch(() => {
          showToast('Failed to copy to clipboard', 'error');
        });
      }
    });
  });

  // Form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();
      const message = messageInput?.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Please fill in all required fields.';
        }
        return;
      }

      if (!emailRegex.test(email)) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Please enter a valid email address.';
        }
        return;
      }

      // Simulate successful dispatch
      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = '✓ Message sent successfully! I will get back to you shortly.';
      }
      showToast(`Thank you, ${name}! Your message was dispatched.`, 'success');
      form.reset();

      setTimeout(() => {
        if (feedback) feedback.style.display = 'none';
      }, 5000);
    });
  }
}
