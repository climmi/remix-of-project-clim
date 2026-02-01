import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Index = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-24">
        {/* Featured Projects */}
        <section className="px-6 md:px-12 lg:px-16 xl:px-24 mb-20 md:mb-28">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-baseline justify-between mb-8">
              <h1 className="text-xs uppercase tracking-widest text-muted-foreground">
                Projects
              </h1>
              <Link
                to="/projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="px-6 md:px-12 lg:px-16 xl:px-24 mb-20 md:mb-28">
          <div className="max-w-6xl mx-auto border-b border-border" />
        </div>

        {/* About Preview */}
        <section className="px-6 md:px-12 lg:px-16 xl:px-24 mb-20 md:mb-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              About
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
              I am Clim Michel, founder of PROJEKT CLIM, a design studio for experimental design, art and spatial objects. PROJEKT CLIM stands for the connection of aesthetic design, craftsmanship precision and innovative production methods.
            </p>
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Read more →
            </Link>
          </div>
        </section>

        <div className="px-6 md:px-12 lg:px-16 xl:px-24 mb-20 md:mb-28">
          <div className="max-w-5xl mx-auto border-b border-border" />
        </div>

        {/* Contact Preview */}
        <section className="px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Contact
            </h2>
            <div className="space-y-8">
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
                  href="https://instagram.com/projectclim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
