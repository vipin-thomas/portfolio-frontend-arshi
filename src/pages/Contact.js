import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="px-6 py-12 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">Contact Me</h3>
      <form
        className="space-y-4"
        action="mailto:your.email@example.com"
        method="POST"
        encType="text/plain"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
