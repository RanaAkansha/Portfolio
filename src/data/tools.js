// core: true  = primary stack (highlighted in UI)
// core: false = secondary / supporting tools
export const tools = [
  {
    category: "Frontend",
    items: [
      { name: "React", core: true },
      { name: "JavaScript", core: true },
      { name: "TypeScript", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "HTML5", core: false },
      { name: "CSS3", core: false },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", core: true },
      { name: "Express.js", core: true },
      { name: "REST APIs", core: true },
      { name: "JWT Auth", core: false },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", core: true },
      { name: "Supabase", core: true },
      { name: "SQL", core: false },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git", core: true },
      { name: "GitHub", core: true },
      { name: "Figma", core: true },
      { name: "Canva", core: false },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Vercel", core: true },
      { name: "GitHub Pages", core: false },
    ],
  },
];


export const thinkingPrinciples = [
  {
    question: "Why build this feature?",
    answer:
      "Before writing any code, I ask whether this feature actually solves a user problem or just sounds good in a meeting. If I can't articulate the problem it addresses in one sentence, I don't build it. Features built without a clear problem statement are debt from day one.",
  },
  {
    question: "How do I know this solves the user's problem?",
    answer:
      "I try to observe the problem before designing the solution. For StudioSync, I watched how a studio owner actually managed bookings — not how she described managing them. There's always a gap between what people say they do and what they actually do. That gap is where the real design happens.",
  },
  {
    question: "Can this be simplified?",
    answer:
      "My first design is almost never the right one. The first version of the StudioSync booking flow had five steps. I cut it to two by asking: what is the minimum information we need right now, and what can we defer? Simplicity is earned through iteration, not assumed from the start.",
  },
  {
    question: "What trade-offs exist?",
    answer:
      "Every technical decision is a trade-off. JWT over sessions trades simplicity for statelessness. PostgreSQL over MongoDB trades flexibility for data integrity. I try to name the trade-off explicitly when making a decision — if I can't name it, I probably don't understand the decision well enough.",
  },
  {
    question: "Who is affected if this breaks?",
    answer:
      "I think about failure modes before I think about the happy path. If authentication breaks in StudioSync, a studio owner can't access their client list. That's a real business impact. Understanding failure consequence changes how carefully you design error states, fallbacks, and user messaging.",
  },
  {
    question: "What would I do differently next time?",
    answer:
      "I keep a short notes file after each project — not a formal retrospective, just honest observations. Things like: 'I underestimated how complex availability logic would be' or 'I should have talked to one more user before deciding on this structure.' The next project is always better for it.",
  },
];
