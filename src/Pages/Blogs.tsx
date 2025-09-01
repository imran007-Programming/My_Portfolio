"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { blogs, type Blog } from "../Components/Blogs/blog";

export default function Blogs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="blogs" ref={sectionRef} className="py-16 container">
      <div className="max-w-7xl w-full px-6 space-y-10 mt-30">
        <h2 className="text-center sm:text-6xl text-4xl font-extrabold space-x-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            My
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            Blogs
          </span>
        </h2>

        {/* Animated Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          {blogs.map((blog: Blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="group block rounded-xl overflow-hidden hover:shadow-xl transition-shadow backdrop-blur"
            >
              {blog.image && (
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
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

                <h3 className="text-xl font-semibold leading-snug">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
                    {blog.title}
                  </span>
                </h3>

                <p className="text-gray-700 dark:text-gray-300">
                  {blog.excerpt}
                </p>

                {blog.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-700 to-blue-500 dark:from-purple-600 dark:to-pink-600 text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
