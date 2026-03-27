/* shared.js — injects nav, footer, scroll behaviour */
(function(){
  const navHTML = `
<nav id="nav">
  <a href="index.html" class="nav-logo">Anthony<span>.</span></a>
  <ul class="nav-links">
    <li><a href="work.html">Work</a></li>
    <li><a href="speaking.html">Speaking</a></li>
    <li><a href="hire.html">Hire</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="blog.html">Ideas</a></li>
  </ul>
  <a href="index.html#contact" class="nav-cta">Work With Anthony</a>
</nav>`;

  const footerHTML = `
<footer>
  <div class="footer-logo">Anthony<span>Waya.</span></div>
  <div class="footer-links">
    <a href="work.html">Work</a>
    <a href="speaking.html">Speaking</a>
    <a href="hire.html">Hire</a>
    <a href="about.html">About</a>
    <a href="blog.html">Ideas</a>
    <a href="index.html#contact">Contact</a>
  </div>
  <div class="footer-copy">© 2025 Anthony Waya</div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if(a.getAttribute('href') === page) a.classList.add('active');
  });

  // Scroll shadow
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('sc', window.scrollY > 40);
  });

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target) } });
  }, {threshold: 0.07});
  document.querySelectorAll('.r').forEach(el => obs.observe(el));
})();
