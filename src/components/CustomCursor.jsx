import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const canvasRef = useRef(null);

  const [isSupported, setIsSupported] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices and when reduced motion is not requested
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || prefersReducedMotion) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    const particles = [];
    const MAX_PARTICLES = 12;

    let animId;
    let canvas = canvasRef.current;
    let ctx = canvas ? canvas.getContext('2d') : null;

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const handlePointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Add a fading trail particle
      if (particles.length < MAX_PARTICLES) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          radius: 4,
          alpha: 0.6,
        });
      }

      // Check for contextual cursor labels and interactive hover
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const interactiveEl = target ? target.closest('a, button, [role="button"], input, textarea, [data-cursor]') : null;
      
      if (interactiveEl) {
        setIsHovered(true);
        const labelText = interactiveEl.getAttribute('data-cursor-text') || '';
        setCursorLabel(labelText);
      } else {
        setIsHovered(false);
        setCursorLabel('');
      }
    };

    const handlePointerLeave = () => {
      mouse.x = -100;
      mouse.y = -100;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    // High performance render loop via requestAnimationFrame (Zero React re-renders for coordinates)
    const render = () => {
      // 1. Direct Dot Position Update
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }

      // 2. Smooth Interpolated Ring Position Update (Lerp 0.16)
      ring.x += (mouse.x - ring.x) * 0.16;
      ring.y += (mouse.y - ring.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      // 3. Render subtle fading trail particles
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.alpha -= 0.035;
          p.radius *= 0.94;

          if (p.alpha <= 0 || p.radius <= 0.5) {
            particles.splice(i, 1);
            i--;
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha * 0.4})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isSupported) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Canvas for fading trail particles */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-40"
      />

      {/* Smooth outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-200 ease-out flex items-center justify-center"
        style={{
          width: cursorLabel ? '84px' : isHovered ? '50px' : '34px',
          height: cursorLabel ? '34px' : isHovered ? '50px' : '34px',
          borderRadius: cursorLabel ? '17px' : '50%',
          backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.14)' : 'rgba(99, 102, 241, 0.08)',
          border: '1.5px solid rgba(99, 102, 241, 0.45)',
          backdropFilter: 'blur(3px)',
          boxShadow: '0 4px 14px rgba(99, 102, 241, 0.18)',
        }}
      >
        {cursorLabel && (
          <span className="text-[11px] font-sans font-semibold tracking-wide text-indigo-900 px-2 select-none whitespace-nowrap">
            {cursorLabel}
          </span>
        )}
      </div>

      {/* Center precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.8)]"
      />
    </div>
  );
}
