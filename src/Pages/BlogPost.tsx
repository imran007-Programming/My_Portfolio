// Pages/BlogPost.tsx
import { useParams } from "react-router"; 
import { blogs } from "../Components/Blogs/blog";
import ReactMarkdown from "react-markdown";
import Lottie from "lottie-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div className="container py-16">Blog not found.</div>;

  return (
    <article className="container py-16 max-w-3xl mx-auto space-y-8">
      {blog.lottie && (
        <div className="w-full max-w-xl mx-auto">
          <Lottie animationData={blog.lottie} loop />
        </div>
      )}

      <h1 className="text-4xl font-bold">{blog.title}</h1>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <time dateTime={blog.date}>
          {new Date(blog.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span>•</span>
        <span>{blog.readTime}</span>
      </div>

      <div className="prose dark:prose-invert">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </article>
  );
}
