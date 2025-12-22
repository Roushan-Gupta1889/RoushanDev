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
  return <footer className="border-t border-border/50 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl accent-gradient flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">RoushanDEV<span className="text-primary">DEV</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                {link.name}
              </a>)}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(social => <a key={social.label} href={social.href} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200" aria-label={social.label}>
                <social.icon className="w-5 h-5" />
              </a>)}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevFolio. Built with passion and lots of{" "}
            <span className="text-primary">☕</span>
          </p>
        </div>
      </div>
    </footer>;
};