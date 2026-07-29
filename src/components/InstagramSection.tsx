import React from "react";
import { motion } from "motion/react";
import { Instagram, ExternalLink, Sparkles, Heart } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28" id="instagram">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-black uppercase tracking-wider">
            <Instagram size={16} className="text-pink-600" />
            <span>Redes Sociais & Dia a Dia</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Acompanhe nossa rotina no Instagram
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Postamos diariamente fotos, vídeos e reels com a alegria e as brincadeiras dos nossos hóspedes de quatro patas.
          </p>
        </div>

        {/* Featured Reel Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-white max-w-4xl mx-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/15 via-purple-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 relative z-10">
            {/* Reel Embed Player Container */}
            <div className="w-full md:w-[320px] shrink-0 flex flex-col items-center">
              <div className="relative w-full max-w-[300px] aspect-[9/16] bg-slate-900 rounded-[2rem] overflow-hidden border-4 border-slate-700/60 shadow-2xl group">
                <iframe
                  src="https://www.instagram.com/reel/DZgOiS8ts67/embed"
                  title="Instagram Reel Pet Passeio"
                  className="w-full h-full border-0 rounded-[1.8rem]"
                  allowTransparency={true}
                  allow="encrypted-media"
                />
              </div>
            </div>

            {/* Reel Details & Direct Link */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-pink-500/30 text-pink-300 text-xs font-extrabold uppercase tracking-wider">
                <Instagram size={15} className="text-pink-400" />
                <span>Reel em Destaque</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                  Vídeo Oficial no @petpasseiooficial 🐾
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Confira a rotina alegre, o cuidado afetuoso e as brincadeiras supervisionadas dos cãozinhos na creche e hospedagem do Pet Passeio!
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://www.instagram.com/petpasseiooficial/reel/DZgOiS8ts67/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Instagram size={18} />
                  <span>Ver Reel no Instagram</span>
                  <ExternalLink size={16} className="opacity-80" />
                </a>

                <a
                  href="https://www.instagram.com/petpasseiooficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles size={14} className="text-yellow-400" />
                  Siga @petpasseiooficial
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
