"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import educationAnim from "../assets/Book.json";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div id="education" ref={sectionRef} className="container">
      <div className="max-w-7xl w-full px-6 space-y-8">
        {/* Title */}
        <h2 className="text-center sm:text-6xl text-4xl font-extrabold space-x-3 mt-30">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            My
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            Education
          </span>
        </h2>

        {/* Animated Content */}
        <motion.div
          className="sm:flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Left (text) */}
            <div className="flex-1 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
                B.Sc. (Honours) in Chemistry
              </h3>
              <p className="mt-1 text-lg">Lakshmipur Govt. College</p>
              <p className="text-lg">
                Passing Year: <span className="font-medium">2023</span>
              </p>
              <p className="mt-2 text-lg">
                CGPA: <span className="font-bold">3.25 / 4.00</span>
              </p>
            </div>

            {/* Lottie */}
            <div className="flex-1 w-full md:max-w-md">
              <div className="w-full h-64 sm:h-72 md:h-full">
                <Lottie animationData={educationAnim} loop={true} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
