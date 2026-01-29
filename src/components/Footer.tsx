import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-foreground mb-1">
              PROJECT CLIM
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Clim Michel. All rights reserved.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/legal-notice"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal Notice
            </Link>
            <Link
              to="/store-policy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Store Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
