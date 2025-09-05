import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              Dhruv Johri
            </h3>
            <p className="text-muted-foreground">Software Development Engineer</p>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/dhruvjohri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhruv-johri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:johridhruv24@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© {currentYear} Dhruv Johri. Made with</span>
            <Heart size={16} className="text-primary animate-pulse" />
            <span>and lots of ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;