import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactAnimation } from "./ContactAnimation";

export const CTASection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <ContactAnimation />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left px-2 order-1 lg:order-2"
          >
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 block">
              Let's Connect
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
              Ready to Build Something
              <br />
              <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0">
              I'm always excited to work on new projects and collaborate with passionate teams. 
              Let's discuss how we can create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="default" className="font-semibold group glow-box w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="default" variant="outline" className="font-semibold w-full sm:w-auto">
                Schedule a Call
              </Button>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground mt-6 md:mt-8">
              Or email me directly at{" "}
              <a href="mailto:hello@devfolio.com" className="text-primary hover:underline">
                hello@devfolio.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
