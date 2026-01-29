import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { exhibitions, pressItems } from '@/data/exhibitions';

const services = [
  'Product Design',
  'Space Planning',
  'Construction',
  'Visualization',
  'Realization',
];

const About = () => {
  // Group exhibitions by year
  const exhibitionsByYear = exhibitions.reduce((acc, exhibition) => {
    if (!acc[exhibition.year]) {
      acc[exhibition.year] = [];
    }
    acc[exhibition.year].push(exhibition);
    return acc;
  }, {} as Record<string, typeof exhibitions>);

  const years = Object.keys(exhibitionsByYear).sort((a, b) => parseInt(b) - parseInt(a));

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
              className="mb-12 md:mb-16"
            >
              <h1 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                About
              </h1>
            </motion.div>
            
            {/* Portrait/Studio Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 md:mb-16"
            >
              <div className="aspect-[3/2] md:aspect-[16/9] bg-muted overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=675&fit=crop"
                  alt="Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-12 md:mb-16"
            >
              <p className="text-lg md:text-xl text-foreground">
                Bridging traditional craftsmanship with modern technology
              </p>
            </motion.div>
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  Material Expertise
                </h2>
                <p className="text-foreground">
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
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  Services
                </h2>
                <p className="text-foreground">
                  {services.join(', ')}
                </p>
              </div>
            </motion.div>
            
            {/* Exhibitions & Press */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  Exhibitions & Press
                </h2>
                
                {/* Exhibitions by Year */}
                <div className="space-y-12">
                  {years.map(year => (
                    <div key={year}>
                      <h3 className="text-sm text-foreground mb-4">{year}</h3>
                      <div className="border-t border-border/50">
                        {exhibitionsByYear[year].map((exhibition) => (
                          <div 
                            key={exhibition.id}
                            className="py-3 border-b border-border/50 flex flex-col md:flex-row md:justify-between md:items-baseline gap-1"
                          >
                            <span className="text-foreground">
                              {exhibition.title} — {exhibition.venue}, {exhibition.location}
                            </span>
                            <span className="text-muted-foreground text-sm">
                              {exhibition.date}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Press */}
                <div className="mt-12">
                  <h3 className="text-sm text-foreground mb-4">Press</h3>
                  <div className="border-t border-border/50">
                    {pressItems.map((item) => (
                      <div 
                        key={item.id}
                        className="py-3 border-b border-border/50 flex flex-col md:flex-row md:justify-between md:items-baseline gap-1"
                      >
                        {item.url ? (
                          <a 
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-muted-foreground transition-colors"
                          >
                            {item.title} — {item.publication}
                          </a>
                        ) : (
                          <span className="text-foreground">
                            {item.title} — {item.publication}
                          </span>
                        )}
                        <span className="text-muted-foreground text-sm">
                          {item.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
