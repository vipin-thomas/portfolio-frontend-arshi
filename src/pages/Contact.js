import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Container } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      className="px-6 py-12 max-w-xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-6">Contact Me</h3>
      <div className="space-y-6 text-left text-gray-300">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-teal-400" />
          <a href="mailto:bewithvipin@gmail.com" className="hover:text-white">
            bewithvipin@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Linkedin className="w-5 h-5 text-blue-400" />
          <a href="https://www.linkedin.com/in/vipin-thomas-25657b12b" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            https://www.linkedin.com/in/vipin-thomas-25657b12b
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Github className="w-5 h-5 text-gray-400" />
          <a href="https://github.com/vipin-thomas" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            https://github.com/vipin-thomas
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Container className="w-5 h-5 text-blue-300" />
          <a href="https://hub.docker.com/u/vipinthomas" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            hub.docker.com/u/vipinthomas
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Download className="w-5 h-5 text-green-400" />
          <a href="/resume.pdf" download className="hover:text-white">
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}
