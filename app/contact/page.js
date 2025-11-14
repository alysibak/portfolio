import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import ContactClient from './ContactClient';

export const metadata = generateSEOMetadata({
  title: "Contact Me",
  description: "Get in touch with Aly Sibak for Software Development opportunities, co-op positions, or project collaborations. Available for Summer 2026 Co-op. Email: asibak@uoguelph.ca",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
