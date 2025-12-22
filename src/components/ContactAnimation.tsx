import { motion, useAnimationFrame } from "framer-motion";
import { useState, useRef } from "react";

export const ContactAnimation = () => {
  const orbitDuration = 5; // seconds for full orbit
  const [planeState, setPlaneState] = useState({ x: 0, y: 0, scale: 1, opacity: 1, rotation: 0 });
  const startTimeRef = useRef<number | null>(null);

  // Ellipse parameters
  const radiusX = 130;
  const radiusY = 100;

  useAnimationFrame((time) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = time;
    }
    
    const elapsed = (time - startTimeRef.current) / 1000;
    const progress = (elapsed % orbitDuration) / orbitDuration;
    
    // Angle in radians (starting from bottom, going clockwise)
    const angle = progress * Math.PI * 2 - Math.PI / 2;
    
    // Calculate position on ellipse
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;
    
    // Calculate scale and opacity based on Y position
    // When y is positive (bottom/front), plane is larger and brighter
    // When y is negative (top/back), plane is smaller and dimmer
    const normalizedY = (y + radiusY) / (radiusY * 2); // 0 to 1
    const scale = 0.5 + normalizedY * 0.7; // 0.5 to 1.2
    const opacity = 0.4 + normalizedY * 0.6; // 0.4 to 1
    
    // Rotation: plane head points in direction of travel
    // Derivative of ellipse: tangent direction
    const tangentX = -Math.sin(angle) * radiusX;
    const tangentY = Math.cos(angle) * radiusY;
    const rotation = Math.atan2(tangentY, tangentX) * (180 / Math.PI);
    
    setPlaneState({ x, y, scale, opacity, rotation });
  });

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
      {/* Single subtle background blob */}
      <div className="absolute inset-4 md:inset-8">
        <div className="w-full h-full bg-muted/30 rounded-full blur-2xl" />
      </div>

      {/* Static envelope container - no floating */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-36 md:w-64 md:h-48">
          {/* Envelope body */}
          <div className="absolute inset-0 bg-card border border-border/50 rounded-lg shadow-2xl overflow-hidden">
            {/* Envelope inner shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
            
            {/* Envelope flap (animated open/close) */}
            <motion.div
              className="absolute -top-1 left-0 right-0 h-16 md:h-20 origin-bottom"
              style={{ perspective: 400 }}
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

          {/* Letter/Paper inside envelope - animated */}
          <motion.div
            className="absolute left-3 right-3 md:left-4 md:right-4 bg-muted/90 rounded-t-md shadow-lg"
            style={{ top: "40%", height: "70%" }}
            animate={{
              y: [0, 0, -50, -50, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.45, 0.85, 1],
            }}
          >
            {/* Letter content lines */}
            <div className="p-3 md:p-4 space-y-2 md:space-y-3">
              <div className="h-2 md:h-3 bg-muted-foreground/30 rounded-full w-3/4" />
              <div className="h-2 md:h-3 bg-muted-foreground/20 rounded-full w-full" />
              <div className="h-2 md:h-3 bg-muted-foreground/20 rounded-full w-5/6" />
            </div>
          </motion.div>

          {/* Contact card - static, no rotation */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-28 h-16 md:w-36 md:h-20 bg-background/95 rounded-lg shadow-xl border border-border/50 p-2 md:p-3 rotate-3">
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
          </div>
        </div>
      </div>

      {/* Orbiting paper plane - smooth elliptical path */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          width: 0,
          height: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: `translate(${planeState.x}px, ${planeState.y}px) scale(${planeState.scale}) rotate(${planeState.rotation}deg)`,
            opacity: planeState.opacity,
            zIndex: planeState.y > 0 ? 10 : 0,
            transformOrigin: "center center",
            marginLeft: "-16px",
            marginTop: "-16px",
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground drop-shadow-md"
          >
            <path
              fill="currentColor"
              d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
            />
            <path
              fill="currentColor"
              opacity="0.5"
              d="M2 10l15 2-15 2V10z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
