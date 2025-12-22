import { motion } from "framer-motion";
import { Users, Star, Award, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Community Members",
    description: "Developers reached through tutorials and mentoring",
  },
  {
    icon: Star,
    value: "500+",
    label: "GitHub Stars",
    description: "Across open source contributions",
  },
  {
    icon: Award,
    value: "15+",
    label: "Certifications",
    description: "Professional certifications earned",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Articles Written",
    description: "Technical blog posts and tutorials",
  },
];

export const ImpactSection = () => {
  return (
    <section className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 block">
            Community Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            Building & <span className="text-gradient">Sharing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg px-4 md:px-0">
            Beyond client work, I'm passionate about giving back to the developer community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-4 md:p-6 text-center hover-lift group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors duration-300 glow-box">
                <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground text-xs md:text-base mb-0.5 md:mb-1">
                {stat.label}
              </div>
              <p className="text-[10px] md:text-sm text-muted-foreground hidden sm:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
