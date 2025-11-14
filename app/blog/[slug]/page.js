import { notFound } from 'next/navigation';
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import BlogPostClient from './BlogPostClient';
import { blogPosts } from '@/lib/data';

export async function generateMetadata({ params }) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    return {};
  }

  return generateSEOMetadata({
    title: `${post.title} - Aly Sibak`,
    description: post.excerpt,
    path: `/blog/${params.slug}`
  });
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
