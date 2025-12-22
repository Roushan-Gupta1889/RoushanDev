import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20 md:pt-0">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow" />
      
      {/* Animated orbs - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container-custom relative z-10 py-8 md:py-12 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                Available for freelance projects
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight mb-3 md:mb-4"
            >
              I Build{" "}
              <span className="text-gradient">Digital Products</span>
              <br />
              That Users Love
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-5 md:mb-6"
            >
              Frontend developer & product builder specializing in creating 
              fast, accessible, and beautifully crafted web experiences 
              that drive results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button size="default" className="font-semibold group w-full sm:w-auto">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="default" variant="outline" className="font-semibold w-full sm:w-auto">
                Download Resume
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border/50 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-lg md:text-xl lg:text-2xl font-display font-bold text-gradient mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-full lg:max-w-sm lg:aspect-square">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              
              {/* Image placeholder */}
              <div className="relative w-full h-full rounded-2xl border-2 border-dashed border-border bg-secondary/30 flex items-center justify-center overflow-hidden">
                <div className="text-center p-4 md:p-6">
                  <div className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Add your hero image here
                  </p>
                  <p className="text-muted-foreground/60 text-[10px] md:text-xs mt-1">
                    Recommended: 500x500px
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
