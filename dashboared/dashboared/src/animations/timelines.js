import gsap from 'gsap';

/**
 * Create staggered card animation timeline
 */
export const createCardStaggerTimeline = (selector) => {
  const tl = gsap.timeline();
  tl.fromTo(
    selector,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }
  );
  return tl;
};

/**
 * Create page transition timeline
 */
export const createPageTransition = (exitElement, enterElement) => {
  const tl = gsap.timeline();

  if (exitElement) {
    tl.to(exitElement, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    }, 0);
  }

  tl.fromTo(
    enterElement,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    },
    exitElement ? 0.3 : 0
  );

  return tl;
};

/**
 * Create form input animation
 */
export const createFormAnimation = (selector) => {
  const tl = gsap.timeline();
  tl.fromTo(
    selector,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.out'
    }
  );
  return tl;
};

/**
 * Create table row animation
 */
export const createTableRowAnimation = (selector) => {
  const tl = gsap.timeline();
  tl.fromTo(
    selector,
    { opacity: 0, x: -20 },
    {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: 'power2.out'
    }
  );
  return tl;
};

/**
 * Create number counter animation
 */
export const animateCounter = (element, startValue, endValue, duration = 1) => {
  const obj = { value: startValue };
  gsap.to(obj, {
    value: endValue,
    duration,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString();
    },
    ease: 'power2.out'
  });
};

/**
 * Create button press animation
 */
export const createButtonPressAnimation = (element) => {
  gsap.timeline()
    .to(element, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.in'
    })
    .to(element, {
      scale: 1,
      duration: 0.1,
      ease: 'power2.out'
    });
};

/**
 * Create bounce animation
 */
export const createBounceAnimation = (selector) => {
  const tl = gsap.timeline();
  tl.fromTo(
    selector,
    { opacity: 0, y: -30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out'
    }
  );
  return tl;
};

/**
 * Create smooth scroll animation for stats
 */
export const createStatsAnimation = (selector) => {
  const tl = gsap.timeline();
  tl.fromTo(
    selector,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.15,
      ease: 'power2.out'
    }
  );
  return tl;
};
