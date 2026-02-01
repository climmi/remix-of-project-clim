import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-24">
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h1 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Contact
              </h1>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </p>
                <a 
                  href="mailto:mail@projectclim.com" 
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  mail@projectclim.com
                </a>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Address
                </p>
                <p className="text-foreground">
                  Clim Michel<br />
                  Hottelner Weg 52<br />
                  31137 Hildesheim<br />
                  Germany
                </p>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Social
                </p>
                <a 
                  href="https://instagram.com/project_clim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
