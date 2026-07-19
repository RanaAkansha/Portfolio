// core: true  = primary stack (highlighted in UI)
// core: false = supporting tools
export const tools = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", core: true },
      { name: "Java", core: true },
      { name: "Python", core: true },
      { name: "HTML5", core: false },
      { name: "CSS3", core: false },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "Responsive Design", core: true },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", core: true },
      { name: "Express.js", core: true },
      { name: "REST APIs", core: true },
      { name: "JWT Authentication", core: false },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", core: true },
      { name: "Supabase", core: true },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", core: true },
      { name: "GitHub", core: true },
      { name: "VS Code", core: false },
      { name: "Postman", core: false },
      { name: "Vercel", core: false },
      { name: "Figma", core: false },
      { name: "WordPress", core: false },
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
      "I try to observe the problem before designing the solution. For CollabDesk, I watched how a project manager actually collaborated with clients — not how she described doing it. There's always a gap between what people say they do and what they actually do. That gap is where the real design happens.",
  },
  {
    question: "Can this be simplified?",
    answer:
      "My first design is almost never the right one. The first version of the CollabDesk workspace interface had five tabs. I cut it to two by asking: what is the minimum information we need right now, and what can we defer? Simplicity is earned through iteration, not assumed from the start.",
  },
  {
    question: "What trade-offs exist?",
    answer:
      "Every technical decision is a trade-off. JWT over sessions trades simplicity for statelessness. PostgreSQL over MongoDB trades flexibility for data integrity. I try to name the trade-off explicitly when making a decision — if I can't name it, I probably don't understand the decision well enough.",
  },
  {
    question: "Who is affected if this breaks?",
    answer:
      "I think about failure modes before I think about the happy path. If authentication breaks in CollabDesk, an agency owner can't access their client workspaces. That's a real business impact. Understanding failure consequence changes how carefully you design error states, fallbacks, and user messaging.",
  },
  {
    question: "What would I do differently next time?",
    answer:
      "I keep a short notes file after each project — not a formal retrospective, just honest observations. Things like: 'I underestimated how complex database schemas can get' or 'I should have talked to one more user before deciding on this structure.' The next project is always better for it.",
  },
];
