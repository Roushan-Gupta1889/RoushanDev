import { useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  { name: "GraphQL", icon: "◈" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "⎇" },
  { name: "Figma", icon: "🎯" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
];

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export const TechSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point3D[]>([]);

  // Initialize sphere points using Fibonacci sphere algorithm
  useEffect(() => {
    const numPoints = technologies.length;
    const points: Point3D[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = (2 * Math.PI * i) / goldenRatio;

      points.push({
        x: Math.cos(theta) * radius,
        y: y,
        z: Math.sin(theta) * radius,
      });
    }
    pointsRef.current = points;
  }, []);

  useAnimationFrame((time) => {
    if (!containerRef.current) return;

    // Slow rotation speeds
    const speedX = 0.0003;
    const speedY = 0.0005;
    rotationRef.current.x = time * speedX;
    rotationRef.current.y = time * speedY;

    const items = containerRef.current.querySelectorAll<HTMLElement>("[data-sphere-item]");
    const radius = 120;

    items.forEach((item, index) => {
      const point = pointsRef.current[index];
      if (!point) return;

      // Rotate point around Y axis
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);
      let x = point.x * cosY - point.z * sinY;
      let z = point.x * sinY + point.z * cosY;
      let y = point.y;

      // Rotate around X axis
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const newY = y * cosX - z * sinX;
      const newZ = y * sinX + z * cosX;
      y = newY;
      z = newZ;

      // Project to 2D with perspective
      const perspective = 400;
      const scale = perspective / (perspective + z * radius);
      const projectedX = x * radius * scale;
      const projectedY = y * radius * scale;

      // Depth-based styling
      const depth = (z + 1) / 2; // 0 to 1, 1 being closest
      const opacity = 0.3 + depth * 0.7;
      const itemScale = 0.6 + depth * 0.5;
      const brightness = 0.5 + depth * 0.5;

      item.style.transform = `translate(-50%, -50%) translate(${projectedX}px, ${projectedY}px) scale(${itemScale})`;
      item.style.opacity = String(opacity);
      item.style.filter = `brightness(${brightness})`;
      item.style.zIndex = String(Math.floor(depth * 100));
    });
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Sphere container */}
      <div
        ref={containerRef}
        className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
        style={{ perspective: "800px" }}
      >
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl" />
        </div>

        {/* Technology items */}
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            data-sphere-item
            className="absolute left-1/2 top-1/2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/80 border border-border/50 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 hover:bg-secondary"
            style={{
              willChange: "transform, opacity",
            }}
          >
            <span className="text-sm sm:text-base font-semibold text-foreground/90">
              {tech.icon}
            </span>
          </div>
        ))}

        {/* Orbit rings (decorative) */}
        <motion.div
          className="absolute inset-4 border border-primary/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-8 border border-primary/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};
