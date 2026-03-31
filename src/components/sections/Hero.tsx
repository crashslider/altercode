"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#09090b]">
      {/* Glows de fondo */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono text-sky-400 uppercase tracking-[0.3em] mb-4 block">
              Altercode Studio
            </span>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.05]">
              Digital products &<br />
              <span className="text-slate-400 font-normal">Custom Software.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
              Estudio de desarrollo de software especializado en productos digitales de alto impacto e{" "}
              <span className="text-white font-medium">Inteligencia Artificial.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-sky-400 hover:text-white transition-all duration-300 text-center"
              >
                Hablemos de tu proyecto
              </a>
              <a
                href="#proyectos"
                className="px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all text-center"
              >
                Ver Proyectos
              </a>
            </div>
          </motion.div>

          {/* Banner flotante */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Glow detrás del banner */}
            <div className="absolute inset-0 bg-sky-500/20 blur-[80px] rounded-3xl scale-90" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 w-full max-w-md">
              <Image
                src="/banner.png"
                alt="Altercode Studio"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay sutil inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Badge flotante — proyectos live */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-[#0c0c0e] border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1">Productos live</p>
              <p className="text-white font-bold text-lg leading-none">3 Apps</p>
              <p className="text-slate-400 text-xs">en producción</p>
            </motion.div>

            {/* Badge flotante — experiencia */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85, type: "spring" }}
              className="absolute -top-4 -right-4 bg-[#0c0c0e] border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1">Experiencia</p>
              <p className="text-white font-bold text-lg leading-none">10+ años</p>
              <p className="text-slate-400 text-xs">Full-Stack & IA</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
