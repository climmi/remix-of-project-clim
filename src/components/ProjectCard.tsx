import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Project, ProjectMedia } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

const aspectRatioClasses = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[16/9]',
  wide: 'aspect-[21/9]',
};

const ProjectCard = ({ project, index, className = '' }: ProjectCardProps) => {
  const navigate = useNavigate();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startXRef = useRef(0);
  const lastIndexChangeX = useRef(0);
  const hasMovedRef = useRef(false);
  
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  // Build media array from either media prop or images
  const mediaItems: ProjectMedia[] = project.media || project.images.map(url => ({ type: 'image' as const, url }));
  const mediaCount = mediaItems.length;
  
  const DRAG_THRESHOLD = 5;
  const IMAGE_SWITCH_DISTANCE = 50;

  const currentMedia = mediaItems[currentMediaIndex];
  const aspectClass = aspectRatioClasses[project.displayFormat || 'portrait'];

  // Handle video autoplay based on viewport visibility
  useEffect(() => {
    if (currentMedia?.type === 'video' && videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, currentMedia]);

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
    if (!isDragging || mediaCount <= 1) return;

    const deltaFromStart = Math.abs(e.clientX - startXRef.current);
    if (deltaFromStart > DRAG_THRESHOLD) {
      hasMovedRef.current = true;
    }

    const deltaFromLastChange = e.clientX - lastIndexChangeX.current;
    
    if (Math.abs(deltaFromLastChange) >= IMAGE_SWITCH_DISTANCE) {
      const direction = deltaFromLastChange > 0 ? 1 : -1;
      setCurrentMediaIndex(prev => {
        const newIndex = prev + direction;
        if (newIndex < 0) return mediaCount - 1;
        if (newIndex >= mediaCount) return 0;
        return newIndex;
      });
      lastIndexChangeX.current = e.clientX;
    }
  }, [isDragging, mediaCount]);

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
    if (!isDragging || mediaCount <= 1) return;

    const touch = e.touches[0];
    const deltaFromStart = Math.abs(touch.clientX - startXRef.current);
    if (deltaFromStart > DRAG_THRESHOLD) {
      hasMovedRef.current = true;
    }

    const deltaFromLastChange = touch.clientX - lastIndexChangeX.current;
    
    if (Math.abs(deltaFromLastChange) >= IMAGE_SWITCH_DISTANCE) {
      const direction = deltaFromLastChange > 0 ? 1 : -1;
      setCurrentMediaIndex(prev => {
        const newIndex = prev + direction;
        if (newIndex < 0) return mediaCount - 1;
        if (newIndex >= mediaCount) return 0;
        return newIndex;
      });
      lastIndexChangeX.current = touch.clientX;
    }
  }, [isDragging, mediaCount]);

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
      className={`cursor-pointer select-none ${className}`}
    >
      {/* Project media - dynamic aspect ratio */}
      <div className={`${aspectClass} bg-muted overflow-hidden mb-4`}>
        {currentMedia.type === 'video' ? (
          <video
            ref={videoRef}
            src={currentMedia.url}
            poster={currentMedia.poster}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <img
            src={currentMedia.url}
            alt={project.title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        )}
      </div>
      
      {/* Date and category - Leibal style */}
      <div className="space-y-1 mb-2">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {project.month} {project.year}
        </p>
        <p className="text-xs uppercase tracking-widest text-muted-foreground/60">
          {project.category}
        </p>
      </div>
      
      {/* Title */}
      <h3 className="text-sm text-foreground">
        {project.title}
      </h3>

      {/* Drag indicator dots */}
      {mediaCount > 1 && (
        <div className="flex gap-1 mt-3">
          {mediaItems.map((_, idx) => (
            <div
              key={idx}
              className={`w-1 h-1 rounded-full transition-colors duration-200 ${
                idx === currentMediaIndex ? 'bg-foreground' : 'bg-foreground/30'
              }`}
            />
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default ProjectCard;
