import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Copy, Check, ExternalLink, Calendar, Compass, Phone } from "lucide-react";

export default function LocationAndHours() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const address = "Av. Ruy Barbosa, 575 - Amores, Balneário Camboriú - SC, 88331-510";
  const plusCode = "29R9+6C Balneário Camboriú, Santa Catarina";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  const schedule = [
    { day: "Segunda-feira", hours: "08:30 – 18:30", type: "continuous" },
    { day: "Terça-feira", hours: "08:30 – 10:00 | 17:00 – 18:00", type: "split" },
    { day: "Quarta-feira", hours: "08:30 – 10:00 | 17:00 – 18:00", type: "split" },
    { day: "Quinta-feira", hours: "08:30 – 18:30", type: "continuous" },
    { day: "Sexta-feira", hours: "08:30 – 18:30", type: "continuous" },
    { day: "Sábado", hours: "08:30 – 10:00 | 17:00 – 18:00", type: "split" },
    { day: "Domingo e Feriados", hours: "08:30 – 10:00 | 17:00 – 18:00", type: "split" },
  ];

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-b border-slate-100" id="localizacao">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-1/4 h-96 w-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Title */}
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red-light border border-brand-red-accent/30 px-4 py-1.5 rounded-full inline-block">
            VISITE-NOS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Localização & Horários
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-normal">
            Estamos localizados no coração da Praia dos Amores. Venha nos visitar e conhecer de perto o nosso espaço premium preparado com todo carinho para o seu melhor amigo!
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Address Card & Map Launcher */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="rounded-[2.5rem] bg-gradient-to-tr from-slate-50 to-brand-red-light/20 p-8 md:p-10 border border-slate-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-red/5 rounded-full blur-2xl" />
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white shadow-md shadow-brand-red/20">
                  <MapPin size={24} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Nosso Endereço
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                    {address}
                  </p>
                </div>

                {/* Interactive Copy Button */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-700 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                  >
                    {copiedAddress ? (
                      <>
                        <Check size={14} className="text-green-600" />
                        <span className="text-green-600">Endereço Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} className="text-slate-500" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-brand-red text-white hover:bg-brand-red-dark px-4 py-2.5 text-xs font-bold transition-all duration-200 shadow-md shadow-brand-red/10 hover:shadow-lg active:scale-95"
                  >
                    <ExternalLink size={14} />
                    <span>Como Chegar</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Plus Code & Contacts Card */}
            <div className="rounded-[2rem] bg-slate-50 border border-slate-100 p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-brand-gold border border-slate-200/60 shadow-sm flex-shrink-0">
                  <Compass size={20} />
                </div>
                <div className="space-y-2 flex-grow">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Plus Code Google Maps</span>
                  <p className="text-sm font-bold text-slate-800">{plusCode}</p>
                  <button
                    onClick={handleCopyPlusCode}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-brand-red-dark transition-colors cursor-pointer"
                  >
                    {copiedPlusCode ? (
                      <>
                        <Check size={12} className="text-green-600" />
                        <span className="text-green-600">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copiar Plus Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="h-px bg-slate-200/60" />

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-brand-red border border-slate-200/60 shadow-sm flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Fale Conosco</span>
                  <a
                    href="https://wa.me/5547996587183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-800 hover:text-brand-red transition-colors block"
                  >
                    (47) 99658-7183
                  </a>
                  <span className="text-xs font-normal text-slate-400 block">Atendimento rápido via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Working Hours Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[2.5rem] bg-white border border-slate-100 p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-brand-yellow/5 rounded-full blur-2xl" />
              
              <div className="space-y-6 relative z-10 text-left">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-slate-950 shadow-md shadow-brand-yellow/10">
                    <Clock size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Calendar size={12} />
                    7 Dias por Semana
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Horário de Atendimento
                  </h3>
                  <p className="text-xs font-bold text-brand-red uppercase tracking-wider">
                    Para Check-in e Check-out
                  </p>
                  <p className="text-sm font-normal text-slate-500 pt-1">
                    Nossos horários são planejados para respeitar a rotina de alimentação, recreação e descanso dos cachorrinhos.
                  </p>
                </div>

                {/* Summary Cards directly inspired by the schedule banner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Continuous Days Box */}
                  <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200/80 p-4 space-y-3">
                    <div className="inline-flex items-center gap-2 bg-emerald-600 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                      <span>2ª</span>
                      <span>5ª</span>
                      <span>6ª</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                      <Clock size={16} className="text-emerald-600 flex-shrink-0" />
                      <span>Das 8:30 às 18:30</span>
                    </div>
                  </div>

                  {/* Split Days Box */}
                  <div className="rounded-2xl bg-amber-50/80 border border-amber-200/80 p-4 space-y-3">
                    <div className="inline-flex items-center gap-1.5 bg-amber-600 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm flex-wrap">
                      <span>3ª</span>
                      <span>4ª</span>
                      <span>Sáb</span>
                      <span>Dom</span>
                      <span>Feriados</span>
                    </div>
                    <div className="space-y-1 text-xs font-bold text-amber-950">
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-amber-600 flex-shrink-0" />
                        <span>Manhã: 8:30 às 10:00</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-amber-600 flex-shrink-0" />
                        <span>Tarde: das 17:00 às 18:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day Table */}
                <div className="space-y-3 pt-4">
                  {schedule.map((item, idx) => {
                    const isContinuous = item.type === "continuous";
                    return (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/50 transition-all duration-200 border border-slate-100/40"
                      >
                        <span className="text-sm font-bold text-slate-700">
                          {item.day}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                            isContinuous 
                              ? "bg-brand-red-light text-brand-red border border-brand-red-accent/10" 
                              : "bg-brand-yellow-light text-brand-gold border border-brand-yellow-accent/10"
                          }`}>
                            {item.hours}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Additional Important Note */}
                <div className="mt-4 rounded-2xl bg-amber-50/50 p-4 border-l-4 border-brand-yellow text-xs space-y-1 leading-relaxed">
                  <p className="font-bold text-slate-800">📌 Observação importante sobre check-in/out:</p>
                  <p className="text-slate-500 font-normal">
                    Nos dias com horários fracionados (Ter, Qua, Sáb, Dom), o recebimento e entrega dos pets ocorrem estritamente nas janelas indicadas para não interromper o período de repouso e adaptação dos hóspedes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
