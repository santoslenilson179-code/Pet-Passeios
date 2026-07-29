import React from "react";
import { motion } from "motion/react";
import { Dog, Syringe, Calendar, Heart, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function AttendanceRules() {
  const whatsappUrl = getWhatsAppLink("Olá! Gostaria de tirar dúvidas sobre as regras de frequentação e agendar a adaptação do meu cãozinho.");

  const rules = [
    {
      icon: Dog,
      title: "Cães de porte pequeno (até 10 kg)",
      accentColor: "bg-brand-red-light text-brand-red border-brand-red-accent/20"
    },
    {
      icon: Syringe,
      title: "Vacinas em dia (V10 e Raiva)",
      accentColor: "bg-brand-red-light text-brand-red border-brand-red-accent/20"
    },
    {
      icon: ({ className }: { className?: string }) => (
        <span className={`font-black text-lg flex items-center justify-center leading-none ${className}`}>♂</span>
      ),
      title: "Machos castrados",
      accentColor: "bg-brand-red-light text-brand-red border-brand-red-accent/20"
    },
    {
      icon: ({ className }: { className?: string }) => (
        <span className={`font-black text-lg flex items-center justify-center leading-none ${className}`}>♀</span>
      ),
      title: "Fêmeas não podem estar no cio",
      accentColor: "bg-brand-red-light text-brand-red border-brand-red-accent/20"
    },
    {
      icon: Heart,
      title: "Apenas cães sociáveis",
      accentColor: "bg-brand-red-light text-brand-red border-brand-red-accent/20"
    },
    {
      icon: Calendar,
      title: "Primeira vez na Pet Passeio: adaptação obrigatória",
      accentColor: "bg-brand-red-light text-brand-red border-brand-red-accent/20"
    }
  ];

  return (
    <section className="bg-[#FAF7F8] py-20 lg:py-28 relative overflow-hidden border-b border-slate-100" id="regras">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/3 h-80 w-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        
        {/* Poster Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2.5rem] bg-white shadow-xl border border-slate-100 overflow-hidden"
        >
          {/* Poster Header */}
          <div className="bg-brand-red text-white p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute -right-8 -top-8 h-32 w-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 bg-brand-gold/20 rounded-full blur-xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-3">
              <ShieldCheck size={14} className="text-brand-gold" />
              <span>Para a segurança e bem-estar de todos</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Regras de frequentação
            </h2>
            <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">
              Pet Passeio • Hospedagem & Creche
            </p>
          </div>

          {/* Rules List */}
          <div className="p-6 sm:p-10 space-y-3 sm:space-y-4">
            {rules.map((rule, idx) => {
              const Icon = rule.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-100/90 hover:border-brand-red/30 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border flex-shrink-0 ${rule.accentColor}`}>
                    <Icon className="h-6 w-6 stroke-[2.2]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm sm:text-base font-bold text-brand-red tracking-tight leading-snug">
                      • {rule.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Card Callout */}
          <div className="bg-brand-red-light/40 border-t border-brand-red-accent/20 p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-0.5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Dúvidas sobre o perfil do seu cãozinho?
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Fale conosco pelo WhatsApp e agende a avaliação de adaptação gratuita.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark px-6 py-3 text-xs font-black text-white transition-all shadow-md shadow-brand-red/20 flex-shrink-0"
            >
              <MessageSquare size={16} />
              <span>Tirar Dúvidas / Agendar</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
