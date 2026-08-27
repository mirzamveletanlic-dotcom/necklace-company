const STAGGER_MS = 60;
const MAX_STAGGER_CHILDREN = 6;

export function initScrollEffects() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
    initHeaderScroll();
    return;
  }

  initHeroLoadAnimation();
  initRevealGroups();
  initRevealElements();
  initHeaderScroll();
}

function initHeroLoadAnimation() {
  const hero = document.querySelector(".hero-fullbleed__content");
  if (!hero) return;

  const h1 = hero.querySelector("h1.scroll-reveal");
  const rest = hero.querySelectorAll(".scroll-reveal:not(h1)");

  if (h1) {
    h1.classList.add("is-visible");
  }

  rest.forEach((element, index) => {
    const delay = Math.min(index + 1, MAX_STAGGER_CHILDREN) * STAGGER_MS;
    element.style.setProperty("--reveal-delay", `${delay}ms`);
    window.setTimeout(() => {
      element.classList.add("is-visible");
    }, delay);
  });
}

function initRevealGroups() {
  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    const children = group.querySelectorAll(":scope > .scroll-reveal");
    children.forEach((child, index) => {
      const staggerIndex = Math.min(index, MAX_STAGGER_CHILDREN - 1);
      child.style.setProperty("--reveal-delay", `${staggerIndex * STAGGER_MS}ms`);
    });
  });
}

function initRevealElements() {
  const hero = document.querySelector(".hero-fullbleed__content");
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  revealElements.forEach((element) => {
    if (hero?.contains(element)) return;
    observer.observe(element);
  });
}

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const threshold = window.innerHeight * 0.8;

  const updateHeader = () => {
    header.classList.toggle("is-solid", window.scrollY >= threshold);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", updateHeader, { passive: true });
}

initScrollEffects();
