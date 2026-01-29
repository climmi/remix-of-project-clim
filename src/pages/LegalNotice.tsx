import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const LegalNotice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
            Legal Notice
          </h1>
          <p className="text-muted-foreground mb-12">
            Information according to § 5 TMG (German Telemedia Act)
          </p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Contact Information
              </h2>
              <address className="not-italic text-muted-foreground leading-relaxed">
                Clim Michel<br />
                Hottelner Weg 52<br />
                31137 Hildesheim<br />
                Germany
              </address>
              <p className="text-muted-foreground mt-4">
                Email:{' '}
                <a
                  href="mailto:mail@projectclim.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  mail@projectclim.com
                </a>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Responsible for Content
              </h2>
              <p className="text-muted-foreground">
                According to § 55 Abs. 2 RStV (German Interstate Broadcasting Treaty):<br />
                Clim Michel<br />
                Address as stated above
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The European Commission provides a platform for online dispute resolution (ODR):{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground mt-4">
                I am not willing or obliged to participate in dispute resolution proceedings 
                before a consumer arbitration board.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Liability for Content
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As a service provider, I am responsible for my own content on these pages 
                according to § 7 Abs. 1 TMG. According to §§ 8 to 10 TMG, however, I am not 
                obligated to monitor transmitted or stored third-party information or to 
                investigate circumstances indicating illegal activity.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Obligations to remove or block the use of information according to general 
                laws remain unaffected. However, liability in this regard is only possible 
                from the time of knowledge of a specific legal violation.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Liability for Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may contain links to external websites. I have no influence on 
                the content of these external websites. Therefore, I cannot accept any liability 
                for this third-party content. The respective provider or operator is always 
                responsible for the content of the linked pages.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Copyright
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The content and works on these pages created by the operator are subject to 
                German copyright law. Reproduction, editing, distribution, and any kind of 
                use beyond the limits of copyright law require the written consent of the 
                respective author or creator.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
