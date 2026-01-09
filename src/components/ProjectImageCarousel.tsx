import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectImageCarouselProps {
    images: string[];
    alt: string;
    color: string;
    autoPlayInterval?: number; // milliseconds between slides
}

export const ProjectImageCarousel = ({ images, alt, color, autoPlayInterval = 4000 }: ProjectImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPaused && images.length > 1) {
            const interval = setInterval(() => {
                goToNext();
            }, autoPlayInterval);

            return () => clearInterval(interval);
        }
    }, [currentIndex, isPaused, autoPlayInterval, images.length]);

    if (!images || images.length === 0) {
        return null;
    }

    // If only one image, show it without carousel controls
    if (images.length === 1) {
        return (
            <img
                src={images[0]}
                alt={alt}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
        );
    }

    return (
        <div
            className="relative w-full h-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Image Display */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${alt} - Image ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    goToPrevious();
                }}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 z-10 touch-manipulation"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    goToNext();
                }}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 z-10 touch-manipulation"
                aria-label="Next image"
            >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrentIndex(index);
                        }}
                        className={`transition-all touch-manipulation ${index === currentIndex
                            ? "bg-primary w-5 sm:w-6 h-2"
                            : "bg-white/50 hover:bg-white/80 w-2 h-2"
                            } rounded-full`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
