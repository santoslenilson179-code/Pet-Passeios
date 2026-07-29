import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Menu, X } from "lucide-react";
import { getWhatsAppLink } from "../data";
import Logo from "./Logo";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Benefícios", href: "#beneficios" },
    { name: "Planos & Preços", href: "#planos-creche" },
    { name: "Regras", href: "#regras" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Instagram", href: "#instagram" },
    { name: "Localização", href: "#localizacao" },
    { name: "Perguntas Frequentes", href: "#faq" }
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-100 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
          <Logo size={54} showText={true} lightMode={true} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-red"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-brand-red transition-colors px-3 py-2 group"
          >
            <MessageSquare size={16} className="text-brand-red group-hover:scale-110 transition-transform" />
            <span>(47) 99658-7183</span>
          </a>
          
          <button
            onClick={onOpenModal}
            className="rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold px-6 py-2.5 text-sm transition-all duration-300 shadow-md shadow-brand-red/10 hover:scale-102 cursor-pointer active:scale-98"
          >
            Simular Estadia
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-xl border border-slate-100 p-2 text-slate-600 lg:hidden hover:bg-slate-50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-slate-100 bg-white lg:hidden px-6 py-4 space-y-3"
        >
          <div className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 py-1 transition-colors hover:text-brand-red"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100 text-sm"
            >
              <MessageSquare size={18} className="text-brand-red" />
              <span>Falar no WhatsApp</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full rounded-full bg-brand-red hover:bg-brand-red-dark py-3 font-extrabold text-white transition-all shadow-md shadow-brand-red/10 text-sm cursor-pointer"
            >
              Simular Estadia do Pet
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
