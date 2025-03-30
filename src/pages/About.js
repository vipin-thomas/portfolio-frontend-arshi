import React from "react";
import { motion } from "framer-motion";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function About() {
  const paragraphs = [
    "Hey there! I’m Vipin Thomas, a Linux systems engineer based in Kerala, India, with over 7 years of experience keeping servers happy and secure. I’ve spent most of my career working in server administration and web hosting support—making sure websites stay online, optimized, and secure.",
    "Over the past few years, I’ve been diving deep into the world of DevOps through hands-on home lab projects. I’ve built CI/CD pipelines, containerized apps with Docker, deployed them using Kubernetes, and provisioned cloud infrastructure with Terraform on AWS. It’s been an exciting journey of learning, tinkering, and solving problems the DevOps way.",
    "I’m all about continuously improving systems and automating the boring stuff—whether that’s writing a Bash script, setting up monitoring dashboards, or tweaking infrastructure as code.",
    "When I’m not in front of a terminal, you’ll probably find me traveling, catching a good movie, or lost in some great music."
  ];

  return (
    <motion.section
      className="px-6 py-12 max-w-3xl mx-auto text-left"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-semibold mb-6">About Me</h3>
      {paragraphs.map((text, i) => (
        <motion.p
          key={i}
          className="text-gray-300 mb-4 leading-relaxed"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          {text}
        </motion.p>
      ))}
    </motion.section>
  );
}
