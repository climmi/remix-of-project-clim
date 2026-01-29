import { motion } from 'framer-motion';
import { Compass, Box, Eye, Wrench, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Product Design',
    description: 'From concept to detailed design, creating unique objects that merge aesthetics with functionality.',
  },
  {
    icon: Box,
    title: 'Space Planning',
    description: 'Thoughtful spatial solutions that enhance how light and materials interact within environments.',
  },
  {
    icon: Lightbulb,
    title: 'Construction',
    description: 'Technical drawings and specifications ready for manufacturing and implementation.',
  },
  {
    icon: Eye,
    title: 'Visualization',
    description: 'Photorealistic 3D renderings and animations that bring concepts to life before production.',
  },
  {
    icon: Wrench,
    title: 'Realization',
    description: 'Complete project execution from prototype development to final production and installation.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-display">
          Services
        </h2>
        <p className="text-3xl md:text-4xl font-display font-semibold text-foreground max-w-2xl">
          End-to-end design and fabrication services
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300"
          >
            <service.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors duration-300 mb-6" />
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
