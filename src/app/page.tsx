import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold tracking-tighter text-lg">
              Altercode<span className="text-brand-primary">.</span>cl
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Ingeniería de Software & Inteligencia Artificial
            </p>
          </div>

          {/* Enlaces Sociales */}
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/crashslider/" target="_blank" className="text-slate-400 hover:text-brand-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/crashslider" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://x.com/Crashslider" target="_blank" className="text-slate-400 hover:text-sky-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} — CHILE
          </p>
        </div>
      </footer>
    </main>
  );
}