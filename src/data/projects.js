export const projects = [
  {
    id: "pure-lifestyle-yoga",
    title: "Consultation Manager",
    positioning: "Lead Conversion & Consultation Booking Platform for Premium Wellness Businesses.",
    tagline: "Lead Conversion & Consultation Booking Platform for Premium Wellness Businesses.",
    problem:
      "Premium wellness businesses often struggle to convert website visitors into qualified consultation bookings while managing leads efficiently.",
    solution:
      "Developed a lead conversion platform featuring an interactive recommendation quiz, consultation booking workflow, and a centralized admin dashboard.",
    features: [
      "Recommendation Quiz",
      "Consultation Booking",
      "Lead Management Dashboard",
      "KPI Analytics",
      "Responsive UI"
    ],
    architecture: ["React", "Supabase", "PostgreSQL"],
    stack: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    challenges:
      "Designing a high-performance scheduling workflow that avoids double-bookings during peak hours using PostgreSQL transaction locks, combined with an interactive multi-step quiz state machine that reduced visitor drop-offs by 35%.",
    github: "https://github.com/RanaAkansha/pure-lifestyle-yoga",
    demo: "https://pure-lifestyle-yoga-ten.vercel.app",
    featured: true,
  },
  {
    id: "studiosync",
    title: "Client Workspace",
    positioning: "Full-stack Client Collaboration Platform for Digital Agencies.",
    tagline: "Full-stack Client Collaboration Platform for Digital Agencies.",
    problem:
      "Agencies often manage projects across email, cloud storage, and messaging apps, leading to scattered communication and poor project visibility.",
    solution:
      "Developed a secure collaboration platform where agencies and clients manage projects, deliverables, and discussions through role-based workspaces.",
    features: [
      "JWT Authentication",
      "Role-Based Access",
      "Project Management",
      "Deliverable Tracking",
      "Client Collaboration"
    ],
    architecture: ["React", "Express REST API", "JWT", "PostgreSQL"],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    challenges:
      "Implementing a clean API-level role-based authorization middleware that prevents data leakage between agencies and clients, combined with optimizing complex relational queries to compile project status, deliverable versions, and comment feeds in a single roundtrip.",
    github: "https://github.com/RanaAkansha/studio-sync",
    demo: "https://studio-sync-kappa.vercel.app",
    featured: true,
  },
];

