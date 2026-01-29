import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const lastIndexChangeX = useRef(0);
  const hasMovedRef = useRef(false);

  const imageCount = project.images.length;
  const DRAG_THRESHOLD = 5;
  const IMAGE_SWITCH_DISTANCE = 50;

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    lastIndexChangeX.current = e.clientX;
    hasMovedRef.current = false;
    setShowIndicator(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || imageCount <= 1) return;

    const deltaFromStart = Math.abs(e.clientX - startXRef.current);
    if (deltaFromStart > DRAG_THRESHOLD) {
      hasMovedRef.current = true;
    }

    const deltaFromLastChange = e.clientX - lastIndexChangeX.current;
    
    if (Math.abs(deltaFromLastChange) >= IMAGE_SWITCH_DISTANCE) {
      const direction = deltaFromLastChange > 0 ? 1 : -1;
      setCurrentImageIndex(prev => {
        const newIndex = prev + direction;
        if (newIndex < 0) return imageCount - 1;
        if (newIndex >= imageCount) return 0;
        return newIndex;
      });
      lastIndexChangeX.current = e.clientX;
    }
  }, [isDragging, imageCount]);

  const handleMouseUp = useCallback(() => {
    if (!hasMovedRef.current) {
      onClick();
    }
    setIsDragging(false);
    setShowIndicator(false);
  }, [onClick]);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    setShowIndicator(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    lastIndexChangeX.current = e.touches[0].clientX;
    hasMovedRef.current = false;
    setShowIndicator(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || imageCount <= 1) return;

    const touch = e.touches[0];
    const deltaFromStart = Math.abs(touch.clientX - startXRef.current);
    if (deltaFromStart > DRAG_THRESHOLD) {
      hasMovedRef.current = true;
    }

    const deltaFromLastChange = touch.clientX - lastIndexChangeX.current;
    
    if (Math.abs(deltaFromLastChange) >= IMAGE_SWITCH_DISTANCE) {
      const direction = deltaFromLastChange > 0 ? 1 : -1;
      setCurrentImageIndex(prev => {
        const newIndex = prev + direction;
        if (newIndex < 0) return imageCount - 1;
        if (newIndex >= imageCount) return 0;
        return newIndex;
      });
      lastIndexChangeX.current = touch.clientX;
    }
  }, [isDragging, imageCount]);

  const handleTouchEnd = useCallback(() => {
    if (!hasMovedRef.current) {
      onClick();
    }
    setIsDragging(false);
    setShowIndicator(false);
  }, [onClick]);

  return (
    <motion.article
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="project-card group aspect-[4/5] bg-muted cursor-grab active:cursor-grabbing select-none"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Project image */}
        <div className="absolute inset-0">
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-300"
            draggable={false}
          />
        </div>
        
        {/* Warm light hover effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(
              135deg,
              transparent 0%,
              hsl(45 100% 90% / 0.15) 30%,
              hsl(40 90% 85% / 0.2) 50%,
              hsl(45 100% 90% / 0.15) 70%,
              transparent 100%
            )`,
          }}
        />
        
        {/* Image index indicator */}
        {showIndicator && imageCount > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-3 right-3 px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-display text-foreground"
          >
            {currentImageIndex + 1}/{imageCount}
          </motion.div>
        )}
        
        {/* Title overlay - subtle */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-sm md:text-base font-display font-medium text-foreground">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground">
            {project.category}
          </span>
        </div>

        {/* Drag hint for multiple images */}
        {imageCount > 1 && !isDragging && (
          <div className="absolute bottom-3 left-3 flex gap-1">
            {project.images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1 h-1 rounded-full transition-colors duration-200 ${
                  idx === currentImageIndex ? 'bg-foreground' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
