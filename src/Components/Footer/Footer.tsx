import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
              Imran
            </h3>
            <p className="text-sm">Fullstack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#education" className="hover:text-white transition">
              Education
            </a>
            <a href="#blogs" className="hover:text-white transition">
              Blog
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/imran007-Programming"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-white transition"
            >
              <IoMail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
            Imran
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
