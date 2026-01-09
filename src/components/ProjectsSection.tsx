import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/projectsData";
import { Link } from "react-router-dom";
import { ProjectImageCarousel } from "@/components/ProjectImageCarousel";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 block">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg px-4 md:px-0">
            Showcasing my best work in building modern, scalable web applications.
          </p>
        </motion.div>

        {/* Featured Projects - Horizontal Rows */}
        <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass-card overflow-hidden group hover-lift ${index % 2 === 0 ? "" : ""
                }`}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className={`h-56 sm:h-64 md:h-full bg-gradient-to-br ${project.color} relative`}>
                    {project.images && project.images.length > 0 ? (
                      <ProjectImageCarousel
                        images={project.images}
                        alt={project.title}
                        color={project.color}
                      />
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                        {/* Decorative code lines */}
                        <div className="absolute bottom-4 left-4 right-4 space-y-2 opacity-30">
                          <div className="h-3 bg-foreground/20 rounded w-3/4" />
                          <div className="h-3 bg-foreground/20 rounded w-1/2" />
                          <div className="h-3 bg-foreground/20 rounded w-2/3" />
                          <div className="h-3 bg-foreground/20 rounded w-5/6" />
                        </div>
                      </>
                    )}

                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all hover:scale-110"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-primary backdrop-blur-sm flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110"
                        >
                          <ExternalLink className="w-5 h-5 text-primary-foreground" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold mb-2 sm:mb-3 md:mb-4 text-foreground group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-6">
                    {project.longDescription || project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-secondary/50 text-[10px] sm:text-xs font-medium text-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="font-semibold group" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
