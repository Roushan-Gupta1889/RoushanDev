import iitmHelperImg from "../assets/IITM-Helper.png";
import iitmHelperImg2 from "../assets/IITM-Helper2.png";
import iitmHelperImg3 from "../assets/IITM-Helper3.png";
import iitmHelperImg4 from "../assets/IITM-Helper4.png";
import allGenzToolsImg from "../assets/All-genz-tools.png";
import allGenzToolsImg2 from "../assets/All-genz-tools2.png";
import allGenzToolsImg3 from "../assets/All-genz-tools3.png";
import allGenzToolsImg4 from "../assets/All-genz-tools4.png";
import classEngageImg from "../assets/ClassEngage.png";
import classEngageImg2 from "../assets/ClassEngage2.png";
import classEngageImg3 from "../assets/ClassEngage3.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  color: string;
  image?: string;
  images?: string[]; // Multiple images for carousel
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    id: "iitm-helper",
    title: "IITM Helper",
    description: "An Academic Tool Made For Talented IITM BS Students",
    longDescription: "Complete companion for IIT Madras BS Data Science students. Resources, calculators, study tools, and community - all in one place. Features include GPA calculator, course resources, AI assistant, study materials, and a vibrant student community.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "AI Integration"],
    color: "from-purple-500/20 to-pink-500/20",
    image: iitmHelperImg,
    images: [iitmHelperImg, iitmHelperImg2, iitmHelperImg3, iitmHelperImg4],
    github: "https://github.com/Roushan-Gupta1889/iitmhelper",
    demo: "https://iitmhelper.online/",
    featured: true,
  },
  {
    id: "tools-website",
    title: "DevTools Hub - Online Utilities",
    description: "A comprehensive web application providing various online tools for students, professionals, and developers.",
    longDescription: "All-in-one platform offering essential online tools including PDF converters, image editors, code formatters, and more. Built with modern web technologies to provide fast, secure, and user-friendly utilities. Features include PDF compression, image optimization, code beautification, and various conversion tools.",
    tech: ["React", "Ghostscript", "Cloudmersive API", "Supabase"],
    color: "from-orange-500/20 to-red-500/20",
    image: allGenzToolsImg,
    images: [allGenzToolsImg, allGenzToolsImg2, allGenzToolsImg3],
    github: "https://github.com/Roushan-Gupta1889/All-Genz-Tools-Frontend",
    demo: "https://all-genz-tools-frontend.vercel.app/",
    featured: true,
  },
  {
    id: "chrome-extension",
    title: "ClassEngage - Chrome Extension for Google Meet",
    description: "Interactive polling, quizzes, and attendance tracking for online classrooms.",
    longDescription: "ClassEngage is a comprehensive solution that brings interactive polling, quizzes, and attendance tracking to your online classroom. It consists of a Chrome extension for students and a web-based dashboard for teachers, all powered by Firebase for real-time synchronization. Features include live polls, quiz creation, automatic attendance, and detailed analytics.",
    tech: ["React", "Chrome Manifest V3", "Firebase", "Real-time Database"],
    color: "from-cyan-500/20 to-blue-500/20",
    image: classEngageImg,
    images: [classEngageImg, classEngageImg2, classEngageImg3],
    github: "https://github.com/Roushan-Gupta1889/ClassEngage",
    demo: "https://class-engage-pied.vercel.app/",
    featured: true,
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    description: "A comprehensive web-based Hospital Management System built with Flask (backend) and Vue.js (frontend) that enables efficient management of patients, doctors, appointments, and treatments.",
    tech: ["Flask", "Vue.js", "SQLAlchemy(ORM)"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "homexa",
    title: "Homexa – Smart PG Finder",
    description: "Smarter stays for students — powered by Homexa. A full-stack web platform designed to help students and young professionals find verified and affordable PG accommodations.",
    tech: ["HTML", "CSS(Bootstrap)", "JS(API Fetch)", "Supabase(Postgrest)"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "writer-website",
    title: "Website for Writer & Poet",
    description: "A personal website for a writer and poet, featuring a blog, portfolio of works, and contact form.",
    tech: ["React", "Vite(Bundle)", "Tailwind CSS"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "growsphere",
    title: "GrowSphere - Agency Website",
    description: "A modern, responsive website for a digital marketing agency, showcasing services, portfolio, and client testimonials.",
    tech: ["HTML", "CSS(Bootstrap)", "JS", "Supabase", "Google Auth"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "blessedbite",
    title: "BlessedBite",
    description: "Food delivery app that allows users to order food from local restaurants and have it delivered to their doorstep.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: "cricket-fantasy",
    title: "Cricket Fantasy League",
    description: "Cricket fantasy league website that allows users to create and join fantasy cricket leagues, manage teams, and track player performance.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-pink-500/20 to-rose-500/20",
  },
];

export const featuredProjects = allProjects.filter(p => p.featured);
