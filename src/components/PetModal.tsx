import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, PawPrint, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "../data";

interface PetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PetModal({ isOpen, onClose }: PetModalProps) {
  const [step, setStep] = useState(1);
  const [petName, setPetName] = useState("");
  const [petSize, setPetSize] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [frequency, setFrequency] = useState("");

  const resetForm = () => {
    setStep(1);
    setPetName("");
    setPetSize("");
    setServiceType("");
    setFrequency("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleGenerateWhatsApp = () => {
    const message = `Olá! Gostaria de simular as diárias e plano para o meu pet:
🐾 Nome: ${petName || "Não informado"}
📏 Porte: ${petSize || "Não informado"}
🏨 Serviço: ${serviceType || "Não informado"}
📅 Período/Frequência: ${frequency || "Não informado"}

Gostaria de agendar o dia de teste e adaptação gratuita!`;

    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
    handleClose();
  };

  const canGoNext = () => {
    if (step === 1) return petName.trim().length > 0;
    if (step === 2) return petSize !== "";
    if (step === 3) return serviceType !== "";
    if (step === 4) return frequency !== "";
    return true;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            id="pet-wizard-modal"
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white shadow-2xl z-10 border border-slate-100"
          >
            {/* Header decoration */}
            <div className="bg-gradient-to-br from-brand-red to-brand-gold p-6 md:p-8 text-white relative">
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 md:right-6 md:top-6 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 cursor-pointer"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/15 p-2">
                  <PawPrint className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">Simulador de Estadia</h3>
                  <p className="text-sm text-amber-50 font-medium">Monte a hospedagem ou creche ideal para o seu pet!</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6 h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: "20%" }}
                  animate={{ width: `${(step / 5) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-wider">
                      <Sparkles size={16} />
                      <span>Passo 1 de 4</span>
                    </div>
                    <label className="block text-lg font-bold font-display text-slate-900 tracking-tight">
                      Qual é o nome do seu cãozinho?
                    </label>
                    <input
                      type="text"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Ex: Rex, Mel, Pipoca..."
                      className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 p-4 text-slate-800 outline-none transition-all focus:border-brand-red focus:bg-white text-base font-medium"
                      autoFocus
                    />
                    <p className="text-xs text-slate-400 font-normal">Pode ser apelido também, nós já amamos ele!</p>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
                      <Sparkles size={16} />
                      <span>Passo 2 de 4</span>
                    </div>
                    <label className="block text-lg font-bold font-display text-slate-900 tracking-tight">
                      Qual é o porte/tamanho de {petName}?
                    </label>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {[
                        { key: "Pequeno (até 10kg)", desc: "Ex: Shih Tzu, Pug, Poodle" },
                        { key: "Médio (11kg a 25kg)", desc: "Ex: Cocker, Bulldog, Beagle" },
                        { key: "Grande (mais de 25kg)", desc: "Ex: Golden, Labrador, Pastor" }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => setPetSize(item.key)}
                          className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all cursor-pointer ${
                            petSize === item.key
                              ? "border-brand-red bg-brand-red-light/40 text-brand-red font-bold"
                              : "border-slate-100 bg-slate-50 hover:border-slate-300 text-slate-600"
                          }`}
                        >
                          <span className="font-bold text-sm">{item.key.split(" ")[0]}</span>
                          <span className="text-xs text-slate-400 mt-1 font-normal">{item.desc}</span>
                        </button>
                      ))}
                    </div>

                    {/* General requirements banner inside modal step 2 */}
                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 text-xs text-slate-500 space-y-1.5">
                      <p className="font-bold text-slate-800 flex items-center gap-1">
                        <span>📋 Requisitos Importantes:</span>
                      </p>
                      <ul className="list-disc list-inside space-y-0.5 font-normal text-slate-600">
                        <li>Obrigatório machos castrados</li>
                        <li>Vacinação, vermífugo e controle de antipulgas em dia</li>
                        <li>Avaliação de comportamento positiva</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-wider">
                      <Sparkles size={16} />
                      <span>Passo 3 de 4</span>
                    </div>
                    <label className="block text-lg font-bold font-display text-slate-900 tracking-tight">
                      Qual serviço você busca para {petName}?
                    </label>
                    <div className="space-y-3">
                      {[
                        { key: "Hospedagem (Hotel para Pets)", desc: "Seu pet passa noites conosco em ambiente familiar e aconchegante." },
                        { key: "Creche (Daycare)", desc: "Gasto de energia, atividades cognitivas e socialização diurna." },
                        { key: "Espaço Filhotes / Idosos", desc: "Área reservada e super tranquila para cuidados especiais." }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => setServiceType(item.key)}
                          className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 text-left transition-all cursor-pointer ${
                            serviceType === item.key
                              ? "border-brand-yellow bg-brand-yellow-light/50 text-brand-gold font-bold"
                              : "border-slate-100 bg-slate-50 hover:border-slate-200 text-slate-600"
                          }`}
                        >
                          <div>
                            <p className="font-bold text-sm text-slate-800">{item.key}</p>
                            <p className="text-xs text-slate-400 mt-0.5 font-normal">{item.desc}</p>
                          </div>
                          {serviceType === item.key && (
                            <div className="rounded-full bg-brand-yellow p-1 text-slate-950">
                              <Check size={12} />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
                      <Sparkles size={16} />
                      <span>Passo 4 de 4</span>
                    </div>
                    <label className="block text-lg font-bold font-display text-slate-900 tracking-tight">
                      Com que frequência ou por quanto tempo?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Diária Avulsa",
                        "Finais de semana",
                        "2x a 3x na semana (Creche)",
                        "Mensal (Segunda a Sexta)",
                        "Viagens longas (Hotel)",
                        "Feriados prolongados"
                      ].map((freq) => (
                        <button
                          key={freq}
                          onClick={() => setFrequency(freq)}
                          className={`flex items-center justify-center rounded-2xl border-2 p-4 text-center transition-all text-sm font-semibold cursor-pointer ${
                            frequency === freq
                              ? "border-brand-red bg-brand-red-light/40 text-brand-red font-bold"
                              : "border-slate-100 bg-slate-50 hover:border-slate-200 text-slate-600"
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center space-y-5"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red-light text-brand-red border border-brand-red-accent/30">
                      <PawPrint className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold font-display text-slate-900 tracking-tight">Tudo pronto para a estadia de {petName}!</h4>
                      <p className="text-sm text-slate-500 font-normal">
                        Montamos a proposta perfeita. Ao clicar no botão abaixo, enviaremos as informações detalhadas para nosso WhatsApp para agendarmos o dia de adaptação gratuita.
                      </p>
                    </div>

                    {/* Proposal Summary Card */}
                    <div className="rounded-2xl bg-slate-50 p-5 text-left text-sm space-y-2.5 border border-slate-100 font-medium text-slate-600">
                      <div className="flex justify-between border-b border-slate-150 pb-2">
                        <span>🐶 Pet:</span>
                        <span className="font-bold text-slate-800">{petName}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-150 pb-2">
                        <span>📏 Porte:</span>
                        <span className="font-bold text-slate-800">{petSize.split(" ")[0]}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-150 pb-2">
                        <span>🏨 Serviço:</span>
                        <span className="font-bold text-slate-800">{serviceType.split(" ")[0]}</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span>📅 Período:</span>
                        <span className="font-bold text-slate-800">{frequency}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="mt-8 flex items-center justify-between gap-3">
                {step > 1 && step < 5 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="rounded-xl border-2 border-slate-200 px-5 py-3 font-semibold text-slate-500 transition-colors hover:bg-slate-50 text-sm cursor-pointer"
                  >
                    Voltar
                  </button>
                ) : (
                  <div />
                )}

                {step < 5 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canGoNext()}
                    className={`flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-white transition-all shadow-md text-sm ${
                      canGoNext()
                        ? "bg-brand-red hover:bg-brand-red-dark hover:shadow-lg shadow-brand-red/10 cursor-pointer"
                        : "bg-slate-200 cursor-not-allowed shadow-none text-slate-400"
                    }`}
                  >
                    <span>Avançar</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handleGenerateWhatsApp}
                    className="w-full flex items-center justify-center gap-2.5 rounded-full bg-brand-red hover:bg-brand-red-dark px-6 py-4 font-extrabold text-white transition-all shadow-lg shadow-brand-red/20 text-base cursor-pointer"
                  >
                    <MessageSquare size={18} />
                    <span>Enviar Proposta por WhatsApp</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
