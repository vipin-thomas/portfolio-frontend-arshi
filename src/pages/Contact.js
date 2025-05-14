import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

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
          <a href="mailto:arsheedabm@gmail.com" className="hover:text-white">
            arsheedabm@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Linkedin className="w-5 h-5 text-blue-400" />
          <a href="https://www.linkedin.com/in/fathimath-arsheeda-1a6770177/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            https://www.linkedin.com/in/fathimath-arsheeda-1a6770177/
          </a>
        </div>
      </div>
    </motion.section>
  );
}
