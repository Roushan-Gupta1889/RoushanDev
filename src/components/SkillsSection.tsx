import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", core: true },
      { name: "Next.js", core: true },
      { name: "TypeScript", core: true },
      { name: "Vue.js", core: false },
      { name: "Tailwind CSS", core: true },
      { name: "Framer Motion", core: false },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", core: true },
      { name: "PostgreSQL", core: true },
      { name: "GraphQL", core: false },
      { name: "REST APIs", core: true },
      { name: "Git", core: true },
      { name: "Docker", core: false },
    ],
  },
  {
    title: "Design & UX",
    skills: [
      { name: "Figma", core: true },
      { name: "UI Design", core: true },
      { name: "Responsive Design", core: true },
      { name: "Accessibility", core: false },
      { name: "Prototyping", core: false },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Agile/Scrum", core: false },
      { name: "Testing", core: true },
      { name: "CI/CD", core: false },
      { name: "Performance", core: true },
      { name: "SEO", core: false },
      { name: "Analytics", core: false },
    ],
  },
];

export const SkillsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="section-padding relative bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg px-4 md:px-0">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: categoryIndex * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onMouseEnter={() => setHoveredCard(categoryIndex)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative p-4 md:p-6 rounded-xl md:rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm
                transition-all duration-300 ease-out cursor-default
                ${hoveredCard === categoryIndex 
                  ? 'transform -translate-y-2 shadow-[0_8px_30px_rgb(var(--primary-rgb)/0.15)] border-primary/30' 
                  : hoveredCard !== null 
                    ? 'opacity-50 scale-[0.98]' 
                    : ''
                }
              `}
            >
              {/* Subtle glow effect on hover */}
              <div 
                className={`
                  absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-b from-primary/5 to-transparent 
                  transition-opacity duration-300
                  ${hoveredCard === categoryIndex ? 'opacity-100' : 'opacity-0'}
                `}
              />
              
              <h3 className="relative text-base md:text-lg font-display font-bold mb-3 md:mb-5 text-primary">
                {category.title}
              </h3>
              
              <div className="relative flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.03) 
                    }}
                    className={`
                      px-2 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg text-xs md:text-sm font-medium 
                      border transition-colors duration-200
                      ${skill.core 
                        ? 'bg-primary/10 text-primary border-primary/30 hover:bg-primary/20' 
                        : 'bg-secondary/50 text-foreground/80 border-border/50 hover:border-primary/30 hover:bg-secondary'
                      }
                    `}
                  >
                    {skill.name}
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
