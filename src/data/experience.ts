/**
 * ─────────────────────────────────────────────────────────────────────────
 * PROFESSIONAL EXPERIENCE
 * ─────────────────────────────────────────────────────────────────────────
 * Replace the [PLACEHOLDER] fields with your real role, company, and dates.
 * Keep bullet points factual and outcome-focused. Add more entries by copying
 * an object in the array.
 */
export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: '[YOUR CURRENT COMPANY]',
    period: '[START YEAR] – Present',
    summary:
      '2+ years building and maintaining backend applications with Java and Spring Boot, including REST API development, database work, and collaboration with international teams and clients.',
    highlights: [
      'Develop and maintain backend services and REST APIs using Java and Spring Boot',
      'Work with relational databases and write SQL / JPA queries for application data',
      'Debug and resolve issues in existing applications and deliver feature enhancements',
      'Communicate and collaborate with foreign clients and distributed teams',
    ],
  },
]

/**
 * A short list of factual credentials shown alongside experience.
 * Keep these truthful — do not add certifications or awards you don't hold.
 */
export const experienceFacts: string[] = [
  '2+ years of professional software development experience',
  'Focused on Java, Spring Boot, and backend engineering',
  'Comfortable working with international clients across time zones',
]
