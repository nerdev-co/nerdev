export interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  tags: string[];
  description: string;
  accent: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  type?: 'client' | 'personal';
  links?: { live?: string; github?: string };
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "modheshwari",
    title: "Modheshwari",
    client: "Self-initiated",
    year: 2024,
    tags: ["Community Platform", "Real-time", "Event Management"],
    description: "Full-stack community management platform designed to support 10,000–15,000 members — covering events, resource requests, real-time notifications, and role-based governance.",
    accent: "#8b5cf6",
    problem: "Built to replace scattered spreadsheets, group chats, and manual follow-ups for a community organization. Needed to support family/member management, role-based governance, event approvals, resource requests, and real-time communication at scale.",
    approach: [
      "Designed and implemented the full architecture — backend API, WebSocket service, data model, authentication/authorization, async notification pipeline, and deployment/monitoring setup",
      "Built an async notification pipeline (Kafka + Redis) so delivery never blocks the main API request path",
      "Modeled multi-step, multi-approver approval workflows (events, resource requests) as stateful domain logic in Prisma",
      "Built a WebSocket service for realtime chat/notifications that stays resilient across HTTP, Redis, Kafka, and DB dependencies",
      "Set up CI/CD with GitHub Actions to build, test, and deploy Docker images to AWS ECR/ECS, with Prometheus and Grafana monitoring"
    ],
    stack: ["TypeScript", "Bun", "Next.js 15", "React 19", "Tailwind CSS", "Elysia", "Prisma ORM", "PostgreSQL", "Redis", "Kafka", "Docker Compose", "GitHub Actions", "Prometheus/Grafana", "Terraform"],
    outcome: "Live, portfolio-ready platform with production-minded architecture. Designed for a 10–15k member community with async event pipelines, role-based workflow automation, and full CI/CD to AWS ECR/ECS.",
    metrics: [
      { label: "Designed Scale", value: "10–15k" },
      { label: "Services", value: "3" },
      { label: "Pipeline", value: "Async" }
    ],
    type: 'personal',
    links: {
      live: "https://modheshwari.nerdev.in/",
      github: "https://github.com/nerdev-co/modheshwari"
    },
    image: "/modheshwari.png"
  },
  {
    slug: "logistics-dashboard",
    title: "Fleet Command Center",
    client: "Logistics Startup",
    year: 2025,
    tags: ["SaaS", "Dashboard", "Real-time"],
    description: "Real-time fleet tracking and logistics management dashboard for a YC-backed logistics startup.",
    accent: "#e85d04",
    problem: "The client was manually tracking deliveries across 200+ vehicles using spreadsheets and phone calls. They had no visibility into fleet location, driver status, or delivery ETAs. Their operations team spent 4 hours daily just updating tracking sheets.",
    approach: [
      "Built a real-time WebSocket infrastructure to track 200+ vehicles with sub-second updates",
      "Designed a custom map visualization showing fleet positions, routes, and delivery status",
      "Created driver mobile app with offline-first capability for poor connectivity areas",
      "Implemented automated route optimization reducing fuel costs by 18%",
      "Added predictive ETA with ML-based traffic modeling"
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Mapbox", "Redis", "AWS"],
    outcome: "Operations team went from 4 hours of manual tracking to real-time visibility. Customer support tickets dropped 60%. Fleet utilization improved 22% in the first month.",
    metrics: [
      { label: "Vehicles Tracked", value: "200+" },
      { label: "Support Tickets", value: "-60%" },
      { label: "Fuel Savings", value: "18%" }
    ]
  },
  {
    slug: "fintech-ai-agent",
    title: "Wealth AI Assistant",
    client: "Fintech Company",
    year: 2025,
    tags: ["AI", "LLM", "Finance"],
    description: "AI-powered wealth management assistant with autonomous investment research capabilities.",
    accent: "#3a86ff",
    problem: "The client's wealth management service had 10,000+ clients but only 3 advisors. New clients waited 3+ weeks for initial consultations. They needed a way to scale advisory services without hiring more humans.",
    approach: [
      "Built an LLM-powered research agent that monitors market data, news, and财报",
      "Created personalized portfolio recommendations based on risk tolerance and goals",
      "Implemented human-in-the-loop approval for all trades with full audit trail",
      "Added conversational interface for client questions about their portfolio",
      "Designed escalation flow to human advisors for complex scenarios"
    ],
    stack: ["Python", "LangChain", "OpenAI", "FastAPI", "PostgreSQL", "AWS", "React"],
    outcome: "New client onboarding dropped from 3 weeks to 3 minutes. Advisor productivity increased 15x. Client satisfaction scores hit 4.8/5.0.",
    metrics: [
      { label: "Onboarding Time", value: "3min" },
      { label: "Advisor Output", value: "15x" },
      { label: "Satisfaction", value: "4.8/5" }
    ]
  },
  {
    slug: "ecommerce-platform",
    title: "Commerce Engine",
    client: "DTC Brand",
    year: 2024,
    tags: ["E-commerce", "Full-stack", "Inventory"],
    description: "Custom headless e-commerce platform with real-time inventory and custom checkout flow.",
    accent: "#22c55e",
    problem: "The client was using Shopify but losing 30% of sales to cart abandonment. Their unique product requirements (custom sizing, Made-to-Order) weren't supported by off-the-shelf solutions. They needed full control over the checkout experience.",
    approach: [
      "Built headless Commerce API with custom product configuration engine",
      "Designed real-time inventory tracking across 3 warehouses",
      "Created custom checkout flow with size guides, try-before-buy options",
      "Implemented automated restock predictions to prevent stockouts",
      "Added post-purchase upsell flow increasing AOV by 35%"
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    outcome: "Cart abandonment dropped from 30% to 8%. Revenue increased 3x in 6 months. Zero stockouts since launch.",
    metrics: [
      { label: "Cart Abandonment", value: "-73%" },
      { label: "Revenue", value: "3x" },
      { label: "AOV Increase", value: "35%" }
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}