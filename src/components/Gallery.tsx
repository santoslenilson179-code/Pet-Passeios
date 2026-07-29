import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Camera, Search, Instagram, ExternalLink, Play, Sparkles } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function Gallery() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setActivePhotoIdx(idx);
  };

  const closeLightbox = () => {
    setActivePhotoIdx(null);
  };

  const navigatePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx(activePhotoIdx === 0 ? GALLERY_ITEMS.length - 1 : activePhotoIdx - 1);
    }
  };

  const navigateNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx(activePhotoIdx === GALLERY_ITEMS.length - 1 ? 0 : activePhotoIdx + 1);
    }
  };

  return (
    <section className="bg-white py-24 lg:py-32" id="galeria">
      <div className="mx-auto max-w-7xl px-6 space-y-16 lg:space-y-20">
        
        {/* Header Title */}
        <div className="space-y-4 max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red-light border border-brand-red-accent/30 px-4 py-1.5 rounded-full">
            NOSSOS MOMENTOS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Galeria de sorrisos e brincadeiras
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Dê uma espiadinha no dia a dia da nossa creche e hospedagem. Cães pequenos correndo livres, socializando com segurança e recebendo carinho abundante.
          </p>
        </div>

        {/* Featured Instagram Reel Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-white max-w-4xl mx-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 relative z-10">
            {/* Reel Embed Player Container */}
            <div className="w-full md:w-[340px] shrink-0 flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-[9/16] bg-slate-900 rounded-[2rem] overflow-hidden border-4 border-slate-700/60 shadow-2xl group">
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
                <span>Reel em Destaque no Instagram</span>
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

                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-yellow-400" />
                  Siga @petpasseiooficial
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/3] border-[6px] border-slate-50 shadow-sm hover:shadow-xl hover:border-white transition-all duration-300"
                onClick={() => openLightbox(idx)}
              >
                {/* Photo */}
                <img
                  src={item.url}
                  alt={item.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <div className={`flex items-center gap-2 mb-1.5 font-bold text-xs uppercase tracking-wider ${
                    isEven ? "text-brand-red" : "text-brand-yellow"
                  }`}>
                    <Camera size={14} />
                    <span>Pet Passeio</span>
                  </div>
                  <h4 className="text-white text-base font-bold font-display tracking-tight">
                    {item.caption}
                  </h4>
                  
                  {/* Expand indicator */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2.5 text-white shadow-md">
                    <Search size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
            />

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors cursor-pointer"
              aria-label="Fechar galeria"
            >
              <X size={20} />
            </button>

            {/* Navigation Left */}
            <button
              onClick={navigatePrev}
              className="absolute left-6 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Lightbox Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-[2.5rem] border-4 border-white/10 shadow-2xl z-10 flex flex-col justify-center items-center"
            >
              <img
                src={GALLERY_ITEMS[activePhotoIdx].url}
                alt={GALLERY_ITEMS[activePhotoIdx].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Label overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 text-white text-left max-w-md border border-white/10">
                <span className="text-xs font-bold text-brand-yellow block mb-0.5">🐾 Pet Passeio</span>
                <span className="text-base font-bold font-display">{GALLERY_ITEMS[activePhotoIdx].caption}</span>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={navigateNext}
              className="absolute right-6 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors cursor-pointer"
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
