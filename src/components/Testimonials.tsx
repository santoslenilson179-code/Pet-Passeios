import React from "react";
import { motion } from "motion/react";
import { Star, Quote, PawPrint } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-brand-yellow-light/60 via-rose-50/50 to-amber-50/60 py-24 lg:py-32 relative overflow-hidden border-y border-amber-200/40" id="depoimentos">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 h-[450px] w-[450px] bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[450px] w-[450px] bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 space-y-16 lg:space-y-24">
        
        {/* Header Title */}
        <div className="space-y-4 max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red-light border border-brand-red-accent/30 px-4 py-1.5 rounded-full">
            OPINIÃO DE QUEM CONFIA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Amor e dedicação que se transformam em depoimentos
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            A felicidade dos pets e a tranquilidade dos tutores são nossa maior conquista. Veja os depoimentos de quem confia no nosso trabalho há mais de uma década.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: isEven
                    ? "0 20px 40px -15px rgba(230, 28, 84, 0.08)"
                    : "0 20px 40px -15px rgba(226, 176, 7, 0.08)"
                }}
                className={`flex flex-col justify-between rounded-[2.5rem] bg-white p-8 sm:p-10 border relative group transition-all duration-300 shadow-sm ${
                  isEven ? "border-brand-red/5 hover:border-brand-red/15" : "border-slate-100 hover:border-brand-yellow-accent/25"
                }`}
              >
                {/* Decorative quotation mark */}
                <div className={`absolute right-8 top-8 transition-colors pointer-events-none ${
                  isEven 
                    ? "text-brand-red-light/50 group-hover:text-brand-red-accent/35" 
                    : "text-brand-yellow-light/40 group-hover:text-brand-yellow-accent/30"
                }`}>
                  <Quote size={44} className="fill-current" />
                </div>

                {/* Stars & Text */}
                <div className="space-y-5 relative z-10 text-left">
                  {/* 5 stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={15}
                        className="fill-brand-yellow text-brand-yellow"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal italic">
                    "{testimonial.comment}"
                  </p>

                  {/* Owner Reply */}
                  {testimonial.ownerReply && (
                    <div className={`mt-4 rounded-2xl p-4 border-l-4 text-xs space-y-1.5 ${
                      isEven 
                        ? "bg-brand-red-light/40 border-brand-red" 
                        : "bg-brand-yellow-light/50 border-brand-yellow"
                    }`}>
                      <p className="font-bold text-slate-900 flex items-center gap-1.5">
                        <span className={`flex h-1.5 w-1.5 rounded-full ${isEven ? "bg-brand-red" : "bg-brand-yellow"}`} />
                        Resposta da Pet Passeio:
                      </p>
                      <p className="text-slate-500 leading-relaxed font-normal">
                        "{testimonial.ownerReply}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 my-6" />

                {/* User / Pet Profile footer */}
                <div className="flex items-center gap-4 text-left">
                  {/* Avatar */}
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm bg-rose-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                  
                  {/* Profile detail */}
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      {testimonial.name}
                    </h4>
                    
                    {/* Pet breed badge */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <PawPrint size={11} className={isEven ? "text-brand-red" : "text-brand-gold"} />
                      <span>Tutor(a) de {testimonial.petName} ({testimonial.petBreed})</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
