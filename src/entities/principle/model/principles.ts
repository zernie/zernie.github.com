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
  Zap,
  Layers,
  Network,
  Award,
} from "lucide-react";

export type PrincipleCategory = "Development" | "Architecture" | "Favorite Articles";

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
  {
    title: "Domain-Driven Design",
    description: "Modeling software architecture based on business domain complexity and ubiquitous language.",
    category: "Architecture",
    icon: Network,
  },

  {
    title: "AI-Enhanced Development",
    description: "Extensively using Claude Code, Codex, and other AI tools to accelerate development and improve code quality.",
    category: "Development",
    icon: Lightbulb,
  },
  {
    title: "Developer Experience First",
    description: "Prioritizing great tooling, powerful linting setups, and smooth workflows that make development a joy.",
    category: "Development",
    icon: Wrench,
  },
  {
    title: "SOLID Principles",
    description: "Following object-oriented design principles (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) for maintainable code.",
    category: "Development",
    icon: Layers,
  },

  // Favorite Articles
  {
    title: "Parse, Don't Validate",
    description: "A type-driven approach to data validation that makes invalid states unrepresentable at compile time.",
    category: "Favorite Articles",
    icon: FileText,
    href: "https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/",
  },
  {
    title: "Making Invalid States Unrepresentable",
    description: "Designing data structures and types so that illegal states cannot be constructed in the first place.",
    category: "Favorite Articles",
    icon: BookOpen,
    href: "https://geeklaunch.io/blog/make-invalid-states-unrepresentable/",
  },
  {
    title: "You Might Not Need an Effect",
    description: "Essential React guidance on when to avoid useEffect and use more appropriate patterns for better code.",
    category: "Favorite Articles",
    icon: Zap,
    href: "https://react.dev/learn/you-might-not-need-an-effect",
  },
  {
    title: "Choose Boring Technology",
    description: "Dan McKinley's influential piece on why you should prefer proven, stable technology over shiny new tools.",
    category: "Favorite Articles",
    icon: Award,
    href: "https://mcfunley.com/choose-boring-technology",
  },
];
