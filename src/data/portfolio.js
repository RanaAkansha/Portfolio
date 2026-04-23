// Portfolio Data - Customize this file with your own information

export const personalInfo = {
  name: "Akansha Rana",
  title: "Applied AI Full Stack Developer",
  tagline: "Creative Frontend Dev | Clean Code. Smooth UI. Big Dreams.",
  bio: `Computer Science student and Applied AI Full Stack Developer. I love exploring the universe, learning about dark energy, and building my skills in AI/ML. I believe complex topics should be explained in a simple & relatable way. Keep Learning & Never Settle.`,
  email: "akansharana0620@gmail.com",
  linkedin: "https://www.linkedin.com/in/akansha-rana",
  github: "https://github.com/RanaAkansha",
  resumeUrl: "#",
};

export const projects = [
  {
    id: 1,
    title: "News Sphere",
    description:
      "A fast and simple news site connected to YouTube Shorts. Features a clean layout that is mobile responsive and highly optimized for short-form video content.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://github.com/RanaAkansha/news-sphere",
    repoUrl: "https://github.com/RanaAkansha/news-sphere",
    featured: true,
    color: "#6c5ce7",
  },
  {
    id: 2,
    title: "Travel Guide Website",
    description:
      "Interactive travel guide featuring modern glassmorphism aesthetics and animated hover effects. Includes split hover sections and large immersive destination images.",
    techStack: ["HTML", "CSS (Vanilla)", "JavaScript"],
    liveUrl: "https://github.com/RanaAkansha/travel-guide",
    repoUrl: "https://github.com/RanaAkansha/travel-guide",
    featured: true,
    color: "#00cec9",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A creative personal portfolio site featuring a futuristic loader, a rising hero section with the 'Never Settle' philosophy, and fully responsive layout.",
    techStack: ["Tailwind CSS", "JavaScript", "HTML"],
    liveUrl: "https://github.com/RanaAkansha/portfolio",
    repoUrl: "https://github.com/RanaAkansha/portfolio",
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
