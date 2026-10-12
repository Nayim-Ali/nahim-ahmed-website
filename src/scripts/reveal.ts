/**
 * Scroll-triggered reveals.
 * One IntersectionObserver for .reveal, .reveal-img and .lines.
 * Respects prefers-reduced-motion (CSS forces visible; we also skip the observer).
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = document.querySelectorAll<HTMLElement>('.reveal, .reveal-img, .lines');

if (reduce || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  targets.forEach((el) => io.observe(el));
}

/* Mark placeholder image blocks that actually have an image loaded */
document.querySelectorAll<HTMLImageElement>('.ph img').forEach((img) => {
  const mark = () => img.parentElement?.classList.add('has-img');
  img.addEventListener('error', () => { img.style.display = 'none'; }, { once: true });
  if (img.complete && img.naturalWidth > 0) mark();
  else if (img.complete) img.style.display = 'none';
  else img.addEventListener('load', mark, { once: true });
});
