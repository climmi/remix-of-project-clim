import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-display">
            Contact
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-display">
              Email
            </h3>
            <a
              href="mailto:mail@projectclim.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              mail@projectclim.com
            </a>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-display">
              Social
            </h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              Instagram
            </a>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-display">
              Based in
            </h3>
            <p className="text-foreground">Hildesheim, Germany</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
