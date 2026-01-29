import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
              <h1 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-display">
                Projects
              </h1>
              <p className="text-2xl md:text-3xl font-display font-medium text-foreground max-w-2xl">
                Selected work from Project Clim
              </p>
            </motion.div>
            
            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/project/${project.id}`} className="block group">
                    <div className="aspect-[4/5] bg-muted overflow-hidden mb-4">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-display font-medium text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {project.category}
                    </p>
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

export default Projects;
