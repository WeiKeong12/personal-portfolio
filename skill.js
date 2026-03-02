document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.getAttribute('data-width');
        e.target.style.width = w + '%';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(f => observer.observe(f));
});
