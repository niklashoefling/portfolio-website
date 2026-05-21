export interface Project {
  title: string;
  tech: string[];
  slug?: string;
  isComingSoon?: boolean;
  year?: string;
  intro?: string;
  fullDescription?: string;
  heroImage?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    tech: ['Next.js', 'Tailwind CSS', 'React', 'Vercel', 'TypeScript'],
    slug: 'portfolio-website',
    year: '2026',
    intro:
      'A personal portfolio built to showcase projects and skills with a clean, minimal aesthetic.',
    fullDescription: `
      Designed and developed from scratch using Next.js and Tailwind CSS.
      The goal was to create a fast, accessible, and visually refined space
      that reflects both technical capability and design sensibility.

      The site uses static generation for fast page loads and smooth navigation,
      with a focus on typography and whitespace to let the work speak for itself.
    `,
    heroImage: '/portfolio-website-hero.jpeg',
    githubLink: 'https://github.com/niklashoefling/portfolio-website',
  },
  {
  title: 'TutoAgent',
  tech: ['LangGraph', 'TypeScript', 'SAP AI Core', 'SAP BTP', 'GitHub MCP', 'React', 'Vite', 'Express.js', 'Socket.io'],
  slug: 'tutoagent',
  year: '2026',
  intro:
    'A multi-agent LLM pipeline that automatically generates developer tutorials from GitHub Pull Requests - built on SAP BTP.',
  fullDescription: `
    TutoAgent is a cloud-native AI system developed during my rotation in the
    S/4HANA Cloud Foundation team at SAP. It automates the creation and maintenance
    of developer documentation by analysing code changes in GitHub Pull Requests.

    The system is built as a multi-agent pipeline using LangGraph, with specialised
    agents for classification, code review, document retrieval, tutorial writing,
    diff analysis, and patch generation. It runs on SAP AI Core and integrates
    directly with GitHub workflows.

    The pipeline reduces manual documentation effort, allowing developer teams to 
    keep tutorials in sync with code changes at scale.
  `,
  heroImage: '/tutoagent-hero.jpg',
},
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
