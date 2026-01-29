import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectGallery = () => {
  return (
    <section id="projects" className="section-container pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-display">
          Selected Work
        </p>
      </motion.div>
      
      {/* Simple flexible grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
