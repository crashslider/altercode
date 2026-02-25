"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, User, Loader2, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Tienes un proyecto en <span className="text-brand-primary">mente?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Estoy disponible para colaborar en proyectos que busquen innovación técnica y excelencia en ejecución.
            </p>
            <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-primary/10 transition-all">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Escríbeme a</p>
                  <p className="text-lg text-white font-medium">contacto@altercode.cl</p>
                </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[32px] backdrop-blur-xl"
          >
            {status === "success" ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-400">Te responderé lo antes posible.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-brand-primary font-medium underline">Enviar otro mensaje</button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Nombre</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input name="name" type="text" required placeholder="Tu nombre" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-primary/50 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input name="email" type="email" required placeholder="tu@email.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-primary/50 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Mensaje</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-500" />
                    <textarea name="message" rows={4} required placeholder="Cuéntame sobre tu proyecto..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-primary/50 transition-all resize-none"></textarea>
                  </div>
                </div>

                <button 
                  disabled={status === "loading"}
                  className="w-full bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all transform active:scale-[0.98] disabled:opacity-50"
                >
                  {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Enviar mensaje"}
                  <Send className="w-4 h-4" />
                </button>
                {status === "error" && <p className="text-red-500 text-sm text-center">Ocurrió un error. Inténtalo de nuevo.</p>}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}