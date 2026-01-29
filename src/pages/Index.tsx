import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  // Show all projects on homepage
  const allProjects = projects;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32">
        {/* Projects Teaser */}
        <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-display">
                Projects
              </h2>
            </motion.div>
            
            {/* Project Grid - 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {allProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/project/${project.id}`} className="block">
                    <div className="aspect-[4/5] bg-muted overflow-hidden mb-3">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-display font-medium text-foreground">
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
        
        {/* Divider */}
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto border-t border-border" />
        </div>
        
        {/* About Teaser */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-display">
                About
              </h2>
              <p className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">
                Bridging traditional craftsmanship with modern technology
              </p>
              <Link 
                to="/about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn more →
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Divider */}
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto border-t border-border" />
        </div>
        
        {/* Contact Teaser */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-display">
                Contact
              </h2>
              <div className="mb-6">
                <p className="text-foreground mb-1">mail@projectclim.com</p>
                <p className="text-muted-foreground">Hildesheim, Germany</p>
              </div>
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
