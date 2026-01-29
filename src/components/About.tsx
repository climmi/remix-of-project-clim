import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-display">
            About
          </h2>
          <p className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-8">
            Bridging traditional craftsmanship with modern technology
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-display">
              Material Expertise
            </h3>
            <p className="text-foreground leading-relaxed">
              Wood, Metal, Glass, Plastics, 3D Printing, Optical Elements
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
