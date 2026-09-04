/**
 * "Engineering Approach / Why Work With Me" points.
 * These describe how you work — keep them honest and client-focused.
 * `icon` is a lucide-react icon name (see src/sections/Approach.tsx map).
 */
export interface ApproachItem {
  icon: string
  title: string
  description: string
}

export const approach: ApproachItem[] = [
  {
    icon: 'MessagesSquare',
    title: 'Clear communication',
    description:
      'Regular, jargon-free updates and comfortable working with international clients across time zones.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Reliable, tested code',
    description:
      'Backend code written with maintainability and testing in mind, so it keeps working as your product grows.',
  },
  {
    icon: 'Layers',
    title: 'New builds or existing code',
    description:
      'Whether it is a greenfield backend or an existing Spring Boot application, I can build, extend, and debug it.',
  },
  {
    icon: 'Search',
    title: 'Root-cause debugging',
    description:
      'I reproduce issues, find the underlying cause, and fix it properly rather than patching symptoms.',
  },
  {
    icon: 'GitBranch',
    title: 'Clean, version-controlled workflow',
    description:
      'Organized commits and a transparent Git workflow so you always know what changed and why.',
  },
  {
    icon: 'Sparkles',
    title: 'Practical AI integration',
    description:
      'I add AI/LLM features where they solve a real problem — not as a gimmick, but as a useful part of the application.',
  },
]
