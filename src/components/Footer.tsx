import { Code2, Github, Linkedin, Instagram } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
const socialLinks = [{
  icon: Github,
  href: "https://github.com/Roushan-Gupta1889",
  label: "GitHub"
}, {
  icon: Linkedin,
  href: "https://www.linkedin.com/in/roushan1889",
  label: "LinkedIn"
}, {
  icon: Instagram,
  href: "https://www.instagram.com/roushan_gupta2341",
  label: "Instagram"
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === "#") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionId = href.replace("#", "");

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${href}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
  return <footer className="border-t border-border/50 py-8 md:py-12">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl accent-gradient flex items-center justify-center">
            <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg md:text-xl text-foreground">
            <span className="text-foreground">Roushan</span>
            <span className="text-primary">Dev</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          {footerLinks.map(link => <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">
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
          © {new Date().getFullYear()} RoushanDev. Built with passion and lots of{" "}
          <span className="text-primary">❤️</span>
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