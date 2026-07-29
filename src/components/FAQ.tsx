import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-b from-brand-red-light/30 via-rose-50/40 to-brand-yellow-light/40 py-24 lg:py-32 relative overflow-hidden border-y border-amber-200/40" id="faq">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/3 h-96 w-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 h-96 w-96 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-4xl px-6 space-y-16 text-left">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-yellow-light border border-brand-yellow-accent/60 px-4 py-1.5 rounded-full">
            DÚVIDAS COMUNS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-slate-500 max-w-lg mx-auto">
            Ainda com dúvidas? Reunimos as principais perguntas enviadas pelos tutores para facilitar a sua decisão.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 pt-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-[2rem] border bg-white p-6 md:p-8 transition-all duration-300 ${
                  isOpen
                    ? "border-brand-red-accent/30 shadow-md shadow-brand-red/5"
                    : "border-slate-100 shadow-sm hover:border-slate-200"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full flex items-start justify-between gap-4 text-left font-display font-bold text-slate-900 text-base md:text-lg focus:outline-none cursor-pointer transition-colors ${
                    isOpen ? "text-brand-red" : "hover:text-brand-gold"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className={`flex-shrink-0 mt-0.5 transition-colors ${
                      isOpen ? "text-brand-red" : "text-brand-gold"
                    }`} />
                    <span>{faq.question}</span>
                  </div>
                  
                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 mt-1 flex-shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Expanded Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-slate-500 leading-relaxed pl-7 border-l-2 border-brand-red-accent/40 font-normal">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Question CTA */}
        <div className="text-center pt-6">
          <p className="text-sm text-slate-500">
            Sua pergunta não está na lista?{" "}
            <a
              href="https://wa.me/5547996587183?text=Olá! Tenho uma dúvida sobre a hospedagem ou creche para meu pet..."
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-red hover:text-brand-red-dark hover:underline"
            >
              Clique aqui para nos chamar no WhatsApp
            </a>{" "}
            e responderemos na hora!
          </p>
        </div>

      </div>
    </section>
  );
}
