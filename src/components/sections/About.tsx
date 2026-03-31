"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, BrainCircuit, Server } from "lucide-react";

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "5", label: "Productos en producción" },
  { value: "3", label: "Apps en Google Play" },
  { value: "2", label: "Países con clientes" },
];

const stack = [
  { icon: <Code2 className="w-4 h-4" />, label: "Next.js / Laravel", color: "text-sky-400" },
  { icon: <Smartphone className="w-4 h-4" />, label: "Flutter / Android", color: "text-violet-400" },
  { icon: <BrainCircuit className="w-4 h-4" />, label: "OpenAI / Firebase", color: "text-indigo-400" },
  { icon: <Server className="w-4 h-4" />, label: "Linux / Proxmox", color: "text-emerald-400" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Lado izquierdo — tarjeta de identidad */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card principal */}
            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 blur-[80px] rounded-full" />

              {/* Header de la card */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl tracking-tighter shadow-lg shadow-sky-500/20">
                  CG
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">César Guajardo</h3>
                  <p className="text-sky-400 font-mono text-xs tracking-widest uppercase">Founder · Altercode Studio</p>
                </div>
              </div>

              {/* Stack */}
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-3">Stack principal</p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {stack.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/5">
                    <span className={item.color}>{item.icon}</span>
                    <span className="text-slate-300 text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Disponibilidad */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponible para nuevos proyectos
              </div>
            </div>
          </motion.div>

          {/* Lado derecho — texto + métricas */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs font-mono text-sky-400 uppercase tracking-[0.3em] mb-4 block">El estudio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ingeniería con criterio,<br />
              <span className="text-slate-400 font-normal">no solo con código.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Altercode es un estudio independiente que combina más de una década de experiencia en desarrollo Full-Stack con una visión orientada a producto. Cada línea de código tiene un propósito: resolver un problema real.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              Desde aplicaciones GovTech hasta productos móviles con IA, el enfoque siempre es el mismo: arquitectura sólida, diseño cuidado y ejecución completa — desde la idea hasta producción.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]"
                >
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
