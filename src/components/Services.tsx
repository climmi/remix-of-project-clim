import { motion } from 'framer-motion';

const services = [
  'Product Design',
  'Space Planning',
  'Construction',
  'Visualization',
  'Realization',
];

const Services = () => {
  return (
    <section id="services" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-display">
          Services
        </h2>
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          {services.join(', ')}
        </p>
      </motion.div>
    </section>
  );
};

export default Services;
