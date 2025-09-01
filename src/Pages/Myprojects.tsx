"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import Project2 from "./project/Project2";
import Project1 from "./project/Project1";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
    <div id="projects" ref={sectionRef} className="py-16 container">
      <div className="max-w-7xl w-full px-6 space-y-16">
        {/* Title */}
        <h2 className="text-center sm:text-6xl text-4xl font-extrabold space-x-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            My
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            Projects
          </span>
        </h2>

        {/* Animated Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="space-y-12"
        >
          {/* Project Section 1 */}
          <Project1 />

          {/* Project Section 2 */}
          {/* <Project2 /> */}
        </motion.div>
      </div>
    </div>
  );
}
