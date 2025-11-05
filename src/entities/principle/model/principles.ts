import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Sparkles,
  Box,
  BookOpen,
  Blocks,
  Lightbulb,
  Wrench,
  FileText,
} from "lucide-react";

export type PrincipleCategory = "Development" | "Architecture" | "Tools & AI" | "Articles";

export interface Principle {
  title: string;
  description: string;
  category: PrincipleCategory;
  icon: LucideIcon;
  href?: string; // Optional link for articles
}

export const principles: Principle[] = [
  // Development Principles
  {
    title: "Functional Programming",
    description: "Leveraging pure functions, immutability, and composability to build predictable and maintainable systems.",
    category: "Development",
    icon: Code2,
  },
  {
    title: "Purity & Immutability",
    description: "Writing side-effect-free code with immutable data structures for easier testing and reasoning.",
    category: "Development",
    icon: Sparkles,
  },
  {
    title: "Strong Typing",
    description: "Using TypeScript's type system to catch errors at compile time and improve developer experience.",
    category: "Development",
    icon: Box,
  },

  // Architecture
  {
    title: "Feature-Sliced Design",
    description: "Organizing code by business features with clear layer boundaries for scalable frontend architecture.",
    category: "Architecture",
    icon: Blocks,
  },

  // Tools & AI
  {
    title: "AI-Enhanced Development",
    description: "Extensively using Claude Code, Codex, and other AI tools to accelerate development and improve code quality.",
    category: "Tools & AI",
    icon: Lightbulb,
  },
  {
    title: "Developer Experience First",
    description: "Prioritizing great tooling, powerful linting setups, and smooth workflows that make development a joy.",
    category: "Tools & AI",
    icon: Wrench,
  },

  // Articles
  {
    title: "Parse, Don't Validate",
    description: "A type-driven approach to data validation that makes invalid states unrepresentable at compile time.",
    category: "Articles",
    icon: FileText,
    href: "https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/",
  },
  {
    title: "Making Invalid States Unrepresentable",
    description: "Designing data structures and types so that illegal states cannot be constructed in the first place.",
    category: "Articles",
    icon: BookOpen,
    href: "https://ybogomolov.me/making-invalid-states-unrepresentable",
  },
];
