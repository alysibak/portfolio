import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import ExperienceClient from './ExperienceClient';

export const metadata = generateSEOMetadata({
  title: "Professional Experience",
  description: "Software Developer Co-op at P&P Optica building AI-powered systems. Teaching Assistant at University of Guelph. Experience with React, TypeScript, AWS, and Agile development.",
  path: "/experience",
});

export default function ExperiencePage() {
  return <ExperienceClient />;
}
