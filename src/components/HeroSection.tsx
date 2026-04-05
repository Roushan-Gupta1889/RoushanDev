import { motion } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react"; // Added X icon for back button
import { Button } from "@/components/ui/button";
import fullPhoto from "../assets/full_photo.jpg";
import resumePDF from "../assets/DataTechAlpha.pdf";
import { useEffect, useState } from "react";

export const HeroSection = () => {

  // 🔹 Typing text list
  const texts = [
    "Products", "Websites", "Apps", "UI", "Frontend"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 🔹 New State for Flip
  const [isFlipped, setIsFlipped] = useState(false);

  // 🔹 Typing logic
  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 80);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, 50);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16 sm:pt-20 md:pt-0">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Animated orbs */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="hidden md:block absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container-custom relative z-10 py-6 sm:py-8 md:py-12 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1 mt-6 sm:mt-8 lg:mt-12 px-4 sm:px-6 lg:px-0">
            {/* ... (Left content remains exactly the same) ... */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex items-center gap-2
                px-3 sm:px-4 py-1 sm:py-1.5
                rounded-full
                bg-black/60
                border border-emerald-500/30
                backdrop-blur
                shadow-[0_0_20px_rgba(16,185,129,0.25)]
                mb-3 sm:mb-4
                lg:mt-8
              "
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-emerald-300">
                Available for freelance projects
              </span>
            </motion.div>



            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-2 sm:mb-3 md:mb-4"
            >
              <span className="block mb-1">I Build</span>
              <span className="text-gradient inline-block min-w-[200px] sm:min-w-[260px]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
              <span className="block mt-1">That Users Love</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-xl"
            >
              Frontend developer & product builder specializing in creating
              fast, accessible, and beautifully crafted web experiences
              that drive results.
            </motion.p>
            <br />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
            >
              <Button
                size="default"
                className="font-semibold group w-full sm:w-auto text-sm sm:text-base"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="default"
                variant="outline"
                className="font-semibold w-full sm:w-auto text-sm sm:text-base"
                asChild
              >
                <a href={resumePDF} download="DataTechAlpha.pdf">
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border/50 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "2+", label: "Experience" },
                { value: "50+", label: "Projects " },
                { value: "25+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-sm text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE - FLIP CARD MODIFICATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center order-1 lg:order-2 mt-6 sm:mt-8 lg:mt-12"
          >
            {/* Added perspective class here */}
            <div className="perspective-1000">
              <motion.div
                // Combined Float animation AND Flip rotation
                animate={{
                  y: [0, -8, 0],
                  rotateY: isFlipped ? 180 : 0
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 0.6, ease: "easeInOut" } // Smooth 3D Flip
                }}
                // Important: Preserves 3D space
                style={{ transformStyle: "preserve-3d" }}
                className="relative mt-8 md:mt-12 lg:mt-16 w-64 sm:w-72 md:w-80 lg:w-full lg:max-w-sm aspect-[2.2/3] group"
              >

                <div className="absolute -inset-4 bg-primary/30 rounded-3xl blur-3xl" />

                {/* --- FRONT SIDE --- */}
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl backface-hidden bg-black"
                >
                  <img
                    src={fullPhoto}
                    alt="Roushan Gupta"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-end">
                    <div className="p-4 w-full text-left relative">
                      <p className="text-white text-sm font-semibold">
                        Roushan Gupta
                      </p>
                      <p className="text-white/80 text-xs mt-1">
                        Frontend Developer · React · TypeScript
                      </p>

                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white">React</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white">Tailwind</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white">UI/UX</span>
                      </div>

                      {/* Read More Button - Triggers Flip */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsFlipped(true);
                        }}
                        className="absolute bottom-4 right-0 bg-white/20 hover:bg-white text-white hover:text-black text-[10px] px-3 py-1.5 rounded-lg backdrop-blur-md transition-all font-medium flex items-center gap-1"
                      >
                        Read more <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* --- BACK SIDE (New Addition) --- */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/95 backdrop-blur-xl p-6 flex flex-col backface-hidden rotate-y-180"
                >
                  <div className="flex-1 overflow-y-auto pr-1">
                    <h3 className="text-lg font-bold text-white mb-3">About Me</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      I'm a passionate developer who bridges the gap between design and engineering.
                      <br /><br />
                      With a focus on performance and user experience, I build scalable applications that solve real-world problems.
                      <br /><br />
                      When I'm not coding, I'm exploring new UI trends or contributing to open source.
                    </p>
                  </div>

                  {/* Back Button - Reverses Flip */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                    }}
                    className="mt-4 w-full py-2 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4" /> Back to Photo
                  </button>
                </div>

              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
