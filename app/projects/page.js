import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import ProjectsClient from './ProjectsClient';

export const metadata = generateSEOMetadata({
  title: "Projects & Portfolio",
  description: "Full-stack development projects including 3D Interactive Fitness App, Business Websites, and Investment Portfolio Manager. Built with React, Next.js, TypeScript, and Java.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
