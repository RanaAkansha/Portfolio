export const projects = [
  {
    id: "pure-lifestyle-yoga",
    title: "Consultation Manager",
    year: "2025",
    positioning: "Lead Conversion & Consultation Booking Platform for Premium Wellness Businesses.",
    tagline: "Turning website visitors into qualified consultation bookings.",
    problem:
      "Premium wellness businesses struggle to convert website visitors into qualified consultation bookings. Leads arrive through multiple channels but vanish without a structured capture and follow-up workflow, leaving revenue on the table.",
    solution:
      "Built a lead conversion platform with an interactive multi-step recommendation quiz, a streamlined consultation booking workflow, and a centralized admin dashboard that consolidates KPIs and lead status in one view.",
    features: [
      "Multi-step Recommendation Quiz",
      "Consultation Booking Workflow",
      "Lead Management Dashboard",
      "KPI Analytics",
      "Responsive UI"
    ],
    architecture: ["React", "Supabase", "PostgreSQL"],
    stack: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    challenges:
      "Designing a conflict-free scheduling workflow that prevents double-bookings during peak hours using PostgreSQL transaction locks, combined with a multi-step quiz state machine that reduced visitor drop-off by 35% through progressive disclosure.",
    github: "https://github.com/RanaAkansha/pure-lifestyle-yoga",
    demo: "https://pure-lifestyle-yoga-ten.vercel.app",
    featured: true,
  },
  {
    id: "studiosync",
    title: "StudioSync",
    year: "2025",
    positioning: "Full-stack Client Collaboration Platform for Digital Agencies.",
    tagline: "Replacing scattered emails and spreadsheets with a single client workspace.",
    problem:
      "Agencies manage projects across email threads, cloud drives, and messaging apps — leading to version confusion, missed deadlines, and poor client visibility. There is no single source of truth.",
    solution:
      "Built a secure role-based collaboration platform where agencies and clients manage projects, track deliverables, and communicate through structured workspaces — with JWT auth separating agency-level and client-level data access at the API layer.",
    features: [
      "JWT Authentication",
      "Role-Based Access Control",
      "Project & Deliverable Tracking",
      "Client Collaboration Workspace",
      "Real-time Status Updates"
    ],
    architecture: ["React", "Express REST API", "JWT", "PostgreSQL"],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    challenges:
      "Implementing clean API-level role-based authorization middleware that prevents data leakage between agencies and clients, while optimizing complex relational queries to compile project status, deliverable versions, and comment feeds in a single database roundtrip.",
    github: "https://github.com/RanaAkansha/studio-sync",
    demo: "https://studio-sync-kappa.vercel.app",
    featured: true,
  },
];
