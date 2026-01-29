import Header from '@/components/Header';
import WarmLightEffect from '@/components/WarmLightEffect';
import ProjectGallery from '@/components/ProjectGallery';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <WarmLightEffect intensity={1} />
      <Header />
      <main className="relative z-10">
        <ProjectGallery />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
