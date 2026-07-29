import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

import imgPhoto2 from "../assets/images/google_maps_photo2.jpg";
import imgPhoto3 from "../assets/images/google_maps_photo3.jpg";
import imgPhoto4 from "../assets/images/google_maps_photo4.jpg";

export default function Benefits() {
  const highlights = [
    {
      id: "playground",
      image: imgPhoto2,
      badge: "Lazer e Liberdade",
      title: "Parquinho Amplo & Recreativo",
      description: "Nossos hóspedes se divertem soltos em gramas e parquinhos sob medida. Um ambiente dinâmico projetado para o gasto saudável de energia e interação dócil.",
      bullets: [
        "Ambiente 100% seguro e monitorado",
        "Piso e gramado adaptados de alta qualidade",
        "Brinquedos interativos de gasto de energia"
      ],
      isEven: false,
      accentColor: "brand-red",
      bgColor: "bg-brand-red-light/30",
      borderColor: "border-brand-red-accent/20"
    },
    {
      id: "shihtzu-ballpit",
      image: imgPhoto3,
      badge: "Sucesso entre os Pets",
      title: "Piscina de Bolinhas & Enriquecimento",
      description: "A famosa piscina de bolinhas é um sucesso absoluto! Ela estimula os sentidos sensoriais do cãozinho de maneira lúdica e super divertida, combatendo o estresse e a ansiedade de separação.",
      bullets: [
        "Estímulo tátil e enriquecimento sensorial",
        "Momentos de muita descontração",
        "Higienização constante de todas as bolinhas"
      ],
      isEven: true,
      accentColor: "brand-gold",
      bgColor: "bg-brand-yellow-light/80",
      borderColor: "border-brand-yellow-accent/40"
    },
    {
      id: "socialization-space",
      image: imgPhoto4,
      badge: "Estimulação Cognitiva",
      title: "Estímulo Físico & Socialização Guiada",
      description: "Espaço amplo e acolhedor projetado para a convivência pacífica e saudável entre os cães. Dinâmicas de comportamento coordenadas por profissionais experientes.",
      bullets: [
        "Interação e socialização supervisionada",
        "Enriquecimento ambiental e cognitivo",
        "Respeito ao temperamento individual de cada pet"
      ],
      isEven: false,
      accentColor: "brand-red",
      bgColor: "bg-brand-red-light/30",
      borderColor: "border-brand-red-accent/20"
    }
  ];

  return (
    <section className="bg-[#FDFBFC] py-24 lg:py-32 relative overflow-hidden border-y border-slate-100/75" id="beneficios">
      {/* Decorative background radial glows */}
      <div className="absolute top-0 right-1/4 h-96 w-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Title */}
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red-light border border-brand-red-accent/30 px-4 py-1.5 rounded-full inline-block">
            ESTRUTURA DE ALTO PADRÃO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            O cuidado impecável que você busca, com a diversão que ele merece.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-normal">
            Mais do que um hotel, somos um refúgio premium projetado para o bem-estar de todos os cães. Veja como alternamos atividades e carinho em nossa rotina diária:
          </p>
        </div>

        {/* Alternating Highlights (Zig-Zag Layout) */}
        <div className="space-y-20 md:space-y-32">
          {highlights.map((item, idx) => {
            const isEven = item.isEven;
            return (
              <div 
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image block */}
                <div className={`lg:col-span-6 relative flex justify-center ${
                  isEven ? "lg:order-first" : "lg:order-last"
                }`}>
                  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
                    {/* Shadow rotation accent */}
                    <div className={`absolute inset-0 rounded-[2.5rem] rotate-2 scale-102 blur-md -z-10 ${
                      isEven ? "bg-brand-yellow/10" : "bg-brand-red/5"
                    }`} />
                    
                    {/* Image Frame */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden rounded-[2.5rem] bg-white p-2.5 shadow-xl border border-slate-100 relative z-10 aspect-square"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover rounded-[2rem] hover:scale-103 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Text Block */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <span className={`text-xs font-bold uppercase tracking-widest border px-4 py-1.5 rounded-full inline-block ${
                      isEven
                        ? "text-brand-gold bg-brand-yellow-light border-brand-yellow-accent/40"
                        : "text-brand-red bg-brand-red-light border-brand-red-accent/30"
                    }`}>
                      {item.badge}
                    </span>
                    
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Bullets */}
                  <ul className="space-y-3 pt-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <motion.li
                        key={bIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: bIdx * 0.1 }}
                        className="flex items-start gap-3 text-sm text-slate-700 font-semibold"
                      >
                        <div className={`rounded-full p-0.5 mt-0.5 border flex-shrink-0 ${
                          isEven
                            ? "bg-brand-yellow-light text-brand-gold border-brand-yellow-accent/30"
                            : "bg-brand-red-light text-brand-red border-brand-red-accent/20"
                        }`}>
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
