"use client";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Brain, Sun, BookOpen, Users } from "lucide-react";

type ProjectStatus = "available" | "beta" | "development";

interface Project {
  title: string;
  tagline: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
  glowColor: string;
  status: ProjectStatus;
  link?: string;
  featured?: boolean;
  features?: string[];
}

const statusConfig: Record<ProjectStatus, { label: string; dot: string; text: string; border: string }> = {
  available: {
    label: "Disponible",
    dot: "bg-emerald-400",
    text: "text-emerald-400",
    border: "border-emerald-400/20",
  },
  beta: {
    label: "Próximo Lanzamiento",
    dot: "bg-amber-400 animate-pulse",
    text: "text-amber-400",
    border: "border-amber-400/20",
  },
  development: {
    label: "En Desarrollo",
    dot: "bg-sky-400 animate-pulse",
    text: "text-sky-400",
    border: "border-sky-400/20",
  },
};

const projects: Project[] = [
  {
    title: "TalkFit",
    tagline: "Practica conversaciones difíciles con IA",
    category: "AI · Soft Skills",
    description:
      "App Flutter que permite entrenar habilidades conversacionales mediante roleplay con IA. El usuario elige escenarios reales — laborales, personales, citas — y recibe evaluación de asertividad, empatía y claridad.",
    features: [
      "22 escenarios en 4 categorías",
      "Evaluación por Coach IA (1–10)",
      "Radar de habilidades acumulado",
      "Streak de actividad",
    ],
    tags: ["Flutter", "Firebase", "OpenAI", "RevenueCat"],
    icon: <MessageCircle className="w-6 h-6 text-sky-400" />,
    iconBg: "bg-sky-500/10",
    accentColor: "group-hover:text-sky-400",
    glowColor: "bg-sky-500/15",
    status: "available",
    link: "https://talkfit.altercode.cl",
    featured: true,
  },
  {
    title: "Quizino",
    tagline: "El reto mental diario",
    category: "Mobile · Trivia",
    description:
      "App de trivia diaria con 5 preguntas en 12 categorías. Sistema de XP, niveles, rachas y medallas. Diseñada para completarse en menos de 3 minutos.",
    tags: ["Flutter", "Firebase", "AdMob", "RevenueCat"],
    icon: <Brain className="w-6 h-6 text-violet-400" />,
    iconBg: "bg-violet-500/10",
    accentColor: "group-hover:text-violet-400",
    glowColor: "bg-violet-500/15",
    status: "beta",
    link: "https://quizino.altercode.cl",
  },
  {
    title: "Dawn",
    tagline: "Rutinas con intención",
    category: "Mobile · Bienestar",
    description:
      "App Android minimalista de productividad con alarma inteligente, temporizador de enfoque, sonidos ambientales y recordatorios. Diseño visual premium con gradiente propio.",
    tags: ["Flutter", "Kotlin", "Firebase", "Riverpod"],
    icon: <Sun className="w-6 h-6 text-amber-400" />,
    iconBg: "bg-amber-500/10",
    accentColor: "group-hover:text-amber-400",
    glowColor: "bg-amber-500/15",
    status: "beta",
    link: "https://dawn.altercode.cl",
  },
  {
    title: "Palabrario",
    tagline: "Vocabulario que se queda",
    category: "Edtech · Mobile",
    description:
      "Plataforma de aprendizaje de vocabulario con repetición espaciada y contexto generativo. En fase de ideación.",
    tags: ["Flutter", "IA Generativa"],
    icon: <BookOpen className="w-6 h-6 text-rose-400" />,
    iconBg: "bg-rose-500/10",
    accentColor: "group-hover:text-rose-400",
    glowColor: "bg-rose-500/15",
    status: "development",
  },
  {
    title: "Previa",
    tagline: "Organiza el plan, no el caos",
    category: "Social · Mobile",
    description:
      "App social para coordinar salidas y juntas. Gestión de planes, asistencia y logística entre amigos. En desarrollo activo.",
    tags: ["Flutter", "Firebase"],
    icon: <Users className="w-6 h-6 text-teal-400" />,
    iconBg: "bg-teal-500/10",
    accentColor: "group-hover:text-teal-400",
    glowColor: "bg-teal-500/15",
    status: "development",
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  const cfg = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${cfg.text} ${cfg.border} bg-black/30`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative col-span-1 md:col-span-2 p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent overflow-hidden transition-all duration-500"
    >
      <div className={`absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 ${project.glowColor} rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-700`} />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 h-full">
        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 ${project.iconBg} rounded-2xl border border-white/5`}>
                {project.icon}
              </div>
              <StatusBadge status={project.status} />
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors p-1"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          <span className="text-xs font-mono text-sky-400 uppercase tracking-[0.2em] mb-2">
            {project.category}
          </span>
          <h3 className={`text-4xl md:text-5xl font-bold mb-2 transition-colors ${project.accentColor}`}>
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-1">{project.tagline}</p>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
            {project.description}
          </p>

          {project.features && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-medium px-3 py-1 bg-white/5 rounded-full border border-white/5 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative p-7 rounded-3xl border border-white/5 hover:border-white/10 bg-slate-900/40 hover:bg-slate-900/60 overflow-hidden transition-all duration-500 flex flex-col"
    >
      <div className={`absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${project.glowColor} rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <div className={`p-2.5 ${project.iconBg} rounded-xl border border-white/5`}>
            {project.icon}
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={project.status} />
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors p-1"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-1">
          {project.category}
        </span>
        <h3 className={`text-2xl font-bold mb-1 transition-colors ${project.accentColor}`}>
          {project.title}
        </h3>
        <p className="text-xs text-slate-500 mb-3">{project.tagline}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2.5 py-1 bg-white/5 rounded-full border border-white/5 text-slate-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-sky-400 uppercase tracking-[0.3em]">Productos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Proyectos Destacados</h2>
          <p className="text-slate-400 max-w-xl">
            Apps y plataformas desarrolladas bajo Altercode Studio — desde productos live hasta ideas en construcción.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeaturedProject project={featured} />
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
