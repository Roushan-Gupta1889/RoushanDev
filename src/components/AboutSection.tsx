import { motion } from "framer-motion";
import { MapPin, Calendar, Github, Linkedin, Instagram } from "lucide-react";
import { TechSphere } from "./TechSphere";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative pt-16 pb-10 sm:pt-20 md:pt-0">
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
              <TechSphere />
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
              Turning Curiosity Into
              <br />
              <span className="text-gradient">Code & Ideas Into Impact</span>
            </h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
              <p>
                I'm a passionate developer who enjoys turning ideas into practical, real-world solutions through code.
              </p>
              <p>
                With a strong interest in problem-solving, data, and AI-driven applications,
                I focus on building efficient, scalable projects that create real impact.
              </p>
              <p>
                When I'm not coding, I'm learning new technologies, refining my skills,
                or exploring innovative ideas through projects and hackathons.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">2+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Bengaluru India</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Roushan-Gupta1889"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181717] hover:bg-[#2b2b2b] flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/roushan1889/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A66C2] hover:bg-[#004182] flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/roushan_gupta2341/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
