import { useEffect, useRef, useCallback } from 'react';

interface CausticsBackgroundProps {
  className?: string;
  intensity?: number;
}

const CausticsBackground = ({ className = '', intensity = 1 }: CausticsBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = useCallback(() => {
    currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.05);
    currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.05);

    if (containerRef.current) {
      containerRef.current.style.setProperty('--mouse-x', `${currentPos.current.x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${currentPos.current.y}%`);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePos.current.x = ((e.clientX - rect.left) / rect.width) * 100;
        mousePos.current.y = ((e.clientY - rect.top) / rect.height) * 100;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity: intensity }}
    >
      {/* Primary caustics layer */}
      <div 
        className="absolute inset-0 animate-caustics"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 50%),
              hsl(var(--caustics-primary) / 0.12) 0%,
              transparent 50%
            )
          `,
        }}
      />
      
      {/* Secondary caustics layer - offset */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 60% 80% at calc(var(--mouse-x, 50%) + 10%) calc(var(--mouse-y, 50%) - 5%),
              hsl(var(--caustics-secondary) / 0.08) 0%,
              transparent 45%
            )
          `,
          animation: 'caustics 10s ease-in-out infinite reverse',
        }}
      />
      
      {/* Tertiary subtle glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 100% at calc(var(--mouse-x, 50%) - 5%) calc(var(--mouse-y, 50%) + 10%),
              hsl(var(--caustics-tertiary) / 0.05) 0%,
              transparent 60%
            )
          `,
          animation: 'caustics 12s ease-in-out infinite',
        }}
      />

      {/* Ambient gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(
              180deg,
              transparent 0%,
              hsl(var(--background)) 100%
            )
          `,
        }}
      />
    </div>
  );
};

export default CausticsBackground;
