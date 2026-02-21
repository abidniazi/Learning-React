import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom hook for stagger animation on elements
 * @param {string} selector - CSS selector for elements to animate
 * @param {Object} options - Animation options
 */
export const useStaggerAnimation = (selector, options = {}) => {
  const {
    duration = 0.5,
    stagger = 0.1,
    delay = 0,
    fromVars = { opacity: 0, y: 20 },
    toVars = { opacity: 1, y: 0 }
  } = options;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      selector,
      { ...fromVars },
      {
        ...toVars,
        duration,
        stagger,
        delay,
        ease: 'power2.out'
      }
    );

    return () => tl.kill();
  }, [selector, duration, stagger, delay, fromVars, toVars]);
};

/**
 * Custom hook for fade-in animation
 */
export const useFadeInAnimation = (selector, options = {}) => {
  const {
    duration = 0.6,
    delay = 0,
    ease = 'power2.out'
  } = options;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      selector,
      { opacity: 0 },
      {
        opacity: 1,
        duration,
        delay,
        ease
      }
    );

    return () => tl.kill();
  }, [selector, duration, delay, ease]);
};

/**
 * Custom hook for slide-in animation
 */
export const useSlideInAnimation = (selector, direction = 'left', options = {}) => {
  const {
    duration = 0.5,
    delay = 0,
    distance = 30,
    ease = 'power2.out'
  } = options;

  useEffect(() => {
    const tl = gsap.timeline();
    const fromVars = {
      opacity: 0,
      [direction === 'left' ? 'x' : 'y']: direction === 'left' ? -distance : distance
    };

    tl.fromTo(
      selector,
      fromVars,
      {
        opacity: 1,
        [direction === 'left' ? 'x' : 'y']: 0,
        duration,
        delay,
        ease
      }
    );

    return () => tl.kill();
  }, [selector, direction, duration, delay, distance, ease]);
};

/**
 * Custom hook for scale animation
 */
export const useScaleAnimation = (selector, options = {}) => {
  const {
    duration = 0.5,
    delay = 0,
    fromScale = 0.8,
    ease = 'back.out'
  } = options;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      selector,
      { opacity: 0, scale: fromScale },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease
      }
    );

    return () => tl.kill();
  }, [selector, duration, delay, fromScale, ease]);
};

/**
 * Custom hook for hover animation
 */
export const useHoverAnimation = (ref, options = {}) => {
  const {
    scale = 1.05,
    duration = 0.3
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration,
        ease: 'power2.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration,
        ease: 'power2.out'
      });
    };

    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', onMouseEnter);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref, scale, duration]);
};

/**
 * Custom hook for pulse animation
 */
export const usePulseAnimation = (selector, options = {}) => {
  const {
    duration = 1,
    scale = 1.05,
    repeat = -1
  } = options;

  useEffect(() => {
    const tl = gsap.timeline({ repeat });
    tl.to(selector, {
      scale,
      duration,
      ease: 'sine.inOut'
    })
      .to(selector, {
        scale: 1,
        duration,
        ease: 'sine.inOut'
      });

    return () => tl.kill();
  }, [selector, duration, scale, repeat]);
};
