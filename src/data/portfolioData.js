/**
 * Portfolio Data Configuration for Vinay Bansal
 * Easy to update data file for personal information, skills, projects, and milestones.
 */

export const personalInfo = {
  name: "Vinay Bansal",
  monogram: "VB",
  role: "B.Tech Student | AI & Technology Enthusiast",
  college: "JECRC University",
  location: "Jaipur, India",
  email: "vinaybansal893@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinay-bansal-8b49782a3",
  github: "https://github.com/vinaybansal893",
  academicYear: "First Year B.Tech CSE",
};

export const heroData = {
  eyebrow: "HELLO, I'M VINAY",
  headingLine1: "B.Tech Student",
  headingLine2: "& AI Technology Enthusiast",
  intro:
    "I’m a first-year B.Tech CSE student at JECRC University, exploring artificial intelligence, web development and modern technologies while building practical projects and continuously improving my technical skills.",
  primaryCTA: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCTA: {
    label: "Contact Me",
    href: "#contact",
  },
};

export const aboutData = {
  sectionTitle: "About Me",
  sectionSubtitle: "Who I Am & My Learning Journey",
  paragraphs: [
    "I’m a first-year B.Tech CSE student at JECRC University with a strong interest in technology, artificial intelligence, web development and digital productivity.",
    "I enjoy learning modern technologies, experimenting with new ideas and turning what I learn into practical projects. My current focus is building a strong foundation in programming and computer science while exploring how AI can be used to create useful real-world solutions.",
    "I’m continuously learning, experimenting and improving — one project at a time.",
  ],
  focusCards: [
    {
      number: "01",
      tag: "Learning",
      title: "Computer Science Core",
      description: "Building strong foundations in Computer Science, algorithmic thinking, and core principles.",
      badge: "In Progress"
    },
    {
      number: "02",
      tag: "Exploring",
      title: "AI & Modern Web",
      description: "AI, Generative AI & Web Technologies — understanding practical applications and model behaviors.",
      badge: "Active Exploration"
    },
    {
      number: "03",
      tag: "Building",
      title: "Hands-on Projects",
      description: "Turning ideas into practical projects through continuous experimentation and coding.",
      badge: "Iterating"
    },
  ],
};

export const educationData = {
  sectionTitle: "Education",
  sectionSubtitle: "Academic Background & Curricular Focus",
  degree: "B.Tech — Computer Science & Engineering",
  institution: "JECRC University",
  location: "Jaipur, India",
  timeline: "First Year (Current)",
  description:
    "Pursuing undergraduate studies with an emphasis on engineering fundamentals, computing principles, and hands-on laboratory coursework.",
  relevantAreas: [
    {
      name: "Programming Fundamentals",
      desc: "Core syntax, logic structures, problem-solving techniques",
    },
    {
      name: "Web Development",
      desc: "Responsive user interfaces, semantic web, DOM structure",
    },
    {
      name: "Artificial Intelligence",
      desc: "AI foundations, intelligent systems, algorithmic concepts",
    },
    {
      name: "Generative AI",
      desc: "Prompt architectures, model capabilities, contextual workflows",
    },
    {
      name: "Computer Science Fundamentals",
      desc: "Data structures, discrete concepts, computational thinking",
    },
    {
      name: "Digital Productivity",
      desc: "Modern developer tooling, version control, workflow automation",
    },
  ],
};

export const skillsData = [
  {
    name: "HTML",
    category: "Web Core",
    description: "Semantic structures, accessible layout hierarchy, and standards-compliant web markup.",
    iconName: "FileCode",
  },
  {
    name: "CSS",
    category: "Styling & UI",
    description: "Responsive layouts, Tailwind CSS, flexbox/grid, and smooth micro-interactions.",
    iconName: "Palette",
  },
  {
    name: "JavaScript",
    category: "Programming",
    description: "Modern ES6+ syntax, asynchronous programming, and dynamic DOM interaction.",
    iconName: "Code",
  },
  {
    name: "Python",
    category: "Core Language",
    description: "Programming, logic building, scripting and algorithmic experimentation.",
    iconName: "Terminal",
  },
  {
    name: "Artificial Intelligence",
    category: "Emerging Tech",
    description: "Exploring AI concepts, foundational algorithms, and practical applications.",
    iconName: "Cpu",
  },
  {
    name: "Generative AI",
    category: "AI Technologies",
    description: "Exploring LLMs, prompt engineering, generative workflows, and API concepts.",
    iconName: "Sparkles",
  },
  {
    name: "Web Development",
    category: "Frontend Dev",
    description: "Building responsive, modern, and interactive web experiences from the ground up.",
    iconName: "Layout",
  },
  {
    name: "Digital Productivity",
    category: "Workflow",
    description: "Utilizing modern developer tools, Git, Linux command line, and productivity systems.",
    iconName: "Zap",
  },
];

export const projectsData = [
  {
    id: "01",
    title: "Personal Portfolio Website",
    category: "Web Application",
    description:
      "A responsive personal portfolio designed to showcase my skills, learning journey and projects with a modern, futuristic dark theme.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    status: "Live Project",
    statusType: "active", // 'active' | 'in-progress' | 'concept'
    codeAvailable: true,
    githubUrl: "https://github.com/vinaybansal893",
    actionLabel: "Explore Website",
    modalDetails: {
      highlights: [
        "Component-based React architecture with clean separation of concerns",
        "Accessible, high-contrast dark color palette with sky-blue accents",
        "Config-driven portfolio data store for frictionless updates",
        "Fully responsive layout optimized from 360px mobile to 1920px 4K displays"
      ],
      stage: "Active & Deployed"
    }
  },
  {
    id: "02",
    title: "AI Website Project",
    category: "AI & Web Experiment",
    description:
      "An experimental web project exploring how artificial intelligence can be integrated into modern web experiences and interactive interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "AI APIs / AI concepts"],
    status: "In Development",
    statusType: "in-progress",
    codeAvailable: false,
    githubUrl: null,
    actionLabel: "Project Preview",
    modalDetails: {
      highlights: [
        "Investigating API-based intelligence for dynamic client interactions",
        "Designing clean user feedback loops for AI response states",
        "Prototyping responsive web frontends around generative outputs",
        "Exploring latency optimization and conversational UX flows"
      ],
      stage: "Under active prototyping"
    }
  },
  {
    id: "03",
    title: "Student Productivity Project",
    category: "Concept & Productivity",
    description:
      "A concept focused on helping students organize tasks, learning activities and everyday productivity into a unified, distraction-free dashboard.",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
    status: "Concept Phase",
    statusType: "concept",
    codeAvailable: false,
    githubUrl: null,
    actionLabel: "View Concept",
    modalDetails: {
      highlights: [
        "Streamlined task triage system designed for student lecture cadences",
        "Targeted study session intervals with distraction reduction mode",
        "Lightweight local state persistence without heavy database dependencies",
        "Clean, minimalistic visual cues for assignment priorities"
      ],
      stage: "Conceptual Wireframes & Architecture"
    }
  },
];

export const achievementsData = {
  sectionTitle: "Achievements & Learning",
  sectionSubtitle: "Milestones & Future Credentials",
  note: "As a first-year student actively learning, this section serves as an authentic milestone registry that will document certifications, hackathons, and academic accomplishments as they are completed.",
  placeholders: [
    {
      category: "Certifications",
      title: "Professional Certifications",
      description: "Add certifications and professional credentials here.",
      icon: "Award",
      status: "Upcoming Milestone",
    },
    {
      category: "Hackathons",
      title: "Hackathons & Contests",
      description: "Add hackathons, competitions and events here.",
      icon: "Trophy",
      status: "In Preparation",
    },
    {
      category: "Courses",
      title: "Courses & Specializations",
      description: "Add completed courses and learning programs here.",
      icon: "GraduationCap",
      status: "Coursework Active",
    },
    {
      category: "Awards",
      title: "Academic & Technical Awards",
      description: "Add academic or competition awards here.",
      icon: "Medal",
      status: "Future Target",
    },
    {
      category: "More",
      title: "Milestones & Contributions",
      description: "Add future milestones and achievements here.",
      icon: "Compass",
      status: "Roadmap Planned",
    },
  ],
};

export const contactData = {
  heading: "Let's Build Something Together",
  supportingText:
    "I'm always interested in learning, experimenting with technology and connecting with people who enjoy building new things.",
  email: "vinaybansal893@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinay-bansal",
  github: "https://github.com/vinaybansal893",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
