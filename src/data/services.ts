/**
 * Freelance services. `icon` is the name of a lucide-react icon
 * (see https://lucide.dev/icons). If you change an icon name, also update
 * the icon map in src/sections/Services.tsx.
 */
export interface Service {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'Server',
    title: 'Java & Spring Boot Backend Development',
    description:
      'Design and build backend services with Java and Spring Boot — from data models and business logic to secure, well-structured APIs.',
  },
  {
    icon: 'Webhook',
    title: 'REST API Development',
    description:
      'Clean, documented REST APIs (OpenAPI/Swagger) that are easy for web, mobile, and third-party systems to consume.',
  },
  {
    icon: 'TrendingUp',
    title: 'Existing Application Enhancement',
    description:
      'Add features and improvements to an existing Java/Spring Boot codebase without disrupting what already works.',
  },
  {
    icon: 'Bug',
    title: 'Bug Fixing & Debugging',
    description:
      'Investigate and fix defects in Java/Spring Boot applications — reproduce the issue, find the root cause, and ship a reliable fix.',
  },
  {
    icon: 'Plug',
    title: 'Third-Party API Integration',
    description:
      'Integrate payment, messaging, storage, and other external services into your backend with sensible error handling and retries.',
  },
  {
    icon: 'Network',
    title: 'Microservices Development',
    description:
      'Build and connect Spring Boot microservices with an API gateway, asynchronous messaging, and resilient service-to-service communication.',
  },
  {
    icon: 'Database',
    title: 'Database / SQL Development',
    description:
      'Model relational schemas and write efficient SQL and JPA queries for PostgreSQL and MySQL, with an eye on data integrity.',
  },
  {
    icon: 'Sparkles',
    title: 'AI / LLM Integration',
    description:
      'Add practical AI features to existing applications — LLM API integration, document/data extraction, and RAG-based functionality where it adds real value.',
  },
]
