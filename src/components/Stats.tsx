import React from "react";
import { motion } from "motion/react";
import { Award, PawPrint, Users, Star, MapPin } from "lucide-react";

export default function Stats() {
  const statsList = [
    {
      id: "stat1",
      icon: Users,
      value: "1.200+",
      label: "Cães Atendidos",
      desc: "Tutores felizes e tranquilos"
    },
    {
      id: "stat2",
      icon: PawPrint,
      value: "18.500+",
      label: "Hospedagens e Diárias",
      desc: "Com total segurança e carinho"
    },
    {
      id: "stat3",
      icon: Star,
      value: "5.0 / 5.0",
      label: "Avaliação Google",
      desc: "Selo de satisfação máxima"
    },
    {
      id: "stat4",
      icon: MapPin,
      value: "25+",
      label: "Cuidadores Certificados",
      desc: "Equipe especializada 24h"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 to-[#0b1320] text-white py-20 md:py-24 relative overflow-hidden" id="estatisticas">
      {/* Decorative premium radial glows */}
      <div className="absolute top-[-20%] left-[10%] h-80 w-80 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[10%] h-80 w-80 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center space-y-3 p-4 group"
              >
                {/* Icon Sphere with red hover and yellow active look */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 group-hover:bg-brand-red group-hover:text-white text-brand-yellow transition-all duration-300">
                  <Icon size={20} className={stat.id === "stat3" ? "fill-current text-brand-yellow group-hover:text-white" : ""} />
                </div>

                {/* Big numbers */}
                <span className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white block">
                  {stat.value}
                </span>

                {/* Info titles */}
                <div className="space-y-1">
                  <h4 className="text-sm md:text-base font-bold text-slate-200">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="rounded-full bg-brand-red/10 p-2.5 text-brand-red">
            <Award size={22} />
          </div>
          <p className="max-w-2xl text-sm md:text-base text-slate-300 leading-relaxed font-medium">
            <span className="font-bold text-white">Compromisso Pet Passeio:</span> "Garantia de segurança máxima, bem-estar e felicidade absoluta para o seu pet, monitorados por profissionais apaixonados por focinhos."
          </p>
        </div>
      </div>
    </section>
  );
}
