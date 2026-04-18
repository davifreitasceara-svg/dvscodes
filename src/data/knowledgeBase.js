// ─── BASE DE CONHECIMENTO ESCOLAR ─────────────────────────────────────────────
// Cada tema contém: slides (3 slides) e mindMap (4 ramos com sub-nós reais)
import { KNOWLEDGE_BASE_EXTENDED } from './knowledgeBaseExtended';
import { generateFallback } from './topicGenerator';

export const KNOWLEDGE_BASE = {

  // ─── HISTÓRIA ───────────────────────────────────────────────────────────────
  "revolução industrial": {
    category: "história",
    slides: [
      {
        title: "A Revolução Industrial",
        subtitle: "1760 – 1840 | Inglaterra → Mundo",
        intro: "Processo de transformação econômica e social que substituiu o trabalho manual por máquinas a vapor, iniciado na Inglaterra em meados do século XVIII e que mudou radicalmente a organização do trabalho, da cidade e da sociedade.",
      },
      {
        title: "Transformações e Impactos",
        subtitle: "Aspectos Sociais, Econômicos e Tecnológicos",
        bullets: [
          "Criação das máquinas a vapor por James Watt (1769) e das tecelagens mecânicas",
          "Surgimento do proletariado industrial e das jornadas de trabalho de até 16h/dia",
          "Êxodo rural massivo: milhões deixaram o campo para trabalhar nas fábricas",
          "Poluição das cidades, trabalho infantil e péssimas condições sanitárias",
          "Expansão das ferrovias: a locomotiva de Stephenson (1825) interligou o país",
        ],
      },
      {
        title: "Legado e Importância Atual",
        subtitle: "Por que estudamos a Revolução Industrial?",
        conclusion: "A Revolução Industrial foi o maior ponto de ruptura da história moderna: criou o capitalismo industrial, gerou as tensões sociais que originariam o socialismo e o marxismo, e estabeleceu o modelo de produção em massa que ainda sustenta a economia global. Sem ela, não existiriam cidades como as conhecemos hoje.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Causas", children: ["Acúmulo de capital britânico", "Colônias como fontes de matéria-prima", "Revolução Agrícola prévia (séc. XVII)", "Estabilidade política da Inglaterra"] },
        { label: "Invenções", children: ["Máquina a vapor (James Watt, 1769)", "Tear mecânico (Hargreaves, 1764)", "Locomotiva a vapor (Stephenson, 1825)", "Fundição do ferro com coque"] },
        { label: "Consequências Sociais", children: ["Surgimento do proletariado", "Trabalho infantil nas fábricas", "Crescimento desordenado das cidades", "Movimentos operários e greves"] },
        { label: "Consequências Globais", children: ["Expansão do imperialismo europeu", "Surgimento do socialismo (Marx, 1848)", "2ª Revolução Industrial (EUA/Alemanha)", "Globalização do comércio"] },
      ],
    },
  },

  "revolução francesa": {
    category: "história",
    slides: [
      {
        title: "A Revolução Francesa",
        subtitle: "1789 – 1799 | Paris, França",
        intro: "Movimento político e social que derrubou a monarquia absolutista de Luís XVI, aboliu o Antigo Regime e proclamou os princípios de Liberdade, Igualdade e Fraternidade, moldando a política ocidental para sempre.",
      },
      {
        title: "Fases e Acontecimentos Cruciais",
        subtitle: "Da Queda da Bastilha ao Golpe de Napoleão",
        bullets: [
          "14/07/1789: Queda da Bastilha — símbolo do absolutismo — marcou o início oficial",
          "Declaração dos Direitos do Homem e do Cidadão (agosto de 1789)",
          "A Guilhotina e o 'Terror' de Robespierre executaram mais de 17.000 pessoas (1793-94)",
          "Abolição dos privilégios da nobreza e da Igreja Católica",
          "O Golpe de 18 Brumário (1799): Napoleão toma o poder e encerra a Revolução",
        ],
      },
      {
        title: "Herança da Revolução Francesa",
        subtitle: "Um mundo antes e depois de 1789",
        conclusion: "A Revolução Francesa estabeleceu os fundamentos da democracia moderna: soberania popular, igualdade perante a lei, direitos civis e separação de poderes. Seus ideais inspiraram as independências das Américas, as revoluções de 1848 e a própria Declaração Universal dos Direitos Humanos (1948).",
      },
    ],
    mindMap: {
      branches: [
        { label: "Causas", children: ["Crise financeira da França pós-guerras", "Miséria do Terceiro Estado (98% da pop.)", "Iluminismo: Rousseau, Voltaire, Montesquieu", "Influência da Independência Americana (1776)"] },
        { label: "Fases", children: ["Assembleia Nacional Constituinte (1789)", "Monarquia Constitucional (1791-92)", "O Terror de Robespierre (1793-94)", "Diretório e Consulado (1795-99)"] },
        { label: "Personagens", children: ["Luís XVI e Maria Antonieta (executados)", "Robespierre (líder jacobino)", "Marquês de Lafayette (herói liberal)", "Napoleão Bonaparte (fim e herdeiro)"] },
        { label: "Legado", children: ["Declaração dos Direitos do Homem (1789)", "Código Napoleônico (1804)", "Inspiração das revoluções latino-americanas", "Base dos sistemas democráticos modernos"] },
      ],
    },
  },

  "segunda guerra mundial": {
    category: "história",
    slides: [
      {
        title: "Segunda Guerra Mundial",
        subtitle: "1939 – 1945 | Conflito Global",
        intro: "O maior conflito da história humana, que envolveu mais de 70 países e causou entre 70 e 85 milhões de mortes. Teve como causas o ascenso do nazismo na Alemanha, as tensões do Tratado de Versalhes (1919) e a política expansionista de Hitler.",
      },
      {
        title: "Eventos e Batalhas Decisivas",
        subtitle: "Os Momentos que Definiram o Conflito",
        bullets: [
          "01/09/1939: Alemanha invade a Polônia — início oficial da guerra",
          "1941: Ataque japonês a Pearl Harbor — EUA entram na guerra",
          "1942: Batalha de Stalingrado — virada decisiva no front oriental",
          "06/06/1944: Dia D — desembarque aliado na Normandia, França",
          "Agosto/1945: Bombas atômicas em Hiroshima e Nagasaki — rendição do Japão",
        ],
      },
      {
        title: "Consequências e Legado",
        subtitle: "Como a Guerra Moldou o Mundo Moderno",
        conclusion: "A Segunda Guerra Mundial redesenhou o mapa político mundial: criou a ONU (1945), inaugurou a Guerra Fria entre EUA e URSS, levou à criação do Estado de Israel (1948), estabeleceu o Tribunal de Nuremberg para julgar crimes de guerra e deu início à era nuclear. O Holocausto, com 6 milhões de judeus mortos, tornou-se símbolo máximo da barbárie humana.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Causas", children: ["Tratado de Versalhes (1919) humilhou a Alemanha", "Ascensão do nazismo e Hitler ao poder (1933)", "Crise econômica de 1929 na Europa", "Política de Appeasement dos aliados ocidentais"] },
        { label: "Potências", children: ["Aliados: EUA, Reino Unido, URSS, França", "Eixo: Alemanha, Itália e Japão", "Brasil enviou a FEB à Itália (1944)", "China resistiu à ocupação japonesa"] },
        { label: "Holocausto", children: ["6 milhões de judeus exterminados", "Campos de concentração: Auschwitz, Treblinka", "Propaganda nazista de Joseph Goebbels", "Tribunal de Nuremberg (1945-46)"] },
        { label: "Consequências", children: ["Criação da ONU (1945)", "Plano Marshall: reconstrução da Europa", "Guerra Fria: EUA × URSS", "Descolonização da Ásia e África"] },
      ],
    },
  },

  "independência do brasil": {
    category: "história",
    slides: [
      {
        title: "Independência do Brasil",
        subtitle: "7 de setembro de 1822 | Rio de Janeiro",
        intro: "Processo político que rompeu os laços coloniais entre Brasil e Portugal, proclamando o país como nação soberana. Dom Pedro I, às margens do Riacho Ipiranga, declarou o famoso 'Independência ou Morte!' diante de seu exército.",
      },
      {
        title: "O Processo de Independência",
        subtitle: "Da Vinda da Família Real ao Grito do Ipiranga",
        bullets: [
          "1808: Família Real portuguesa foge de Napoleão e se instala no Rio de Janeiro",
          "1820: Revolução Liberal do Porto exige o retorno de D. João VI a Portugal",
          "1821: D. Pedro I fica no Brasil — 'Fico!' — desobedecendo as Cortes portuguesas",
          "09/01/1822: 'Dia do Fico' — D. Pedro recusa ordem de retorno",
          "7/09/1822: Grito do Ipiranga — Proclamação da Independência oficial",
        ],
      },
      {
        title: "Legado da Independência",
        subtitle: "Um Brasil Livre, mas ainda Escravocrata",
        conclusion: "A independência trouxe soberania política, mas manteve as estruturas coloniais: a escravidão persistiu até 1888, e a elite agrária continuou dominando o poder. O Brasil foi o único país americano a se tornar um império, com D. Pedro I como primeiro imperador. Em 1824, foi outorgada a primeira Constituição brasileira.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Antecedentes", children: ["Chegada da Família Real (1808)", "Abertura dos portos às nações amigas", "Revolução Pernambucana de 1817", "Revolução Liberal do Porto (1820)"] },
        { label: "Personagens", children: ["Dom Pedro I — Proclamador", "José Bonifácio — 'Patriarca da Independência'", "Leopoldina — apoiou a independência", "Dom João VI — rei que ficou dividido"] },
        { label: "Eventos-Chave", children: ["Dia do Fico — 09/01/1822", "Grito do Ipiranga — 07/09/1822", "Coroação de D. Pedro I (dezembro/1822)", "Constituição de 1824"] },
        { label: "Consequências", children: ["Brasil: único império nas Américas", "Escravidão permanece até 1888", "Reconhecimento pelos EUA (1824) e Portugal (1825)", "Elite agrária mantém o poder"] },
      ],
    },
  },

  // ─── BIOLOGIA ───────────────────────────────────────────────────────────────
  "fotossíntese": {
    category: "biologia",
    slides: [
      {
        title: "Fotossíntese",
        subtitle: "O Processo que Sustenta a Vida na Terra",
        intro: "A fotossíntese é o processo pelo qual plantas, algas e cianobactérias convertem energia luminosa em energia química (glicose), utilizando dióxido de carbono (CO₂) e água (H₂O). É a base de quase toda a cadeia alimentar do planeta.",
      },
      {
        title: "Como Funciona a Fotossíntese",
        subtitle: "Equação, Local e Fases do Processo",
        bullets: [
          "Equação geral: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ (glicose) + 6O₂",
          "Ocorre nos cloroplastos das células vegetais, especificamente na clorofila",
          "Fase Clara (fotoquímica): captura de luz, fotólise da água e produção de ATP",
          "Fase Escura (Ciclo de Calvin): fixação do CO₂ e produção de glicose",
          "A clorofila absorve principalmente luz vermelha e azul, refletindo o verde",
        ],
      },
      {
        title: "Importância da Fotossíntese",
        subtitle: "Por que ela é Essencial para Toda a Vida",
        conclusion: "A fotossíntese é responsável por: (1) produzir o oxigênio atmosférico que respiramos; (2) fixar CO₂, regulando o clima; (3) ser a base de toda a cadeia alimentar terrestre e aquática; e (4) armazenar energia solar que usamos em combustíveis fósseis. Sem fotossíntese, a vida aeróbica seria impossível na Terra.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Reagentes", children: ["CO₂ (dióxido de carbono)", "H₂O (água — absorvida pelas raízes)", "Luz solar (energia radiante)", "Clorofila (pigmento verde)"] },
        { label: "Produtos", children: ["C₆H₁₂O₆ (glicose — armazena energia)", "O₂ (oxigênio liberado na atmosfera)", "ATP e NADPH (fase clara)", "Amido e outros açúcares"] },
        { label: "Fases", children: ["Fase Clara: captura de luz nos tilacoides", "Fotólise da água: H₂O → O₂ + H⁺", "Ciclo de Calvin (Fase Escura)", "Fixação do CO₂ pela enzima Rubisco"] },
        { label: "Importância", children: ["Produção do O₂ atmosférico", "Base de todas as cadeias alimentares", "Regulação do CO₂ e do clima", "Origem dos combustíveis fósseis"] },
      ],
    },
  },

  "célula": {
    category: "biologia",
    slides: [
      {
        title: "A Célula",
        subtitle: "Unidade Fundamental dos Seres Vivos",
        intro: "A célula é a menor unidade estrutural e funcional de todos os seres vivos. Descoberta por Robert Hooke em 1665 e detalhada pela Teoria Celular (Schleiden e Schwann, 1838-1839), toda vida conhecida é composta por uma ou mais células.",
      },
      {
        title: "Tipos e Componentes Celulares",
        subtitle: "Procariota vs. Eucariota — Estruturas Essenciais",
        bullets: [
          "Procariontes (bactérias): sem núcleo definido, DNA livre no citoplasma",
          "Eucariontes (animais, plantas, fungos): possuem núcleo com membrana nuclear",
          "Membrana plasmática: controla a entrada e saída de substâncias na célula",
          "Mitocôndrias: 'usinas de energia' — realizam respiração celular e produzem ATP",
          "Ribossomos: sintetizam proteínas; Retículo Endoplasmático: transporte interno",
        ],
      },
      {
        title: "A Teoria Celular e sua Relevância",
        subtitle: "O que a Biologia Celular nos Ensina",
        conclusion: "A Teoria Celular — que toda célula origina-se de outra célula — é um dos pilares da biologia moderna. Compreendê-la é essencial para entender doenças como o câncer (divisão celular descontrolada), o processo de envelhecimento, o desenvolvimento de vacinas, a engenharia genética e os transplantes de órgãos.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Tipos de Célula", children: ["Procariótica: Bacteria e Archaea", "Eucariótica Animal: com centríolos", "Eucariótica Vegetal: com parede celular e cloroplasto", "Diferença: presença ou não de núcleo"] },
        { label: "Organelas", children: ["Núcleo: contém o DNA (genoma)", "Mitocôndria: respiração celular e ATP", "Ribossomo: síntese de proteínas", "Complexo de Golgi: empacotamento e secreção"] },
        { label: "Processos", children: ["Mitose: divisão celular para crescimento", "Meiose: divisão para reprodução sexual", "Respiração Celular: glicose → ATP + CO₂", "Fagocitose: engolir partículas externas"] },
        { label: "Relevância Médica", children: ["Câncer: divisão celular descontrolada", "Bactérias: células procarióticas patogênicas", "Células-tronco: regeneração de tecidos", "CRISPR: edição do DNA celular"] },
      ],
    },
  },

  // ─── FÍSICA ─────────────────────────────────────────────────────────────────
  "leis de newton": {
    category: "física",
    slides: [
      {
        title: "As Leis de Newton",
        subtitle: "Isaac Newton · Principia Mathematica (1687)",
        intro: "Isaac Newton formulou as três leis fundamentais do movimento em seu livro 'Principia Mathematica' (1687), unificando a mecânica terrestre e celeste. Sua teoria dominou a física por mais de 200 anos e ainda é base da engenharia moderna.",
      },
      {
        title: "As Três Leis do Movimento",
        subtitle: "Inércia, Força e Ação-Reação",
        bullets: [
          "1ª Lei (Inércia): Todo corpo permanece em repouso ou em movimento retilíneo uniforme, a menos que uma força resultante aja sobre ele",
          "2ª Lei (F = ma): A força resultante sobre um corpo é igual à sua massa multiplicada pela aceleração produzida",
          "3ª Lei (Ação e Reação): Para toda ação há uma reação igual e oposta — as forças atuam em pares",
          "Exemplo da 1ª Lei: passageiro 'vai para frente' quando o carro freia bruscamente",
          "Exemplo da 3ª Lei: foguete expele gás para baixo e é empurrado para cima",
        ],
      },
      {
        title: "Aplicações das Leis de Newton",
        subtitle: "Da Queda da Maçã ao Foguete Espacial",
        conclusion: "As leis de Newton são aplicadas em: aviação (sustentação e força de arrasto), arquitetura e engenharia civil (cálculo de estruturas), automobilismo (frenagem e aceleração), medicina (biomecânica do corpo humano), e exploração espacial (trajetória de foguetes e satélites). Mesmo no século XXI, são referência obrigatória para qualquer engenheiro.",
      },
    ],
    mindMap: {
      branches: [
        { label: "1ª Lei — Inércia", children: ["Corpo em repouso tende a ficar em repouso", "Corpo em movimento mantém velocidade e direção", "Força resultante nula = sem aceleração", "Exemplo: passageiro ao frear o carro"] },
        { label: "2ª Lei — F = ma", children: ["F (força) em Newtons (N)", "m (massa) em quilogramas (kg)", "a (aceleração) em m/s²", "Quanto maior a massa, maior a força necessária"] },
        { label: "3ª Lei — Ação/Reação", children: ["Forças sempre em pares simultâneos", "Mesma intensidade, sentidos opostos", "Foguete: gás para baixo → foguete para cima", "Andar: pé empurra o chão → chão empurra o pé"] },
        { label: "Aplicações", children: ["Engenharia aeronáutica e de foguetes", "Cálculo de estruturas e pontes", "Biomecânica e fisioterapia", "Automobilismo (frenagem e G-force)"] },
      ],
    },
  },

  "sistema solar": {
    category: "astronomia",
    slides: [
      {
        title: "O Sistema Solar",
        subtitle: "Nossa Vizinhança Cósmica | ~4,6 bilhões de anos",
        intro: "O Sistema Solar é formado pelo Sol e todos os corpos celestes gravitacionalmente ligados a ele: 8 planetas, 5 planetas anões (incluindo Plutão), 200+ luas, asteroides, cometas e poeira cósmica. Tem cerca de 4,6 bilhões de anos e sua estrela central contém 99,8% de toda a sua massa.",
      },
      {
        title: "Os 8 Planetas e suas Características",
        subtitle: "Da órbita mais próxima à mais distante do Sol",
        bullets: [
          "Planetas Rochosos (internos): Mercúrio, Vênus, Terra e Marte — menores e densos",
          "Planetas Gigantes Gasosos: Júpiter (maior do sistema) e Saturno (com anéis majestosos)",
          "Gigantes de Gelo: Urano e Netuno — compostos de água, amônia e metano gelados",
          "Plutão: rebaixado a planeta anão em 2006 pela União Astronômica Internacional",
          "A Terra está na 'Zona Habitável' — distância ideal para existência de água líquida",
        ],
      },
      {
        title: "Exploração e Importância do Sistema Solar",
        subtitle: "O que Conhecemos e o que Ainda Descobriremos",
        conclusion: "O Sol fornece toda a energia que sustenta a vida na Terra. Compreender o Sistema Solar nos permite: prever eventos climáticos extremos causados por atividade solar, calcular trajetórias de asteroides que podem ameaçar a Terra, entender a origem da vida e buscar habitabilidade em Marte e nas luas de Júpiter e Saturno (Europa e Encélado têm oceanos subterrâneos).",
      },
    ],
    mindMap: {
      branches: [
        { label: "Planetas Rochosos", children: ["Mercúrio: menor e mais próximo do Sol", "Vênus: mais quente, atmosfera de CO₂", "Terra: único com vida confirmada", "Marte: possível habitabilidade futura"] },
        { label: "Gigantes", children: ["Júpiter: maior planeta, Grande Mancha Vermelha", "Saturno: anéis de gelo e rocha", "Urano: rotação 'deitada' de lado", "Netuno: Vento mais rápido do sistema solar (2.100 km/h)"] },
        { label: "Outros Corpos", children: ["Cinturão de Asteroides (entre Marte e Júpiter)", "Cometa Halley: volta a cada 76 anos", "Plutão: planeta anão no Cinturão de Kuiper", "Nuvem de Oort: borda do sistema"] },
        { label: "Exploração", children: ["Apollo 11: 1ª lua em 1969 (Neil Armstrong)", "Voyager 1: sonda mais distante (~23 bi km)", "Rover Perseverance em Marte (2021)", "Missão Artemis: retorno à Lua (2024-25)"] },
      ],
    },
  },

  // ─── QUÍMICA ────────────────────────────────────────────────────────────────
  "tabela periódica": {
    category: "química",
    slides: [
      {
        title: "A Tabela Periódica",
        subtitle: "Dmitri Mendeleev · 1869 | 118 Elementos",
        intro: "A Tabela Periódica organiza os 118 elementos químicos conhecidos em ordem crescente de número atômico (prótons), agrupando-os por propriedades similares. Criada por Dmitri Mendeleev em 1869, ela é a ferramenta mais fundamental da química.",
      },
      {
        title: "Como a Tabela Periódica Funciona",
        subtitle: "Períodos, Grupos e Propriedades Periódicas",
        bullets: [
          "Períodos (linhas horizontais): elementos com mesmo número de camadas eletrônicas",
          "Grupos (colunas verticais): 18 grupos com propriedades químicas semelhantes",
          "Metais Alcalinos (Grupo 1): reagem violentamente com água — ex.: sódio e potássio",
          "Gases Nobres (Grupo 18): Hélio, Neônio, Argônio — inerts, não reagem",
          "Elementos de Transição: metais como Ferro (Fe), Cobre (Cu), Ouro (Au) e Prata (Ag)",
        ],
      },
      {
        title: "Relevância da Tabela Periódica",
        subtitle: "De Mendeleev ao Mundo Moderno",
        conclusion: "Mendeleev foi genial ao deixar espaços em branco para elementos ainda não descobertos — e previu suas propriedades com exatidão. Hoje, a Tabela Periódica é essencial para: desenvolver novos materiais, criar medicamentos, fabricar eletrônicos (silício, lítio, cobalto em baterias), e entender como o universo é composto — os mesmos elementos da Terra existem em todas as estrelas.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Estrutura", children: ["7 Períodos (linhas horizontais)", "18 Grupos (colunas verticais)", "Ordem pelo nº atômico (prótons)", "Criada por Mendeleev em 1869"] },
        { label: "Grupos Importantes", children: ["Grupo 1: Metais Alcalinos (Na, K, Li)", "Grupo 17: Halogênios (F, Cl, Br)", "Grupo 18: Gases Nobres (He, Ne, Ar)", "Metais de Transição (Fe, Cu, Au, Ag)"] },
        { label: "Propriedades", children: ["Raio atômico aumenta ↓ e diminui →", "Eletronegatividade aumenta → e diminui ↓", "Energia de ionização: energia para retirar elétron", "Metais conduzem calor e eletricidade"] },
        { label: "Aplicações", children: ["Silício (Si): semicondutores e chips", "Lítio (Li): baterias de celulares e EVs", "Urânio (U): combustível nuclear", "Ouro (Au) e Prata (Ag): eletrônica de precisão"] },
      ],
    },
  },

  // ─── GEOGRAFIA ──────────────────────────────────────────────────────────────
  "globalização": {
    category: "geografia",
    slides: [
      {
        title: "Globalização",
        subtitle: "A Integração do Mundo Contemporâneo",
        intro: "Globalização é o processo de integração econômica, cultural, política e tecnológica entre os países do mundo, acelerado a partir dos anos 1990 com a queda do Muro de Berlim (1989), a popularização da internet e a criação da OMC (1995).",
      },
      {
        title: "Dimensões e Consequências da Globalização",
        subtitle: "Economia, Cultura e Tecnologia Interconectadas",
        bullets: [
          "Econômica: empresas multinacionais atuam em dezenas de países; bolsas conectadas",
          "Cultural: McDonald's, Netflix, K-pop e Hollywood chegam a todos os continentes",
          "Tecnológica: Internet, smartphones e redes sociais conectam 5+ bilhões de pessoas",
          "Desigualdade: países ricos dominam o capital; países pobres fornecem trabalho barato",
          "Ambiental: produção globalizada aumenta emissões de CO₂ e degradação ambiental",
        ],
      },
      {
        title: "Críticas e Perspectivas",
        subtitle: "Globalização: Para Quem ela Funciona?",
        conclusion: "A globalização gerou crescimento econômico e difusão de tecnologia, mas aprofundou desigualdades entre nações e dentro delas. O debate atual inclui: desindustrialização de países em desenvolvimento, perda de identidades culturais locais, poder excessivo de big techs (Google, Amazon, Meta) e a necessidade de uma governança global para enfrentar crises como pandemias e mudanças climáticas.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Dimensões", children: ["Econômica: mercados e finanças interligados", "Cultural: padronização e hibridização cultural", "Política: acordos multilaterais (ONU, OMC)", "Tecnológica: internet e telecomunicações"] },
        { label: "Agentes", children: ["FMI e Banco Mundial: financiam economias", "OMC: regula o comércio internacional", "Multinacionais: Apple, Toyota, Shell, Samsung", "Big Techs: Google, Meta, Amazon"] },
        { label: "Consequências Positivas", children: ["Acesso a tecnologias e informação", "Crescimento econômico de países emergentes", "Intercâmbio cultural e científico", "Queda no preço de produtos industrializados"] },
        { label: "Consequências Negativas", children: ["Desindustrialização dos países em desenvolvimento", "Perda de soberania econômica nacional", "Degradação ambiental pela produção global", "Concentração de renda nos países ricos"] },
      ],
    },
  },

  // ─── TECNOLOGIA / ATUALIDADES ────────────────────────────────────────────────
  "inteligência artificial": {
    category: "tecnologia",
    slides: [
      {
        title: "Inteligência Artificial",
        subtitle: "A Tecnologia que está Transformando o Mundo",
        intro: "Inteligência Artificial (IA) é o campo da ciência da computação dedicado a criar sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana: reconhecer imagens, entender linguagem, tomar decisões e aprender com dados. Formulada formalmente por Alan Turing em 1950.",
      },
      {
        title: "Tipos de IA e Aplicações Reais",
        subtitle: "Do Reconhecimento Facial ao ChatGPT",
        bullets: [
          "Machine Learning: algoritmos que aprendem com dados — base do Spotify, Netflix e Amazon",
          "Deep Learning: redes neurais artificiais inspiradas no cérebro humano",
          "IA Generativa: ChatGPT, Gemini, DALL-E — criam texto, imagens e códigos",
          "Reconhecimento Facial: usado em desbloqueio de celular, segurança e vigilância",
          "IA na Medicina: diagnóstico de câncer por imagem com 95%+ de precisão",
        ],
      },
      {
        title: "Desafios Éticos e o Futuro da IA",
        subtitle: "Oportunidades e Riscos para a Humanidade",
        conclusion: "A IA promete resolver grandes desafios — descoberta de remédios, combate às mudanças climáticas, educação personalizada. Mas levanta questões urgentes: desemprego tecnológico (automação de empregos), viés algorítmico (sistemas que discriminam), deepfakes e desinformação, privacidade de dados e a pergunta mais profunda: devemos criar sistemas mais inteligentes que nós?",
      },
    ],
    mindMap: {
      branches: [
        { label: "Tipos de IA", children: ["Machine Learning: aprende com dados", "Deep Learning: redes neurais profundas", "IA Generativa: cria conteúdo (ChatGPT)", "IA Simbólica: regras pré-programadas"] },
        { label: "Aplicações", children: ["Saúde: diagnóstico por imagem (radiologia)", "Educação: tutores personalizados", "Transporte: carros autônomos (Tesla, Waymo)", "Finanças: detecção de fraudes bancárias"] },
        { label: "Protagonistas", children: ["Alan Turing: pai da IA (1950)", "Geoffrey Hinton: 'Padrinho' do Deep Learning", "OpenAI: criou o ChatGPT (2022)", "Google DeepMind: AlphaGo derrotou humanos (2016)"] },
        { label: "Riscos e Ética", children: ["Desemprego por automação de tarefas", "Viés algorítmico e discriminação", "Deepfakes e desinformação", "Concentração de poder em Big Techs"] },
      ],
    },
  },

  // ─── FILOSOFIA / SOCIOLOGIA ──────────────────────────────────────────────────
  "iluminismo": {
    category: "filosofia",
    slides: [
      {
        title: "O Iluminismo",
        subtitle: "Século XVIII | A Era da Razão",
        intro: "O Iluminismo foi um movimento intelectual europeu do século XVIII que colocou a razão, a ciência e os direitos individuais acima da tradição, da religião e do absolutismo monárquico. Seu lema era: 'Ouse conhecer!' (Sapere Aude, Kant).",
      },
      {
        title: "Principais Pensadores e Ideias",
        subtitle: "Os Filósofos que Mudaram o Mundo",
        bullets: [
          "John Locke: direitos naturais, propriedade e governo por consentimento dos governados",
          "Voltaire: liberdade religiosa, crítica à Igreja e à intolerância",
          "Rousseau: soberania popular, contrato social e a vontade geral",
          "Montesquieu: separação dos três poderes — Executivo, Legislativo e Judiciário",
          "Enciclopédia: obra coletiva de Diderot e D'Alembert com 28 volumes de saber racional",
        ],
      },
      {
        title: "Legado do Iluminismo",
        subtitle: "Como o Iluminismo Criou o Mundo Moderno",
        conclusion: "O Iluminismo foi o motor ideológico das grandes revoluções: a Independência dos EUA (1776), a Revolução Francesa (1789) e as independências latino-americanas. Seus princípios — igualdade perante a lei, liberdade de expressão, separação dos poderes, direitos humanos — são a base de todas as constituições democráticas do mundo. Sem o Iluminismo, não existiria democracia como conhecemos.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Principais Filósofos", children: ["Locke: direitos naturais e liberalismo", "Voltaire: liberdade e crítica religious", "Rousseau: contrato social e soberania popular", "Montesquieu: separação dos poderes"] },
        { label: "Ideias Centrais", children: ["Primazia da razão sobre a fé", "Direitos naturais do ser humano", "Crítica ao absolutismo e à Igreja", "Progresso científico como ideal"] },
        { label: "A Enciclopédia", children: ["28 volumes (1751-1772)", "Organizada por Diderot e D'Alembert", "Reunia todo o saber racional da época", "Proibida pela Igreja Católica"] },
        { label: "Impactos Políticos", children: ["Independência dos EUA (Declaração de 1776)", "Revolução Francesa (1789)", "Independências na América Latina", "Constituições democráticas modernas"] },
      ],
    },
  },

  "meio ambiente": {
    category: "geografia",
    slides: [
      {
        title: "Meio Ambiente e Sustentabilidade",
        subtitle: "O Desafio Central do Século XXI",
        intro: "O meio ambiente refere-se ao conjunto de condições físicas, químicas e biológicas que sustentam a vida na Terra. Desde a Revolução Industrial, a atividade humana tem degradado ecossistemas em velocidade sem precedentes, ameaçando a estabilidade climática global.",
      },
      {
        title: "Principais Problemas Ambientais",
        subtitle: "Aquecimento Global, Desmatamento e Poluição",
        bullets: [
          "Aquecimento Global: aumento de +1,1°C desde 1880 por emissão de CO₂ e metano",
          "Desmatamento: Amazônia perdeu 20% da cobertura original desde os anos 1970",
          "Poluição dos Oceanos: 8 milhões de toneladas de plástico entram no mar por ano",
          "Perda de Biodiversidade: 1 milhão de espécies ameaçadas de extinção (ONU, 2019)",
          "Escassez de Água: 2 bilhões de pessoas sem acesso à água potável segura",
        ],
      },
      {
        title: "O Caminho para a Sustentabilidade",
        subtitle: "Acordos, Soluções e Responsabilidade Coletiva",
        conclusion: "O Acordo de Paris (2015) comprometeu 196 países a limitar o aquecimento a 1,5°C — meta em risco. Soluções incluem: transição para energias renováveis (solar e eólica), economia circular, reflorestamento em escala e agricultura regenerativa. A sustentabilidade exige mudança de comportamento individual e reformas estruturais simultâneas — não é escolha, é necessidade de sobrevivência.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Problemas Ambientais", children: ["Aquecimento Global (+1,1°C desde 1880)", "Desmatamento da Amazônia (20% perdidos)", "Poluição plástica dos oceanos (8 mi t/ano)", "Perda de 1 mi de espécies (ONU, 2019)"] },
        { label: "Causas", children: ["Queima de combustíveis fósseis (CO₂)", "Agropecuária extensiva (metano)", "Indústria e urbanização descontrolada", "Descarte inadequado de resíduos"] },
        { label: "Acordos e Políticas", children: ["Protocolo de Quioto (1997)", "Acordo de Paris (2015): limite de 1,5°C", "Objetivos de Desenvolvimento Sustentável (ODS)", "COP30: Brasil sediará a conferência em 2025"] },
        { label: "Soluções", children: ["Energia solar e eólica renovável", "Reflorestamento e conservação", "Economia circular: reduzir, reutilizar, reciclar", "Agricultura regenerativa e orgânica"] },
      ],
    },
  },

  // ─── HISTÓRIA ADICIONAL ──────────────────────────────────────────────────────
  "primeira guerra mundial": {
    category: "história",
    slides: [
      {
        title: "Primeira Guerra Mundial",
        subtitle: "1914 – 1918 | A Grande Guerra",
        intro: "A Primeira Guerra Mundial foi o primeiro conflito de escala verdadeiramente global, envolvendo 30 países e causando mais de 20 milhões de mortes. Iniciada com o assassinato do Arquiduque Francisco Ferdinando em Sarajevo (28/06/1914), revelou o poder devastador da tecnologia bélica moderna.",
      },
      {
        title: "Causas, Frentes e Tecnologias",
        subtitle: "O Mundo em Chamas: 1914 a 1918",
        bullets: [
          "MAIN: Militarismo, Alianças (Tríplice Entente x Tríplice Aliança), Imperialismo e Nacionalismo",
          "28/06/1914: Franz Ferdinand assassinado pela Mão Negra sérvia — estopim da guerra",
          "Guerra de trincheiras: soldados viviam meses enterrados sob fogo cruzado de metralhadoras",
          "Novas armas: gás mostarda, tanques de guerra, submarinos e aviões de combate",
          "EUA entram em 1917 após afundamento de navios civis pelo submarino alemão",
        ],
      },
      {
        title: "Fim da Guerra e Consequências",
        subtitle: "O Tratado de Versalhes e as Sementes da Próxima Guerra",
        conclusion: "O Tratado de Versalhes (1919) responsabilizou exclusivamente a Alemanha pela guerra, impondo pesadas reparações financeiras e perda de territórios. Esta humilhação gerou o caldo de cultura para o nazismo e a Segunda Guerra Mundial. A guerra também encerrou quatro impérios: o Austro-Húngaro, o Russo, o Otomano e o Alemão, redesenhando completamente o mapa da Europa.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Causas (MAIN)", children: ["Militarismo: corrida armamentista na Europa", "Alianças: Entente x Aliança", "Imperialismo: disputa por colônias na África/Ásia", "Nacionalismo: movimentos separatistas"] },
        { label: "Frentes de Batalha", children: ["Frente Ocidental: França/Bélgica (trincheiras)", "Frente Oriental: Rússia x Alemanha/Áustria", "Frente do Oriente Médio: Império Otomano", "Mar do Norte: guerra submarina alemã"] },
        { label: "Tecnologias de Guerra", children: ["Gás mostarda e cloro (armas químicas)", "Tanques de guerra (estreia em 1916)", "Aviões de combate (dogfights)", "Metralhadoras e artilharia pesada"] },
        { label: "Consequências", children: ["Tratado de Versalhes (1919)", "Fim de 4 impérios europeus", "Criação da Liga das Nações", "Semente da 2ª Guerra Mundial"] },
      ],
    },
  },

  "abolição da escravidão": {
    category: "história",
    slides: [
      {
        title: "Abolição da Escravidão no Brasil",
        subtitle: "Lei Áurea — 13 de maio de 1888",
        intro: "O Brasil foi o último país do Ocidente a abolir a escravidão, em 13 de maio de 1888, com a assinatura da Lei Áurea pela Princesa Isabel. Durante mais de 350 anos, cerca de 4,9 milhões de africanos foram escravizados e trazidos ao Brasil — o maior número fora da África.",
      },
      {
        title: "O Longo Caminho para a Abolição",
        subtitle: "Resistência, Leis e Pressão Internacional",
        bullets: [
          "1850 — Lei Eusébio de Queirós: proibiu o tráfico negreiro transatlântico",
          "1871 — Lei do Ventre Livre: filhos de escravizadas nasceriam livres",
          "1885 — Lei dos Sexagenários: libertou escravizados com mais de 60 anos",
          "Quilombo dos Palmares: maior resistência negra; liderado por Zumbi até 1695",
          "13/05/1888 — Lei Áurea assinada por Princesa Isabel: abolição total sem indenização",
        ],
      },
      {
        title: "Legado da Escravidão no Brasil Contemporâneo",
        subtitle: "Por que Ainda Sentimos os Efeitos 136 Anos Depois",
        conclusion: "A abolição sem políticas de integração deixou os ex-escravizados sem terra, educação ou dinheiro — criando a desigualdade racial estrutural que persiste hoje. O Brasil tem a segunda maior população negra do mundo fora da África (56% da população se autodeclara preta ou parda), mas negros representam 75% dos mais pobres. A luta contra o racismo e por reparação histórica continua central no debate social brasileiro.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Leis Abolicionistas", children: ["Lei Eusébio de Queirós (1850)", "Lei do Ventre Livre (1871)", "Lei dos Sexagenários (1885)", "Lei Áurea — 13/05/1888"] },
        { label: "Resistência Negra", children: ["Quilombo dos Palmares (Zumbi, séc. XVII)", "Revolução dos Malês (Salvador, 1835)", "Balaiada (Maranhão, 1838-41)", "Fuga: 'Railroad' brasileiro para o Norte"] },
        { label: "Personagens", children: ["Zumbi dos Palmares — líder quilombola", "Princesa Isabel — assinou a Lei Áurea", "José do Patrocínio — jornalista abolicionista", "Luís Gama — advogado e ex-escravizado"] },
        { label: "Impactos Atuais", children: ["Desigualdade racial estrutural", "75% dos mais pobres são negros", "Cotas raciais nas universidades (2012)", "Dia Nacional da Consciência Negra (20/11)"] },
      ],
    },
  },

  "guerra fria": {
    category: "história",
    slides: [
      {
        title: "Guerra Fria",
        subtitle: "1947 – 1991 | EUA × URSS",
        intro: "A Guerra Fria foi a tensão geopolítica entre os EUA (capitalismo) e a URSS (socialismo) que dominou a política mundial entre 1947 e 1991, sem confronto militar direto — daí o nome 'fria'. Dividiu o mundo em dois blocos antagônicos e gerou crises que ameaçaram destruir a civilização.",
      },
      {
        title: "Crises, Corridas e Conflitos da Guerra Fria",
        subtitle: "Os Momentos mais Tensos do Século XX",
        bullets: [
          "1947: Doutrina Truman — EUA prometem apoio a países ameaçados pelo comunismo",
          "1957: URSS lança Sputnik — início da corrida espacial; EUA em pânico tecnológico",
          "1961: Muro de Berlim construído — símbolo máximo da divisão do mundo",
          "1962: Crise dos Mísseis em Cuba — 13 dias no limite do apocalipse nuclear",
          "Guerras por procuração: Coreia (1950-53), Vietnã (1955-75), Afeganistão (1979-89)",
        ],
      },
      {
        title: "O Fim da Guerra Fria e o Mundo Atual",
        subtitle: "A Queda do Muro e a Ordem Pós-Bipolar",
        conclusion: "A queda do Muro de Berlim (1989) e a dissolução da URSS (25/12/1991) encerraram a Guerra Fria. Os EUA emergiram como única superpotência — a chamada 'unipolaridade'. Mas o mundo pós-Guerra Fria trouxe novos desafios: terrorismo (11/09/2001), ascensão da China, conflitos étnicos na ex-Iugoslávia e o ressurgimento da rivalidade Rússia-Ocidente na Guerra da Ucrânia.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Blocos", children: ["OTAN: EUA e aliados capitalistas ocidentais", "Pacto de Varsóvia: URSS e aliados socialistas", "Países Não-Alinhados: 3º mundo neutro", "China: aliada da URSS até a ruptura sino-soviética"] },
        { label: "Corridas", children: ["Corrida Armamentista: ogivas nucleares", "Corrida Espacial: Sputnik (1957) x Apollo (1969)", "Corrida Tecnológica: chips, computadores", "Corrida Ideológica: propaganda e espionagem (CIA x KGB)"] },
        { label: "Crises Principais", children: ["Crise de Berlim (1948-49: bloqueio soviético)", "Guerra da Coreia (1950-53)", "Crise dos Mísseis em Cuba (1962)", "Guerra do Vietnã (1955-75)"] },
        { label: "Fim e Legado", children: ["Queda do Muro de Berlim (1989)", "Dissolução da URSS (1991)", "Surgimento de 15 novos países", "EUA como única superpotência global"] },
      ],
    },
  },

  // ─── BIOLOGIA ADICIONAL ──────────────────────────────────────────────────────
  "evolução das espécies": {
    category: "biologia",
    slides: [
      {
        title: "Teoria da Evolução",
        subtitle: "Charles Darwin · A Origem das Espécies (1859)",
        intro: "A Teoria da Evolução de Charles Darwin propõe que todas as espécies vivas descendem de ancestrais comuns e se modificam ao longo das gerações por meio da Seleção Natural — os organismos mais adaptados ao ambiente sobrevivem e reproduzem com maior sucesso.",
      },
      {
        title: "Mecanismos da Evolução",
        subtitle: "Seleção Natural, Mutação e Deriva Genética",
        bullets: [
          "Seleção Natural: organismos com características favoráveis sobrevivem e se reproduzem mais",
          "Mutação Genética: alterações aleatórias no DNA criam novas variações hereditárias",
          "Deriva Genética: mudanças aleatórias na frequência de genes em populações pequenas",
          "Especiação: isolamento geográfico ou reprodutivo leva à formação de novas espécies",
          "Evidências: registro fóssil, anatomia comparada, biologia molecular e DNA compartilhado",
        ],
      },
      {
        title: "Evolução e o Ser Humano",
        subtitle: "Somos Primatas, e Isso Muda Tudo",
        conclusion: "Humanos modernos (Homo sapiens) surgiram na África há ~300.000 anos e compartilham 98,7% do DNA com chimpanzés. A evolução explica desde a resistência de bactérias a antibióticos até o motivo de termos doenças genéticas, por que envelhecemos e como o câncer se desenvolve. Compreendê-la é fundamental para a medicina, agricultura e biologia da conservação.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Bases da Teoria", children: ["Variação: indivíduos diferem entre si", "Hereditariedade: características são transmitidas", "Seleção Natural: mais adaptados sobrevivem", "Tempo geológico: milhões de anos de mudança"] },
        { label: "Mecanismos", children: ["Mutação: alteração do DNA", "Recombinação genética na meiose", "Deriva genética: acaso em populações pequenas", "Fluxo gênico: migração entre populações"] },
        { label: "Evidências", children: ["Registro fóssil (ex.: transição peixe → anfíbio)", "Anatomia comparada: osso homólogos", "Embriologia: fases embrionárias similares", "Genômica: DNA compartilhado entre espécies"] },
        { label: "Evolução Humana", children: ["Homo habilis (~2,4 mi anos)", "Homo erectus (~1,9 mi anos)", "Homo sapiens: África, ~300.000 anos", "98,7% DNA igual ao chimpanzé"] },
      ],
    },
  },

  // ─── FÍSICA ADICIONAL ────────────────────────────────────────────────────────
  "eletricidade": {
    category: "física",
    slides: [
      {
        title: "Eletricidade",
        subtitle: "Leis de Ohm, Circuitos e Aplicações",
        intro: "Eletricidade é o conjunto de fenômenos físicos associados ao movimento de cargas elétricas (elétrons). Desde Benjamin Franklin com sua pipa (1752) até os experimentos de Volta, Faraday e Tesla, a compreensão da eletricidade transformou a civilização humana.",
      },
      {
        title: "Conceitos Fundamentais da Eletricidade",
        subtitle: "Tensão, Corrente, Resistência e Potência",
        bullets: [
          "Corrente Elétrica (I): fluxo de cargas elétricas — medida em Ampères (A)",
          "Tensão ou Voltagem (V): diferença de potencial que impulsiona a corrente — medida em Volts (V)",
          "Resistência (R): oposição ao fluxo de corrente — medida em Ohms (Ω)",
          "1ª Lei de Ohm: V = R × I (tensão = resistência × corrente)",
          "Potência Elétrica: P = V × I — medida em Watts (W); 1 kWh custa em média R$ 0,80 no Brasil",
        ],
      },
      {
        title: "Eletricidade no Cotidiano",
        subtitle: "De Tomadas e Disjuntores ao 5G e Energia Solar",
        conclusion: "No Brasil, a rede elétrica opera em 127V ou 220V com frequência de 60 Hz. A eletricidade move desde o menor chip de computador até a propulsão de trens de alta velocidade. A transição energética para fontes renováveis (solar e eólica) depende de avanços em armazenamento e transmissão elétrica. Baterias de íon-lítio e supercondutores são o futuro da energia.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Conceitos Básicos", children: ["Carga Elétrica (q) em Coulombs (C)", "Corrente (I) em Ampères (A)", "Tensão/Voltagem (V) em Volts (V)", "Resistência (R) em Ohms (Ω)"] },
        { label: "Leis Fundamentais", children: ["1ª Lei de Ohm: V = R × I", "2ª Lei de Ohm: R = ρ × L / A", "Lei de Kirchhoff das correntes (LKC)", "Lei de Kirchhoff das tensões (LKT)"] },
        { label: "Circuitos", children: ["Série: mesma corrente em todos os elementos", "Paralelo: mesma tensão em todos os ramos", "Curto-circuito: resistência nula → superaquecimento", "Disjuntor: proteção contra sobrecorrente"] },
        { label: "Aplicações", children: ["Geração: usinas hidrelétrica, solar, eólica", "Transmissão: linhas de alta tensão (500kV)", "Consumo doméstico: 127V e 220V / 60Hz", "Eletrônica: chips, transistores, LEDs"] },
      ],
    },
  },

  // ─── LITERATURA ──────────────────────────────────────────────────────────────
  "romantismo brasileiro": {
    category: "literatura",
    slides: [
      {
        title: "Romantismo Brasileiro",
        subtitle: "1836 – 1881 | A Primeira Escola Literária Nacional",
        intro: "O Romantismo foi a primeira escola literária genuinamente brasileira, surgida após a Independência (1822). Valorizou o sentimento, a natureza, a pátria e o indivíduo, em oposição ao racionalismo clássico. Introduzido por Gonçalves de Magalhães em 1836 com 'Suspiros Poéticos e Saudades'.",
      },
      {
        title: "Fases, Autores e Obras Essenciais",
        subtitle: "Indianismo, Ultrarromantismo e Condoreirismo",
        bullets: [
          "1ª fase (Indianismo): Gonçalves Dias ('Canção do Exílio') e José de Alencar ('O Guarani')",
          "2ª fase (Mal-do-Século / Byronismo): Álvares de Azevedo — morte, tédio e erotismo",
          "3ª fase (Condoreirismo): Castro Alves — poesia social e abolicionista ('Navio Negreiro')",
          "Prosa: José de Alencar criou o romance brasileiro — 'Iracema', 'O Guarani', 'Senhora'",
          "Características: egocentrismo, saudosismo, idealização da mulher e da natureza",
        ],
      },
      {
        title: "Legado do Romantismo na Literatura Brasileira",
        subtitle: "Por que o Romantismo Ainda Importa",
        conclusion: "O Romantismo foi fundamental para construir a identidade cultural brasileira pós-colonial: criou o 'mito do índio nobre', exaltou paisagens brasileiras e produziu as primeiras obras em linguagem nacional. Castro Alves usou a poesia como arma política contra a escravidão. Álvares de Azevedo, morto aos 20 anos, deixou 'Noite na Taverna', referência do mal-do-século. Essas obras são obrigatórias no vestibular.",
      },
    ],
    mindMap: {
      branches: [
        { label: "1ª Fase: Indianismo", children: ["Gonçalves Dias: 'Canção do Exílio' (1843)", "José de Alencar: 'O Guarani' (1857)", "Índio como herói nacional idealizado", "Natureza brasileira como cenário sublime"] },
        { label: "2ª Fase: Mal-do-Século", children: ["Álvares de Azevedo: 'Lira dos Vinte Anos'", "Casimiro de Abreu: 'As Primaveras'", "Temas: morte, tédio, amor platônico", "Influência de Byron e Musset"] },
        { label: "3ª Fase: Condoreirismo", children: ["Castro Alves: 'Navio Negreiro' (1869)", "Poesia com tema social e abolicionista", "Linguagem grandiosa e declamatória", "Sousândrade: experiências formais"] },
        { label: "Prosa Romântica", children: ["José de Alencar: 'Iracema', 'Senhora'", "Macedo: 'A Moreninha' (1ª romance BR, 1844)", "Temas: amor, honra e ascensão social", "Idealização da mulher e família burguesa"] },
      ],
    },
  },

  // ─── MATEMÁTICA ─────────────────────────────────────────────────────────────
  "funções matemáticas": {
    category: "matemática",
    slides: [
      {
        title: "Funções Matemáticas",
        subtitle: "O Conceito Central da Matemática do Ensino Médio",
        intro: "Uma função f relaciona cada elemento do conjunto A (domínio) a um único elemento do conjunto B (contradomínio), escrita como f: A → B ou y = f(x). Introduzida formalmente por Leibniz no século XVII, é o conceito mais fundamental do cálculo e da análise matemática.",
      },
      {
        title: "Tipos e Propriedades das Funções",
        subtitle: "Linear, Quadrática, Exponencial e Logarítmica",
        bullets: [
          "Função Afim/Linear: f(x) = ax + b — gráfico é uma reta; a = coeficiente angular",
          "Função Quadrática: f(x) = ax² + bx + c — gráfico é uma parábola; vértice = ponto máximo/mínimo",
          "Função Exponencial: f(x) = aˣ — crescimento rápido; base de juros compostos e crescimento populacional",
          "Função Logarítmica: f(x) = logₐx — inversa da exponencial; escala Richter e decibéis",
          "Função Injetora, Sobrejetora e Bijetora — classificações pela relação domínio/imagem",
        ],
      },
      {
        title: "Funções no Cotidiano e no Vestibular",
        subtitle: "Por que Funções são Tão Importantes?",
        conclusion: "Funções estão em todo lugar: velocidade é função do tempo, preço é função da quantidade, temperatura do forno é função do tempo. No ENEM, funções representam ~15% das questões de matemática. Dominar o gráfico da parábola e encontrar raízes pela fórmula de Bhaskara (x = -b ± √(b²-4ac) / 2a) e entender crescimento exponencial são competências essenciais.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Função Afim (1º grau)", children: ["f(x) = ax + b", "Gráfico: reta no plano cartesiano", "a > 0: função crescente; a < 0: decrescente", "Raiz: x = -b/a (ponto onde y = 0)"] },
        { label: "Função Quadrática (2º grau)", children: ["f(x) = ax² + bx + c, com a ≠ 0", "Gráfico: parábola (côncava ou convexa)", "Vértice: x_v = -b/2a, y_v = -Δ/4a", "Fórmula de Bhaskara: x = (-b ± √Δ) / 2a"] },
        { label: "Função Exponencial", children: ["f(x) = aˣ, com a > 0 e a ≠ 1", "Juros compostos: M = C × (1 + i)^t", "Crescimento e decaimento radioativo", "Base neperiana: e ≈ 2,718"] },
        { label: "Função Logarítmica", children: ["f(x) = logₐx (inversa de aˣ)", "Escala Richter: cada grau = 10x mais forte", "Decibéis: escala logarítmica do som", "pH: −log[H⁺] — medida de acidez"] },
      ],
    },
  },

  // ─── CIÊNCIAS NATURAIS ───────────────────────────────────────────────────────
  "genética": {
    category: "biologia",
    slides: [
      {
        title: "Genética",
        subtitle: "A Ciência da Hereditariedade | Mendel (1865)",
        intro: "Genética é o ramo da biologia que estuda como as características são transmitidas de pais para filhos através dos genes. Fundada por Gregor Mendel (1865) com experimentos em ervilhas, hoje envolve DNA, RNA, engenharia genética e medicina de precisão.",
      },
      {
        title: "Conceitos Fundamentais da Genética",
        subtitle: "Genes, Alelos, Genótipo e Fenótipo",
        bullets: [
          "Gene: segmento de DNA que codifica uma proteína ou característica hereditária",
          "Alelos: versões alternativas de um gene (ex.: B = castanho dominante, b = azul recessivo)",
          "Genótipo: constituição genética (BB, Bb, bb); Fenótipo: característica observável",
          "1ª Lei de Mendel (Segregação): cada indivíduo tem 2 alelos; herda 1 de cada progenitor",
          "2ª Lei de Mendel (Assortimento Independente): genes de cromossomos diferentes segregam independentemente",
        ],
      },
      {
        title: "Genética Moderna e Aplicações",
        subtitle: "Do DNA ao CRISPR e à Medicina Personalizada",
        conclusion: "Watson e Crick descobriram a estrutura do DNA em dupla hélice (1953). O Projeto Genoma Humano (2003) mapeou todos os ~20.000 genes humanos. Hoje, a tecnologia CRISPR-Cas9 permite editar o DNA com precisão cirúrgica, prometendo cura para doenças genéticas como fibrose cística, hemofilia e anemia falciforme. A genética forense identifica suspeitos por impressão digital de DNA.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Conceitos Básicos", children: ["DNA: ácido desoxirribonucleico (dupla hélice)", "Gene: unidade hereditária no cromossomo", "Alelo: variante de um gene (dominante/recessivo)", "Cromossomo: 23 pares no ser humano (46 no total)"] },
        { label: "Leis de Mendel", children: ["1ª Lei: Segregação dos fatores (pares de alelos)", "2ª Lei: Assortimento independente", "Quadro de Punnett: previsão de descendentes", "Dominância, recessividade e codominância"] },
        { label: "Genética Humana", children: ["Herança ligada ao sexo (ex.: daltonismo, hemofilia)", "Doenças autossômicas: fibrose cística, fenilcetonúria", "Síndrome de Down: trissomia do cromossomo 21", "Heredograma: representação de famílias genéticas"] },
        { label: "Biotecnologia", children: ["Sequenciamento de DNA (Watson e Crick, 1953)", "Projeto Genoma Humano (completo em 2003)", "CRISPR-Cas9: edição genética de precisão", "Clonagem e transgênicos (OGMs na agricultura)"] },
      ],
    },
  },

  "reações químicas": {
    category: "química",
    slides: [
      {
        title: "Reações Químicas",
        subtitle: "Transformações da Matéria em Nível Molecular",
        intro: "Uma reação química é um processo em que substâncias chamadas reagentes se transformam em novos produtos com propriedades diferentes. As ligações químicas entre átomos são quebradas e novas são formadas. A equação química representa esse processo de forma balanceada.",
      },
      {
        title: "Tipos de Reações e Indícios",
        subtitle: "Como Identificar e Classificar uma Reação Química",
        bullets: [
          "Síntese (adição): A + B → AB — ex.: N₂ + 3H₂ → 2NH₃ (amônia, base de fertilizantes)",
          "Análise (decomposição): AB → A + B — ex.: 2H₂O → 2H₂ + O₂ (eletrólise da água)",
          "Deslocamento simples: A + BC → AC + B — ex.: Fe + CuSO₄ → FeSO₄ + Cu",
          "Dupla troca: AB + CD → AD + CB — ex.: NaOH + HCl → NaCl + H₂O (neutralização)",
          "Indícios: mudança de cor, formação de gás, precipitado, variação de temperatura",
        ],
      },
      {
        title: "Cinética, Equilíbrio e Importância",
        subtitle: "Controlando as Reações Químicas na Indústria e na Vida",
        conclusion: "A velocidade de uma reação depende de: temperatura (+ calor = + rápida), concentração dos reagentes, catalisadores e superfície de contato. O Princípio de Le Chatelier descreve como o equilíbrio químico responde a perturbações externas. A indústria aplica esses princípios na síntese de plásticos, medicamentos, combustíveis, fertilizantes (Processo Haber-Bosch) e no tratamento de água.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Tipos de Reação", children: ["Síntese: A + B → AB", "Análise: AB → A + B", "Deslocamento Simples: A + BC → AC + B", "Dupla Troca: AB + CD → AD + CB"] },
        { label: "Equação Química", children: ["Reagentes (lado esquerdo)", "Produtos (lado direito)", "Balanceamento: conservação de massa", "Estequiometria: proporções de mol"] },
        { label: "Fatores de Velocidade", children: ["Temperatura: + calor = + colisões", "Concentração: + reagente = + choques", "Catalisador: reduz energia de ativação", "Superfície: + contato = + reação"] },
        { label: "Aplicações", children: ["Fotossíntese: CO₂ + H₂O → glicose + O₂", "Combustão: gasolina + O₂ → CO₂ + H₂O", "Processo Haber: N₂ + H₂ → NH₃ (fertilizantes)", "Pilha e bateria: reação de oxirredução"] },
      ],
    },
  },

  // ─── FILOSOFIA ADICIONAL ─────────────────────────────────────────────────────
  "filosofia grega": {
    category: "filosofia",
    slides: [
      {
        title: "Filosofia Grega Antiga",
        subtitle: "Séculos VI a.C. – IV a.C. | A Origem do Pensamento Ocidental",
        intro: "A filosofia ocidental nasceu na Grécia Antiga por volta do século VI a.C., quando pensadores como Tales de Mileto começaram a buscar explicações racionais para o mundo, substituindo o mito (mythos) pelo logos (razão). Sócrates, Platão e Aristóteles formam o cânone central do pensamento filosófico.",
      },
      {
        title: "Os Três Grandes Filósofos da Antiga Grécia",
        subtitle: "Sócrates, Platão e Aristóteles",
        bullets: [
          "Sócrates (470-399 a.C.): 'Só sei que nada sei' — método socrático de perguntas e refutações (maiêutica)",
          "Platão (428-348 a.C.): Teoria das Ideias — o mundo sensível é cópia imperfeita do mundo das formas eternas",
          "Aristóteles (384-322 a.C.): lógica formal, categorias, ética, política, biologia — enciclopedista da Antiguidade",
          "Pré-Socráticos: Tales (água), Heráclito (fogo+mudança), Parmênides (ser imutável), Demócrito (átomos)",
          "Escola de Atenas: Academia de Platão e Liceu de Aristóteles — primeiras universidades da história",
        ],
      },
      {
        title: "O Legado da Filosofia Grega",
        subtitle: "Por que os Gregos Ainda Dominam o Pensamento",
        conclusion: "A filosofia grega fundou a lógica, a política, a física, a biologia, a ética e a metafísica como áreas de estudo sistemático. Platão inspirou o cristianismo neoplatônico; Aristóteles dominou o pensamento medieval europeu via Tomás de Aquino. Conceitos gregos como democracia, ética, cosmos e logos permeiam toda a cultura ocidental. Estudar filosofia grega é compreender as raízes de tudo que pensamos.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Pré-Socráticos", children: ["Tales de Mileto: arché = água", "Heráclito: panta rhei (tudo muda)", "Parmênides: o ser é imóvel e eterno", "Demócrito: tudo é feito de átomos"] },
        { label: "Sócrates", children: ["'Só sei que nada sei' — humildade intelectual", "Maiêutica: perguntas para chegar à verdade", "Condenado à morte por impiedade (399 a.C.)", "Não deixou escritos — conhecido por Platão"] },
        { label: "Platão", children: ["Teoria das Ideias/Formas eternas", "Mito da Caverna: ilusão dos sentidos", "'A República': Estado ideal e filósofo-rei", "Academia de Atenas (387 a.C.)"] },
        { label: "Aristóteles", children: ["Lógica formal: silogismo e categorias", "Ética: virtude = meio-termo (mesoteia)", "Política: 'O homem é um animal político'", "Física, biologia, teatro — polímata total"] },
      ],
    },
  },

  "biomas brasileiros": {
    category: "geografia",
    slides: [
      {
        title: "Biomas Brasileiros",
        subtitle: "A Mais Rica Biodiversidade do Planeta",
        intro: "O Brasil possui 6 biomas principais, que cobrem diferentes regiões do território nacional. Com 8,5 milhões de km², o país abriga 20% de toda a biodiversidade terrestre do planeta — incluindo a maior floresta tropical do mundo: a Amazônia.",
      },
      {
        title: "Os 6 Biomas do Brasil",
        subtitle: "Amazônia, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa",
        bullets: [
          "Amazônia: 4,1 mi km² — maior floresta tropical do planeta; 10% de todas as espécies vivas",
          "Cerrado: 2 mi km² — 'berço das águas' do Brasil; 40% já foi destruído pelo agronegócio",
          "Mata Atlântica: hoje restam apenas 12% — a mais rica em biodiversidade por km²",
          "Caatinga: único bioma exclusivamente brasileiro; flora adaptada à seca prolongada",
          "Pantanal: maior área úmida do planeta (150.000 km²); patrimônio natural da UNESCO",
        ],
      },
      {
        title: "Ameaças e Conservação dos Biomas",
        subtitle: "Por que Preservar é uma Questão de Sobrevivência",
        conclusion: "O desmatamento, o garimpo ilegal, o agronegócio e as queimadas ameaçam todos os biomas brasileiros. A Amazônia já perdeu 20% de sua cobertura — cientistas alertam que mais 3-4% pode levar ao 'ponto de não retorno', transformando a floresta em savana. O Brasil é signatário do Acordo de Paris e comprometeu reduzir desmatamento a zero até 2030. A COP30, em Belém, em 2025, coloca o Brasil no centro do debate global.",
      },
    ],
    mindMap: {
      branches: [
        { label: "Amazônia", children: ["4,1 mi km² (60% do BR)", "Maior biodiversidade do planeta", "Rio Amazonas: maior volume de água", "20% já desmatado — ponto de alerta"] },
        { label: "Cerrado e Caatinga", children: ["Cerrado: 'savana mais biodiversa do mundo'", "Berço dos rios: Araguaia, São Francisco, Xingu", "Caatinga: exclusivo do Brasil (semiárido NE)", "Adaptações: cactáceas, umbuzeiro, juazeiro"] },
        { label: "Mata Atlântica e Pampa", children: ["Mata Atlântica: restam 12% do original", "Mais de 20.000 plantas endêmicas", "Pampa: sul do RS — campos temperados", "Alta pressão urbana no litoral"] },
        { label: "Pantanal", children: ["Maior área úmida do planeta (150.000 km²)", "Patrimônio UNESCO e Ramsar", "Onça-pintada, capivara, tuiuiú", "Ameaça: queimadas e agrotóxicos"] },
      ],
    },
  },
};

// ─── BASE COMPLETA (base + estendida) ────────────────────────────────────────
const ALL_TOPICS = { ...KNOWLEDGE_BASE, ...KNOWLEDGE_BASE_EXTENDED };

// ─── MOTOR DE BUSCA UNIFICADO ─────────────────────────────────────────────────
export const findTopic = (query) => {
  const normalize = (str) => str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const q = normalize(query.trim());
  const keys = Object.keys(ALL_TOPICS);

  // 1. Busca direta (com e sem acento)
  for (const key of keys) {
    if (normalize(key) === q) return ALL_TOPICS[key];
  }

  // 2. O query contém a chave ou vice-versa
  for (const key of keys) {
    const nk = normalize(key);
    if (q.includes(nk) || nk.includes(q)) return ALL_TOPICS[key];
  }

  // 3. Busca por palavras individuais (>= 4 chars)
  const words = q.split(/\s+/).filter(w => w.length >= 4);
  for (const word of words) {
    const match = keys.find(k => {
      const nk = normalize(k);
      return nk.includes(word) || word.includes(nk);
    });
    if (match) return ALL_TOPICS[match];
  }

  // 4. ✨ FALLBACK INTELIGENTE — gera conteúdo para QUALquer tema
  return generateFallback(query.trim());
};

export const TOPIC_EXAMPLES = [
  // História
  "Revolução Industrial", "Revolução Francesa", "Primeira Guerra Mundial",
  "Segunda Guerra Mundial", "Guerra Fria", "Revolução Russa",
  "Independência do Brasil", "Ditadura Militar", "Era Vargas",
  "Colonização do Brasil", "Abolição da Escravidão", "Renascimento", "Imperialismo",
  // Biologia
  "Fotossíntese", "Célula", "Genética", "Evolução das Espécies",
  "Ecossistema", "Mitose e Meiose", "Sistema Nervoso",
  // Física
  "Leis de Newton", "Eletricidade", "Termodinâmica", "Ondas",
  "Sistema Solar", "Energia",
  // Química
  "Tabela Periódica", "Reações Químicas", "Ligações Químicas", "Ácidos e Bases",
  // Matemática
  "Funções Matemáticas", "Trigonometria", "Probabilidade", "Geometria Plana",
  // Geografia
  "Globalização", "Biomas Brasileiros", "Meio Ambiente",
  "Urbanização", "Placas Tectônicas",
  // Filosofia/Sociologia  
  "Iluminismo", "Filosofia Grega", "Marxismo", "Democracia",
  // Literatura
  "Romantismo Brasileiro", "Modernismo Brasileiro", "Realismo Naturalismo",
];

