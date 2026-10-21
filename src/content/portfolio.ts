export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ProjectEntry = {
  slug: string;
  number: string;
  title: string;
  kind: string;
  summary: string;
  contribution: string;
  impact: string;
  tags: string[];
  href?: string;
  github?: string;
  visual: "featurelab" | "horus" | "zesty" | "currency" | "rules" | "chat";
};

export const profile = {
  name: "Saurabh Dohaiya",
  role: "Former Software Engineer",
  company: "Aspora",
  intro:
    "I build reliable platforms and product experiences, from infrastructure to customer-facing products.",
  email: "career.saurabhdohaiya@gmail.com",
  phone: "+91 9770567018",
  portrait: "/images/profile.jpeg",
  resume: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/saurabhdohaiya" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saurabhdohaiya/" },
    { label: "LeetCode", href: "https://leetcode.com/u/saurabhdohaiya/" },
  ] satisfies SocialLink[],
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Aspora",
    period: "Dec 2024 — Aug 2026",
    summary:
      "Expanded from frontend engineering into full-stack platform ownership, delivering backend services, Java SDKs, developer tooling, and customer-facing web experiences.",
    highlights: [
      "Architected FeatureLab, a feature management platform adopted by 5+ internal services.",
      "Led Horus server-driven UI capabilities powering configurable forms, widgets, and workflows across 15+ production dashboards.",
      "Built and maintained a reusable React component platform distributed as an internal NPM package.",
      "Optimized the Next.js marketing site, generating ~2.95M monthly Google Search impressions; migrated 600+ blogs to Sanity CMS and improved B2B dashboard engagement by 25%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Digiotech Solutions",
    period: "Jan 2024 — Jun 2024",
    summary:
      "Worked on form dashboards, workflow efficiency, and e-sign provider integrations.",
    highlights: [
      "Designed dashboard UI improvements that reduced interface load times by 30%.",
      "Built copy-paste functionality that improved user efficiency by 25% and reduced errors by 15%.",
      "Integrated alternative e-sign provider redirection, increasing document completion by 10%.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Go", "Hibernate / JPA", "Node.js", "Express.js", "REST APIs", "Microservices"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman"],
  },
  {
    title: "Data & caching",
    skills: ["PostgreSQL", "SQL", "MongoDB", "Redis"],
  },
  {
    title: "Distributed systems",
    skills: ["Pub/Sub", "Event-driven architecture", "Distributed configuration", "Caching"],
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: "featurelab",
    number: "01",
    title: "FeatureLab",
    kind: "Platform engineering · Aspora",
    summary:
      "A company-wide feature management platform for self-service rollouts and distributed configuration across services.",
    contribution:
      "Architected the platform and SDK. Feature evaluation uses local cache-aside storage, with Redis pub/sub invalidation for near real-time configuration sync; transactional concurrency fixes improved reliability.",
    impact: "Adopted by 5+ internal services",
    tags: ["Java SDK", "Redis", "Pub/Sub", "Distributed configuration"],
    visual: "featurelab",
  },
  {
    slug: "horus",
    number: "02",
    title: "Horus",
    kind: "Server-driven UI · Aspora",
    summary:
      "A server-driven UI platform with configurable forms, widgets, and workflow components, alongside a reusable React component system.",
    contribution:
      "Led development of the platform and its shared UI package, creating configurable building blocks for internal product teams and accelerating feature delivery.",
    impact: "Powers 15+ production dashboards",
    tags: ["React", "Server-driven UI", "NPM package", "Design systems"],
    visual: "horus",
  },
  {
    slug: "zesty",
    number: "03",
    title: "Zesty",
    kind: "Full-stack product · Personal project",
    summary:
      "A restaurant ordering product with customer ordering, restaurant management, authentication, and payment flows.",
    contribution:
      "Built REST APIs for users, restaurants, and orders, plus JWT authentication and Stripe payment integration to improve scalability and support more transactions.",
    impact: "Authentication work reported a 30% increase in user retention",
    tags: ["MongoDB", "Express", "React", "React Hooks", "Node.js", "JWT", "Stripe", "ShadCN UI"],
    href: "https://mern-food-ordering-app-frontend-3s52.onrender.com/",
    github: "https://github.com/saurabhdohaiya/mern-food-ordering-app-frontend",
    visual: "zesty",
  },
  {
    slug: "currency-exchange-alert",
    number: "04",
    title: "Currency Exchange Alert",
    kind: "Full-stack product · Personal project",
    summary:
      "A currency exchange dashboard for converting currencies, tracking live rates, and setting target-rate alerts.",
    contribution:
      "Built the React interface for live rates, Google sign-in, a Firestore-backed alert dashboard, and exchange-rate history charts, with animated interactions and responsive layouts.",
    impact: "A live demo is available",
    tags: ["React", "Firebase", "Firestore", "Chart.js", "Framer Motion", "Tailwind CSS"],
    href: "https://currency-exchange-alert-frontend.vercel.app/",
    github: "https://github.com/saurabhdohaiya/currency-exchange-alert-frontend",
    visual: "currency",
  },
  {
    slug: "ast-rule-engine",
    number: "05",
    title: "AST Rule Engine",
    kind: "Full-stack product · Personal project",
    summary:
      "A rule builder that creates, combines, and evaluates conditional rules represented as abstract syntax trees.",
    contribution:
      "Implemented APIs to create rules from expressions, combine them with AND/OR logic, persist the resulting trees, and evaluate them against input data.",
    impact: "Create, combine, and evaluate rules in one workflow",
    tags: ["TypeScript", "Node.js", "AST", "REST API", "React"],
    href: "https://ast-rule-engine-frontend.onrender.com/create-rule",
    github: "https://github.com/saurabhdohaiya/ast-rule-engine-backend",
    visual: "rules",
  },
  {
    slug: "chatbyte",
    number: "06",
    title: "ChatByte",
    kind: "Realtime product · Personal project",
    summary:
      "A real-time messaging app for one-to-one conversations and group chats, with member management and message notifications.",
    contribution:
      "Built a MERN chat experience with Socket.io messaging, JWT authentication, group administration, profile views, and a Chakra UI interface.",
    impact: "Supports direct and group conversations",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT", "Chakra UI"],
    github: "https://github.com/saurabhdohaiya/chatByte",
    visual: "chat",
  },
];

export const education = {
  institution: "Indian Institute of Information Technology, Kota",
  degree: "B.Tech, Computer Science & Engineering",
  period: "Oct 2020 — May 2024",
  result: "CGPA 7.95",
};
