import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Information about data processing according to GDPR (Datenschutz-Grundverordnung)
          </p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                1. Data Controller
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The data controller responsible for data processing on this website is:
              </p>
              <address className="not-italic text-muted-foreground mt-4 leading-relaxed">
                Clim Michel<br />
                Hottelner Weg 52<br />
                31137 Hildesheim<br />
                Germany<br />
                Email:{' '}
                <a
                  href="mailto:mail@projectclim.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  mail@projectclim.com
                </a>
              </address>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                2. Contact Form
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you use the contact form on this website, the following data is collected:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                <strong className="text-foreground">Purpose:</strong> This data is used 
                exclusively to respond to your inquiry and process potential orders or 
                project requests.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                <strong className="text-foreground">Legal basis:</strong> Art. 6 Abs. 1 
                lit. b DSGVO (performance of a contract or pre-contractual measures).
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                <strong className="text-foreground">Retention period:</strong> Your data 
                will be deleted once your inquiry has been conclusively processed, unless 
                longer retention is required for contractual or legal reasons.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                3. Orders & Contracts
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you place an order or commission services, additional data may be 
                collected as necessary for contract fulfillment, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
                <li>Full name and address (for shipping and invoicing)</li>
                <li>Phone number (for delivery coordination)</li>
                <li>Payment information</li>
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                <strong className="text-foreground">Legal basis:</strong> Art. 6 Abs. 1 
                lit. b DSGVO (contract fulfillment).
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                <strong className="text-foreground">Retention period:</strong> Contract and 
                invoice data is retained for 10 years as required by German tax law 
                (§ 147 AO, § 14b UStG).
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                4. Social Media Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website contains links to external social media platforms (e.g., Instagram). 
                These are simple hyperlinks—no data is transmitted to these platforms until 
                you actively click the link. Once you visit an external platform, their 
                privacy policy applies.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                5. Hosting
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is hosted by a third-party provider. The hosting provider 
                may collect and store server log files, which may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
                <li>IP address</li>
                <li>Date and time of access</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URL</li>
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                <strong className="text-foreground">Legal basis:</strong> Art. 6 Abs. 1 
                lit. f DSGVO (legitimate interest in ensuring website security and functionality).
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                6. Cookies & Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website does not use cookies for tracking or analytics purposes. 
                No third-party tracking tools (such as Google Analytics) are implemented. 
                Therefore, no cookie consent banner is required.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Under the GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li><strong className="text-foreground">Right of access</strong> (Art. 15 DSGVO)</li>
                <li><strong className="text-foreground">Right to rectification</strong> (Art. 16 DSGVO)</li>
                <li><strong className="text-foreground">Right to erasure</strong> (Art. 17 DSGVO)</li>
                <li><strong className="text-foreground">Right to restriction of processing</strong> (Art. 18 DSGVO)</li>
                <li><strong className="text-foreground">Right to data portability</strong> (Art. 20 DSGVO)</li>
                <li><strong className="text-foreground">Right to object</strong> (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                To exercise these rights, please contact me at{' '}
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
                8. Right to Complain
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you believe that the processing of your personal data violates data 
                protection regulations, you have the right to lodge a complaint with a 
                supervisory authority (Art. 77 DSGVO). The competent authority for 
                Lower Saxony is:
              </p>
              <address className="not-italic text-muted-foreground mt-4 leading-relaxed">
                Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
                Prinzenstraße 5<br />
                30159 Hannover<br />
                Website: lfd.niedersachsen.de
              </address>
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

export default Privacy;
