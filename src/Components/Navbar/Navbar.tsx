import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
   <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a className=" text-lg" href="#">
         
           <div className=" md:text-left">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
              Imran
            </h3>
            <p className="text-sm text-gray-300">Fullstack Developer</p>
          </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a
              className="hover:text-purple-500 transition"
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              className="hover:text-purple-500 transition"
              href="#skills"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a
              className="hover:text-purple-500 transition"
              href="#projects"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              className="hover:text-purple-500 transition"
              href="#blogs"
              onClick={closeMenu}
            >
              Blog
            </a>
            <a
              className="hover:text-purple-500 transition"
              href="#education"
              onClick={closeMenu}
            >
              Education
            </a>
            
            <a
              className="hover:text-purple-500 transition"
              href="#contact"
              onClick={closeMenu}
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Top-to-Bottom Shutter Effect using Framer Motion */}
        <motion.div
          ref={mobileMenuRef}
          initial={{ y: "-100%" }} // Initial state (off-screen at the top)
          animate={{ y: isOpen ? 0 : "-100%" }} // Animate to on-screen when open
          transition={{ duration: 0.5 }} // Smooth animation for 0.5 seconds
          className="fixed z-50 top-0 left-0 w-full bg-gray-800 text-white md:hidden"
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-6 py-20 text-white">
            <a
              className="hover:text-teal-400 transition"
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              className="hover:text-teal-400 transition"
              href="#skills"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a
              className="hover:text-teal-400 transition"
              href="#projects"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              className="hover:text-teal-400 transition"
              href="#blogs"
              onClick={closeMenu}
            >
              Blog
            </a>
            <a
              className="hover:text-teal-400 transition"
              href="#education"
              onClick={closeMenu}
            >
              Education
            </a>
            
            <a
              className="hover:text-teal-400 transition"
              href="#contact"
              onClick={closeMenu}
            >
              Contact Me
            </a>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
