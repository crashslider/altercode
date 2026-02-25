"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Proyectos", href: "#proyectos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Cambiar el estilo de la navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 ${
        scrolled 
          ? "bg-black/50 backdrop-blur-xl border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
      }`}>
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            Altercode<span className="text-brand-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto"
              className="px-5 py-2 bg-white text-black text-sm font-bold rounded-xl hover:bg-brand-primary hover:text-white transition-all"
            >
              Trabajemos
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden p-6 bg-[#0c0c0e] border-t border-white/5 rounded-b-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}