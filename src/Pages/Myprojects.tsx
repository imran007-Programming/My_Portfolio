import { motion } from "framer-motion";
import Project1 from "./project/Project1";
import Project2 from "./project/Project2";

export default function Projects() {
  return (
    <div id="projects" className="py-16 container">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
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
