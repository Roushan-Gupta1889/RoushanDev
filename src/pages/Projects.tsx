import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { allProjects } from "@/lib/projectsData";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24">
                <div className="container-custom px-4 sm:px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 sm:mb-12 md:mb-16"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors mb-4 sm:mb-6"
                        >
                            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                            Back to Home
                        </Link>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-3 sm:mb-4 md:mb-6">
                            All <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 md:px-0">
                            A comprehensive collection of my work, showcasing expertise across various technologies and domains.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {allProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group glass-card overflow-hidden hover-lift"
                            >
                                {/* Project Preview Area */}
                                <div className={`h-48 md:h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    {project.image ? (
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
                                                <div className="h-2 bg-foreground/20 rounded w-3/4" />
                                                <div className="h-2 bg-foreground/20 rounded w-1/2" />
                                                <div className="h-2 bg-foreground/20 rounded w-2/3" />
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

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-1 left-1/2 -translate-x-1/2 mb-2">
                                            <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-xs font-semibold text-primary-foreground">
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Project Info */}
                                <div className="p-4 sm:p-5 md:p-6">
                                    <h3 className="text-base sm:text-lg md:text-xl font-display font-bold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                        {project.title}
                                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-secondary text-[10px] sm:text-xs font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Back to Home Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-center mt-12 sm:mt-14 md:mt-16"
                    >
                        <Button variant="outline" size="lg" className="font-semibold group w-full sm:w-auto" asChild>
                            <Link to="/">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Projects;
