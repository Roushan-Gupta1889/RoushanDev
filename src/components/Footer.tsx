import { Code2, Github, Linkedin, Twitter } from "lucide-react";
const socialLinks = [{
  icon: Github,
  href: "#",
  label: "GitHub"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}];
const footerLinks = [{
  name: "About",
  href: "#about"
}, {
  name: "Skills",
  href: "#skills"
}, {
  name: "Projects",
  href: "#projects"
}, {
  name: "Contact",
  href: "#contact"
}];
export const Footer = () => {
  return <footer className="border-t border-border/50 py-8 md:py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl accent-gradient flex items-center justify-center">
              <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-foreground">
              <span className="text-foreground">Roushan</span>
              <span className="text-primary">Dev</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">
                {link.name}
              </a>)}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3 md:gap-4">
            {socialLinks.map(social => <a key={social.label} href={social.href} className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200" aria-label={social.label}>
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>)}
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50 text-center space-y-2">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevFolio. Built with passion and lots of{" "}
            <span className="text-primary">☕</span>
          </p>
          <p className="text-xs text-muted-foreground/70">
            Illustrations by{" "}
            <a 
              href="https://storyset.com/work" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-2"
            >
              Storyset
            </a>
          </p>
        </div>
      </div>
    </footer>;
};