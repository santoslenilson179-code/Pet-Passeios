import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds to catch user's eye
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 max-w-xs text-sm text-slate-700 font-medium mr-1"
          >
            {/* Close button inside tooltip */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Fechar"
            >
              <X size={12} />
            </button>
            
            <p className="pr-4 leading-snug">
              🐾 Olá! Precisa de um Hotel ou Creche premium para seu pet? Fale comigo agora!
            </p>
            
            {/* Small triangle below bubble */}
            <div className="absolute right-5 bottom-[-6px] h-3 w-3 rotate-45 border-r border-b border-slate-100 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-red-200/50 hover:bg-brand-red-dark transition-colors"
        aria-label="Conversar no WhatsApp"
        id="floating-whatsapp-btn"
      >
        {/* Pulsing Outer Rings */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-20 pointer-events-none" />
        
        {/* Modern icon / message bubble */}
        <MessageSquare size={26} className="fill-white text-brand-red" />
      </motion.a>
    </div>
  );
}
