import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if pointer is fine (desktop mouse) and reduced motion is not preferred
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    let animationFrameId;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth trailing animation
    const updateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    // Interactive element hover detection
    const handleElementHover = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .interactive-hover');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer Glow Halo */}
      <div
        className="fixed top-0 left-0 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.6 : 1})`,
          width: '36px',
          height: '36px',
          background: isHovering
            ? 'radial-gradient(circle, rgba(0, 242, 254, 0.25) 0%, rgba(99, 102, 241, 0.05) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
          border: isHovering ? '1px solid rgba(0, 242, 254, 0.4)' : '1px solid rgba(255, 255, 255, 0.15)',
        }}
      />

      {/* Center Precise Dot */}
      <div
        className="fixed top-0 left-0 rounded-full transition-transform duration-0 ease-linear"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 0.6 : 1})`,
          width: '6px',
          height: '6px',
          backgroundColor: isHovering ? '#00f2fe' : '#ffffff',
          boxShadow: '0 0 10px #00f2fe',
        }}
      />
    </div>
  );
}
