document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tl-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
});
