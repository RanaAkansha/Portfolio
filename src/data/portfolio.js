// Portfolio Data - Customize this file with your own information

export const personalInfo = {
  name: "Akansha Rana",
  title: "Computer Science Student | Full-Stack Developer | Applied AI (React, Python, RAG)",
  tagline: "Full Stack Developer focused on practical AI that works in the real world.",
  bio: `I am a Computer Science student, Full-Stack Developer, and Applied AI enthusiast. My journey in tech started with web development, and I've grown to specialize in React, Python, and RAG systems. I believe in writing clean code, building smooth UIs, and constantly learning. Whether I'm developing AI-driven platforms or scalable portals, my goal is always to create impactful digital experiences. Keep Learning & Never Settle.`,
  email: "akansharana0620@gmail.com",
  linkedin: "https://www.linkedin.com/in/akansha-rana",
  github: "https://github.com/RanaAkansha",
  devTo: "https://dev.to/akansha_rana",
  resumeUrl: "#",
};

export const projects = [
  {
    id: 1,
    title: "intervAI",
    description:
      "An AI-powered interview preparation platform using RAG and modern web technologies to simulate realistic technical interviews and provide actionable feedback.",
    techStack: ["React", "Python", "RAG", "Next.js"],
    liveUrl: "https://github.com/RanaAkansha",
    repoUrl: "https://github.com/RanaAkansha",
    featured: true,
    color: "#6c5ce7",
  },
  {
    id: 2,
    title: "CampusCore",
    description:
      "A comprehensive student and admin portal designed to streamline university operations with secure authentication and robust database management.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    liveUrl: "https://github.com/RanaAkansha",
    repoUrl: "https://github.com/RanaAkansha",
    featured: true,
    color: "#00cec9",
  },
  {
    id: 3,
    title: "Nearby",
    description:
      "A location-based application connecting users to nearby places and events using real-time geolocation and interactive maps.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://github.com/RanaAkansha",
    repoUrl: "https://github.com/RanaAkansha",
    featured: false,
    color: "#fd79a8",
  }
];

export const skills = {
  frontend: [
    { name: "React / Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML / CSS", level: 95 },
    { name: "UI/UX Design", level: 80 },
  ],
  backend: [
    { name: "Python", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Applied AI/ML", level: 70 },
    { name: "APIs", level: 80 },
  ],
  tools: [
    { name: "Git / GitHub", level: 90 },
    { name: "Figma", level: 85 },
    { name: "Vercel", level: 80 },
    { name: "VS Code", level: 95 },
  ],
};

// Zone positions in the 3D world (x, z coordinates)
export const zonePositions = {
  spawn: { x: 0, z: 0 },
  about: { x: -25, z: -20 },
  projects: { x: 25, z: -15 },
  skills: { x: -20, z: 25 },
  contact: { x: 20, z: 28 },
};
