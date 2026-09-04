/**
 * Skills / tech stack, grouped by category.
 * Add or remove items freely — only list technologies you actually work with.
 */
export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate'],
  },
  {
    category: 'API',
    items: ['REST APIs', 'Swagger / OpenAPI', 'API Integration'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    category: 'Architecture',
    items: ['Monolith', 'Microservices', 'Event-Driven Architecture'],
  },
  {
    category: 'Messaging',
    items: ['Kafka'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
  {
    category: 'AI',
    items: ['LLM APIs', 'RAG', 'AI Integration'],
  },
]
