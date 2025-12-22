import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Tools",
    skills: ["Node.js", "PostgreSQL", "GraphQL", "REST APIs", "Git", "Docker"],
  },
  {
    title: "Design & UX",
    skills: ["Figma", "UI Design", "Responsive Design", "Accessibility", "Prototyping"],
  },
  {
    title: "Other",
    skills: ["Agile/Scrum", "Testing", "CI/CD", "Performance", "SEO", "Analytics"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-display font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
