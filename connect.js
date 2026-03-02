document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn span');
    btn.textContent = 'Message Sent!';
    setTimeout(() => { btn.textContent = 'Send Message'; form.reset(); }, 3000);
  });
});
