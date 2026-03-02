document.addEventListener('DOMContentLoaded', function () {
  const nameEl = document.getElementById('typed-name');
  const texts = ['Lim Wei Keong', 'a Coding Enthusiast', 'Full-Stack Engineer'];
  let ti = 0, ci = 0, deleting = false;

  function type() {
    const cur = texts[ti];
    nameEl.textContent = deleting
      ? cur.substring(0, ci - 1)
      : cur.substring(0, ci + 1);
    ci += deleting ? -1 : 1;

    if (!deleting && ci === cur.length) setTimeout(() => deleting = true, 1200);
    else if (deleting && ci === 0) {
      deleting = false;
      ti = (ti + 1) % texts.length;
    }
    setTimeout(type, deleting ? 45 : 95);
  }
  type();
});
