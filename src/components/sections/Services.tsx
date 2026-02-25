"use client";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, ServerCog, Sparkles } from "lucide-react";

const services = [
  {
    title: "Desarrollo Full-Stack",
    description: "Aplicaciones web y móviles robustas, escalables y de alto rendimiento utilizando Next.js, Laravel y Node.js.",
    icon: <Code2 className="w-8 h-8 text-sky-400" />,
  },
  {
    title: "Inteligencia Artificial",
    description: "Integración de LLMs y modelos generativos para automatizar procesos y crear experiencias de usuario inteligentes.",
    icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Arquitectura & Cloud",
    description: "Diseño de infraestructura segura sobre Linux y entornos de virtualización como Proxmox para alta disponibilidad.",
    icon: <ServerCog className="w-8 h-8 text-emerald-400" />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#09090b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3 h-3" />
            <span>EXPERTICE TÉCNICA</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Cómo puedo ayudarte?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluciones de ingeniería personalizadas, desde la idea inicial hasta el despliegue en producción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-sky-500/50 hover:to-indigo-500/50 transition-all duration-500"
            >
              <div className="bg-[#0c0c0e] p-8 rounded-[22px] h-full">
                <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}