# Vinay Bansal — Modern Personal Portfolio

> **B.Tech Student | AI & Technology Enthusiast**  
> JECRC University, Jaipur, India  
> Email: [vinaybansal893@gmail.com](mailto:vinaybansal893@gmail.com)  
> LinkedIn: [linkedin.com/in/vinay-bansal](https://www.linkedin.com/in/vinay-bansal-8b49782a3)  
> GitHub: [github.com/vinaybansal893](https://github.com/vinaybansal893)

---

## 🌟 Overview

A modern, responsive, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for a first-year Computer Science & Engineering student actively learning, building practical projects, and exploring Artificial Intelligence and web technologies.

---

## 🎨 Key Features

- **Futuristic & Clean Dark Theme**: Deep obsidian background with sky/cyan accent highlights, subtle grids, and glassmorphism.
- **Authentic Student Story**: Communicates an authentic learning journey without exaggerated stats or fake experience.
- **Config-Driven Data Architecture**: All portfolio data is centralized in [`src/data/portfolioData.js`](./src/data/portfolioData.js) for effortless updates.
- **Interactive Component Architecture**:
  - **Sticky Navbar**: Monogram logo, smooth section scrolling, scroll progress indicator, active section tracking, and animated mobile menu.
  - **Hero Section**: Eyebrow badge, gradient typography, direct CTAs, and a pure CSS/SVG developer console visual (no stock photos).
  - **About Me**: Three core learning pillars (Learning, Exploring, Building) and student credentials.
  - **Education**: B.Tech CSE at JECRC University, First Year, with 6 curricular focus areas.
  - **Interactive Skills Grid**: 8 core competencies with interactive category filtering and honest learning indicators.
  - **Projects Showcase**: Honest student projects and concepts with interactive detail inspection modals and technology chips.
  - **Achievements & Milestones**: Elegant placeholder cards prepared for future certifications, hackathons, and awards.
  - **Contact Section**: Direct clickable links (Email, LinkedIn, GitHub), clipboard copy functionality, and a client-side validated contact form.
  - **Floating Controls**: Back-to-top button with smooth scroll.
  - **Accessibility & Motion**: WCAG-compliant color contrast, visible focus rings, semantic tags, and `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand icons
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Inter](https://fonts.google.com/specimen/Inter)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. Navigate to the project root:
   ```bash
   cd "vinay bansal portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## ✏️ How to Update Portfolio Content

All personal details, skills, projects, and milestones are stored in:
📁 **[`src/data/portfolioData.js`](./src/data/portfolioData.js)**

### Updating Student Info:
Edit the `personalInfo` object:
```javascript
export const personalInfo = {
  name: "Vinay Bansal",
  role: "B.Tech Student | AI & Technology Enthusiast",
  college: "JECRC University",
  location: "Jaipur, India",
  email: "vinaybansal893@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinay-bansal",
  github: "https://github.com/vinaybansal893",
};
```

### Adding New Skills:
Add a new object to `skillsData`:
```javascript
{
  name: "Docker",
  category: "Workflow",
  description: "Containerization fundamentals and environment isolation.",
  iconName: "Terminal",
}
```

### Adding New Projects:
Add a new object to `projectsData`:
```javascript
{
  id: "04",
  title: "My New Project",
  category: "Web Application",
  description: "Short description of what the project does...",
  technologies: ["React", "Python", "Tailwind CSS"],
  status: "In Development",
  statusType: "in-progress",
  codeAvailable: true,
  githubUrl: "https://github.com/vinaybansal893/repo-name",
  actionLabel: "View Details",
  modalDetails: {
    highlights: ["Feature 1", "Feature 2"],
    stage: "Active Development"
  }
}
```

---

## 🌐 Deployment to Vercel

This repository is pre-configured and 100% ready for one-click deployment to **Vercel**:

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio website"
   git remote add origin https://github.com/vinaybansal893/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build` (auto-detected).
6. Output Directory: `dist` (auto-detected).
7. Click **Deploy**.

---

## 📄 License

© 2026 Vinay Bansal. All rights reserved.
