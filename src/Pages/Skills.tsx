import { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa"; // Frontend and Backend icons
import {
  SiRedux,
  SiTypescript,
  SiSass,
  SiMongodb,
  SiPostgresql,
  SiVite,
  SiReact,
} from "react-icons/si"; // Redux, Typescript, Sass, MongoDB, PostgreSQL icons
import { motion } from "framer-motion"; // For animation

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
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
    <div
      id="skills"
      ref={sectionRef}
      className="container min-h-screen flex justify-center items-center py-16"
    >
      <div className="max-w-7xl w-full px-6 space-y-16">
        {/* Title */}
        <h2 className="text-center sm:text-6xl text-4xl font-extrabold space-x-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            My
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            Skills
          </span>
        </h2>

        {/* Skills Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          {/* Skill Cards */}
          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">HTML</span>
            </div>
            <FaHtml5 className="w-20 h-20 object-contain text-orange-500" />
          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">CSS</span>
            </div>
            <FaCss3Alt className="w-20 h-20 object-contain text-blue-500" />
          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">JavaScript</span>
            </div>
            <FaJs className="w-20 h-20 object-contain text-yellow-500" />
          </div>
          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">React</span>
            </div>
            <SiReact className="w-20 h-20 object-contain text-blue-500" />
          </div>
          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">Vite</span>
            </div>
            <SiVite className="w-20 h-20 object-contain text-[#646CFF]" />

          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">TypeScript</span>
            </div>
            <SiTypescript className="w-20 h-20 object-contain text-blue-600" />
          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">Redux</span>
            </div>
            <SiRedux className="w-20 h-20 object-contain text-indigo-600" />
          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">Sass</span>
            </div>
            <SiSass className="w-20 h-20 object-contain text-pink-600" />
          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">Node.js</span>
            </div>
            <FaNodeJs className="w-20 h-20 object-contain text-green-600" />
          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">Express.js</span>
            </div>
            <FaDatabase className="w-20 h-20 object-contain text-red-600" />
          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">MongoDB</span>
            </div>
            <SiMongodb className="w-20 h-20 object-contain text-green-500" />
          </div>

          <div className="relative group w-32 h-32 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-xl">PostgreSQL</span>
            </div>
            <SiPostgresql className="w-20 h-20 object-contain text-blue-700" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
