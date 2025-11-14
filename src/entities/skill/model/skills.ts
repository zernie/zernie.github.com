export type SkillCategory = "Frontend" | "Backend" | "AI/ML" | "DevOps/Tools";

export interface Skill {
  title: string;
  icon: string;
  category: SkillCategory;
  isExpert: boolean;
}

export const skills: Skill[] = [
  // Frontend
  { title: "React", icon: "/images/skills/react.svg", category: "Frontend", isExpert: true },
  { title: "TypeScript", icon: "/images/skills/typescriptlang-icon.svg", category: "Frontend", isExpert: true },
  { title: "Next.js", icon: "/images/skills/next.svg", category: "Frontend", isExpert: true },
  { title: "Redux Toolkit", icon: "/images/skills/redux.svg", category: "Frontend", isExpert: true },
  { title: "Ant Design", icon: "/images/skills/antd.svg", category: "Frontend", isExpert: false },
  { title: "Shadcn", icon: "/images/skills/shadcn.svg", category: "Frontend", isExpert: false },

  // Backend
  { title: "Ruby on Rails", icon: "/images/skills/rails.svg", category: "Backend", isExpert: true },
  { title: "PostgreSQL", icon: "/images/skills/postgresql.svg", category: "Backend", isExpert: true },
  { title: "Redis", icon: "/images/skills/redis.svg", category: "Backend", isExpert: false },
  { title: "Node.js", icon: "/images/skills/node.svg", category: "Backend", isExpert: false },
  { title: "GraphQL", icon: "/images/skills/graphql.svg", category: "Backend", isExpert: false },
  { title: "Elasticsearch", icon: "/images/skills/elasticsearch.svg", category: "Backend", isExpert: false },

  // AI/ML
  { title: "Vercel AI SDK", icon: "/images/skills/vercel.svg", category: "AI/ML", isExpert: false },
  { title: "GitHub Spec Kit", icon: "/images/skills/github.svg", category: "AI/ML", isExpert: false },
  { title: "Braintrust", icon: "/images/skills/braintrust.svg", category: "AI/ML", isExpert: false },

  // DevOps/Tools
  { title: "Docker", icon: "/images/skills/docker.svg", category: "DevOps/Tools", isExpert: false },
  { title: "GitHub Actions", icon: "/images/skills/github-actions.svg", category: "DevOps/Tools", isExpert: false },
  { title: "Vercel", icon: "/images/skills/vercel.svg", category: "DevOps/Tools", isExpert: false },
];
