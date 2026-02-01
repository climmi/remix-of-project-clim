import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { exhibitions, cooperations, awards } from '@/data/exhibitions';
import { workshops, teachingExperience, workshopPrograms, skills } from '@/data/experience';

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
                Über mich
              </h1>
            </motion.div>
            
            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 md:mb-16"
            >
              <div className="aspect-[3/2] md:aspect-[16/9] bg-muted overflow-hidden">
                <img
                  src="/images/about/portrait.jpg"
                  alt="Clim Michel"
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
                So besonders wie mein Name ist auch meine Art zu arbeiten - Nicht immer gleich und auch manchmal alles umgekehrt.
              </p>
            </motion.div>
            
            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Design</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Das Schaffen von Produkten bringt auf den verschiedensten Ebenen einen Mehrwert an Ästhetik, kultureller Bildung und problemlösender Funktionalität.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Handwerk</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Das bedeutet mit einer Sorgfalt Objekte und Prototypen zu erschaffen, diese zu begutachten und mit den eigenen Händen zu verändern. Dabei wird jedes mal etwas einzigartiges erschaffen.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Zwischenmenschlich</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Die zwischenmenschlichen Beziehungen machen letztlich einen wichtigen Teil der Arbeit aus. Man arbeitet nie alleine sondern immer im Austausch innerhalb eines Netzwerks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Kompetenzen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  Kompetenzen
                </h2>
                <p className="text-foreground">
                  {skills.competencies.join(', ')}
                </p>
              </div>
            </motion.div>
            
            {/* Software */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  Software
                </h2>
                <p className="text-foreground">
                  {skills.software.join(', ')}
                </p>
              </div>
            </motion.div>
            
            {/* Workshops & Lehrerfahrung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  Workshops & Lehrerfahrung
                </h2>
                
                {/* Workshops */}
                <div className="mb-8">
                  <h3 className="text-sm text-foreground mb-4">Workshops</h3>
                  <div className="border-t border-border/50">
                    {workshops.map((workshop) => (
                      <div 
                        key={workshop.id}
                        className="py-3 border-b border-border/50 flex flex-col md:flex-row md:justify-between md:items-baseline gap-1"
                      >
                        <span className="text-foreground">
                          {workshop.title} — {workshop.organization}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {workshop.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Teaching */}
                <div className="mb-8">
                  <h3 className="text-sm text-foreground mb-4">Lehrerfahrung</h3>
                  <div className="border-t border-border/50">
                    {teachingExperience.map((exp) => (
                      <div 
                        key={exp.id}
                        className="py-3 border-b border-border/50 flex flex-col md:flex-row md:justify-between md:items-baseline gap-1"
                      >
                        <span className="text-foreground">
                          {exp.title} — {exp.organization} {exp.duration && `(${exp.duration})`}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {exp.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Workshop Programs */}
                <div>
                  <h3 className="text-sm text-foreground mb-4">Werkstattleitung (Freie Werkstatt)</h3>
                  <div className="border-t border-border/50">
                    {workshopPrograms.slice(0, 6).map((program) => (
                      <div 
                        key={program.id}
                        className="py-3 border-b border-border/50 flex flex-col md:flex-row md:justify-between md:items-baseline gap-1"
                      >
                        <span className="text-foreground">
                          {program.name}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {program.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Ausstellungen & Kooperationen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  Ausstellungen & Kooperationen
                </h2>
                
                {/* Exhibitions by Year */}
                <div className="space-y-12 mb-12">
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
                
                {/* Cooperations */}
                <div>
                  <h3 className="text-sm text-foreground mb-4">Kooperationen</h3>
                  <div className="border-t border-border/50">
                    {cooperations.map((item) => (
                      <div 
                        key={item.id}
                        className="py-3 border-b border-border/50 flex flex-col md:flex-row md:justify-between md:items-baseline gap-1"
                      >
                        <span className="text-foreground">
                          {item.name} — {item.role}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {item.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Auszeichnungen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  Auszeichnungen
                </h2>
                <div className="border-t border-border/50">
                  {awards.map((award) => (
                    <div 
                      key={award.id}
                      className="py-3 border-b border-border/50 flex flex-col md:flex-row md:justify-between md:items-baseline gap-1"
                    >
                      <span className="text-foreground">
                        {award.title} — {award.organization} {award.description && `(${award.description})`}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {award.year}
                      </span>
                    </div>
                  ))}
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
