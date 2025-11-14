import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import BlogClient from "./BlogClient";

export const metadata = generateSEOMetadata({
  title: "Blog - Aly Sibak",
  description: "Personal thoughts on tech, career, and life. Real talk about software development, internships, and staying balanced.",
  path: "/blog"
});

export default function BlogPage() {
  return <BlogClient />;
}
