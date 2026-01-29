import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-start">
      {/* Logo / Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <a href="/" className="font-display text-sm md:text-base font-medium tracking-wide text-foreground hover:text-muted-foreground transition-colors">
          PROJECT CLIM
        </a>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="flex items-center gap-4 md:gap-6"
      >
        <a 
          href="#about" 
          className="font-body text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </a>
        <a 
          href="#contact" 
          className="font-body text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Instagram
        </a>
      </motion.nav>
    </header>
  );
};

export default Header;
