import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#about", active: false },
  { name: "Skills", href: "#skills", active: false },
  { name: "Projects", href: "#projects", active: false },
  { name: "Contact", href: "#contact", active: false },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center">
            <Code2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Coder Army
          </span>
        </a>

        {/* Desktop Nav - Centered Pill Container */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 bg-card/80 backdrop-blur-xl border border-border/50 rounded-full px-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeLink === link.name
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <Button 
            variant="default" 
            className="rounded-full px-6 font-semibold gap-2"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-card mt-2 mx-4 rounded-2xl p-6"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeLink === link.name
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="w-full mt-4 rounded-full font-semibold gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
