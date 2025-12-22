import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Build Something
            <br />
            <span className="text-gradient">Extraordinary?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            I'm always excited to work on new projects and collaborate with passionate teams. 
            Let's discuss how we can create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold group glow-box">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Schedule a Call
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Or email me directly at{" "}
            <a href="mailto:hello@devfolio.com" className="text-primary hover:underline">
              hello@devfolio.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
