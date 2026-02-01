import { motion } from 'framer-motion';
import { exhibitions, cooperations, awards } from '@/data/exhibitions';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Exhibitions = () => {
  // Group exhibitions by year
  const exhibitionsByYear = exhibitions.reduce((acc, ex) => {
    if (!acc[ex.year]) acc[ex.year] = [];
    acc[ex.year].push(ex);
    return acc;
  }, {} as Record<string, typeof exhibitions>);

  const years = Object.keys(exhibitionsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-24">
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
                Ausstellungen & Kooperationen
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Ausgewählte Ausstellungen, Kooperationen und Auszeichnungen.
              </p>
            </motion.div>
            
            {/* Exhibitions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-display">
                Ausstellungen
              </h2>
              
              <div className="space-y-12">
                {years.map(year => (
                  <div key={year}>
                    <h3 className="text-sm font-display font-medium text-foreground mb-6 pb-2 border-b border-border">
                      {year}
                    </h3>
                    <div className="space-y-6">
                      {exhibitionsByYear[year].map((exhibition, index) => (
                        <motion.div
                          key={exhibition.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8"
                        >
                          <div>
                            <p className="text-foreground font-display">
                              {exhibition.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {exhibition.venue}, {exhibition.location}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground md:text-right">
                            {exhibition.date}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Divider */}
            <div className="border-t border-border mb-16 md:mb-24" />
            
            {/* Cooperations Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-display">
                Kooperationen
              </h2>
              
              <div className="space-y-8">
                {cooperations.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8">
                      <div>
                        <p className="text-foreground font-display">
                          {item.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.role}
                        </p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground md:text-right">
                        {item.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Divider */}
            <div className="border-t border-border mb-16 md:mb-24" />
            
            {/* Awards Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-display">
                Auszeichnungen
              </h2>
              
              <div className="space-y-8">
                {awards.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8">
                      <div>
                        <p className="text-foreground font-display">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.organization}
                        </p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground md:text-right">
                        {item.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Exhibitions;
