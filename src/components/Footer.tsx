import React from "react";
import { MessageSquare, Phone, MapPin, Mail, Instagram, ShieldCheck, Heart } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800" id="rodape">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Logo, SEO text */}
        <div className="space-y-4 text-left">
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <Logo size={54} showText={true} lightMode={false} />
          </a>
          
          {/* Organic SEO keyword paragraphs */}
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            A <strong>Pet Passeio</strong> é pioneira em serviços premium de <strong>hotel para pet</strong> e <strong>creche para cães</strong> (daycare). Oferecemos um ecossistema completo de bem-estar, diversão e acompanhamento profissional 24h para cães de pequeno porte até 10kg.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            Garantimos a melhor experiência de <strong>hospedagem para cachorro</strong> e <strong>creche de cachorro</strong> da região, com espaço amplo, monitoramento contínuo e muito carinho.
          </p>
        </div>

        {/* Column 2: Links Rápidos */}
        <div className="space-y-4 text-left lg:pl-8">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
            Links Rápidos
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold">
            <li>
              <a href="#beneficios" className="hover:text-white transition-colors">
                Benefícios
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-white transition-colors">
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-white transition-colors">
                Serviços
              </a>
            </li>
            <li>
              <a href="#diferenciais" className="hover:text-white transition-colors">
                Diferenciais
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-white transition-colors">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition-colors">
                Perguntas Frequentes
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contatos */}
        <div className="space-y-4 text-left">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
            Contatos
          </h4>
          <ul className="space-y-3 text-xs font-semibold">
            <li className="flex items-center gap-2.5">
              <MessageSquare size={14} className="text-brand-red" />
              <a href="https://wa.me/5547996587183" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                (47) 99658-7183 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-brand-red" />
              <span>(47) 99658-7183 (Suporte)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-slate-500" />
              <span>contato@petpasseio.com.br</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="text-brand-red mt-0.5 flex-shrink-0" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Ruy+Barbosa,+575+-+Amores,+Balne%C3%A1rio+Cambori%C3%BA+-+SC,+88331-510"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors leading-relaxed"
              >
                Av. Ruy Barbosa, 575 - Amores, Balneário Camboriú - SC, 88331-510
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Redes e Certificação */}
        <div className="space-y-5 text-left">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
            Siga-nos
          </h4>
          
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/petpasseiooficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-brand-red hover:text-white transition-colors"
              aria-label="Instagram @petpasseiooficial"
            >
              <Instagram size={16} />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-4 flex items-center gap-2.5 text-xs text-slate-400 font-bold">
            <ShieldCheck size={16} className="text-brand-red" />
            <span>Empresa verificada 100% segura</span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
        <div>
          <span>&copy; {currentYear} Pet Passeio. Todos os direitos reservados.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidade
          </a>
          <span>&bull;</span>
          <a href="#" className="hover:text-white transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
