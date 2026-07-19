export const projects = [
  {
    id: "consultflow",
    title: "ConsultFlow",
    year: "2026",
    positioning: "Lead Conversion & Booking Platform.",
    tagline: "Architected a full-stack booking platform to replace manual lead qualification with a guided multi-step flow.",
    problem:
      "Businesses struggle to convert website visitors into qualified bookings. Leads arrive through disjointed channels and vanish without a structured capture, verification, and appointment scheduling workflow.",
    solution:
      "Designed and developed ConsultFlow, an integrated booking platform featuring a guided qualification flow, an appointment scheduler, and a centralized admin dashboard for real-time specialist matching.",
    bullets: [
      "Architected a full-stack booking platform to replace manual lead qualification with a guided multi-step flow.",
      "Designed a centralized admin dashboard for real-time specialist matching and appointment oversight.",
      "Modeled a Supabase/PostgreSQL schema to keep appointments, specialists, and leads in sync in real time.",
      "Built a reusable React component library to keep the UI consistent across the platform."
    ],
    features: [
      "Guided Multi-step Flow",
      "Specialist Matching",
      "Real-time Dashboard",
      "Supabase Database",
      "Reusable Component Library"
    ],
    architecture: ["React", "Supabase", "PostgreSQL"],
    stack: ["React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    challenges:
      "Modeling a robust Supabase/PostgreSQL schema to keep appointments, specialists, and leads in sync in real time, and designing a reusable React component library to maintain strict UI consistency across the platform.",
    github: "https://github.com/RanaAkansha/consultation-manager",
    demo: "https://pure-lifestyle-yoga-ten.vercel.app/",
    featured: true,
  },
  {
    id: "collabdesk",
    title: "CollabDesk",
    year: "2026",
    positioning: "Client Collaboration Platform.",
    tagline: "Designed a role-based collaboration platform to unify fragmented project and client communication.",
    problem:
      "Agencies and clients communicate across scattered, fragmented channels (emails, chats, drives), leading to misaligned project tracking, data leakages, and poor visibility.",
    solution:
      "Built CollabDesk, a secure role-based client collaboration workspace with JWT authentication, REST APIs for managing deliverables and comments, and scalable components.",
    bullets: [
      "Designed a role-based collaboration platform to unify fragmented project and client communication for agencies.",
      "Implemented JWT-based authentication and access control to separate Admin and Client permissions securely.",
      "Built REST APIs with Express.js and PostgreSQL to manage projects, deliverables, comments, and users.",
      "Structured reusable React components to keep the codebase maintainable as features scaled."
    ],
    features: [
      "Role-Based workspaces",
      "JWT-based Access Control",
      "REST APIs",
      "Deliverable Management",
      "Status Comments"
    ],
    architecture: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    challenges:
      "Implementing JWT-based authentication and secure role-based access control to separate Admin and Client permissions, while scaling reusable components to keep the codebase maintainable.",
    github: "https://github.com/RanaAkansha/client-workspace",
    demo: "https://studio-sync-kappa.vercel.app/",
    featured: true,
  },
];
