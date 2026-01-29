import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '@/data/projects';

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Assign sizes for masonry effect - creates visual variety
  const getSizeForIndex = (index: number): 'small' | 'medium' | 'large' => {
    const pattern = [
      'large', 'medium', 'small',
      'medium', 'small', 'large',
      'small', 'large', 'medium',
    ];
    return pattern[index % pattern.length] as 'small' | 'medium' | 'large';
  };

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
      
      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            size={getSizeForIndex(index)}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectGallery;
