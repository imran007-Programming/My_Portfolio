import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import handAnimation from "../assets/About Us illustation Animation.json";
import { motion } from "framer-motion";

export default function About() {
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
      { threshold: 0.5 } // Trigger when 20% of the section is in view
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
      id="about"
      ref={sectionRef}
      className=" w-full flex justify-center items-center sm:min-h-[20vh]  "
    >
      <div className="px-6 py-12 space-y-8 max-w-7xl w-full">
        <h1 className="sm:text-6xl text-3xl font-extrabold text-center space-x-3">
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            About
          </strong>
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            Me
          </strong>
        </h1>

        {/* Description Section with scroll-triggered fade */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }} 
          transition={{ duration: 2 }}
        >
          {/* Text Section */}
          <div className="text-center md:text-left max-w-4xl">
            <p className="sm:text-xl text-start">
              Hi! I'm Imran, a passionate full-stack developer. I specialize in
              building responsive and scalable web applications. My skillset
              includes technologies like
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                React
              </span>
              &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
                Node.js
              </span>
              &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                MongoDB
              </span>
              &nbsp; and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                PostgreSQL
              </span>
              . I'm constantly learning and improving to create innovative
              solutions that delight users.
              <br />
              <br />
              I am always{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
                optimistic
              </span>
              , solving problems until they're resolved, striving for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                perfection
              </span>
              , and constantly learning new technologies. I also enjoy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500">
                playing games
              </span>
              , watching informative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                videos
              </span>
              , and staying up-to-date with the latest tech trends.
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="">
            <Lottie animationData={handAnimation} loop={true} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
