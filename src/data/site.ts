/**
 * ─────────────────────────────────────────────────────────────────────────
 * SITE-WIDE CONTENT & PLACEHOLDERS
 * ─────────────────────────────────────────────────────────────────────────
 * Edit the values below to update your name, headline, and contact details.
 * Anything wrapped in [SQUARE BRACKETS] is a PLACEHOLDER — replace it with
 * your real information before publishing.
 */

export const site = {
  name: 'Sudarshan More',
  role: 'Java & Spring Boot Developer',

  // Short tagline shown in the hero (kept factual, outcome-focused).
  tagline:
    'I build reliable backend systems, REST APIs, microservices, and AI-powered business applications.',

  // One-line meta shown near the name / in the footer.
  shortPitch: 'Backend engineering for startups and businesses — available for freelance projects.',

  // ── Contact details ──────────────────────────────────────────────────
  // Replace the placeholders. Leave GitHub as-is (it is already correct).
  contact: {
    email: '[YOUR EMAIL]', // e.g. 'you@example.com'
    linkedin: '[YOUR LINKEDIN]', // e.g. 'https://www.linkedin.com/in/your-handle'
    github: 'https://github.com/SudarshanMDev',
    location: '[YOUR LOCATION]', // e.g. 'Pune, India — working with clients worldwide'
  },

  // Availability badge shown in the hero. Set `available: false` to hide it.
  availability: {
    available: true,
    label: 'Available for freelance projects',
  },
} as const

export type Site = typeof site
