import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const lastIndexChangeX = useRef(0);
  const hasMovedRef = useRef(false);

  const imageCount = project.images.length;
  const DRAG_THRESHOLD = 5;
  const IMAGE_SWITCH_DISTANCE = 50;

  const handleClick = useCallback(() => {
    navigate(`/project/${project.id}`);
  }, [navigate, project.id]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    lastIndexChangeX.current = e.clientX;
    hasMovedRef.current = false;
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
      handleClick();
    }
    setIsDragging(false);
  }, [handleClick]);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    lastIndexChangeX.current = e.touches[0].clientX;
    hasMovedRef.current = false;
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
      handleClick();
    }
    setIsDragging(false);
  }, [handleClick]);

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
      className="cursor-pointer select-none"
    >
      {/* Project image */}
      <div className="aspect-[4/5] bg-muted overflow-hidden mb-3">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      
      {/* Title and category always visible below image */}
      <div className="space-y-1">
        <h3 className="text-sm font-display font-medium text-foreground">
          {project.title}
        </h3>
        <span className="text-xs text-muted-foreground">
          {project.category}
        </span>
      </div>

      {/* Drag indicator dots */}
      {imageCount > 1 && (
        <div className="flex gap-1 mt-2">
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
    </motion.article>
  );
};

export default ProjectCard;
