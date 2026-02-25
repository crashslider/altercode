"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#09090b]">
      {/* Luces de fondo (Glows) con colores planos por ahora para probar */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sky-400 font-mono text-sm tracking-[0.3em] mb-4 uppercase">
            10+ Años de Ingeniería
          </h2>
          
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
            Altercode<span className="text-sky-500">.</span>cl
            </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Desarrollo de software de alto impacto y arquitectura de productos digitales con 
            <span className="text-white font-medium"> Inteligencia Artificial.</span>
          </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
                href="#contacto" 
                className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg shadow-white/5"
            >
                Hablemos de tu proyecto
            </a>
            <a 
                href="#proyectos" 
                className="px-10 py-4 bg-slate-900 text-white font-medium rounded-full border border-slate-800 hover:bg-slate-800 transition-all"
            >
                Ver Proyectos
            </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
}