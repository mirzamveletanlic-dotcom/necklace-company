export function initScrollEffects() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const revealElements = document.querySelectorAll(".scroll-reveal");

  if (reducedMotion) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      element.classList.add("is-visible");
    }
    observer.observe(element);
  });

  const heroParallax = document.querySelector(".hero-parallax");
  if (!heroParallax) return;

  let ticking = false;

  const updateParallax = () => {
    const offset = Math.min(window.scrollY * 0.06, 48);
    heroParallax.style.transform = `translate3d(0, ${offset}px, 0)`;
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateParallax);
  };

  updateParallax();
  window.addEventListener("scroll", onScroll, { passive: true });
}

initScrollEffects();
