import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import SkillsClient from './SkillsClient';

export const metadata = generateSEOMetadata({
  title: "Technical Skills",
  description: "Full-stack development skills including React, TypeScript, JavaScript, Node.js, NestJS, AWS, and more. Expert in building modern web applications with responsive design.",
  path: "/skills",
});

export default function SkillsPage() {
  return <SkillsClient />;
}
