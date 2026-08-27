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
    initHeroSlider(true);
    initMobileNav();
    return;
  }

  initHeroLoadAnimation();
  initRevealGroups();
  initRevealElements();
  initHeaderScroll();
  initHeroSlider(false);
  initMobileNav();
}

function initHeroLoadAnimation() {
  const hero = document.querySelector(".hero-fullbleed__content");
  if (!hero) return;

  const h1 = hero.querySelector("h1.scroll-reveal");
  const rest = hero.querySelectorAll(".scroll-reveal:not(h1)");

  if (h1) {
    h1.classList.add("is-visible");
    h1.querySelectorAll(".text-headline__line").forEach((line, index) => {
      line.style.setProperty("--reveal-delay", `${index * STAGGER_MS}ms`);
    });
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

function initHeroSlider(reducedMotion: boolean) {
  const slider = document.querySelector("[data-hero-slider]");
  const slides = slider?.querySelectorAll("[data-hero-slide]");
  const counter = document.querySelector("[data-hero-counter]");
  const prevButton = document.querySelector("[data-hero-prev]");
  const nextButton = document.querySelector("[data-hero-next]");

  if (!slider || !slides?.length || !counter) return;

  let activeIndex = 0;
  const total = slides.length;

  const formatCounter = (index: number) => {
    const current = String(index + 1).padStart(2, "0");
    const max = String(total).padStart(2, "0");
    return `${current}/${max}`;
  };

  const setSlide = (index: number) => {
    activeIndex = (index + total) % total;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });
    counter.textContent = formatCounter(activeIndex);
  };

  prevButton?.addEventListener("click", () => setSlide(activeIndex - 1));
  nextButton?.addEventListener("click", () => setSlide(activeIndex + 1));

  setSlide(0);

  if (reducedMotion) return;

  window.setInterval(() => {
    setSlide(activeIndex + 1);
  }, 6000);
}

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");
  const header = document.querySelector(".site-header");
  if (!toggle || !nav || !header) return;

  const closeTriggers = nav.querySelectorAll("[data-nav-close]");

  const setOpen = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.toggleAttribute("hidden", !open);
    header.classList.toggle("is-menu-open", open);
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target as Node)) setOpen(false);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

initScrollEffects();
