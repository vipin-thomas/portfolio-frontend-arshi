import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="px-6 py-12 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-4">About Me</h3>
      <p className="text-gray-300">
        I’m passionate about building modern infrastructure and automation. I specialize in cloud services,
        CI/CD pipelines, Docker, Kubernetes, and DevOps tooling. I love learning and applying new technologies
        to solve real-world problems. Whether it's deploying scalable microservices or writing infrastructure-as-code
        with Terraform, I enjoy building things that work reliably and efficiently.
      </p>
    </motion.section>
  );
}
