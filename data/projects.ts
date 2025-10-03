export interface Project {
  slug: string;
  name: string;
  summary: string;
  role: string;
  tech: string[];
  highlights: string[];
  outcomes: string[];
  repoUrls: string[];
  liveUrl?: string;
  secondLiveUrl?: string;
  docUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "events-organization-platform-weevent",
    name: "Events Organization Platform (Weevent)",
    summary:
      "Comprehensive platform for planning, ticketing, engagement, and analytics. Built as a graduation project to streamline organizer/attendee/admin workflows.",
    role: "Frontend Lead",
    tech: [
      "React",
      "Redux Toolkit",
      "Ant Design",
      "Socket.IO",
      "NestJS",
      "TypeScript",
      "Stripe",
      "Puppeteer",
    ],
    highlights: [
      "Dynamic roles (organizer/attendee/admin)",
      "Custom registration forms",
      "Ticketing with gift-cards; Stripe integration",
      "Gamification (points, badges, rewards)",
      "Real-time chat (Socket.IO)",
      "Attendance via QR check-in",
      "Analytics dashboards",
    ],
    outcomes: [
      "Faster setup for events",
      "Improved engagement via gamification",
    ],
    repoUrls: [
      "https://github.com/AnasDurra/events-organization-platform-web-public-panel",
      "https://github.com/AnasDurra/events-organization-platform-web-admin-panel",
    ],
    liveUrl: "https://events-organization-platform-web-pu.vercel.app/login",
    secondLiveUrl:
      "https://events-organization-platform-web-ad.vercel.app/login",
    featured: true,
  },
  {
    slug: "hr-and-reservation-management-system",
    name: "HR & Reservation Management System",
    summary:
      "Full-stack system covering recruitment, onboarding, attendance, permissions, hall reservations, and reporting.",
    role: "Full-Stack Developer",
    tech: ["Laravel", "MySQL", "React"],
    highlights: [
      "Role-Based Access Control (RBAC)",
      "Recruitment and onboarding flows",
      "Attendance and permissions",
      "Reservation scheduling",
      "Reporting on retention/absenteeism/customer analytics",
      "Automated workflows; reduced time-to-hire by ~30%",
    ],
    outcomes: ["~30% faster time-to-hire"],
    repoUrls: [
      "https://github.com/AnasDurra/HR-and-Reservation-Management-System-backend",
    ],
    liveUrl: "https://hr-and-reservation-management-syste.vercel.app/login",
    featured: true,
  },
  {
    slug: "flutter-to-html-and-js-transpiler",
    name: "Flutter to HTML and JS Transpiler",
    summary:
      "A compiler designed to parse and transpile Flutter/Dart code into HTML and JavaScript, enabling seamless integration of Flutter applications into web platforms.",
    role: "Developer",
    tech: ["Flutter", "Dart", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Lexical analysis and parsing of Flutter/Dart code",
      "Syntax analysis to generate intermediate representations",
      "Code generation to transpile Dart code into HTML and JavaScript",
      "Cross-platform compatibility for integrating Flutter projects into web applications",
      "Compiler design principles applied to a real-world transpiler project",
    ],
    outcomes: [
      "Enabled smooth integration of Flutter projects into web applications",
      "Demonstrated proficiency in compiler and transpiler design and implementation",
    ],
    repoUrls: [
      "https://github.com/AnasDurra/flutter-to-html-and-js-transpiler",
    ],
    liveUrl: "https://transpiler-4iaa.onrender.com/",
    featured: true,
  },
  {
    slug: "kanban-task-board",
    name: "Kanban Task Board",
    summary:
      "A task management application built with React and TypeScript that allows users to create, manage, and track tasks using a Kanban board interface. Includes drag-and-drop functionality for task organization.",
    role: "Developer",
    tech: ["React", "TypeScript", "React DnD", "CSS"],
    highlights: [
      "Drag-and-drop interface for seamless task management",
      "Interactive task creation, editing, and deletion",
      "Column-based task categorization (To Do, In Progress, Done)",
      "Persistent task state using localStorage for session persistence",
      "Responsive design for usability on different screen sizes",
    ],
    outcomes: [
      "Built a functional Kanban board with interactive drag-and-drop capabilities",
      "Implemented persistent task state storage to maintain tasks across sessions",
      "Enhanced user experience by optimizing responsiveness and task management features",
    ],
    liveUrl: "https://kanban-task-board-roan.vercel.app/",
    repoUrls: ["https://github.com/AnasDurra/kanban-task-board"],
    featured: true,
  },
  {
    slug: "school-management-system",
    name: "School Management System",
    summary:
      "Enrollment, class scheduling, attendance, grades, parent-teacher communication; secure and performant data management.",
    role: "Full-Stack Developer",
    tech: ["Laravel", "React", "SQL"],
    highlights: [
      "Student enrollment + class scheduling",
      "Attendance + grading",
      "Parent–teacher messaging",
      "RBAC for privacy and security",
    ],
    outcomes: ["Streamlined operations for schools"],
    repoUrls: ["https://github.com/AnasDurra/School-Management-System-backend"],
    liveUrl: "https://sms-wlms.vercel.app/",
    featured: false,
    docUrl:
      "https://docs.google.com/document/d/1h8SxQaMUPIpzgRgkSiq1jSYx_8RVmFXcRo4sPrYc5oc/edit?usp=sharing",
  },

  {
    slug: "search-engine-project",
    name: "Search Engine Project",
    summary: "TF-IDF + word-embedding retrieval",
    role: "Developer",
    tech: ["Python", "NLP"],
    highlights: ["TF-IDF algorithm", "Word embedding retrieval"],
    outcomes: [],
    repoUrls: ["https://github.com/AnasDurra/Search-Engine-Project"],
    featured: false,
  },

  {
    slug: "image-colors-quantizer",
    name: "Image Colors Quantizer",
    summary: "Java color quantization",
    role: "Developer",
    tech: ["Java"],
    highlights: ["Color quantization algorithm"],
    outcomes: [],
    repoUrls: ["https://github.com/AnasDurra/Image-Colors-Quantizer"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);
