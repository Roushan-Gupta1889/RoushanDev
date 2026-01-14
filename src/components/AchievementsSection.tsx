import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import certificate1 from "../assets/certificate(1).jpg";
import certificate2 from "../assets/certificate(2).png";
import certificate3 from "../assets/certificate(3).png";
import certificate4 from "../assets/certificate(4).png";
import certificate5 from "../assets/certificate(5).png";

const certificateData = [
    {
        title: "Professional Certification 1",
        institution: "Technology Institute - 2024",
        description: "Successfully completed comprehensive training in professional development and technology skills.",
        image: certificate1,
    },
    {
        title: "Professional Certification 2",
        institution: "Development Academy - 2023",
        description: "Demonstrated expertise in modern development practices and advanced technical competencies.",
        image: certificate2,
    },
    {
        title: "Professional Certification 3",
        institution: "Tech University - 2023",
        description: "Achieved proficiency in cutting-edge technologies and industry-standard methodologies.",
        image: certificate3,
    },
    {
        title: "Professional Certification 4",
        institution: "Coding Institute - 2023",
        description: "Validated skills in software development, problem-solving, and technical innovation.",
        image: certificate4,
    },
    {
        title: "Professional Certification 5",
        institution: "Software Academy - 2022",
        description: "Recognized for excellence in programming fundamentals and practical application development.",
        image: certificate5,
    },
];

export const AchievementsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % certificateData.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + certificateData.length) % certificateData.length);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section id="certificates" className="section-padding relative bg-secondary/20 py-20">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 block">
                        Achievements & Certifications
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Continuous <span className="text-gradient">Learning</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
                        Navigate through my professional certifications
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Certificate Carousel */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="bg-card rounded-2xl overflow-hidden shadow-2xl"
                            >
                                {/* Certificate Image */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                                    <img
                                        src={certificateData[currentIndex].image}
                                        alt={certificateData[currentIndex].title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Previous certificate"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Next certificate"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {certificateData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? "bg-primary w-8 h-3"
                                    : "bg-muted-foreground/30 w-3 h-3 hover:bg-muted-foreground/50"
                                    }`}
                                aria-label={`Go to certificate ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
