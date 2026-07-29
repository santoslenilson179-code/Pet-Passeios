import { Benefit, Step, Service, Testimonial, FAQItem, GalleryItem } from "./types";

import avatarShirley from "./assets/images/shirley_avatar_1783539602612.jpg";
import avatarGisele from "./assets/images/gisele_avatar_1783539906789.jpg";
import avatarMariaHelena from "./assets/images/maria_helena_avatar_1783540196665.jpg";

import photo4 from "./assets/images/google_maps_photo4.jpg";
import photo5 from "./assets/images/google_maps_photo5.jpg";
import photo6 from "./assets/images/google_maps_photo6.jpg";
import photoHero from "./assets/images/google_maps_hero.jpg";
import photo2 from "./assets/images/google_maps_photo2.jpg";
import photo3 from "./assets/images/google_maps_photo3.jpg";

export const BENEFITS: Benefit[] = [
  {
    id: "seguros",
    iconName: "Shield",
    title: "Hospedagem 100% Segura",
    description: "Monitoramento por câmeras, equipe presente 24h e parceria com clínicas veterinárias para total tranquilidade do tutor."
  },
  {
    id: "carinho",
    iconName: "Heart",
    title: "Amor e Atenção Integral",
    description: "Ambiente familiar, carinho abundante e respeito aos limites e personalidade de cada cãozinho. Aqui ele é de casa!"
  },
  {
    id: "lazer",
    iconName: "Trees",
    title: "Área de Lazer Ampla",
    description: "Gramados ao ar livre, parquinho com piscina de bolinhas e brinquedos interativos pensados para a diversão e gasto de energia."
  },
  {
    id: "midia",
    iconName: "Camera",
    title: "Fotos e Vídeos Diários",
    description: "Receba atualizações personalizadas com fotos e vídeos divertidos ao longo do dia para acompanhar cada momento de alegria."
  },
  {
    id: "horario",
    iconName: "Clock",
    title: "Check-in Flexível",
    description: "Horários adaptados para facilitar a sua rotina de viagens ou trabalho, com tolerância para retirada de forma descomplicada."
  },
  {
    id: "exercicio",
    iconName: "Activity",
    title: "Socialização Saudável",
    description: "Integração inteligente com amiguinhos de porte e temperamento compatíveis, combatendo ansiedade, tédio e estresse."
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Entre em contato",
    description: "Fale conosco pelo WhatsApp em poucos segundos. Tire suas dúvidas sobre diárias de hotel ou planos de creche."
  },
  {
    number: 2,
    title: "Agende a Avaliação",
    description: "Seu pet passa por um dia de adaptação gratuito para avaliarmos o temperamento e garantir uma convivência segura."
  },
  {
    number: 3,
    title: "Prepare as malas",
    description: "Traga a ração habitual, brinquedo favorito e a carteirinha de vacinação em dia para o check-in do seu amigo."
  },
  {
    number: 4,
    title: "Seu pet aproveita!",
    description: "Ele desfruta de uma rotina rica em brincadeiras, socialização, sonecas e muito carinho no nosso espaço premium."
  }
];

export const SERVICES: Service[] = [
  {
    id: "hotel",
    title: "Hospedagem (Hotel)",
    badge: "Noite e Dia",
    description: "Ideal para viagens e finais de semana. Seu pet dorme em ambiente climatizado, acolhedor e com monitoramento profissional 24h.",
    priceEstimate: "Diárias a partir de R$ 79",
    features: [
      "Acompanhamento e supervisão 24 horas",
      "Rotina completa de brincadeiras inclusa",
      "Quartos confortáveis e higienizados",
      "Administração de medicamentos e alimentação"
    ]
  },
  {
    id: "creche",
    title: "Creche (Daycare)",
    badge: "Gasto de Energia",
    description: "Para cães que passam o dia sozinhos enquanto os tutores trabalham. Atividades físicas, mentais e socialização saudável.",
    priceEstimate: "Planos avulsos ou mensais",
    features: [
      "Atividades recreativas diárias",
      "Socialização 100% monitorada",
      "Enriquecimento ambiental cognitivo",
      "Pausas estruturadas para soneca e relaxamento"
    ]
  },
  {
    id: "plano_mensal",
    title: "Plano Recorrente Creche",
    badge: "Mais Frequente",
    description: "Planos mensais de 2x, 3x ou 5x na semana para manter a saúde mental e física do seu cão sempre em dia.",
    priceEstimate: "Melhor Custo-Benefício",
    features: [
      "Desconto progressivo na mensalidade",
      "Horário estendido para check-out",
      "Avaliação de comportamento periódica",
      "Prioridade em reservas para alta temporada"
    ]
  },
  {
    id: "meio_periodo",
    title: "Creche Meio Período",
    badge: "Ideal para Adaptação",
    description: "Perfeito para filhotes ou pets que precisam de poucas horas de gasto de energia e socialização gradativa.",
    priceEstimate: "Até 5 horas de permanência",
    features: [
      "Permanência flexível de até 5 horas",
      "Atividades recreativas direcionadas",
      "Mesma atenção, carinho e monitoramento",
      "Excelente para filhotes gastarem energia"
    ]
  },
  {
    id: "recreacao",
    title: "Recreação Educativa",
    badge: "Foco e Mente",
    description: "Gasto de energia mental e reforço positivo para cães muito ativos, ansiosos ou com ansiedade de separação.",
    priceEstimate: "Atividade extra opcional",
    features: [
      "Brinquedos recheáveis e enriquecimento",
      "Exercícios de obediência e foco",
      "Atividades de faro e busca cognitiva",
      "Relatório de evolução comportamental"
    ]
  },
  {
    id: "especiais",
    title: "Espaço Filhotes e Idosos",
    badge: "Cuidados Especiais",
    description: "Espaço exclusivo e tranquilo para filhotes em fase de vacinação ou cães idosos que preferem um cochilo sossegado.",
    priceEstimate: "Atenção redobrada",
    features: [
      "Piso emborrachado, macio e antiderrapante",
      "Área reservada longe da agitação geral",
      "Cochilos assistidos e massagens leves",
      "Supervisão geriatra e pediátrica constante"
    ]
  }
];

export const PREMIUM_DIFFERENTIALS = [
  "Monitoramento e supervisão profissional 24h",
  "Socialização inteligente dividida por porte e temperamento",
  "Ambiente 100% livre de gaiolas (no-cage)",
  "Enriquecimento ambiental e atividades cognitivas diárias",
  "Fotos e vídeos em tempo real pelo WhatsApp",
  "Parceria e convênio com clínicas veterinárias próximas",
  "Profissionais especializados em comportamento animal",
  "Espaço climatizado, seguro e higienizado diariamente"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dep0",
    name: "Shirley do Rocio Nunes",
    petName: "Nossos Pets",
    petBreed: "Clientes há 10 anos",
    comment: "Ja levamos nossos Pets na Pet Passeio a 10 anos, elas realmente amam os Pets, tratam com muita dedicacao e carinho, local muito limpo, trocam agua varias vezes ao dia e nesses dias quentes colocam gelo nas aguas. Sao Excelentes🥰",
    rating: 5,
    avatarUrl: avatarShirley,
    ownerReply: "Agradecemos a confiança e respeito de sempre. É muito prazeroso cuidar deles. Cada um com seu jeitinho ❤️"
  },
  {
    id: "dep_gisele",
    name: "Gisele Plucheg",
    petName: "Nossos Dois Pets",
    petBreed: "Hospedados desde bebês",
    comment: "Nossos dois pets ficam hospedados com as tias Helo e Ane desde bebês. É como se estivessem conosco em casa. Só gratidão pelo cuidado",
    rating: 5,
    avatarUrl: avatarGisele,
    ownerReply: "Agradecemos a confiança de sempre. São muito especiais pra nós ❤️"
  },
  {
    id: "dep_maria_helena",
    name: "Maria Helena",
    petName: "Pingo",
    petBreed: "Chihuahua - Frequenta há 5 anos",
    comment: "Meu chiuaua Pingo frequenta a Pet Passeio desde os 6 meses,e já tem 5 anos que vai 3 tardes para brincar e socializar!! Ele adora!! As queridas donas Heloísa e Anne amam animais! São amorosas,queridas e muito cuidadosas e responsáveis !!",
    rating: 5,
    avatarUrl: avatarMariaHelena,
    ownerReply: "Agradecemos o carinho e confiança de sempre. Ver o Pinguinho crescer e brincar conosco é muito gratificante. 🐶"
  },
  {
    id: "dep1",
    name: "Mariana Silva",
    petName: "Thor",
    petBreed: "Golden Retriever",
    comment: "Hospedei o Thor por um final de semana e foi a melhor decisão! Ele voltou super feliz, calmo e dormiu feito um anjo. As fotos e vídeos diários me deixaram super tranquila de que ele estava se divertindo muito no hotel.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "dep2",
    name: "Carlos Eduardo",
    petName: "Luna",
    petBreed: "Border Collie",
    comment: "A Luna frequenta a creche 3x por semana e isso salvou nossa rotina! Ela tem muita energia, e o daycare com socialização monitorada ajudou demais no comportamento dela em casa. Ela simplesmente ama a equipe!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "dep3",
    name: "Fernanda Costa",
    petName: "Pipoca",
    petBreed: "Shih Tzu",
    comment: "Tenho muita segurança em deixar a Pipoca aqui. Por ser idosa, o espaço exclusivo para cães tranquilos e idosos me dá total paz de espírito. Eles cuidam com um amor, paciência e carinho sem igual!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal_maps_4",
    url: photo4,
    caption: "Diversão e brincadeiras ao ar livre no gramado do Pet Passeio"
  },
  {
    id: "gal_maps_5",
    url: photo5,
    caption: "Cuidado e carinho em nosso espaço acolhedor e seguro"
  },
  {
    id: "gal_maps_6",
    url: photo6,
    caption: "Muitos sorrisos e momentos felizes na nossa creche e hospedagem"
  },
  {
    id: "gal_maps_hero",
    url: photoHero,
    caption: "Espaço amplo e aconchegante para socialização dos pets"
  },
  {
    id: "gal_maps_2",
    url: photo2,
    caption: "Momentos especiais e brincadeiras supervisionadas pela equipe"
  },
  {
    id: "gal_maps_3",
    url: photo3,
    caption: "Alegria contagiante e amizades diárias na creche Pet Passeio"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Quais são as regras e restrições para aceitar um cãozinho?",
    answer: "Para a segurança de todos os hóspedes, é obrigatório que os machos sejam castrados, que as vacinas estejam em dia (V10/V8, Raiva, Gripe e Giárdia), além de vermifugação e controle de pulgas/carrapatos regular. Fêmeas não podem estar no cio, e realizamos uma avaliação de temperamento gratuita antes da hospedagem."
  },
  {
    id: "faq2",
    question: "Como funciona o dia de avaliação (teste de adaptação)?",
    answer: "O teste de adaptação é gratuito e fundamental. Seu pet passa um período conosco (geralmente entre 2 e 4 horas) onde observamos como ele interage com a equipe, com outros cães, e se ele se sente confortável no ambiente."
  },
  {
    id: "faq3",
    question: "O ambiente possui gaiolas (cage-free)? Como eles dormem?",
    answer: "Nosso espaço é 100% livre de gaiolas! Na hospedagem, os cães dormem soltos em quartos coletivos climatizados ou privativos, sempre com supervisão de um monitor que passa a noite acompanhando eles de pertinho."
  },
  {
    id: "faq4",
    question: "Tenho que levar a alimentação e os pertences do meu pet?",
    answer: "Sim! Recomendamos trazer a quantidade exata de ração/alimentação natural para o período, pois mudanças bruscas na dieta podem causar dor de estômago. Você também pode trazer a caminha ou brinquedo favorito para ele se sentir em casa."
  },
  {
    id: "faq5",
    question: "Como funciona o pagamento das diárias e mensalidades?",
    answer: "Para hospedagem (Hotel), cobramos 50% do valor total na reserva e os 50% restantes no check-in. Para a Creche (Daycare), oferecemos pacotes avulsos ou mensalidades recorrentes com vencimento fixo todo início de mês via Pix ou cartão."
  }
];

// Helper to generate custom WhatsApp links
export function getWhatsAppLink(customMessage?: string): string {
  const phone = "5547996587183"; // Real phone number
  const defaultMsg = "Olá! Gostaria de saber mais sobre o Hotel e Creche de Pets e agendar uma avaliação gratuita para o meu pet.";
  const encodedMsg = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}
