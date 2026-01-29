import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const StorePolicy = () => {
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
            Store Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Terms and conditions for products and services by Clim Michel
          </p>
          
          <div className="prose prose-invert max-w-none space-y-10">
            {/* PRODUCTS SECTION */}
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6 pb-2 border-b border-border">
                Products (Made-to-Order)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Production Time
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All products are unique pieces crafted individually upon order. Production times 
                    vary depending on complexity and current workload. Estimated delivery times will 
                    be communicated upon order confirmation. Please note that these are estimates and 
                    may vary due to the handcrafted nature of the work.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Color & Material Variations
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital representations of products may differ from the actual item due to screen 
                    settings and the inherent nature of materials. Natural materials such as wood, 
                    stone, and metal exhibit unique characteristics—grain patterns, color variations, 
                    and textures—that make each piece truly one-of-a-kind.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Shipping
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently, shipping is available within Germany. EU and international shipping 
                    will be available in the future. Shipping costs are calculated based on size, 
                    weight, and destination, and will be communicated before order confirmation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Delivery & Insurance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I recommend inspecting all deliveries upon arrival. Please document any visible 
                    damage to the packaging before opening. All shipments are insured; however, 
                    damage must be reported within 3 days of delivery with photographic evidence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Returns & Right of Withdrawal
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Due to the custom, made-to-order nature of all products, the standard 14-day 
                    right of withdrawal does not apply (§ 312g Abs. 2 Nr. 1 BGB). If you wish to 
                    cancel an order already in production, a refund of 50% of the purchase price 
                    may be issued, minus material costs already incurred.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Complaints & Defects
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any defects or damage must be reported within 3 days of delivery via email 
                    with detailed photographs. I will assess each case individually and work 
                    toward a fair solution, which may include repair, replacement, or partial refund.
                  </p>
                </div>
              </div>
            </section>
            
            {/* SERVICES SECTION */}
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6 pb-2 border-b border-border">
                Services
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Scope of Services
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Services include product design, space planning, construction planning, 
                    visualization, and project realization. The exact scope of each project 
                    is defined individually and confirmed in writing before commencement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Quotations & Contracts
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All services are based on written quotations. A quotation becomes binding 
                    upon written acceptance by the client. Quotations are valid for 30 days 
                    unless otherwise specified.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Payment Terms
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For services, payment is due as follows: 50% upon order confirmation, 
                    50% upon completion. For larger projects, milestone-based payment 
                    schedules may be arranged. All payments are due within 14 days of invoice.
                  </p>
                </div>
              </div>
            </section>
            
            {/* GENERAL SECTION */}
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6 pb-2 border-b border-border">
                General Terms
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Payment Methods
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment is accepted via bank transfer (Überweisung). Payment details 
                    will be provided on the invoice. All prices include applicable VAT 
                    (Kleinunternehmerregelung may apply).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Cancellation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cancellation of orders or service contracts must be made in writing. 
                    Cancellation fees apply based on work already completed and materials 
                    procured. The specific amount will be calculated on a case-by-case basis.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Wholesale & Professional Inquiries
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Architects, interior designers, galleries, and business clients are welcome 
                    to inquire about special terms, bulk orders, or collaboration opportunities. 
                    Please contact me directly at{' '}
                    <a
                      href="mailto:mail@projectclim.com"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      mail@projectclim.com
                    </a>
                    .
                  </p>
                </div>
              </div>
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

export default StorePolicy;
