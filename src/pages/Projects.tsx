import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-24">
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h1 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Projects
              </h1>
              <p className="text-lg text-foreground max-w-2xl">
                Selected work from Project Clim
              </p>
            </motion.div>
            
            {/* Project Grid - 2 columns for larger images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
