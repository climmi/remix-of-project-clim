import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { exhibitions, cooperations, awards } from '@/data/exhibitions';
import { workshops, teachingExperience, workshopPrograms, workExperience, skills } from '@/data/experience';

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
              <p className="text-base md:text-lg text-foreground italic">
                "As unique as my name is, so is my way of working - not always the same and sometimes everything upside down."
              </p>
            </motion.div>
            
            {/* About Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 md:mb-24"
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am Clim Michel, founder of PROJEKT CLIM, a design studio for experimental design, art and spatial objects. PROJEKT CLIM stands for the connection of aesthetic design, craftsmanship precision and innovative production methods.
                </p>
                <p>
                  The focus is on translating ecological, cultural and social themes into high-quality, functional and sensually experiential products. The portfolio includes furniture, lighting, decorative objects, accessories and temporary spatial concepts.
                </p>
                <p>
                  My passion is to constantly learn something new, whether from person to person, from books or from tutorials. Through comprehensive craftsmanship expertise in wood, metal, ceramics and additive manufacturing, as well as many years of experience in generative design and physical computing, I develop innovative, interactive and functional design concepts.
                </p>
              </div>
            </motion.div>
            
            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  Philosophy
                </h2>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Design</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Creating products brings added value in terms of aesthetics, cultural education and problem-solving functionality on many different levels.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Craftsmanship</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      This means creating objects and prototypes with care, examining them and changing them with your own hands. Each time something unique is created.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Interpersonal</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Interpersonal relationships are an important part of the work. You never work alone but always in exchange within a network.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  Work Experience
                </h2>
                <div className="border-t border-border/50">
                  {workExperience.map((exp) => (
                    <div 
                      key={exp.id}
                      className="py-3 border-b border-border/50"
                    >
                      <div className="flex justify-between items-baseline gap-4">
                        <span className="text-foreground">{exp.title}</span>
                        <span className="text-muted-foreground text-sm whitespace-nowrap">
                          {exp.year}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm block">
                        {exp.company}
                      </span>
                    </div>
                  ))}
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
                  Competencies
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
                  Teaching & Workshops
                </h2>
                
                {/* Teaching */}
                <div className="mb-8">
                  <h3 className="text-sm text-foreground mb-4">Teaching Experience</h3>
                  <div className="border-t border-border/50">
                    {teachingExperience.map((exp) => (
                      <div 
                        key={exp.id}
                        className="py-3 border-b border-border/50"
                      >
                        <div className="flex justify-between items-baseline gap-4">
                          <span className="text-foreground">{exp.title}</span>
                          <span className="text-muted-foreground text-sm whitespace-nowrap">
                            {exp.year}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-sm block">
                          {exp.organization} {exp.duration && `(${exp.duration})`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Workshops */}
                <div className="mb-8">
                  <h3 className="text-sm text-foreground mb-4">Workshops</h3>
                  <div className="border-t border-border/50">
                    {workshops.map((workshop) => (
                      <div 
                        key={workshop.id}
                        className="py-3 border-b border-border/50"
                      >
                        <div className="flex justify-between items-baseline gap-4">
                          <span className="text-foreground">{workshop.title}</span>
                          <span className="text-muted-foreground text-sm whitespace-nowrap">
                            {workshop.year}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-sm block">
                          {workshop.organization}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Workshop Programs */}
                <div>
                  <h3 className="text-sm text-foreground mb-4">Workshop Management (Freie Werkstatt)</h3>
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
            
            {/* Exhibitions & Cooperations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  Exhibitions & Cooperations
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
                              className="py-3 border-b border-border/50"
                            >
                              <div className="flex justify-between items-baseline gap-4">
                                <span className="text-foreground">{exhibition.title}</span>
                                <span className="text-muted-foreground text-sm whitespace-nowrap">
                                  {exhibition.date}
                                </span>
                              </div>
                              <span className="text-muted-foreground text-sm block">
                                {exhibition.venue}, {exhibition.location}
                              </span>
                            </div>
                          ))}
                        </div>
                    </div>
                  ))}
                </div>
                
                {/* Cooperations */}
                <div>
                  <h3 className="text-sm text-foreground mb-4">Cooperations</h3>
                  <div className="border-t border-border/50">
                    {cooperations.map((item) => (
                      <div 
                        key={item.id}
                        className="py-3 border-b border-border/50"
                      >
                        <div className="flex justify-between items-baseline gap-4">
                          <span className="text-foreground">{item.name}</span>
                          <span className="text-muted-foreground text-sm whitespace-nowrap">
                            {item.year}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-sm block">
                          {item.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="border-t border-border pt-8 md:pt-12">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  Awards
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
