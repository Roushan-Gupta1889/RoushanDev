import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-secondary/50 border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                {/* Abstract code visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-primary/20">
                    {"</>"}
                  </div>
                </div>
              </div>
              
              {/* Floating cards - adjusted position for mobile */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 md:-right-4 top-1/4 glass-card p-2 md:p-3 glow-box"
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Coffee className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  <span className="text-xs md:text-sm font-medium">1000+ coffees</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-2 md:-left-4 bottom-1/4 glass-card p-2 md:p-3 glow-box"
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  <span className="text-xs md:text-sm font-medium">Remote Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 block">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
              Turning Ideas Into
              <br />
              <span className="text-gradient">Exceptional Products</span>
            </h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
              <p>
                I'm a frontend developer with a passion for creating digital experiences 
                that don't just work—they inspire. With over 5 years in the industry, 
                I've helped startups and enterprises alike build products that users genuinely love.
              </p>
              <p>
                My journey started with curiosity about how things work on the web. 
                That curiosity evolved into a career focused on crafting clean code, 
                intuitive interfaces, and performance-optimized applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Based in San Francisco</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
