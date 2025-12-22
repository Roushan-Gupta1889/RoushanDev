import { motion } from "framer-motion";

export const ContactAnimation = () => {
  const orbitDuration = 4;

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
      {/* Morphing background blob */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.05, 1, 0.98, 1],
          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50%", "40% 60% 60% 40% / 60% 40% 40% 60%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-muted/40 rounded-full blur-xl" />
      </motion.div>

      {/* Inner background ring */}
      <motion.div
        className="absolute inset-8 md:inset-12"
        animate={{
          scale: [1, 1.02, 1, 0.98, 1],
          borderRadius: ["40% 60% 60% 40% / 40% 40% 60% 60%", "50% 50% 50% 50%", "35% 65% 65% 35% / 65% 35% 35% 65%", "40% 60% 60% 40% / 40% 40% 60% 60%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <div className="w-full h-full bg-muted/30 rounded-full" />
      </motion.div>

      {/* Floating envelope container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -8, 0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-48 h-36 md:w-64 md:h-48">
          {/* Envelope body */}
          <div className="absolute inset-0 bg-card border border-border/50 rounded-lg shadow-2xl overflow-hidden">
            {/* Envelope inner shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
            
            {/* Envelope flap (animated open/close) */}
            <motion.div
              className="absolute -top-1 left-0 right-0 h-16 md:h-20 origin-bottom"
              animate={{
                rotateX: [180, 180, 0, 0, 180],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.45, 0.85, 1],
              }}
            >
              <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0 40 L50 5 L100 40 Z"
                  className="fill-card stroke-border/50"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            {/* @ Symbol on envelope */}
            <div className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-background/90 rounded-full flex items-center justify-center border border-border/30">
              <span className="text-foreground text-sm md:text-lg font-bold">@</span>
            </div>

            {/* Envelope V crease line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 75">
              <path d="M0 0 L50 40 L100 0" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-border" />
            </svg>
          </div>

          {/* Letter/Paper inside envelope */}
          <div
            className="absolute left-3 right-3 md:left-4 md:right-4 bg-muted/90 rounded-t-md shadow-lg"
            style={{ top: "10%", height: "70%", transform: "translateY(-60px)" }}
          >
            {/* Letter content lines */}
            <div className="p-3 md:p-4 space-y-2 md:space-y-3">
              <div className="h-2 md:h-3 bg-muted-foreground/30 rounded-full w-3/4" />
              <div className="h-2 md:h-3 bg-muted-foreground/20 rounded-full w-full" />
              <div className="h-2 md:h-3 bg-muted-foreground/20 rounded-full w-5/6" />
            </div>
          </div>

          {/* Contact card */}
          <motion.div
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-28 h-16 md:w-36 md:h-20 bg-background/95 rounded-lg shadow-xl border border-border/50 p-2 md:p-3"
            animate={{
              rotate: [3, 5, 3, 1, 3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex gap-2 md:gap-3 items-start">
              {/* Avatar circle */}
              <div className="w-8 h-8 md:w-10 md:h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground">
                  <circle cx="12" cy="8" r="4" fill="currentColor" />
                  <path d="M12 14c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" fill="currentColor" />
                </svg>
              </div>
              {/* Contact info lines */}
              <div className="flex-1 space-y-1.5 md:space-y-2 pt-1">
                <div className="h-1.5 md:h-2 bg-foreground/80 rounded-full w-12 md:w-16" />
                <div className="h-1 md:h-1.5 bg-muted-foreground/40 rounded-full w-full" />
                <div className="h-1 md:h-1.5 bg-muted-foreground/30 rounded-full w-4/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting paper plane */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: "600px" }}>
        <motion.div
          className="absolute"
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: orbitDuration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translateX(110px) translateZ(0px)",
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: [0, -8, 0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12"
              animate={{
                rotateY: [0, -360],
                scale: [1.3, 1.3, 0.7, 0.7, 1.3],
                opacity: [1, 1, 0.4, 0.4, 1],
              }}
              transition={{
                duration: orbitDuration,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
              style={{
                marginLeft: "-20px",
                marginTop: "-20px",
              }}
            >
              <svg viewBox="0 0 24 24" className="w-full h-full text-muted-foreground drop-shadow-lg">
                <path
                  fill="currentColor"
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                />
                <path
                  fill="currentColor"
                  opacity="0.6"
                  d="M2 10l15 2-15 2V10z"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
