export const decisions = [
  {
    id: 1,
    question: "Why JWT instead of sessions?",
    answer:
      "Sessions require server-side storage — fine for monoliths, but painful when you scale horizontally or add a mobile client. JWT lets the client carry its own auth state, making the API stateless. The trade-off is token revocation; I handle it with short expiry + refresh token rotation.",
    icon: "ShieldCheck",
  },
  {
    id: 2,
    question: "Why PostgreSQL over MongoDB?",
    answer:
      "CollabDesk projects have hard relational constraints: a client belongs to a project workspace, a task/deliverable belongs to a project. Enforcing these at the database level with foreign keys and transactions beats trying to simulate them in application code. Relational problems need relational tools.",
    icon: "Database",
  },
  {
    id: 3,
    question: "Why store file URLs instead of files?",
    answer:
      "Storing binary files in a database bloats it and makes backups expensive. Storing the file in object storage (Supabase Storage / S3) and persisting only the URL keeps the database lean, the files scalable, and the CDN doing the work it was built for.",
    icon: "Link",
  },
  {
    id: 4,
    question: "How I structured authentication.",
    answer:
      "Auth is separated into its own Express router with middleware that runs before any protected route. The middleware verifies the JWT, attaches the decoded user to req.user, and hands off. No auth logic leaks into business logic controllers — which means adding OAuth later won't touch the booking or invoice code.",
    icon: "Lock",
  },
  {
    id: 5,
    question: "How I designed API routes.",
    answer:
      "I treat routes as a contract, not an afterthought. I define the resource first (/studios/:id/bookings), then the HTTP verb, then the handler. REST conventions are followed strictly so any developer can predict the endpoint before reading the docs.",
    icon: "GitBranch",
  },
  {
    id: 6,
    question: "Why component reusability matters.",
    answer:
      "Every UI component in CollabDesk was built with a single responsibility. The TaskCard renders a task — it doesn't fetch it, doesn't know who's logged in, and doesn't decide what actions are available. That separation means I can render it in a list, a modal, or a PDF export without changing the component.",
    icon: "Layers",
  },
];
