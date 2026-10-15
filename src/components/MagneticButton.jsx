import { useRef, useEffect } from 'react';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  strength = 0.3,
  maxOffset = 12,
  cursorText = '',
  ariaLabel,
  ...rest
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    // Skip on touch/coarse devices or if reduced motion is preferred
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || prefersReducedMotion) return;

    const handlePointerMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      // Clamp translation to maxOffset
      const boundedX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
      const boundedY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));

      el.style.transition = 'transform 0.1s ease-out';
      el.style.transform = `translate3d(${boundedX}px, ${boundedY}px, 0)`;
    };

    const handlePointerLeave = () => {
      el.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)';
      el.style.transform = 'translate3d(0, 0, 0)';
    };

    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [strength, maxOffset]);

  const commonProps = {
    ref: buttonRef,
    className: `inline-flex items-center justify-center transition-all ${className}`,
    'data-cursor': 'pointer',
    ...(cursorText ? { 'data-cursor-text': cursorText } : {}),
    ...(ariaLabel ? { 'aria-label': ariaLabel } : {}),
    ...rest,
  };

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} {...commonProps}>
      {children}
    </button>
  );
}
