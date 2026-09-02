/**
 * 11 Secrets de Beauté — Script d'interactivité & Animations GSAP
 * Optimisé mobile-first, respectueux du touch scroll et sans blocage.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Barre de progression & Header Scrolled
  const nav = document.getElementById('navbar');
  const progressBar = document.getElementById('progressBar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    if (nav) {
      if (scrollY > 30) {
        nav.classList.add('bg-[#FCF9F3]/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-[#E4D9C7]');
      } else {
        nav.classList.remove('bg-[#FCF9F3]/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-[#E4D9C7]');
      }
    }

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Menu mobile toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Animations GSAP (Amélioration progressive)
  if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero Reveal Animation
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('#navbar', { y: -30, opacity: 0, duration: 0.8 })
    .from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero-title-line', { y: 40, opacity: 0, duration: 0.9, stagger: 0.15 }, '-=0.3')
    .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero-actions', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero-img-container', { scale: 0.95, opacity: 0, duration: 1.1, ease: 'power2.out' }, '-=0.7')
    .from('.seal-container', { scale: 0.6, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6');

  // Generic Reveal Elements
  gsap.utils.toArray('[data-gsap="fade-up"]').forEach(el => {
    gsap.from(el, {
      y: 35,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Staggered Cards (Services, Steps, Tarifs)
  gsap.utils.toArray('[data-gsap-group]').forEach(group => {
    const items = group.querySelectorAll('[data-gsap-item]');
    if (!items.length) return;

    gsap.from(items, {
      y: 40,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Animated Numbers / Counters
  gsap.utils.toArray('[data-count-target]').forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-count-target'));
    const state = { value: 0 };

    gsap.to(state, {
      value: target,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%',
        once: true
      },
      onUpdate: () => {
        counter.textContent = Math.round(state.value);
      }
    });
  });

  // Decorative Lines Reveal
  gsap.utils.toArray('[data-line-reveal]').forEach(line => {
    gsap.from(line, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: line,
        start: 'top 90%'
      }
    });
  });
});
