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
    tech: ['Next.js', 'Tailwind CSS', 'React', 'Vercel'],
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
    heroImage: '/portfolio-website-hero.png',
    githubLink: 'https://github.com/niklashoefling/portfolio-website',
  },
  {
    title: 'Future Project',
    tech: [],
    intro:
      'Something exciting is being built right now. Stay tuned for updates on my latest tech exploration.',
    isComingSoon: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
