export type ChapterId =
  | "ch01"
  | "ch02"
  | "ch03"
  | "ch04"
  | "ch05"
  | "ch06"
  | "ch07"
  | "ch08"
  | "ch09"
  | "ch10"
  | "ch11"
  | "ch12"
  | "ch13"

export type Place = {
  id: string
  name: string
  lat: number
  lng: number
  city: string
  memory: string
  photoKey: string
}

export const STORY = {
  title: "Que os Caminhos se Cruzem",
  subtitle: "Uma historia de amor, amadurecimento e transformacao.",
  lovers: {
    him: "Winicius",
    her: "Mariana"
  },
  author: "Winicius Augusto",
  openingButton: "Iniciar nossa jornada",
  specialDate: "28/12/2024",
  valentinesMessage: "Feliz Dia dos Namorados, Mari Mari.",
  dedication:
    "Dedico a pessoa na qual eu mais amei nesse mundo, e ao perdao de todas as acoes contrarias que fomos capazes durante o periodo em que estivemos juntos.",
  prologue: [
    "Se eu pudesse me ver agora, sendo aquela pessoa que fui um dia, provavelmente daria risada de mim mesmo: escrevendo sobre uma historia de amor.",
    "Eu era alguem que nao se via ao lado de ninguem. E, no entanto, acabei me apaixonando por uma menina que provocou mudancas profundas dentro de mim.",
    "Talvez o verdadeiro desafio nao seja evitar o amor, mas aprender a lidar com ele. Porque o significado do amor vai muito alem da ideia de paz ou sofrimento. O amor e transformacao."
  ],
  letter: {
    opening: "Mariana,",
    body: [
      "Quando olho para tudo o que vivemos, percebo que a nossa historia nunca foi perfeita. Ela foi real.",
      "Foi construida entre conversas que atravessaram madrugadas, entre risadas sem motivo, entre cachoeiras, despedidas que pareciam definitivas e reencontros que mostraram que ainda existia algo aqui.",
      "Voce esteve ao meu lado quando eu estava vulneravel. Voce me viu em versoes minhas que poucas pessoas conheceram. Conheceu minhas falhas, meus medos e minhas insegurancas.",
      "Voce me ensinou que amar nao e apenas sentir. E escolher. Escolher ficar. Escolher entender. Escolher crescer.",
      "Hoje eu nao sou o mesmo homem que conheceu voce. E isso aconteceu porque voce passou pela minha vida.",
      "Algumas historias merecem continuar sendo escritas. A nossa, de alguma forma, sempre vai existir no que nos transformou."
    ],
    closing: "Eu amo voce.",
    signature: "Para sempre, Winicius."
  },
  surprise: {
    buttonText: "Abra apenas se tiver certeza.",
    mainLine: "Mariana, entre todas as escolhas da minha vida, voce continua sendo a melhor delas.",
    secondLine: "Se eu pudesse voltar no tempo mil vezes, eu escolheria voce em todas elas.",
    actionButton: "Continuar escrevendo essa historia",
    finalMessage: "Feliz Dia dos Namorados, Mari Mari.",
    finalSub: "Que nossos caminhos continuem se cruzando por toda a vida."
  }
}

export const CHAPTER_SEQUENCE: ChapterId[] = [
  "ch01",
  "ch02",
  "ch03",
  "ch04",
  "ch05",
  "ch06",
  "ch07",
  "ch08",
  "ch09",
  "ch10",
  "ch11",
  "ch12",
  "ch13"
]

export const CHAPTERS = {
  ch01: {
    number: "I",
    title: "Antes de voce existir na minha historia",
    subtitle: "Uma infancia que moldou medos.",
    paragraphs: [
      "Um menino que, por muito tempo, acreditou que dentro do proprio coracao nao existia espaco para o amor.",
      "Ele cresceu em um ambiente onde existia amor, mas um amor perdido dentro de conflitos que ninguem parecia saber resolver.",
      "Sem perceber, ele crescia acreditando que relacionamentos eram feitos de conflito, distancia e desgaste.",
      "Mas, se as raizes nos formam, sao os galhos que mostram quem realmente escolhemos ser.",
      "Foi atraves dela que comecei a entender que amar tambem pode significar cuidado, paciencia, crescimento e presenca."
    ]
  },
  ch02: {
    number: "II",
    title: "Dois caminhos diferentes",
    subtitle: "Duas historias. Um destino.",
    opening: "Caminhos nunca se cruzam por acaso.",
    him: {
      label: "Winicius",
      milestones: [
        "Sonhos construidos na incerteza",
        "Silencios que criaram defesa",
        "Um coracao que aprendeu a desconfiar",
        "Mas que nunca deixou de procurar"
      ]
    },
    her: {
      label: "Mariana",
      milestones: [
        "Uma luz que nao sabia o quanto brilhava",
        "Gentileza construida sem esforco",
        "Uma historia escrita com cuidado",
        "Esperando o caminho certo cruzar o seu"
      ]
    },
    closing:
      "A vida gosta de aproximar pessoas que nem sequer sabem da existencia uma da outra. Ate que algo pequeno acontece: um detalhe, uma conversa, um fora."
  },
  ch03: {
    number: "III",
    title: "Quando nossos caminhos se cruzaram",
    subtitle: "O universo tem um timing perfeito.",
    moments: [
      { icon: "01", text: "Tudo comecou com um fora no festival da escola." },
      { icon: "02", text: "Uma curtida apareceu e parecia pequena para o mundo, enorme para mim." },
      { icon: "03", text: "Um comentario sobre uma roupa abriu a primeira conversa de verdade." },
      { icon: "04", text: "Duas historias que nunca imaginaram se encontrar comecaram a se aproximar." }
    ]
  },
  ch04: {
    number: "IV",
    title: "Conversas que aproximam almas",
    subtitle: "Madrugadas que se tornaram meses.",
    messages: [
      { side: "him", text: "Oi, ta acordada ainda?" },
      { side: "her", text: "Sempre quando voce aparece." },
      { side: "him", text: "Tinha uma coisa que queria te contar..." },
      { side: "her", text: "Pode falar. Tenho tempo." },
      { side: "him", text: "O tempo que voce me da e o melhor presente." },
      { side: "her", text: "Eu gosto quando voce fica." }
    ],
    closing:
      "Aquilo que parecia apenas uma troca de palavras comecava a ocupar um espaco maior dentro do meu dia."
  },
  ch05: {
    number: "V",
    title: "Quando comecou a se tornar real",
    subtitle: "Cada primeiro e eterno.",
    paragraphs: [
      "Com o passar do tempo, falar com voce ja fazia parte da minha rotina. Nao era mais apenas algo ocasional.",
      "Foi nesse periodo que aconteceu algo marcante na minha vida: eu precisei passar por uma cirurgia.",
      "Voce permaneceu. Mesmo sem ter nenhuma obrigacao de fazer isso, voce continuou ali.",
      "Depois vieram os encontros, o primeiro selinho, o primeiro beijo e a percepcao de que aquilo ja nao era passageiro."
    ],
    milestones: [
      {
        title: "Primeiro encontro",
        description: "O nervosismo que nenhuma palavra consegue descrever.",
        photoKey: "first_date"
      },
      {
        title: "Primeiro selinho",
        location: "Igreja da Matriz",
        description: "Um lugar sagrado que guardou o inicio de algo sagrado.",
        photoKey: "first_kiss_matrix"
      },
      {
        title: "Primeiro beijo de verdade",
        location: "Basilica do Bom Jesus",
        description: "A cidade testemunhou. O tempo parou.",
        photoKey: "first_kiss_basilica"
      }
    ]
  },
  ch06: {
    number: "VI",
    title: "Quando deixamos de ser apenas nos dois",
    subtitle: "A escolha de permanecer.",
    paragraphs: [
      "Depois do afastamento, nada voltou a ser exatamente como antes. O tempo passou, mas aquilo que existia entre nos nao desapareceu.",
      "As conversas voltaram com mais cuidado, como se ambos estivessem tentando entender ate onde poderiam ir sem repetir os mesmos erros.",
      "Agora existia presenca, constancia e, principalmente, uma escolha de permanecer.",
      "Voce me mostrava, atraves de atitudes simples, que o amor nao precisava ser confuso, nem baseado em conflitos constantes."
    ]
  },
  ch07: {
    number: "VII",
    title: "Lugares que guardam nossa historia",
    subtitle: "Geografias do amor.",
    intro:
      "Congonhas deixou de ser apenas a cidade onde eu vivia. Ela se tornou o cenario de momentos que fazem parte de mim.",
    places: [
      {
        id: "matriz",
        name: "Igreja da Matriz",
        lat: -20.6614,
        lng: -43.7844,
        city: "Congonhas",
        memory: "Onde um selinho mudou tudo.",
        photoKey: "place_matriz"
      },
      {
        id: "basilica",
        name: "Basilica do Bom Jesus",
        lat: -20.4997,
        lng: -43.8647,
        city: "Congonhas",
        memory: "O primeiro beijo real. Perto do sagrado.",
        photoKey: "place_basilica"
      },
      {
        id: "cachoeiras",
        name: "Cachoeiras de Congonhas",
        lat: -20.51,
        lng: -43.86,
        city: "Congonhas",
        memory: "Agua fria, risadas quentes e silencio suficiente.",
        photoKey: "place_waterfall"
      }
    ] satisfies Place[]
  },
  ch08: {
    number: "VIII",
    title: "Pequenos momentos que se tornam eternos",
    subtitle: "Amor mora nos detalhes.",
    moments: [
      { type: "apelido", content: "Mari Mari", desc: "Porque um so nao era suficiente" },
      { type: "momento", content: "Risadas sem motivo", desc: "Que tinham todos os motivos" },
      { type: "silencio", content: "Ficar em silencio junto", desc: "E isso ser completamente suficiente" },
      { type: "mania", content: "Seus detalhes", desc: "O jeito de falar, olhar e sorrir quando estava feliz" },
      { type: "rotina", content: "Bom dia todos os dias", desc: "O melhor inicio possivel" },
      { type: "presenca", content: "Estar perto", desc: "Sem precisar fingir, esconder ou se proteger o tempo todo" }
    ]
  },
  ch09: {
    number: "IX",
    title: "Quando a vida nos colocou a prova",
    subtitle: "Amor real nao e ausencia de dor.",
    hardships: [
      "Insegurancas que cresceram quando nao viraram dialogo.",
      "Boatos, duvidas e momentos que pediam clareza.",
      "Reacoes impulsivas, palavras mal colocadas e silenciamentos.",
      "A tentativa de continuar mesmo quando a leveza comecou a pesar."
    ],
    closing:
      "A gente nao se afastou de uma vez. A gente foi se desgastando aos poucos, entre duvidas, atitudes e sentimentos que nem sempre soubemos expressar."
  },
  ch10: {
    number: "X",
    title: "No meu pior momento, voce ficou",
    subtitle: "Antes do compromisso. Depois do medo.",
    mainText:
      "Quando eu estava passando por um dos momentos mais dificeis da minha vida, voce ficou.",
    lines: ["Ainda nao existia namoro.", "Ainda nao existia compromisso.", "Mas existia voce."],
    context:
      "A cirurgia foi assustadora. A vulnerabilidade, desconhecida. Mas voce apareceu sem obrigacao, sem contrato, apenas porque queria estar la."
  },
  ch11: {
    number: "XI",
    title: "Momentos que ficaram",
    subtitle: "Uma galeria do que foi vivido de verdade.",
    cards: [
      {
        title: "A gente tentou",
        description: "Mesmo com conflitos, insegurancas e tudo o que pesava dentro da relacao.",
        color: "gold"
      },
      {
        title: "A gente voltou",
        description: "Algumas vezes parecia definitivo. Ainda assim, havia vontade de fazer dar certo.",
        color: "rose"
      },
      {
        title: "A gente aprendeu",
        description: "Tentar exige mais do que vontade. Exige mudanca, direcao e maturidade.",
        color: "wine"
      }
    ],
    closing:
      "A gente nao terminou por falta de sentimento. A gente terminou depois de varias tentativas de fazer dar certo.",
    gallery: [
      {
        title: "Primeiro retrato",
        date: "22/11/2024",
        description: "Quando o cotidiano ja parecia guardar um pedaco da nossa historia.",
        photoKey: "memory_first_selfie"
      },
      {
        title: "Matriz",
        date: "22/11/2024",
        description: "A noite, os degraus e aquele jeito de registrar tudo meio tremendo, meio eterno.",
        photoKey: "first_kiss_matrix"
      },
      {
        title: "Buque no carro",
        date: "24/11/2024",
        description: "Flores, formatura e uma tentativa bonita de dizer sem precisar explicar.",
        photoKey: "memory_bouquet_car"
      },
      {
        title: "Formatura",
        date: "24/12/2024",
        description: "Uma conquista dela que tambem virou orgulho meu.",
        photoKey: "memory_graduation"
      },
      {
        title: "Rosas",
        date: "30/01/2025",
        description: "O gesto antes da entrega. A expectativa tambem vira memoria.",
        photoKey: "memory_bouquet"
      },
      {
        title: "Chamada",
        date: "15/04/2025",
        description: "A tela verde, a chamada e um detalhe simples que so nos dois entenderiamos.",
        photoKey: "memory_video_call"
      },
      {
        title: "Risadas",
        date: "19/04/2025",
        description: "O tipo de foto que prova que a leveza tambem faz parte da historia.",
        photoKey: "memory_friends"
      },
      {
        title: "Noite especial",
        date: "01/06/2025",
        description: "Olhares que parecem pausar tudo ao redor.",
        photoKey: "memory_gala"
      },
      {
        title: "Outro buque",
        date: "13/06/2025",
        description: "Mais uma vez, flores. Mais uma vez, cuidado.",
        photoKey: "memory_bouquet_school"
      },
      {
        title: "Depois da meia-noite",
        date: "22/06/2025",
        description: "Fotos bobas que acabam dizendo mais do que foto perfeita.",
        photoKey: "memory_late_night_01"
      },
      {
        title: "Pertinho",
        date: "22/06/2025",
        description: "O detalhe de estar junto, mesmo quando a imagem parece pequena demais para o sentimento.",
        photoKey: "memory_late_night_02"
      }
    ]
  },
  ch12: {
    number: "XII",
    title: "O que voce mudou em mim",
    subtitle: "Uma transformacao que nao foi planejada.",
    before: [
      { trait: "Frio", desc: "Protegia-me de tudo" },
      { trait: "Fechado", desc: "Paredes que pareciam necessarias" },
      { trait: "Impulsivo", desc: "Reagia antes de sentir" },
      { trait: "Desconfiado", desc: "Do amor, das pessoas, de mim" }
    ],
    after: [
      { trait: "Presente", desc: "Aprendi a estar de verdade" },
      { trait: "Aberto", desc: "Com quem merece" },
      { trait: "Consciente", desc: "Das minhas emocoes e reacoes" },
      { trait: "Amoroso", desc: "Com voce. Comigo tambem." }
    ],
    closingText:
      "Voce nao me consertou. Voce me mostrou que eu era capaz de me transformar."
  },
  ch13: {
    number: "XIII",
    title: "Que os caminhos se cruzem",
    subtitle: "O que foi real continua existindo no que mudou.",
    lines: [
      "Tudo o que a gente viveu foi real.",
      "Voce foi importante.",
      "Eu nao sou mais a mesma pessoa depois de voce.",
      "No meio dos erros, existiu crescimento.",
      "E crescimento nao se perde.",
      "Se um dia nossos caminhos voltarem a se cruzar, que seja com maturidade.",
      "Que nossos caminhos se cruzem um dia."
    ]
  }
} as const
