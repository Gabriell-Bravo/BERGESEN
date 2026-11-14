export const phone = {
  label: "+55 (21) 3231-3773",
  href: "tel:+552132313773",
};

export const address = {
  lines: [
    "Av. Almirante Barroso, 97, sala 601",
    "Centro, Rio de Janeiro — RJ",
    "CEP 20031-005",
  ],
  query: "Av. Almirante Barroso, 97, Centro, Rio de Janeiro",
};

export const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(address.query)}&z=16&output=embed`;

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.query)}`;

export const desks = [
  {
    id: "operacoes",
    name: "Operações de navios",
    note: "Chegada, terminal, abastecimento e socorro.",
    email: "operations@bergesen.com.br",
    action: "Escrever para operações",
  },
  {
    id: "documentos",
    name: "Documentação e contêiner",
    note: "Documentos da escala e contêiner.",
    email: "documents-cntr@bergesen.com.br",
    action: "Escrever para documentação",
  },
  {
    id: "financeiro",
    name: "Financeiro",
    note: "Faturamento da escala.",
    email: "financial@bergesen.com.br",
    action: "Escrever para o financeiro",
  },
];

export const reaches = [
  {
    id: "guanabara",
    title: "Baía de Guanabara",
    lede: "Contêineres, tanque, químicos, navios PCC, carga geral, ancoradouros da baía e assistência fora de barra.",
    places: [
      { name: "MULTICAR Rio", detail: "Navios PCC." },
      {
        name: "Pure Car Carriers",
        detail:
          "Veículos, ônibus, tratores, chassis, peças, cargas pesadas e de projeto, barcos e mafis.",
      },
      { name: "Multiterminais Rio", detail: "Navios de contêineres." },
      {
        name: "ICTSI Terminal",
        detail: "Navios de contêineres, tanque e químicos.",
      },
      {
        name: "Moovelub e Cosan Terminal",
        detail: "Navios tanque e químicos.",
      },
      { name: "Shell Terminal", detail: "Navios tanque e químicos." },
      {
        name: "Triunfo Terminais, Armazém 24",
        detail: "Navios tanque, químicos e carga geral.",
      },
      {
        name: "Triunfo Terminais, Armazéns 7, 8/9, 9 e 10",
        detail: "Navios graneleiros e de carga geral.",
      },
      {
        name: "Ilha d'Água, Ilha Redonda, PPS e Ilha Comprida",
        detail: "Terminais da Petrobras. Navios tanque e químicos.",
      },
      {
        name: "Ancoradouros internos da Baía de Guanabara",
        detail:
          "Abastecimento de combustíveis, reparos, troca de tripulação e atendimento médico.",
      },
      {
        name: "Fora de barra, navios arribados",
        detail: "Chamadas de socorro.",
      },
    ],
  },
  {
    id: "sepetiba",
    title: "Itaguaí, Sepetiba e Angra",
    lede: "Granéis e siderurgia em Itaguaí e Sepetiba, e navios tanque em Angra dos Reis.",
    places: [
      {
        name: "G.I.T. e C.P.B.S.",
        detail: "Terminais da Vale S/A. Navios graneleiros.",
      },
      { name: "C.S.N.", detail: "Navios graneleiros." },
      {
        name: "Sepetiba Tecont",
        detail: "Navios de contêineres, carga geral e produtos siderúrgicos.",
      },
      {
        name: "Ternium Terminal",
        detail: "Navios graneleiros e de produto siderúrgico.",
      },
      { name: "Porto Sudeste", detail: "Navios graneleiros." },
      { name: "Ferroport", detail: "Navios graneleiros." },
      { name: "Angra dos Reis", detail: "Navios tanque e químicos." },
    ],
  },
  {
    id: "norte",
    title: "Norte do estado",
    lede: "Graneleiros na Praia do Forno, em Arraial do Cabo, e no Porto do Açu.",
    places: [
      {
        name: "Praia do Forno, Arraial do Cabo",
        detail: "Navios graneleiros.",
      },
      { name: "Porto do Açu", detail: "Navios graneleiros." },
    ],
  },
  {
    id: "aeroportos",
    title: "Galeão e Santos Dumont",
    lede: "Troca de tripulação e representantes pelos aeroportos do Rio.",
    places: [
      {
        name: "Aeroporto Internacional Antônio Carlos Jobim",
        detail: "Galeão — GIG. Embarque, desembarque e representantes.",
      },
      {
        name: "Aeroporto Santos Dumont",
        detail: "Centro — SDU. Embarque, desembarque e representantes.",
      },
    ],
  },
];

export const roles = [
  "Armadores",
  "Afretadores",
  "Agentes protetores",
  "Agentes de husbandry",
];

export const frames = {
  heroTerminal: {
    src: "/fotos/home_heroe.jpg",
    alt: "Navio graneleiro atracado num píer, com carregador laranja e mangueiras vermelhas.",
  },
  heroPcc: {
    src: "/fotos/hero-carga.jpg",
    alt: "Navio de carga geral de casco verde, com guindastes amarelos, em mar azul.",
  },
  heroRebocador: {
    src: "/fotos/servicos-hero.jpg",
    alt: "Rebocador vermelho e navios fundeados numa baía azul.",
  },
  intro: {
    src: "/fotos/intro-baia.jpg",
    alt: "Baía de Guanabara com o Pão de Açúcar ao fundo e um rebocador ao longe.",
  },
  guanabara: {
    src: "/fotos/faixa-guanabara.jpg",
    alt: "Porta-contêineres atracado, com guindastes azuis e contêineres coloridos.",
  },
  sepetiba: {
    src: "/fotos/faixa-sepetiba.jpg",
    alt: "Navio graneleiro de casco vermelho num píer de minério.",
  },
  norte: {
    src: "/fotos/faixa-norte.jpg",
    alt: "Graneleiro de casco vermelho ancorado numa enseada de água turquesa.",
  },
  aeroportos: {
    src: "/fotos/faixa-galeao.jpg",
    alt: "Avião na pista do Santos Dumont, com o Pão de Açúcar e a baía ao fundo.",
  },
  mesaOperacoes: {
    src: "/fotos/navio.jpg",
    alt: "Porta-contêineres de casco verde em mar azul.",
  },
  mesaDocumentos: {
    src: "/fotos/tripulacao.jpg",
    alt: "Tripulante de macacão azul no convés, ao pôr do sol.",
  },
  mesaFinanceiro: {
    src: "/fotos/sobre.jpg",
    alt: "Navio tanque laranja na Baía de Guanabara, com o Pão de Açúcar ao fundo.",
  },
  sobreHero: {
    src: "/fotos/sobre-hero.jpg",
    alt: "Lancha branca na Baía de Guanabara, com o Pão de Açúcar ao fundo.",
  },
  sobreFoto: {
    src: "/fotos/sobre-foto.jpg",
    alt: "Lancha vermelha e branca em mar azul, com montanhas ao fundo.",
  },
  servicosHero: {
    src: "/fotos/servicos-pier.jpg",
    alt: "Navio tanque atracado num píer de concreto, com braços de carga laranja.",
  },
  contatoHero: {
    src: "/fotos/contato-hero.jpg",
    alt: "Passadiço de um navio, com boia salva-vidas laranja e o mar azul na janela.",
  },
  contatoFoto: {
    src: "/fotos/contato-cais.jpg",
    alt: "Cabeço amarelo no cais, com cabos laranja e azul.",
  },
};

export const deskFrame = {
  operacoes: "mesaOperacoes",
  documentos: "mesaDocumentos",
  financeiro: "mesaFinanceiro",
};

export const reachFrame = {
  guanabara: "guanabara",
  sepetiba: "sepetiba",
  norte: "norte",
  aeroportos: "aeroportos",
};

export const heroSlides = ["heroTerminal", "heroPcc", "heroRebocador"];

export const ticker = [
  "Baía de Guanabara",
  "Itaguaí",
  "Sepetiba",
  "Angra dos Reis",
  "Porto do Açu",
  "Arraial do Cabo",
  "Galeão",
  "Santos Dumont",
  "Navios PCC",
  "Graneleiros",
  "Porta-contêineres",
  "Petroleiros",
];
