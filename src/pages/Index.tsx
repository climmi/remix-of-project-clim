import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-24">
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Project Grid - 2 columns for larger images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
