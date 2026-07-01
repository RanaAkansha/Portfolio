export const projects = [
  {
    id: "studiosync",
    title: "StudioSync",
    tagline: "A studio management platform that replaces spreadsheets with software.",
    problem:
      "Small creative and digital agencies juggle client work across scattered emails, Google Drive links, and WhatsApp threads. Feedback gets lost, deliverables go unversioned, and clients have no single place to track project status. StudioSync was built to replace that chaos with one role-aware workspace where agencies and their clients collaborate without friction.",
    architecture:
      "StudioSync is a full-stack application with a React 19 + Vite frontend and a Node.js/Express backend, backed by PostgreSQL hosted on Neon's serverless platform. Authentication uses JWT with role-based access control, so Admins and Clients see fundamentally different views from the same codebase — Admins manage all projects, upload deliverables, and oversee multiple clients, while Clients see a focused, read-only view scoped to their own work. The schema separates projects, deliverables, and comments as distinct relational entities, which keeps discussion threads and file history independently queryable as the platform scales to more clients and projects.",
    challenges:
      "The hardest part wasn't the CRUD operations, it was getting access control right without duplicating logic across routes. I solved this by enforcing role and ownership checks at the API/controller level, where requests are verified against the database to ensure clients can only query their own scoped projects while admins retain full workspace access. I also had to think through what 'real-time-feeling' discussion threads should look like without over-engineering actual WebSocket infrastructure for a v1 — I opted for a standard POST-then-GET flow, manually refetching the refreshed comments list immediately after submission to keep the UI feeling live without persistent connections.",
    learned:
      "The hardest part wasn't the code — it was deciding what not to build. Every feature I cut made the core experience sharper.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT", "Tailwind CSS"],
    github: "https://github.com/RanaAkansha/studio-sync",
    demo: "https://studio-sync-kappa.vercel.app",
    featured: true,
    image: null,
  },
  {
    id: "github-finder",
    title: "GitHub Profile Finder",
    tagline: "Search any GitHub user and instantly surface what matters.",
    problem:
      "Needed a fast way to look up GitHub user stats without leaving a clean, focused UI, rather than wasting time navigating the standard GitHub interface to find key metrics like repositories and languages.",
    technicalInterest:
      "Built an API-driven client dashboard consuming the GitHub REST API, featuring debounced searching to handle rate limits, robust error/loading state handling, and interactive repository insights.",
    stack: ["React", "JavaScript", "GitHub REST API", "Vite", "Tailwind CSS"],
    github: "https://github.com/RanaAkansha/github-finder",
    demo: "https://github-profile-insights.vercel.app/",
    featured: false,
    image: null,
  },
  {
    id: "pure-lifestyle-yoga",
    title: "Pure Lifestyle Yoga",
    tagline: "A full-stack studio site that converts visitors into booked clients.",
    problem:
      "A local yoga studio lacked a web presence, leading to high lead conversion and booking friction for classes, consultation bookings, and customer enquiries.",
    technicalInterest:
      "Implemented a complete frontend client experience with a secure admin dashboard powered by Supabase and PostgreSQL to manage client appointments, class offerings, and direct enquiries.",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "https://github.com/RanaAkansha/pure-lifestyle-yoga",
    demo: "https://pure-lifestyle-yoga-ten.vercel.app",
    featured: false,
    image: null,
  },
];
