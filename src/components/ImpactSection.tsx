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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Community Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Building & <span className="text-gradient">Sharing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Beyond client work, I'm passionate about giving back to the developer community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300 glow-box">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
