// ── Top button ──────────────────────────────────────────
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ── Active nav link ──────────────────────────────────────
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  const page = location.pathname.split('/').pop() || 'index.html';
  if (href === page) a.classList.add('active');
});

// ── Dynamic footer ───────────────────────────────────────
(function () {
  const now   = new Date();
  const month = now.toLocaleString('en-US', { month: 'short' });
  const year  = now.getFullYear();
  const text  = '\u00a9 2025 \u2013 ' + month + ' ' + year + ' Raveen Prakash V S';
  document.querySelectorAll('.footer').forEach(f => f.textContent = text);
})();

// ── Falling logos ────────────────────────────────────────
function spawnFalls() {
  const ar = document.querySelector('.fall-area');
  if (!ar) return;
  for (let i = 0; i < 12; i++) {
    const img = document.createElement('img');
    img.src = 'assets/fall' + (i + 1) + '.png';
    img.className = 'falling';
    img.style.left = (20 + i * 40) % 800 + 'px';
    img.style.animationDelay = (i * 0.2) + 's';
    ar.appendChild(img);
    setTimeout(() => { try { ar.removeChild(img); } catch (e) {} }, 4000);
  }
}
window.addEventListener('load', () => { spawnFalls(); setInterval(spawnFalls, 5000); });
