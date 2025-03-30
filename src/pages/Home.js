import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import cloudIcon from "../assets/cloud.svg";
import serverIcon from "../assets/server.svg";
import boltIcon from "../assets/bolt.svg";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 100;
    const y = (e.clientY / innerHeight) * 100;
    setMousePos({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getParallaxStyle = (factor) => ({
    transform: `translate(${(mousePos.x - 50) * factor}px, ${(mousePos.y - 50) * factor}px)`
  });

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/007/000/512/original/neon-frame-background-animation-free-video.jpg')",
        backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
        transition: "background-position 0.2s ease"
      }}
    >
      {/* Floating Elements */}
      <img
        src={cloudIcon}
        alt="cloud"
        className="absolute w-24 top-10 left-10 opacity-70"
        style={getParallaxStyle(0.3)}
      />
      <img
        src={serverIcon}
        alt="server"
        className="absolute w-16 bottom-10 right-12 opacity-70"
        style={getParallaxStyle(0.2)}
      />
      <img
        src={boltIcon}
        alt="bolt"
        className="absolute w-12 top-20 right-20 opacity-60"
        style={getParallaxStyle(0.4)}
      />

      {/* Main Content */}
      <motion.img
        src={profilePic}
        alt="Vipin Thomas"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h2
        className="text-3xl font-bold z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Vipin Thomas
      </motion.h2>
      <motion.p
        className="text-teal-300 text-lg z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Cloud and DevOps Enthusiast
      </motion.p>
    </section>
  );
}
