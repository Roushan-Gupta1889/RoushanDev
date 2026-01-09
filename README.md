# RoushanDev Portfolio

A modern, responsive portfolio website showcasing professional skills, projects, and achievements with stunning animations and interactive components.

## 🌟 Features

### Core Sections
- **Hero Section** - Eye-catching introduction with animated elements
- **Services Section** - Professional services offered with detailed descriptions
- **About Section** - Personal background and professional journey
- **Skills Section** - Technical skills and competencies showcase
- **Projects Section** - Portfolio of completed projects with details
- **Achievements Section** - Professional certifications carousel with auto-play
- **CTA Section** - Call-to-action for engagement
- **Contact Footer** - Professional footer with contact information

### Interactive Components
- **Certificate Carousel** - Smooth sliding carousel with:
  - Auto-play functionality (5-second intervals)
  - Left/Right navigation arrows
  - Dot indicators for quick navigation
  - Smooth spring-based animations
  - Full certificate image display
- **Responsive Navigation** - Mobile-friendly navbar
- **Smooth Animations** - Framer Motion powered transitions
- **Dark/Light Theme** - Theme switching capability

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icon library

### State & Routing
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling

### Additional Libraries
- **next-themes** - Theme management
- **class-variance-authority** - Component variants
- **tailwind-merge** - Tailwind class merging
- **sonner** - Toast notifications

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager

### Setup Steps

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd RoushanDeV(portfolio)

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
RoushanDeV(portfolio)/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/              # Page components
│   │   ├── Index.tsx
│   │   ├── Projects.tsx
│   │   └── NotFound.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── assets/             # Images and static files
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Public assets
├── components.json         # shadcn/ui config
├── tailwind.config.ts      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## 🎨 Key Features Implementation

### Certificate Carousel
The achievements section features a custom-built carousel with:
- Smooth horizontal slide transitions
- Auto-play with 5-second intervals
- Manual navigation via arrow buttons
- Clickable dot indicators
- Spring-based physics animations
- Responsive design for all screen sizes

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Optimized for all device sizes
- Touch-friendly interactions

### Performance Optimizations
- Code splitting with React Router
- Lazy loading of components
- Optimized images
- Minimal bundle size

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy Options
- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with Git integration
- **GitHub Pages** - Free hosting for static sites
- **Custom Server** - Deploy the `dist/` folder

## 🔧 Configuration

### Tailwind CSS
Customize theme in `tailwind.config.ts`:
- Colors
- Fonts
- Spacing
- Breakpoints
- Animations

### shadcn/ui Components
Configure in `components.json`:
- Component style
- Color scheme
- CSS variables

## 📝 License

This project is private and proprietary.

## 👤 Author

**Roushan Gupta**

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
