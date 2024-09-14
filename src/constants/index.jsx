import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Funcionalidades", href: "#" },
  { label: "Fluxo de Trabalho", href: "#" },
  { label: "Preços", href: "#" },
  { label: "Depoimentos", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Soluções Estelares",
    image: user1,
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi responsiva, profissional e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Tecnologias Horizonte Azul",
    image: user2,
    text: "Estou muito feliz com o resultado do nosso projeto. A criatividade e as habilidades de resolução de problemas da equipe foram fundamentais para trazer nossa visão à vida.",
  },
  {
    user: "David Johnson",
    company: "Inovações Quânticas",
    image: user3,
    text: "Trabalhar com essa empresa foi um prazer. A atenção aos detalhes e o compromisso com a excelência são dignos de elogios. Eu recomendaria fortemente a qualquer pessoa que busca um serviço de alto nível.",
  },
  {
    user: "Ronee Brown",
    company: "Dinâmicas de Fusão",
    image: user4,
    text: "Trabalhar com a equipe da Empresa XYZ foi um divisor de águas para o nosso projeto. A atenção aos detalhes e as soluções inovadoras nos ajudaram a alcançar nossos objetivos mais rápido do que imaginávamos. Somos gratos pela expertise e profissionalismo deles!",
  },
  {
    user: "Michael Wilson",
    company: "Criações Visionárias",
    image: user5,
    text: "Estou impressionado com o nível de profissionalismo e dedicação demonstrados pela equipe. Eles conseguiram superar nossas expectativas e entregar resultados incríveis.",
  },
  {
    user: "Emily Davis",
    company: "Sistemas Sinérgicos",
    image: user6,
    text: "A equipe foi além do esperado para garantir o sucesso do nosso projeto. A expertise e a dedicação deles são incomparáveis. Estou ansiosa para trabalhar com eles novamente no futuro.",
  },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interface de Arrastar e Soltar",
    description:
      "Projete e organize facilmente seus ambientes de VR com uma interface intuitiva de arrastar e soltar.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidade Multi-Plataforma",
    description:
      "Desenvolva aplicativos de VR que funcionam perfeitamente em várias plataformas, incluindo mobile, desktop e headsets de VR.",
  },
  {
    icon: <ShieldHalf />,
    text: "Templates Integrados",
    description:
      "Comece seus projetos de VR rapidamente com uma variedade de templates integrados para diferentes tipos de aplicativos e ambientes.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pré-visualização em Tempo Real",
    description:
      "Veja seu aplicativo de VR em tempo real à medida que faz alterações, permitindo iterações rápidas e ajustes.",
  },
  {
    icon: <PlugZap />,
    text: "Ferramentas de Colaboração",
    description:
      "Trabalhe com sua equipe em tempo real em projetos de VR, permitindo uma colaboração contínua e compartilhamento de ideias.",
  },
  {
    icon: <GlobeLock />,
    text: "Painel de Análises",
    description:
      "Obtenha insights valiosos sobre as interações e comportamentos dos usuários em seus aplicativos de VR com um painel de análises integrado.",
  },
];


export const checklistItems = [
  {
    title: "Junção de código simplificada",
    description:
      "Acompanhe o desempenho dos seus aplicativos de VR e obtenha insights sobre o comportamento dos usuários.",
  },
  {
    title: "Revise o código sem preocupações",
    description:
      "Acompanhe o desempenho dos seus aplicativos de VR e obtenha insights sobre o comportamento dos usuários.",
  },
  {
    title: "Assistência por IA para reduzir o tempo",
    description:
      "Acompanhe o desempenho dos seus aplicativos de VR e obtenha insights sobre o comportamento dos usuários.",
  },
  {
    title: "Compartilhe seu trabalho em minutos",
    description:
      "Acompanhe o desempenho dos seus aplicativos de VR e obtenha insights sobre o comportamento dos usuários.",
  },
];


export const pricingOptions = [
  {
    title: "Grátis",
    price: "R$0",
    features: [
      "Compartilhamento de quadro privado",
      "5 Gb de armazenamento",
      "Análise da web",
      "Modo privado",
    ],
  },
  {
    title: "Pro",
    price: "R$10",
    features: [
      "Compartilhamento de quadro privado",
      "10 Gb de armazenamento",
      "Análise da web (Avançada)",
      "Modo privado",
    ],
  },
  {
    title: "Enterprise",
    price: "R$200",
    features: [
      "Compartilhamento de quadro privado",
      "Armazenamento ilimitado",
      "Rede de alto desempenho",
      "Modo privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Primeiros Passos" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Tutoriais" },
  { href: "#", text: "Referência de API" },
  { href: "#", text: "Fóruns da Comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Funcionalidades" },
  { href: "#", text: "Dispositivos Suportados" },
  { href: "#", text: "Requisitos do Sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas de Lançamento" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferências" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Vagas de Emprego" },
];
