import { useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";

// Technology logos as SVG components
const logos = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#61DAFB]">
        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.675" fill="none" stroke="currentColor" strokeWidth="1"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.675" fill="none" stroke="currentColor" strokeWidth="1" style={{transform: 'rotate(60deg)', transformOrigin: 'center'}}/>
        <ellipse cx="12" cy="12" rx="11" ry="4.675" fill="none" stroke="currentColor" strokeWidth="1" style={{transform: 'rotate(-60deg)', transformOrigin: 'center'}}/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="2" fill="#3178C6"/>
        <path d="M13 16.5v1.8c.3.2.7.3 1.1.4.4.1.8.1 1.3.1.4 0 .9-.1 1.2-.2.4-.1.7-.3 1-.6.3-.2.5-.5.6-.9.2-.3.2-.7.2-1.2 0-.3-.1-.6-.2-.9-.1-.3-.3-.5-.5-.7-.2-.2-.5-.4-.8-.5-.3-.2-.6-.3-1-.5-.3-.1-.5-.2-.7-.3-.2-.1-.4-.2-.5-.3-.1-.1-.2-.2-.3-.4-.1-.1-.1-.3-.1-.4 0-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.3-.2.5-.2.2-.1.4-.1.6-.1.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.4.2.5.3.2.1.3.2.5.4v-1.7c-.3-.1-.6-.2-1-.3-.4-.1-.8-.1-1.2-.1-.4 0-.9.1-1.3.2-.4.1-.7.3-1 .6-.3.2-.5.5-.7.9-.2.3-.2.7-.2 1.1 0 .5.1 1 .4 1.4.3.4.8.7 1.4 1 .3.1.6.2.8.4.2.1.4.2.6.4.2.1.3.3.4.4.1.1.1.3.1.5 0 .2 0 .3-.1.4-.1.1-.2.2-.3.3-.1.1-.3.2-.5.2-.2.1-.4.1-.7.1-.4 0-.8-.1-1.2-.3-.4-.2-.7-.4-1-.7Z" fill="white"/>
        <path d="M7 11.5h4v-1.2H7v1.2ZM9.2 18v-6.3h-1.5V18h1.5Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 24 24" fill="#68A063" className="w-full h-full">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.75 3.75v7.14L12 18.82l-6.75-3.75V7.93L12 4.18z"/>
        <path d="M12 6.5L7.5 9.25v5.5L12 17.5l4.5-2.75v-5.5L12 6.5z"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <circle cx="12" cy="12" r="11" fill="white"/>
        <path d="M9.5 8v8l6-4-6-4z" fill="black"/>
        <path d="M15.5 8v8" stroke="black" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Vue",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M2 3l10 18L22 3h-4l-6 10.5L6 3H2z" fill="#41B883"/>
        <path d="M6 3l6 10.5L18 3h-3l-3 5.25L9 3H6z" fill="#34495E"/>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 2C9.5 2 8 3 8 5v2h4v1H6c-2 0-4 1.5-4 4.5S4 17 6 17h2v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.5 0 2.5-1 2.5-2.5v-4C19 3 17.5 2 15 2h-3z" fill="#3776AB"/>
        <path d="M12 22c2.5 0 4-1 4-3v-2h-4v-1h6c2 0 4-1.5 4-4.5S20 7 18 7h-2v2.5c0 2-1.5 3.5-3.5 3.5h-5c-1.5 0-2.5 1-2.5 2.5v4c0 1.5 1.5 2.5 4 2.5h3z" fill="#FFD43B"/>
        <circle cx="9.5" cy="5" r="1" fill="white"/>
        <circle cx="14.5" cy="19" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M6.5 12.5L4 17h2l.5-1h2l.5 1h2l-2.5-4.5h-2zm1 1l.5 1.5h-1l.5-1.5z" fill="#FF9900"/>
        <path d="M11 12.5L12.5 17h1.5l.75-2 .75 2h1.5l1.5-4.5h-1.5l-.75 2.5-.75-2.5h-1.5l-.75 2.5-.75-2.5H11z" fill="#FF9900"/>
        <path d="M21 16c-3 2-7 3-10.5 3-5 0-9.5-2-13-5 0 0-.5-.5 0-.5s8 3.5 13 3.5c3.5 0 7-1 10-3 .5-.3.7.2.5.5z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 24 24" fill="#2496ED" className="w-full h-full">
        <path d="M13 4h3v3h-3V4zm-4 0h3v3H9V4zM5 4h3v3H5V4zm4 4h3v3H9V8zM5 8h3v3H5V8zm8 0h3v3h-3V8zm-4 4h3v3H9v-3zm-4 0h3v3H5v-3z"/>
        <path d="M22 10c-.5-.3-1.5-.5-2.3-.3-.2-1.3-1-2.4-2-3.1l-.4-.3-.3.4c-.4.5-.6 1.1-.7 1.7-.2.9-.1 1.8.3 2.5-1 .5-2 .6-5.7.6H2v.5c0 2.2.7 4.4 2.2 6 1.6 1.8 4 2.7 7 2.7 5.4 0 9.5-2.5 11.4-7 .7 0 2.3 0 3.1-1.5l.2-.4-.4-.3c-.5-.3-1.6-.5-2.5-.5z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    svg: (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-full h-full">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 2C12 2 12 22 12 22C12 22 7 18 7 12C7 6 12 2 12 2Z" fill="#4FAA41"/>
        <path d="M12 2C12 2 12 22 12 22C12 22 17 18 17 12C17 6 12 2 12 2Z" fill="#3F9C35"/>
        <path d="M12 2L11.5 22H12.5L12 2Z" fill="#303030"/>
      </svg>
    ),
  },
  {
    name: "GraphQL",
    svg: (
      <svg viewBox="0 0 24 24" fill="#E10098" className="w-full h-full">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="4" r="1.5"/>
        <circle cx="4.5" cy="8" r="1.5"/>
        <circle cx="19.5" cy="8" r="1.5"/>
        <circle cx="4.5" cy="16" r="1.5"/>
        <circle cx="19.5" cy="16" r="1.5"/>
        <circle cx="12" cy="20" r="1.5"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <circle cx="15" cy="8" r="3" fill="#1ABCFE"/>
        <circle cx="15" cy="12" r="3" fill="#0ACF83"/>
        <path d="M9 5h3v6H9a3 3 0 1 1 0-6z" fill="#F24E1E"/>
        <path d="M9 11h3v6H9a3 3 0 1 1 0-6z" fill="#A259FF"/>
        <circle cx="9" cy="20" r="3" fill="#FF7262"/>
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 24 24" fill="#F05032" className="w-full h-full">
        <path d="M23.5 11.5l-10-10c-.7-.7-1.8-.7-2.5 0l-2 2 2.5 2.5c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.4 2.4c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.3-.3-1.9l-2.2-2.2v5.8c.2.1.3.2.5.3.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.5-.4.8-.5V9.2c-.3-.1-.6-.3-.8-.5-.5-.5-.6-1.3-.3-1.9L8.5 4.3l-8 8c-.7.7-.7 1.8 0 2.5l10 10c.7.7 1.8.7 2.5 0l10-10c.7-.7.7-1.8.5-2.3z"/>
      </svg>
    ),
  },
  {
    name: "Redis",
    svg: (
      <svg viewBox="0 0 24 24" fill="#DC382D" className="w-full h-full">
        <path d="M12 14l-6-3 6-3 6 3-6 3z"/>
        <path d="M12 17l-6-3v3l6 3 6-3v-3l-6 3z" opacity="0.8"/>
        <path d="M12 11l-6-3v3l6 3 6-3V8l-6 3z" opacity="0.9"/>
      </svg>
    ),
  },
];

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export const TechSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0.0003, y: 0.0005 });
  const pointsRef = useRef<Point3D[]>([]);
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const numPoints = logos.length;
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

  // Mouse/touch handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    
    const deltaX = e.clientX - lastMouseRef.current.x;
    const deltaY = e.clientY - lastMouseRef.current.y;
    
    rotationRef.current.y += deltaX * 0.005;
    rotationRef.current.x += deltaY * 0.005;
    
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  useAnimationFrame((time, delta) => {
    if (!containerRef.current) return;

    // Only auto-rotate when not hovered and not dragging
    if (!isHovered && !isDraggingRef.current) {
      rotationRef.current.x += velocityRef.current.x * delta;
      rotationRef.current.y += velocityRef.current.y * delta;
    }

    const items = containerRef.current.querySelectorAll<HTMLElement>("[data-sphere-item]");
    const radius = 180;

    items.forEach((item, index) => {
      const point = pointsRef.current[index];
      if (!point) return;

      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);
      let x = point.x * cosY - point.z * sinY;
      let z = point.x * sinY + point.z * cosY;
      let y = point.y;

      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const newY = y * cosX - z * sinX;
      const newZ = y * sinX + z * cosX;
      y = newY;
      z = newZ;

      const perspective = 600;
      const scale = perspective / (perspective + z * radius);
      const projectedX = x * radius * scale;
      const projectedY = y * radius * scale;

      const depth = (z + 1) / 2;
      const opacity = 0.15 + depth * 0.85;
      const itemScale = 0.5 + depth * 0.6;

      item.style.transform = `translate(-50%, -50%) translate(${projectedX}px, ${projectedY}px) scale(${itemScale})`;
      item.style.opacity = String(opacity);
      item.style.zIndex = String(Math.floor(depth * 100));
    });
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Subtle ambient glow */}
      <div className="absolute w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Sphere container */}
      <div
        ref={containerRef}
        className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Technology logos */}
        {logos.map((logo) => (
          <div
            key={logo.name}
            data-sphere-item
            className="absolute left-1/2 top-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 pointer-events-none"
            style={{ willChange: "transform, opacity" }}
            title={logo.name}
          >
            {logo.svg}
          </div>
        ))}
      </div>
    </div>
  );
};
