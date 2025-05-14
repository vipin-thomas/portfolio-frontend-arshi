import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import vtLogo from "./assets/vt-logo.jpg";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <Link to="/">
            <img
              src={vtLogo}
              alt="VT Logo"
              className="w-15 h-10 rounded-full hover:scale-105 transition-transform"
            />
          </Link>
          <nav className="space-x-6">
            <Link to="/about" className="hover:text-teal-400">About</Link>
            <Link to="/contact" className="hover:text-teal-400">Contact</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="border-t border-gray-700 px-6 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vipin Thomas · Built with React & Tailwind CSS
        </footer>
      </div>
    </Router>
  );
}
