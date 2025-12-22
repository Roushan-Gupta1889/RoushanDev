import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory, payments, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for a B2B SaaS product with data visualization and team collaboration.",
    tech: ["React", "D3.js", "GraphQL", "Tailwind"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Developer Community",
    description: "Social platform for developers to share code snippets, tutorials, and connect with peers.",
    tech: ["Next.js", "Supabase", "MDX", "Framer Motion"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "AI Writing Assistant",
    description: "Chrome extension that uses AI to help users write better emails and documents.",
    tech: ["React", "OpenAI", "Chrome APIs", "TypeScript"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Real Estate Finder",
    description: "Property search platform with interactive maps, filters, and virtual tour integration.",
    tech: ["React", "Mapbox", "Node.js", "MongoDB"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first web app for tracking workouts, nutrition, and progress with social features.",
    tech: ["React", "PWA", "Firebase", "Chart.js"],
    color: "from-pink-500/20 to-rose-500/20",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects I've worked on, showcasing my expertise in building modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover-lift"
            >
              {/* Project Preview Area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                {/* Decorative code lines */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1 opacity-30">
                  <div className="h-2 bg-foreground/20 rounded w-3/4" />
                  <div className="h-2 bg-foreground/20 rounded w-1/2" />
                  <div className="h-2 bg-foreground/20 rounded w-2/3" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="font-semibold">
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
