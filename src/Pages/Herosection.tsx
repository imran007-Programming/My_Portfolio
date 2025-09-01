import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../assets/man.jpg"; // Your image path
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import handAnimation from "../assets/hand wave.json";

export default function Herosection() {
  // State to manage modal visibility
  const [showPreview, setShowPreview] = useState(false);

  // Reference for the modal container
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Function to open the preview modal
  const openPreview = () => setShowPreview(true);

  // Function to close the preview modal
  const closePreview = () => setShowPreview(false);

  // Close modal if clicked outside
  const handleClickOutside = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closePreview();
    }
  };

  // Add event listener for clicks outside the modal
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="container flex justify-center items-center sm:min-h-[70vh] min-h-screen  px-4 sm:px-6 md:px-20">
      <div className="hero-content flex sm:flex-row flex-col-reverse justify-center items-center w-full max-w-screen-xl">
        {/* Left Side: Text Section */}
        <motion.div
          className="text-section w-full md:w-1/2 flex flex-col justify-center items-start space-y-3 text-center sm:mt-3 mt-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Static Text */}
          <h1 className="sm:text-7xl text-2xl flex items-center justify-center text-white gap-x-4">
            Hi, Sir{" "}
            <span className="inline-block sm:w-20 w-10 sm:h-20 h-10">
              <Lottie animationData={handAnimation} loop={true} />
            </span>{" "}
            I am
          </h1>

          {/* Typewriter Effect: "Imran, FullStack Developer, Mernstack Developer" */}
          <h2 className="sm:text-5xl text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-pink-500">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1901}
              deleteSpeed={102}
              loop={true}
              words={["Imran", "A FullStack Developer", "Mernstack Developer"]}
            />
          </h2>

          {/* Description */}
          <div className="text-center md:text-left max-w-4xl">
            <p className="text-start font-normal w-[80%] text-white mt-4">
              I'm a passionate developer with expertise in full-stack
              technologies. I specialize in building robust and scalable
              applications using modern tools and frameworks. Let's connect and
              create something amazing together!
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex space-x-4 justify-center mt-6">
            {/* Resume Button to open Preview */}
            <button
              onClick={openPreview}
              className="bg-gradient-to-r from-purple-700 via-pink-700 to-pink-400 text-white px-6 py-2 flex justify-between items-center gap-x-3 rounded-full hover:opacity-80 transition"
            >
              Resume{" "}
              <strong>
                <IoCloudDownloadOutline size={20} />
              </strong>
            </button>

            {/* GitHub Button */}
            <a
              href="https://github.com/imran007-Programming" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:opacity-80 transition"
            >
              <FaGithub size={24} />
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full hover:opacity-80 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image Section */}
        <motion.div
          className="image-section w-full md:w-1/3 flex justify-center items-center mt-20 md:mt-9"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={image}
            alt="Developer"
            className="hero-image w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-cover rounded-full"
          />
        </motion.div>
      </div>

      {/* Modal for Resume Preview */}
      {showPreview && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="p-0 max-w-3xl w-[100%] space-y-4">
            {/* Close Button */}
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600"
            >
              ✖
            </button>

            {/* Resume Preview */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Resume Preview
              </h3>
              <iframe
                src="https://drive.google.com/file/d/1Jl-qQM8Mo-VQiI0JeLynlZicZv6kEaiL/preview"
                width="100%"
                height="520px"
                title="Resume Preview"
              ></iframe>
            </div>

            {/* Download Button */}
            <div className="flex justify-center items-center mt-5">
              <a
                href="https://drive.google.com/uc?export=download&id=1Jl-qQM8Mo-VQiI0JeLynlZicZv6kEaiL"
                download
                className="bg-gradient-to-r flex justify-between items-center gap-x-4 from-green-400 via-blue-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-80 transition"
              >
                Download Resume <IoCloudDownloadOutline size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
