import React, { useState } from "react";
import { motion } from "motion/react";
import { Clock, Calendar, Check, MessageSquare, Sparkles, AlertCircle } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function CrechePricing() {
  const [activeTab, setActiveTab] = useState<"integral" | "meio_periodo">("integral");

  const whatsappAdaptation = getWhatsAppLink("Olá! Gostaria de agendar uma avaliação e dia de adaptação para a creche do meu pet.");

  const integralPlans = [
    { freq: "Avulso", price: "R$ 65,00", period: "por dia", highlight: false },
    { freq: "1x por semana", price: "R$ 220", period: "/ mês", highlight: false },
    { freq: "2x por semana", price: "R$ 400", period: "/ mês", highlight: true, badge: "Mais Procurado" },
    { freq: "3x por semana", price: "R$ 500", period: "/ mês", highlight: false },
  ];

  const meioPeriodoPlans = [
    { freq: "Avulso", price: "R$ 50,00", period: "por dia", highlight: false },
    { freq: "1x por semana", price: "R$ 170", period: "/ mês", highlight: false },
    { freq: "2x por semana", price: "R$ 300", period: "/ mês", highlight: true, badge: "Econômico" },
    { freq: "3x por semana", price: "R$ 430", period: "/ mês", highlight: false },
  ];

  const currentPlans = activeTab === "integral" ? integralPlans : meioPeriodoPlans;

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-b border-slate-100" id="planos-creche">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 h-96 w-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red-light border border-brand-red-accent/30 px-4 py-1.5 rounded-full inline-block">
            VALORES TRANSPARENTES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Planos de Creche & Diárias Avulsas
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-normal">
            Escolha entre o período integral ou meio período, com pacotes mensais recorrentes ou diárias avulsas flexíveis.
          </p>
        </div>

        {/* Tab Switcher for Integral vs Meio Período */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-slate-100 p-1.5 border border-slate-200/80 shadow-inner">
            <button
              onClick={() => setActiveTab("integral")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "integral"
                  ? "bg-brand-red text-white shadow-md shadow-brand-red/20"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Clock size={16} />
              <span>Integral (8h30 às 18h30)</span>
            </button>
            <button
              onClick={() => setActiveTab("meio_periodo")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "meio_periodo"
                  ? "bg-brand-red text-white shadow-md shadow-brand-red/20"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Clock size={16} />
              <span>Meio Período (Até 4h30)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid for chosen tab (Integral or Meio Período) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentPlans.map((plan, idx) => (
            <motion.div
              key={plan.freq}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`relative flex flex-col justify-between rounded-[2rem] p-6 sm:p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-brand-red-light/40 to-white border-brand-red/40 shadow-xl scale-102"
                  : "bg-slate-50/70 hover:bg-white border-slate-200/80 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-red text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles size={10} className="fill-white" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Frequência
                  </span>
                  <h3 className="font-display text-xl font-black text-slate-900">
                    {plan.freq}
                  </h3>
                </div>

                <div className="pt-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-xs font-bold text-slate-500 ml-1">
                    {plan.period}
                  </span>
                </div>

                <div className="h-px bg-slate-200/60 my-3" />

                <ul className="space-y-2 text-xs font-semibold text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-brand-red flex-shrink-0" />
                    <span>Dias fixos: 2ª, 5ª e 6ª</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-brand-red flex-shrink-0" />
                    <span>{activeTab === "integral" ? "Das 8:30 às 18:30" : "Permanência de até 4h e 30min"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-brand-red flex-shrink-0" />
                    <span>Socialização & Recreação</span>
                  </li>
                </ul>
              </div>

              <a
                href={getWhatsAppLink(`Olá! Tenho interesse no plano de creche ${activeTab === "integral" ? "Integral" : "Meio Período"} (${plan.freq} - ${plan.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 w-full text-center py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                  plan.highlight
                    ? "bg-brand-red text-white hover:bg-brand-red-dark shadow-md shadow-brand-red/10"
                    : "bg-white border border-slate-200 text-slate-800 hover:bg-slate-100"
                }`}
              >
                <MessageSquare size={14} />
                <span>Contratar este plano</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Special Days & Avulso Table Card */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-64 w-64 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-full inline-block">
                DIAS ESPECIAIS & AGENDAMENTOS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                Creche Avulsa em Terças, Quartas, Finais de Semana & Feriados
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Nos dias de menor fluxo fixo ou finais de semana, atendemos a modalidade avulsa mediante agendamento prévio garantido.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 2a, 5a, 6a Avulso */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-gold bg-brand-gold/20 px-2.5 py-1 rounded-md">
                    2ª, 5ª e 6ª
                  </span>
                  <span className="text-xs text-slate-300">Sem taxa extra</span>
                </div>
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-300">Integral:</span>
                    <span className="font-display text-xl font-extrabold text-white">R$ 65,00</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-300">Meio Período:</span>
                    <span className="font-display text-xl font-extrabold text-white">R$ 50,00</span>
                  </div>
                </div>
              </div>

              {/* 3a, 4a, Sab, Dom, Feriados */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-red/30 to-brand-red/10 backdrop-blur-md p-6 border border-brand-red/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white bg-brand-red px-2.5 py-1 rounded-md">
                    3ª, 4ª, Sáb, Dom & Feriados
                  </span>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] uppercase font-bold text-slate-300 block">Somente com Agendamento</span>
                  <span className="font-display text-3xl font-black text-white block">R$ 80,00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Adaptation CTA Footer inside card */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-semibold">
              <div className="rounded-full bg-brand-gold/20 p-2 text-brand-gold">
                <Calendar size={18} />
              </div>
              <span>Agende um dia de adaptação gratuita para o seu cãozinho!</span>
            </div>
            
            <a
              href={whatsappAdaptation}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark px-6 py-3.5 text-xs font-black text-white transition-all shadow-lg shadow-brand-red/30"
            >
              <MessageSquare size={16} />
              <span>Agendar Adaptação: (47) 99658-7183</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
