import { useEffect, useRef, useCallback } from 'react';

interface WarmLightEffectProps {
  className?: string;
  intensity?: number;
}

const WarmLightEffect = ({ className = '', intensity = 1 }: WarmLightEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = useCallback(() => {
    currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.03);
    currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.03);

    if (containerRef.current) {
      containerRef.current.style.setProperty('--mouse-x', `${currentPos.current.x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${currentPos.current.y}%`);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 100;
      mousePos.current.y = (e.clientY / window.innerHeight) * 100;
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
      className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      style={{ opacity: intensity * 0.7 }}
    >
      {/* Primary warm light */}
      <div 
        className="absolute inset-0 animate-warm-pulse"
        style={{
          background: `
            radial-gradient(
              ellipse 60% 50% at var(--mouse-x, 50%) var(--mouse-y, 50%),
              hsl(45 100% 95% / 0.5) 0%,
              hsl(40 90% 90% / 0.25) 30%,
              transparent 60%
            )
          `,
        }}
      />
      
      {/* Secondary warm accent */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 70% at calc(var(--mouse-x, 50%) + 5%) calc(var(--mouse-y, 50%) + 5%),
              hsl(35 100% 85% / 0.2) 0%,
              transparent 50%
            )
          `,
          animation: 'warm-pulse 6s ease-in-out infinite reverse',
        }}
      />
    </div>
  );
};

export default WarmLightEffect;
