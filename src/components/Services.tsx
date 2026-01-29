import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Product Design',
    description: 'From concept to detailed design, creating unique objects that merge aesthetics with functionality.',
  },
  {
    number: '02',
    title: 'Space Planning',
    description: 'Thoughtful spatial solutions that enhance how light and materials interact within environments.',
  },
  {
    number: '03',
    title: 'Construction',
    description: 'Technical drawings and specifications ready for manufacturing and implementation.',
  },
  {
    number: '04',
    title: 'Visualization',
    description: 'Photorealistic 3D renderings and animations that bring concepts to life before production.',
  },
  {
    number: '05',
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
      
      <div className="max-w-3xl space-y-12">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="grid grid-cols-[auto_1fr] gap-6 md:gap-8"
          >
            <span className="text-sm text-muted-foreground font-display pt-1">
              {service.number}
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-display font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
