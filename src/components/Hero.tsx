import React from "react";
import { motion } from "motion/react";
import { MessageSquare, ArrowDown, Check, Shield, Heart, Camera, Activity, Star } from "lucide-react";
import { getWhatsAppLink } from "../data";

import heroImg from "../assets/images/google_maps_hero.jpg";
import avatarShirley from "../assets/images/shirley_avatar_1783539602612.jpg";
import avatarGisele from "../assets/images/gisele_avatar_1783539906789.jpg";
import avatarMariaHelena from "../assets/images/maria_helena_avatar_1783540196665.jpg";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  // Premium, matching red/yellow floating badges
  const floatingBadges = [
    { text: "Hospedagem 100% Segura", icon: Shield, color: "text-brand-red bg-brand-red-light border border-brand-red-accent/30", position: "top-10 -left-6 md:-left-12" },
    { text: "Vídeos e Fotos Diários", icon: Camera, color: "text-brand-gold bg-brand-yellow-light/95 border border-brand-yellow-accent/40", position: "bottom-32 -left-4 md:-left-8" },
    { text: "100% Livre de Gaiolas", icon: Heart, color: "text-brand-red bg-brand-red-light border border-brand-red-accent/30", position: "top-24 -right-6 md:-right-12" },
    { text: "Socialização Inteligente", icon: Activity, color: "text-brand-gold bg-brand-yellow-light border border-brand-yellow-accent/40", position: "bottom-16 -right-4 md:-right-8" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-yellow-light/80 via-rose-50/50 to-brand-red-light/50 py-16 lg:py-28" id="home">
      {/* Decorative premium radial overlays */}
      <div className="absolute top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-red/15 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-brand-yellow/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-pink-200/20 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Conversion & Copy Engine */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Social Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-red-light border border-brand-red-accent/40 px-4 py-1.5 text-xs font-semibold text-brand-red"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
              <span className="font-semibold tracking-tight text-[11px] sm:text-xs">
                Hotel & Creche Premium com ★ 5.0 no Google
              </span>
            </motion.div>

            {/* Emotional High-Agency Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]"
              >
                O refúgio de 5 estrelas que o seu cãozinho <span className="text-brand-red relative inline-block">chamaria de lar</span>.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                Hospedagem de alto padrão para o seu melhor amigo. Um lar amoroso, livre de gaiolas e com supervisão profissional 24h. Viaje com a mente em paz sabendo que ele está se divertindo.
              </motion.p>
            </div>

            {/* Fast Quick Trust Anchors */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs font-semibold text-slate-500"
            >
              <div className="flex items-center gap-2">
                <Check size={14} className="text-brand-red stroke-[3.5]" />
                <span>Ambiente livre de gaiolas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-brand-gold stroke-[3.5]" />
                <span>Obrigatório machos castrados</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-brand-red stroke-[3.5]" />
                <span>Dia de adaptação gratuito</span>
              </div>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-extrabold text-base px-8 py-4.5 transition-all duration-300 shadow-lg shadow-brand-red/15 hover:scale-102 group"
              >
                <MessageSquare className="h-5 w-5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Falar com as Tias no WhatsApp</span>
              </a>

              <button
                onClick={onOpenModal}
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-brand-yellow-light/20 hover:border-brand-yellow/40 hover:text-brand-gold text-slate-800 font-bold text-base px-8 py-4.5 transition-all duration-300 premium-shadow-sm hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>Simular Estadia Grátis</span>
              </button>
            </motion.div>

            {/* Prova Social Rápida */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 pt-5 border-t border-slate-200/60 max-w-lg"
            >
              <div className="flex -space-x-2.5 shrink-0">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src={avatarShirley}
                  alt="Avatar Shirley"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src={avatarGisele}
                  alt="Avatar Gisele"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src={avatarMariaHelena}
                  alt="Avatar Maria Helena"
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Confiado por mais de <strong className="text-slate-900 font-bold">1.200 famílias</strong> de Santa Catarina há mais de 10 anos de carinho contínuo.
              </p>
            </motion.div>

          </div>

          {/* Right Side: Media Frame & Overlaid Context */}
          <div className="lg:col-span-5 mt-8 lg:mt-0 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-yellow/10 rounded-[2.5rem] rotate-2 scale-102 blur-lg -z-10" />
              
              {/* Main Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-[2.5rem] bg-white p-2.5 shadow-2xl border border-slate-100/50 relative z-10 aspect-square object-cover"
              >
                <img
                  src={heroImg}
                  alt="Hóspedes caninos pequenos felizes no gramado do parquinho"
                  className="h-full w-full object-cover rounded-[2rem]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent rounded-[2rem] pointer-events-none" />
              </motion.div>

              {/* Floating Glassmorphic Badges */}
              {floatingBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 + idx * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`absolute z-20 flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-xl border border-slate-100/80 ${badge.position}`}
                  >
                    <div className={`rounded-xl p-1.5 ${badge.color}`}>
                      <Icon size={14} className="stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 tracking-tight whitespace-nowrap">
                      {badge.text}
                    </span>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>
      </div>

      {/* Elegant scroll anchor */}
      <div className="flex justify-center mt-12 lg:mt-20">
        <motion.a
          href="#beneficios"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="rounded-full bg-white p-3.5 shadow-md border border-slate-100 text-slate-400 hover:text-brand-gold hover:shadow-lg transition-all"
          aria-label="Rolar para os benefícios rápidos"
        >
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}
