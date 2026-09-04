/**
 * ─────────────────────────────────────────────────────────────────────────
 * FEATURED PROJECTS
 * ─────────────────────────────────────────────────────────────────────────
 * These are your two showcase projects. Text marked [PLACEHOLDER …] is
 * intentionally generic — replace it with the real description once each
 * project is built. To add a THIRD project later, copy one object in this
 * array, update the fields, and it will render automatically.
 *
 * Link fields are optional. Leave a link as an empty string ('') or remove
 * the key to hide that button (useful for demos that aren't hosted).
 */
export interface Project {
  name: string
  /** Short, business-oriented summary shown on the card. */
  description: string
  /** Type label shown as a small tag, e.g. "Monolithic Application". */
  kind: string
  technologies: string[]
  keyFeatures: string[]
  links: {
    github?: string
    /** Architecture / documentation link (README, diagram, docs site). */
    architecture?: string
    /** Optional live demo — leave empty if the backend isn't hosted. */
    demo?: string
  }
  /** Set false while the project is still in progress to show a "Coming soon" badge. */
  published?: boolean
}

export const projects: Project[] = [
  {
    name: '[PROJECT 1 NAME] — Business Application',
    kind: 'Monolithic Application',
    description:
      '[PLACEHOLDER] A production-style business application built as a single, well-structured Spring Boot service. Replace this with a short, client-facing description of what the application does and the problem it solves.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'JPA / Hibernate',
      'PostgreSQL',
      'REST APIs',
      'Swagger / OpenAPI',
      'JUnit',
      'Mockito',
      'Docker',
    ],
    keyFeatures: [
      'Secure authentication and authorization with Spring Security and JWT',
      'RESTful APIs documented with Swagger / OpenAPI',
      'Relational data modeling with JPA/Hibernate on PostgreSQL',
      'Unit and integration tests with JUnit and Mockito',
      'Containerized with Docker for consistent deployment',
    ],
    links: {
      github: 'https://github.com/SudarshanMDev',
      architecture: '', // e.g. link to README section or an architecture diagram
      demo: '',
    },
    published: false,
  },
  {
    name: '[PROJECT 2 NAME] — Microservices Platform',
    kind: 'Microservices Application',
    description:
      '[PLACEHOLDER] A production-style microservices system built with Spring Boot, communicating over REST and Kafka behind an API gateway. Replace this with a short description of the business scenario it models. AI capabilities (LLM integration / document extraction) are demonstrated within one of the services.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST',
      'API Gateway',
      'Kafka',
      'PostgreSQL',
      'Docker',
      'Resilience / Circuit Breaker',
      'Authentication',
      'AI / LLM Integration',
    ],
    keyFeatures: [
      'Multiple independently deployable Spring Boot services',
      'API gateway for routing and a single entry point',
      'Event-driven communication with Kafka',
      'Resilience patterns: retry and circuit breaker for fault tolerance',
      'Distributed service-to-service communication with authentication',
      'AI/LLM integration built into one service as a practical feature',
    ],
    links: {
      github: 'https://github.com/SudarshanMDev',
      architecture: '',
      demo: '',
    },
    published: false,
  },
]
