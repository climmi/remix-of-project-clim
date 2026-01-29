import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="project-card group cursor-pointer aspect-[4/5] bg-card border border-border hover:border-muted-foreground/30 transition-all duration-500"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Project image */}
        <div className="absolute inset-0 bg-secondary">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
        </div>
        
        {/* Light reflection overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(
              135deg,
              transparent 0%,
              hsl(var(--foreground) / 0.05) 30%,
              hsl(var(--foreground) / 0.08) 50%,
              hsl(var(--foreground) / 0.05) 70%,
              transparent 100%
            )`,
          }}
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background/90 via-background/20 to-transparent">
          <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-display">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
