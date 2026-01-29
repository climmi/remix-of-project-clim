import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const Terms = () => {
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
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground mb-12">
            General terms of use for the PROJECT CLIM website
          </p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                1. Scope
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions govern the use of the website projectclim.com 
                operated by Clim Michel. By accessing and using this website, you accept 
                and agree to be bound by these terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                2. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website—including but not limited to images, photographs, 
                designs, text, graphics, and logos—is the property of Clim Michel and is 
                protected by German and international copyright laws.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works from, 
                publicly display, or in any way exploit any content from this website 
                without prior written permission.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                3. Use of Images
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All product and project photographs displayed on this website are protected 
                by copyright. Any use of these images—including downloading, sharing, or 
                republishing—requires explicit written consent. Requests may be directed to{' '}
                <a
                  href="mailto:mail@projectclim.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  mail@projectclim.com
                </a>
                .
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                4. Accuracy of Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While I strive to ensure all information on this website is accurate and 
                up-to-date, I make no warranties or representations regarding the completeness, 
                accuracy, or reliability of any content. Information is subject to change 
                without notice.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                5. External Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may contain links to external websites that are not operated 
                by me. I have no control over the content and practices of these sites and 
                cannot accept responsibility for their respective privacy policies or content.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The use of this website is at your own risk. To the fullest extent permitted 
                by law, I exclude all liability for any loss or damage arising from the use 
                of this website or reliance on any information provided.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                7. Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I reserve the right to modify these terms at any time. Changes will be 
                effective immediately upon posting to this website. Continued use of the 
                website after any changes constitutes acceptance of the new terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                8. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by and construed in accordance with the laws of 
                the Federal Republic of Germany. Any disputes arising from the use of this 
                website shall be subject to the exclusive jurisdiction of the courts of 
                Hildesheim, Germany.
              </p>
            </section>
            
            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
