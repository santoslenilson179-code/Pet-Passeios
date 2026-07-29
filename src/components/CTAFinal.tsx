import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Sparkles, ShieldCheck, Heart } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function CTAFinal() {
  return (
    <section className="bg-gradient-to-b from-brand-yellow-light/40 via-rose-50/50 to-brand-red-light/40 py-24 lg:py-32 relative overflow-hidden" id="contato">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Main CTA Box with Premium Red/Yellow Gradient styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] bg-gradient-to-br from-brand-red to-slate-950 p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl border border-brand-red/20"
        >
          {/* Decorative background radial glows */}
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-brand-red/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />

          {/* Sparkles tag header */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-yellow">
              <Sparkles size={14} className="fill-brand-yellow text-brand-yellow" />
              <span>VAGAS LIMITADAS PARA NOVOS PETS</span>
            </div>
          </div>

          {/* Headings */}
          <div className="space-y-4 max-w-3xl mx-auto mb-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Agende hoje mesmo a próxima estadia ou creche do seu pet.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Seu cachorro merece socialização saudável, brincadeiras estimulantes e muito carinho. Garanta total tranquilidade para o seu dia a dia e suas viagens!
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-brand-yellow hover:bg-brand-gold text-slate-950 font-extrabold text-lg px-10 py-5 transition-all duration-300 shadow-lg shadow-brand-yellow/25"
            >
              <MessageSquare className="h-6 w-6 fill-slate-950 text-slate-950" />
              <span>Quero Agendar pelo WhatsApp</span>
            </motion.a>

            {/* Warranty badge below button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-400 font-semibold pt-6 border-t border-white/10 w-full justify-center mt-6">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-yellow" />
                Segurança 100% Garantida
              </span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-1.5">
                <Heart size={14} className="text-brand-red fill-brand-red" />
                Amor incondicional pelo seu melhor amigo
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
