import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Shield, Heart, Eye, BadgeCheck } from "lucide-react";
import { PREMIUM_DIFFERENTIALS } from "../data";

export default function Differentials() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-slate-100" id="diferenciais">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium credentials card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md rounded-[2.5rem] bg-gradient-to-tr from-slate-50 to-brand-red-light/30 p-8 md:p-10 border border-slate-100 shadow-xl overflow-hidden">
              
              {/* Background subtle gold/red blurs */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-red/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-brand-yellow/10 rounded-full blur-2xl" />
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white shadow-md shadow-brand-red/20">
                  <BadgeCheck size={24} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-black text-slate-900 tracking-tight">
                    Selo de Qualidade Pet Passeio
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    Não somos apenas um hotel para cães. Oferecemos um ecossistema de cuidado profissional e bem-estar de alto padrão. Nossos cuidadores passam por treinamentos rigorosos de comportamento canino, recreação monitorada e primeiros socorros veterinários.
                  </p>
                </div>

                {/* Highlight metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400 block">Atualizações</span>
                    <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                      <Eye size={14} className="text-brand-red" />
                      Fotos e Vídeos
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400 block">Suporte</span>
                    <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                      <Shield size={14} className="text-brand-gold" />
                      Seguro Vet
                    </span>
                  </div>
                </div>

                {/* Heart Badge overlay */}
                <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mt-4">
                  <div className="rounded-xl bg-brand-red-light p-2 text-brand-red border border-brand-red-accent/30">
                    <Heart size={18} className="fill-brand-red/10" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Compromisso Pet</h4>
                    <p className="text-xs text-slate-500 font-normal">Seguro de saúde canino incluso durante toda a estadia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title and differentials checklist */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red-light border border-brand-red-accent/30 px-4 py-1.5 rounded-full">
                NOSSO PADRÃO PREMIUM
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                Diferenciais que encantam tutores exigentes
              </h2>
            </div>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Investimos em tudo que há de mais moderno e seguro no mercado de pets para que o seu amigo receba o melhor tratamento possível enquanto você foca nas suas atividades.
            </p>

            {/* Grid of checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {PREMIUM_DIFFERENTIALS.map((diff, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:border-slate-200 transition-all duration-300"
                  >
                    <div className={isEven ? "text-brand-red flex-shrink-0" : "text-brand-gold flex-shrink-0"}>
                      <CheckCircle2 size={18} className="stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {diff}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
