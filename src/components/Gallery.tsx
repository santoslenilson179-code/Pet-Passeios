import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Camera, Search } from "lucide-react";
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
      <div className="mx-auto max-w-7xl px-6 space-y-16 lg:space-y-24">
        
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
