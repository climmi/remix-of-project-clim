import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects, ProjectMedia } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  // Get other projects for "More Projects" section
  const otherProjects = projects.filter(p => p.id !== id).slice(0, 4);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  // Build media array from either media prop or images
  const mediaItems: ProjectMedia[] = project.media || project.images.map(url => ({ type: 'image' as const, url }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-24">
        {/* Back Link */}
        <div className="px-6 md:px-12 lg:px-24 mb-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Link 
                to="/projects" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← All Projects
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Hero Section - Leibal Style */}
        <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Left: Title and Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-end"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-2">
                  {project.title}
                </h1>
                <p className="text-muted-foreground mb-12">
                  by Project Clim
                </p>
                
                {/* Meta Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Category
                    </p>
                    <p className="text-foreground">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Year
                    </p>
                    <p className="text-foreground">{project.year}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Materials
                    </p>
                    <p className="text-foreground">{project.materials.join(', ')}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Techniques
                    </p>
                    <p className="text-foreground">{project.techniques.join(', ')}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Right: Hero Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="aspect-[4/5] bg-muted overflow-hidden">
                  <MediaItem media={mediaItems[0]} title={project.title} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Description */}
        <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl"
            >
              {project.description}
            </motion.p>
          </div>
        </section>
        
        {/* Media Gallery - Various Sizes */}
        <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            {mediaItems.slice(1).map((media, index) => (
              <GalleryMediaItem 
                key={index} 
                media={media} 
                index={index} 
                title={project.title} 
              />
            ))}
          </div>
        </section>
        
        {/* Divider */}
        <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto border-t border-border" />
        </div>
        
        {/* More Projects */}
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-display"
            >
              More Projects
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {otherProjects.map((otherProject, index) => (
                <motion.div
                  key={otherProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/project/${otherProject.id}`} className="block">
                    <div className="aspect-[4/5] bg-muted overflow-hidden mb-3">
                      <img
                        src={otherProject.images[0]}
                        alt={otherProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-display font-medium text-foreground">
                      {otherProject.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {otherProject.category}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Simple media item for hero
const MediaItem = ({ media, title }: { media: ProjectMedia; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });

  useEffect(() => {
    if (media.type === 'video' && videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, media.type]);

  if (media.type === 'video') {
    return (
      <div ref={containerRef} className="w-full h-full">
        <video
          ref={videoRef}
          src={media.url}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <img
      src={media.url}
      alt={title}
      className="w-full h-full object-cover"
    />
  );
};

// Gallery media item with animation
const GalleryMediaItem = ({ media, index, title }: { media: ProjectMedia; index: number; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  useEffect(() => {
    if (media.type === 'video' && videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, media.type]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`${
        index % 3 === 0 
          ? 'w-full' 
          : index % 3 === 1 
            ? 'w-full md:w-2/3 md:ml-auto' 
            : 'w-full md:w-3/4'
      }`}
    >
      <div className="bg-muted overflow-hidden">
        {media.type === 'video' ? (
          <video
            ref={videoRef}
            src={media.url}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          />
        ) : (
          <img
            src={media.url}
            alt={`${title} - Image ${index + 2}`}
            className="w-full h-auto object-cover"
          />
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
