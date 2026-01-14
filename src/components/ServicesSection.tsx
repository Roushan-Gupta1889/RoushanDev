import { motion } from "framer-motion";
import { Code, Palette, Zap, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Engineering",
    description: "Building robust, scalable web applications with React, TypeScript, and modern tooling.",
  },
  {
    icon: Palette,
    title: "UI & UX Design",
    description: "Creating intuitive interfaces that balance aesthetics with usability and accessibility.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring lightning-fast load times and smooth interactions across all devices.",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description: "Translating business goals into technical solutions that drive measurable results.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Building Products That
            <br />
            <span className="text-gradient">Make an Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to deployment, I help businesses create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
