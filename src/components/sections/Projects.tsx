"use client";
import { motion } from "framer-motion";
import { ExternalLink, Bot, Car, GraduationCap, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "TalkFit",
    category: "AI & Soft Skills",
    description: "Plataforma de entrenamiento conversacional que utiliza modelos de lenguaje avanzados para simular entornos de alta tensión y mejorar las habilidades sociales.",
    features: [
      "Simulación de roles en tiempo real",
      "Feedback instantáneo con IA",
      "Análisis de sentimiento y tono",
      "Escenarios personalizados"
    ],
    tags: ["Next.js", "OpenAI API", "WebSockets", "Tailwind"],
    icon: <Bot className="w-6 h-6 text-sky-400" />,
    link: "https://talkfit.altercode.cl",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent",
  },
  {
    title: "Portal Traslados",
    category: "Fintech / GovTech",
    description: "Digitalización de permisos de circulación y flujos de pago para la Municipalidad de San Felipe.",
    tags: ["Laravel 11", "MariaDB", "Linux"],
    icon: <Car className="w-6 h-6 text-emerald-400" />,
    className: "md:col-span-1 md:row-span-1 bg-slate-900/50",
  },
  {
    title: "SGPE",
    category: "Automation",
    description: "Gestión automatizada de beneficios de transporte estudiantil con procesamiento inteligente de documentos.",
    tags: ["Laravel 12", "Livewire", "Redis"],
    icon: <GraduationCap className="w-6 h-6 text-amber-400" />,
    className: "md:col-span-1 md:row-span-1 bg-slate-900/50",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-slate-400 max-w-xl">
            Soluciones robustas que combinan innovación técnica con impacto real en el usuario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden ${project.className}`}
            >
              {/* Overlay sutil de brillo al pasar el mouse */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] group-hover:bg-sky-500/20 transition-all duration-700" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-black/40 rounded-2xl border border-white/5">
                    {project.icon}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-[0.2em]">
                    {project.category}
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4 group-hover:text-sky-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
                    {project.description}
                </p>

                {/* Sección nueva para TalkFit o proyectos grandes */}
                {project.features && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        {feature}
                        </li>
                    ))}
                    </ul>
                )}
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium px-3 py-1 bg-white/5 rounded-full border border-white/5 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}