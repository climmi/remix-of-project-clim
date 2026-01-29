import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-24">
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h1 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-display">
                Contact
              </h1>
            </motion.div>
            
            {/* Content Grid - 3 columns */}
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {/* Studio Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop"
                    alt="Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors pt-4"
                  >
                    Send Message →
                  </button>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-display">
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
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-display">
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
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-display">
                    Social
                  </p>
                  <a 
                    href="https://instagram.com/projectclim" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
