import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(error => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "Thank you for your inquiry. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

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
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-2">{errors.name}</p>
                )}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-2">{errors.email}</p>
                )}
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-2">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-sm uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors font-display disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
      </div>
    </section>
  );
};

export default Contact;
