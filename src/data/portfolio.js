// Portfolio Data - Customize this file with your own information

export const personalInfo = {
  name: "Alex Chen",
  title: "Full-Stack Developer",
  tagline: "Interactive Developer Portfolio",
  bio: `Passionate developer who builds immersive digital experiences at the intersection of creativity and technology. 
  Specializing in React, Three.js, and full-stack web development with 4+ years of hands-on experience shipping production applications.`,
  email: "alex@example.dev",
  linkedin: "https://linkedin.com/in/alexchen",
  github: "https://github.com/alexchen",
  resumeUrl: "#",
};

export const projects = [
  {
    id: 1,
    title: "NeuralViz",
    description:
      "Real-time neural network visualization platform that renders deep learning architectures in 3D. Built for researchers to understand model behavior through interactive exploration.",
    techStack: ["React", "Three.js", "Python", "TensorFlow", "WebSocket"],
    liveUrl: "https://neuralviz.demo",
    repoUrl: "https://github.com/alexchen/neuralviz",
    featured: true,
    color: "#6c5ce7",
  },
  {
    id: 2,
    title: "CloudForge",
    description:
      "Infrastructure-as-code platform with visual pipeline editor. Deploy, monitor, and scale microservices through an intuitive drag-and-drop interface.",
    techStack: ["Next.js", "Go", "Docker", "Kubernetes", "PostgreSQL"],
    liveUrl: "https://cloudforge.demo",
    repoUrl: "https://github.com/alexchen/cloudforge",
    featured: true,
    color: "#00cec9",
  },
  {
    id: 3,
    title: "SynthWave FM",
    description:
      "AI-powered music streaming app that generates personalized synthwave playlists using neural audio synthesis and mood detection algorithms.",
    techStack: ["React Native", "Node.js", "PyTorch", "Redis", "AWS"],
    liveUrl: "https://synthwave.demo",
    repoUrl: "https://github.com/alexchen/synthwave",
    featured: true,
    color: "#fd79a8",
  },
  {
    id: 4,
    title: "DataPulse",
    description:
      "Real-time analytics dashboard for SaaS metrics. Track KPIs, generate reports, and receive AI-driven insights about user behavior patterns.",
    techStack: ["Vue.js", "D3.js", "Express", "MongoDB", "GraphQL"],
    liveUrl: "https://datapulse.demo",
    repoUrl: "https://github.com/alexchen/datapulse",
    featured: false,
    color: "#0984e3",
  },
];

export const skills = {
  frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "Three.js / R3F", level: 88 },
    { name: "TypeScript", level: 92 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Vue.js", level: 78 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "Go", level: 72 },
    { name: "PostgreSQL", level: 82 },
    { name: "GraphQL", level: 80 },
  ],
  tools: [
    { name: "Docker", level: 85 },
    { name: "AWS / GCP", level: 78 },
    { name: "Git / CI-CD", level: 92 },
    { name: "Figma", level: 75 },
    { name: "Linux", level: 80 },
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
