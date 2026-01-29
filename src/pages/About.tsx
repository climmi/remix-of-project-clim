import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  'Product Design',
  'Space Planning',
  'Construction',
  'Visualization',
  'Realization',
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-24">
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <h1 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-display">
                About
              </h1>
              <p className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                Bridging traditional craftsmanship with modern technology
              </p>
            </motion.div>
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      I create objects and installations that explore the interplay between light, 
                      material, and form. Each piece is conceived as a dialogue between contemporary 
                      digital fabrication methods and time-honored handcraft techniques.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      My work often incorporates optical elements—lenses, prisms, and reflective 
                      surfaces—that transform everyday interactions with light into moments of 
                      unexpected beauty. The resulting caustic patterns and refractions become 
                      an integral part of the design language.
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      The studio practice spans from conceptual development through to final 
                      realization, maintaining direct involvement at every stage. This hands-on 
                      approach ensures that the integrity of the original vision is preserved 
                      while allowing for the happy accidents that arise during making.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Material Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-display">
                  Material Expertise
                </h2>
                <p className="text-foreground text-lg">
                  Wood, Metal, Glass, Plastics, 3D Printing, Optical Elements
                </p>
              </div>
            </motion.div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-display">
                  Services
                </h2>
                <p className="text-foreground text-lg">
                  {services.join(', ')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
