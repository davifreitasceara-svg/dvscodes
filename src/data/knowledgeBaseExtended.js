// ─── BASE ESTENDIDA: MAIS 40 TEMAS DO CURRÍCULO ESCOLAR BRASILEIRO ─────────────

export const KNOWLEDGE_BASE_EXTENDED = {

  // ─── HISTÓRIA DO BRASIL ──────────────────────────────────────────────────────
  "colonização do brasil": {
    category: "história",
    slides: [
      { title: "Colonização do Brasil", subtitle: "1500 – 1822 | 322 anos de domínio português",
        intro: "A colonização do Brasil por Portugal iniciou-se com a chegada de Pedro Álvares Cabral em 22 de abril de 1500. Durante 322 anos, o território foi explorado economicamente — primeiro pelo pau-brasil, depois pela cana-de-açúcar, mineração e café — com base no trabalho escravo e nas capitanias hereditárias." },
      { title: "Ciclos Econômicos e Estrutura Colonial", subtitle: "Da Capitania Hereditária à Metrópole Lusitana",
        bullets: ["Ciclo do Pau-Brasil (1500-1530): extração e troca com indígenas (escambo)", "Capitanias Hereditárias (1534): Portugal divide o Brasil em 15 lotes para donatários", "Ciclo da Cana-de-Açúcar (séc. XVI-XVII): Nordeste como maior produtor mundial", "Ciclo do Ouro (séc. XVIII): exploração de Minas Gerais, Mato Grosso e Goiás", "Pacto Colonial: Brasil só podia comercializar com Portugal — exploração sistêmica"] },
      { title: "Legado da Colonização no Brasil Atual", subtitle: "Estruturas que Perduram 200 Anos Depois",
        conclusion: "A colonização moldou estruturalmente o Brasil: a grande propriedade rural (latifúndio), a dependência econômica externa, a escravidão e suas sequelas raciais, a desigualdade social e a concentração de renda. O Brasil é o único país lusófono das Américas — língua, religião e cultura são heranças diretas dos 322 anos de colonização portuguesa." },
    ],
    mindMap: { branches: [
      { label: "Início (1500-1530)", children: ["Chegada de Cabral: 22/04/1500", "Carta de Pero Vaz de Caminha", "Escambo com povos Tupi", "Terra de Santa Cruz → Brasil (pau-brasil)"] },
      { label: "Organização Territorial", children: ["15 Capitanias Hereditárias (1534)", "Governo-Geral: Tomé de Sousa (1549)", "Salvador: 1ª capital colonial", "Jesuítas: catequese e aldeamentos"] },
      { label: "Ciclos Econômicos", children: ["Pau-brasil: 1500-1530", "Cana-de-açúcar: séc. XVI-XVII", "Ouro: 1693-1785 (Minas Gerais)", "Café: séc. XIX (Vale do Paraíba"] },
      { label: "Consequências", children: ["Escravidão africana em massa", "Latifúndio como base agrária", "Dependência econômica de Portugal", "Miscigenação e identidade brasileira"] },
    ]},
  },

  "ditadura militar": {
    category: "história",
    slides: [
      { title: "Ditadura Militar no Brasil", subtitle: "1964 – 1985 | 21 anos sem democracia",
        intro: "O regime militar brasileiro teve início com o golpe de 31 de março de 1964 — consumado em 1º de abril, quando Jango deixou o país — que depôs o presidente João Goulart. Durante 21 anos, cinco generais governaram o país, suspendendo direitos civis, perseguindo opositores e implantando a censura — sob a justificativa anticomunista da Guerra Fria." },
      { title: "Fases, Atos e Resistência", subtitle: "Do AI-5 ao Fim da Ditadura",
        bullets: ["31/03-01/04/1964: Golpe inicia em 31/03; Goulart parte em 01/04; Castelo Branco assume", "AI-5 (13/12/1968): ato mais duro — suspendeu direitos políticos, cassou mandatos e habeas corpus", "Anos de chumbo (1969-1974): torturas, desaparecimentos e guerrilha do Araguaia (PCdoB, 1972-74)", "Milagre Econômico (1968-1973): crescimento médio de 10% ao ano com forte endividamento externo", "Lei da Anistia (1979) e campanha Diretas Já (1983-84) — abertura gradual e redemocratização"] },
      { title: "Fim da Ditadura e Memória", subtitle: "A Transição para a Democracia e Seus Débitos",
        conclusion: "A ditadura militar deixou marcas profundas: pelo menos 434 mortos e desaparecidos políticos (Comissão Nacional da Verdade, 2014), uma dívida externa multiplicada por 40, e uma cultura política autoritária. A redemocratização culminou na Constituição de 1988 — a 'Constituição Cidadã'. O período ainda é debatido na sociedade brasileira, dividida sobre como avaliar esses 21 anos." },
    ],
    mindMap: { branches: [
      { label: "Causas do Golpe", children: ["Polarização esquerda/direita na Guerra Fria", "Medo do comunismo com Cuba (1959)", "Reformas de base de João Goulart", "Apoio dos EUA e das elites ao golpe"] },
      { label: "Os 5 Presidentes Militares", children: ["Castelo Branco (1964-67)", "Costa e Silva (1967-69)", "Médici (1969-74): anos mais duros", "Geisel (1974-79): início da abertura", "Figueiredo (1979-85): anistia e eleições"] },
      { label: "Repressão", children: ["AI-5: suspensão de direitos civis", "DOI-CODI: centro de torturas", "Guerrilha do Araguaia (PCdoB, 1972)", "Assassinato de Vladimir Herzog (1975)"] },
      { label: "Fim e Legado", children: ["Diretas Já! (1983-84): maior mobilização popular", "Tancredo Neves eleito (1985)", "Constituição de 1988 — Carta Cidadã", "CNV: 434 mortos e desaparecidos"] },
    ]},
  },

  "era vargas": {
    category: "história",
    slides: [
      { title: "Era Vargas", subtitle: "1930 – 1945 e 1950 – 1954 | Getúlio Vargas",
        intro: "A Era Vargas compreende os períodos em que Getúlio Vargas governou o Brasil: primeiro pela Revolução de 1930, depois pela ditadura do Estado Novo (1937-1945) e por fim pelo governo democrático (1950-1954). Foi o período de maior transformação da estrutura econômica e política do Brasil moderno." },
      { title: "Fases do Governo Vargas", subtitle: "Da Revolução ao Suicídio no Catete",
        bullets: ["1930: Revolução que pôs fim à República Velha e ao sistema café-com-leite", "1932: Revolução Constitucionalista — São Paulo se revolta contra Vargas", "Estado Novo (1937-45): ditadura inspirada no fascismo europeu, com DIP de propaganda", "Trabalhismo: CLT (1943), salário mínimo, 8h de trabalho — Vargas como 'pai dos pobres'", "1954: Pressão militar leva Vargas a suicidar-se, deixando a Carta-Testamento"] },
      { title: "Legado da Era Vargas", subtitle: "O Brasil que Vargas Construiu",
        conclusion: "Vargas industrializou o Brasil criando a Petrobras (1953), a CSN (Companhia Siderúrgica Nacional, 1941) e a Vale do Rio Doce (1942). A CLT organizou o mercado de trabalho e é base da legislação trabalhista até hoje. O varguismo criou o trabalhismo como força política — herdado pelo PTB e mais tarde pelo PT. Lula comparou seu governo ao de Vargas ao recriar programas sociais massivos." },
    ],
    mindMap: { branches: [
      { label: "Revolução de 1930", children: ["Fim da República Velha", "Candidatura de Júlio Prestes (derrotado)", "Tenentismo e oligarquias dissidentes", "Vargas assume o poder em 03/11/1930"] },
      { label: "Estado Novo (1937-45)", children: ["Constituição de 1937 ('Polaca')", "DIP: censura e propaganda varguista", "Queima das bandeiras estaduais (1937)", "Brasil entra na 2ª Guerra (1942) pela Entente"] },
      { label: "Legado Econômico", children: ["CSN (1941): siderurgia nacional", "Vale do Rio Doce (1942)", "Petrobras (1953): 'O petróleo é nosso'", "Industrialização: substituição de importações"] },
      { label: "Trabalhismo", children: ["CLT (1943): Consolidação das Leis do Trabalho", "Salário mínimo (1940)", "8 horas de trabalho diário", "Sindicatos: modelo corporativista"] },
    ]},
  },

  "revolução russa": {
    category: "história",
    slides: [
      { title: "Revolução Russa", subtitle: "1917 | O Nascimento da URSS",
        intro: "A Revolução Russa de 1917 foi composta por dois eventos: a Revolução de Fevereiro, que derrubou o Czar Nicolau II, e a Revolução de Outubro, em que os bolcheviques de Lenin tomaram o poder. Resultou na fundação da União Soviética e na primeira experiência de governo comunista da história." },
      { title: "As Duas Revoluções de 1917", subtitle: "De Fevereiro a Outubro — a Queda dos Czares ao Poder Soviético",
        bullets: ["Fevereiro/1917: manifestações derrubam Nicolau II — fim de 300 anos da dinastia Romanov", "Governo Provisório de Kerensky: liberal, mantém Rússia na 1ª Guerra Mundial — impopular", "Lenin retorna do exílio suíço e lança as 'Teses de Abril': paz, terra e pão", "25/10/1917: Insurreição bolchevique, Tomada do Palácio de Inverno — 'Aurora' dispara o sinal", "Guerra Civil (1917-1922): bolcheviques ('vermelhos') vs. monarquistas e ocidente ('brancos')"] },
      { title: "A URSS e o Impacto Mundial", subtitle: "Como 1917 Mudou o Século XX",
        conclusion: "A Revolução Russa fundou a URSS (1922), criou o primeiro Estado socialista e dividiu o mundo em dois projetos civilizatórios antagônicos — capitalismo e comunismo. Inspirou partidos comunistas em dezenas de países, a Revolução Chinesa (1949) e movimentos de libertação na África e Ásia. A Stalin, URSS chegou a ser a 2ª potência mundial. Dissolvida em 1991, seus efeitos ainda moldam a geopolítica atual." },
    ],
    mindMap: { branches: [
      { label: "Causas", children: ["Derrota humilhante na 1ª Guerra Mundial", "Fome e miséria do povo russo", "Czarismo absolutista e incompetente", "Pensamento marxista e partidos de esquerda"] },
      { label: "Personagens", children: ["Lenin: líder bolchevique, teórico marxista", "Trotsky: organizou o Exército Vermelho", "Stalin: sucedeu Lenin e criou o terror", "Nicolau II e família: fuzilados em 1918"] },
      { label: "Consequências Imediatas", children: ["Paz de Brest-Litovsk (saída da guerra, 1918)", "Guerra Civil Russa (1917-1922)", "Terror Vermelho: liquidação dos inimigos", "Fundação da URSS (30/12/1922)"] },
      { label: "Impacto Global", children: ["Surgimento da Internacional Comunista (Comintern)", "Partidos Comunistas em todo o mundo", "Inspiração para rev. chinesa, cubana, vietnamita", "Divisão do mundo na Guerra Fria"] },
    ]},
  },

  "renascimento": {
    category: "história",
    slides: [
      { title: "Renascimento", subtitle: "Séculos XIV – XVII | Europa",
        intro: "O Renascimento foi um movimento cultural e científico que surgiu na Itália no século XIV e se espalhou pela Europa até o século XVII. Recuperou os valores da Antiguidade Clássica greco-romana, colocou o ser humano no centro do universo (humanismo) e produziu as maiores obras de arte, ciência e literatura da história ocidental." },
      { title: "Características, Artistas e Cientistas", subtitle: "O Florescimento do Espírito Humano",
        bullets: ["Humanismo: o ser humano como medida de todas as coisas (em oposição ao teocentrismo medieval)", "Leonardo da Vinci (1452-1519): Mona Lisa, A Última Ceia, máquinas voadoras e anatomia humana", "Michelangelo (1475-1564): Davi (escultura), teto da Capela Sistina, cúpula de São Pedro", "Rafael Sanzio: A Escola de Atenas — representação da filosofia clássica", "Ciência: Copérnico (heliocentrismo, 1543), Galileu (telescópio) e Vesálio (anatomia)"] },
      { title: "Legado do Renascimento", subtitle: "O Nascimento do Mundo Moderno",
        conclusion: "O Renascimento foi a charneira entre a Idade Média e a Modernidade. Inaugurou o método científico, a perspectiva nas artes, o individualismo moderno e questionou a autoridade da Igreja — preparando o terreno para a Reforma Protestante e para as Revoluções Científica e Iluminista. Sem o Renascimento, não existiria a ciência moderna como a conhecemos." },
    ],
    mindMap: { branches: [
      { label: "Características", children: ["Humanismo: homem como centro", "Racionalismo: razão sobre a fé", "Individualismo: valorização do ser único", "Antropocentrismo vs. Teocentrismo medieval"] },
      { label: "Grandes Artistas", children: ["Leonardo da Vinci: polímata universal", "Michelangelo: escultura e pintura sublime", "Rafael Sanzio: harmonia e beleza clássica", "Botticelli: O Nascimento de Vênus"] },
      { label: "Ciência Renascentista", children: ["Copérnico: heliocentrismo (1543)", "Galileu Galilei: telescópio e mecânica", "Vesálio: anatomia humana (1543)", "Francis Bacon: método indutivo"] },
      { label: "Contexto e Expansão", children: ["Florença dos Médici: mecenato artístico", "Invenção da Imprensa (Gutenberg, 1450)", "Renascimento do Norte: Erasmo, Shakespeare", "Preparação para a Reforma Protestante"] },
    ]},
  },

  "imperialismo": {
    category: "história",
    slides: [
      { title: "Imperialismo", subtitle: "Sécs. XIX – XX | Europa Domina o Mundo",
        intro: "O Imperialismo foi o processo de expansão política, econômica e territorial das potências europeias — e depois dos EUA e Japão — sobre a África, Ásia e Oceania no século XIX e início do XX. Motivado pela busca por matérias-primas, mercados consumidores e prestígio nacional, resultou na dominação de 80% do globo pelas potências ocidentais." },
      { title: "Causas, Formas e Resistências", subtitle: "Como a Europa Dividiu o Mundo",
        bullets: ["Causas econômicas: 2ª Rev. Industrial criou necessidade de matérias-primas e novos mercados", "Conferência de Berlim (1884-85): potências europeias dividiram a África sem consultar africanos", "Formas: colônias diretas, protetorados, concessões e áreas de influência informal", "Resistências: Guerras dos Zulus (1879), Batalha de Adwa — Etiópia derrota a Itália (1896)", "Japão: modernizou-se (Meiji, 1868) e tornou-se potência imperialista na Ásia"] },
      { title: "Consequências e o Mundo Pós-Colonial", subtitle: "O Legado das Fronteiras Artificiais",
        conclusion: "O imperialismo legou ao mundo: fronteiras artificiais que ignoraram etnia e cultura (causa de guerras na África até hoje), destruição de civilizações milenares, exploração econômica que empobrece países em desenvolvimento, e o racismo científico como justificativa ('fardo do homem branco'). A descolonização (1945-1975) libertou politicamente as nações, mas não apagou as estruturas de dependência econômica — chamadas de neocolonialismo." },
    ],
    mindMap: { branches: [
      { label: "Causas", children: ["2ª Rev. Industrial: excedente de capital e prod.", "Busca por matérias-primas (borracha, cobre, algodão)", "Mercados consumidores para produtos industriais", "Rivalidade entre potências europeias"] },
      { label: "Partilha da África", children: ["Conferência de Berlim (1884-85)", "Corrida para o interior do continente", "Apenas Etiópia e Libéria permaneceram livres", "Batalha de Adwa: Etiópia derrota Itália (1896)"] },
      { label: "Imperialismo na Ásia", children: ["China: 'tratados desiguais' com potências", "Índia: dominada pelo Reino Unido desde 1858", "Japão: europeizou-se para não ser colonizado", "Filipinas: EUA colonizam após 1898"] },
      { label: "Consequências", children: ["Fronteiras artificiais na África (guerras atuais)", "Racismo científico como justificativa", "Descolonização: 1945-1975", "Neocolonialismo e dependência econômica"] },
    ]},
  },

  // ─── BIOLOGIA ADICIONAL ──────────────────────────────────────────────────────
  "ecossistema": {
    category: "biologia",
    slides: [
      { title: "Ecossistemas", subtitle: "Relações entre Seres Vivos e o Ambiente",
        intro: "Um ecossistema é o conjunto formado por uma comunidade de seres vivos (biocenose) e o ambiente físico que os rodeia (biótopo), interagindo por meio de fluxo de energia e ciclagem de matéria. Existem ecossistemas terrestres (florestas, desertos, campos) e aquáticos (rios, mares, oceanos)." },
      { title: "Componentes e Relações do Ecossistema", subtitle: "Produtores, Consumidores e Decompositores",
        bullets: ["Produtores: plantas e algas que realizam fotossíntese — base da cadeia alimentar", "Consumidores Primários: herbívoros que se alimentam dos produtores (ex.: gafanhotos, vacas)", "Consumidores Secundários e Terciários: carnívoros que comem herbívoros (ex.: cobra, águia)", "Decompositores: fungos e bactérias que reciclam matéria orgânica morta → nutrientes", "Fluxo de energia: 10% da energia passa de um nível trófico ao seguinte (Regra dos 10%)"] },
      { title: "Equilíbrio e Ameaças aos Ecossistemas", subtitle: "Por que a Biodiversidade é Vital",
        conclusion: "Ecossistemas equilibrados fornecem serviços ambientais essenciais: produção de oxigênio, purificação da água, controle do clima e polinização de plantações. Espécies extintas criam 'buracos' nas cadeias alimentares, desestabilizando todo o sistema. A perda de biodiversidade é tão grave quanto as mudanças climáticas — 1 milhão de espécies ameaçadas segundo a ONU." },
    ],
    mindMap: { branches: [
      { label: "Componentes Bióticos", children: ["Produtores: plantas e fitoplâncton", "Consumidores primários: herbívoros", "Consumidores secundários: carnívoros", "Decompositores: fungos e bactérias"] },
      { label: "Componentes Abióticos", children: ["Temperatura e clima", "Luz solar", "Água e umidade", "Solo e minerais"] },
      { label: "Relações Ecológicas", children: ["Predatismo: predador × presa", "Parasitismo: parasita se beneficia, hospedeiro prejudicado", "Mutualismo: ambos se beneficiam (abelha × flor)", "Comensalismo: um se beneficia, outro neutro"] },
      { label: "Ameaças", children: ["Desmatamento e perda de habitat", "Poluição do ar, água e solo", "Espécies invasoras", "Mudanças climáticas globais"] },
    ]},
  },

  "sistema nervoso": {
    category: "biologia",
    slides: [
      { title: "Sistema Nervoso", subtitle: "O Centro de Comando do Corpo Humano",
        intro: "O sistema nervoso é o responsável por coordenar e integrar todas as funções do organismo, recebendo estímulos do ambiente e produzindo respostas adequadas. É formado pelo Sistema Nervoso Central (SNC) — encéfalo e medula espinhal — e pelo Sistema Nervoso Periférico (SNP) — nervos e gânglios." },
      { title: "Estrutura e Funcionamento", subtitle: "Neurônios, Sinapses e Impulsos Nervosos",
        bullets: ["Neurônio: célula nervosa com dendritos (recebem), corpo celular e axônio (transmite)", "Sinapse: junção entre neurônios onde o impulso é transmitido por neurotransmissores (dopamina, serotonina)", "SNC: encéfalo (cérebro, cerebelo, tronco encefálico) + medula espinhal", "SNP Somático: controla músculos voluntários; SNP Autônomo: controla vísceras (involuntário)", "Reflexo: resposta rápida mediada pela medula sem processamento cerebral"] },
      { title: "Doenças e Importância do Sistema Nervoso", subtitle: "Neurociência e o Futuro da Medicina",
        conclusion: "O sistema nervoso é o mais complexo do corpo — o cérebro humano tem ~86 bilhões de neurônios e 100 trilhões de sinapses. Doenças como Alzheimer, Parkinson, epilepsia e depressão afetam o SN. A neurociência moderna explora plasticidade neural (capacidade de aprendizado), interfaces cérebro-computador e o impacto das drogas sobre os neurotransmissores — temas centrais na medicina do século XXI." },
    ],
    mindMap: { branches: [
      { label: "Divisões", children: ["SNC: encéfalo + medula espinhal", "SNP: nervos cranianos e espinhais", "SNP Somático: movimentos voluntários", "SNP Autônomo: simpático e parassimpático"] },
      { label: "O Neurônio", children: ["Dendritos: recebem informações", "Corpo celular: processa sinais", "Axônio: transmite impulso elétrico", "Bainha de Mielina: acelera o impulso"] },
      { label: "Encéfalo", children: ["Cérebro: raciocínio, memória, emoções", "Cerebelo: equilíbrio e coordenação motora", "Tronco encefálico: funções vitais (respiração, batimentos)", "Hipotálamo: regula temperatura e hormônios"] },
      { label: "Doenças", children: ["Alzheimer: degeneração de neurônios (memória)", "Parkinson: perda de dopamina", "Epilepsia: surtos de atividade elétrica anormal", "Depressão: desequilíbrio de serotonina/dopamina"] },
    ]},
  },

  "mitose e meiose": {
    category: "biologia",
    slides: [
      { title: "Mitose e Meiose", subtitle: "Divisão Celular: Crescimento e Reprodução",
        intro: "A divisão celular é o processo de multiplicação das células. A mitose produz 2 células filhas idênticas à célula-mãe (diploides) e é responsável pelo crescimento e regeneração dos tecidos. A meiose produz 4 células filhas com metade dos cromossomos (haploides) e é exclusiva da reprodução sexual." },
      { title: "Fases da Mitose e da Meiose", subtitle: "Prófase, Metáfase, Anáfase e Telófase",
        bullets: ["Interfase: célula cresce e duplica o DNA antes de dividir", "Mitose: Prófase → Metáfase → Anáfase → Telófase → 2 células idênticas (2n → 2n)", "Meiose I: separação dos cromossomos homólogos → 2 células com n cromossomos", "Meiose II: similar à mitose → 4 células haploides (gametas)", "Crossing-over (permuta): na meiose I, troca de segmentos entre cromossomos — aumenta variabilidade"] },
      { title: "Importância e Erros da Divisão Celular", subtitle: "Do Câncer às Anomalias Cromossômicas",
        conclusion: "A mitose garante o crescimento e a regeneração constante do corpo — estima-se que cerca de 25 milhões de células se dividem a cada segundo no organismo humano adulto (3,8 milhões são apenas glóbulos vermelhos). Erros na mitose levam ao câncer (divisão descontrolada). Erros na meiose causam anomalias cromossômicas como a Síndrome de Down (trissomia do cromossomo 21), Turner e Klinefelter. O controle do ciclo celular é um dos grandes objetos da medicina moderna." },
    ],
    mindMap: { branches: [
      { label: "Mitose", children: ["Produz 2 células filhas idênticas", "Mantém o número diploide (2n)", "Prófase → Metáfase → Anáfase → Telófase", "Crescimento, regeneração, cicatrização"] },
      { label: "Meiose", children: ["Produz 4 células filhas haploides (n)", "Ocorre nas gônadas: ovários e testículos", "Meiose I: separa homólogos", "Meiose II: separa cromátides irmãs"] },
      { label: "Variabilidade", children: ["Crossing-over: troca entre cromossomos homólogos", "Segregação independente dos cromossomos", "Maior variabilidade = evolução possível", "Combinações genéticas: 8 milhões de gametas diferentes"] },
      { label: "Erros e Doenças", children: ["Câncer: mitose descontrolada", "Síndrome de Down: +1 cromossomo 21", "Turner (45,X): falta um X — fenotipicamente feminino", "Klinefelter (47,XXY): fenotipicamente masculino"] },
    ]},
  },

  // ─── FÍSICA ADICIONAL ────────────────────────────────────────────────────────
  "termodinâmica": {
    category: "física",
    slides: [
      { title: "Termodinâmica", subtitle: "Calor, Trabalho e as Leis da Energia",
        intro: "A termodinâmica é o ramo da física que estuda as relações entre calor, trabalho e energia interna de um sistema. Suas quatro leis governam todo o universo — desde o funcionamento de motores a vapor e geladeiras até o destino final do cosmos (morte térmica)." },
      { title: "As Leis da Termodinâmica", subtitle: "Do Equilíbrio Térmico à Entropia",
        bullets: ["Lei Zero: se A está em equilíbrio com B, e B com C, então A está em equilíbrio com C", "1ª Lei: energia não se cria nem se destrói — só se transforma (ΔU = Q - W)", "2ª Lei: o calor flui espontaneamente do corpo mais quente ao mais frio (nunca o inverso)", "Entropia (S): medida da desordem do sistema — sempre tende a aumentar no universo", "3ª Lei: é impossível atingir o zero absoluto (0 K = −273,15°C) em um número finito de etapas"] },
      { title: "Aplicações da Termodinâmica", subtitle: "Motores, Geladeiras e o Universo",
        conclusion: "As máquinas térmicas — motores a vapor, motores de combustão, turbinas — funcionam pelos princípios da termodinâmica. A eficiência máxima de um motor é dada pelo Ciclo de Carnot. Geladeiras e ar-condicionado são máquinas frigoríficas que invertem o fluxo do calor com gasto de trabalho. A termodinâmica também explica a expansão do universo e prevê sua 'morte térmica' — estado de máxima entropia." },
    ],
    mindMap: { branches: [
      { label: "Conceitos Básicos", children: ["Temperatura: agitação das partículas", "Calor: transferência de energia térmica", "Trabalho termodinâmico: W = p × ΔV", "Energia Interna: soma das energias microscópicas"] },
      { label: "As 4 Leis", children: ["Lei Zero: equilíbrio térmico transitivo", "1ª Lei: conservação da energia (ΔU = Q - W)", "2ª Lei: entropia sempre aumenta", "3ª Lei: limite do zero absoluto (0K)"] },
      { label: "Processos Termodinâmicos", children: ["Isotérmico: temperatura constante (T = cte)", "Isobárico: pressão constante (p = cte)", "Isocórico/Isovolumétrico: volume constante", "Adiabático: sem troca de calor (Q = 0)"] },
      { label: "Aplicações", children: ["Motor a vapor: 1ª Rev. Industrial", "Motor a combustão interna (carros)", "Refrigerador e ar-condicionado", "Usinas termelétricas e nucleares"] },
    ]},
  },

  "ondas": {
    category: "física",
    slides: [
      { title: "Ondas", subtitle: "Propagação de Energia no Espaço",
        intro: "Uma onda é uma perturbação que se propaga no espaço ou num meio transportando energia, mas não matéria. Existem ondas mecânicas (precisam de meio, como som e água) e eletromagnéticas (propagam-se no vácuo, como luz, rádio e raios X). São caracterizadas por comprimento de onda, frequência, amplitude e velocidade." },
      { title: "Tipos, Propriedades e Equações", subtitle: "Do Som à Luz — Fundamentos das Ondas",
        bullets: ["Ondas transversais: vibração perpendicular à propagação (luz, ondas na corda)", "Ondas longitudinais: vibração paralela à propagação (som)", "Equação fundamental: v = λ × f (velocidade = comprimento de onda × frequência)", "Reflexão, refração, difração e interferência: os 4 fenômenos ondulatórios", "Efeito Doppler: frequência muda com o movimento relativo entre fonte e observador"] },
      { title: "Ondas no Cotidiano e na Tecnologia", subtitle: "Do Rádio aux Raios X — Ondas em Todo Lugar",
        conclusion: "O espectro eletromagnético inclui: ondas de rádio (TV, FM), micro-ondas (forno, radar, Wi-Fi), infravermelho (controle remoto, termografia), luz visível (400-700 nm), ultravioleta (causa queimaduras solares), raios X (diagnóstico médico) e raios gama (radioterapia e esterilização). O som é onda mecânica — músicas, voz humana e ultrassonografia médica. O 5G usa ondas milimétricas (24-100 GHz) de alta frequência para transmissão de dados." },
    ],
    mindMap: { branches: [
      { label: "Classificação", children: ["Mecânicas: precisam de meio (som, sísmica)", "Eletromagnéticas: propagam no vácuo (luz)", "Transversais: vibração ⊥ propagação", "Longitudinais: vibração ∥ propagação (som)"] },
      { label: "Grandezas", children: ["Comprimento (λ): distância entre cristas", "Frequência (f) em Hertz: oscilações/segundo", "Amplitude: altura máxima da onda", "Velocidade: v = λ × f"] },
      { label: "Fenômenos Ondulatórios", children: ["Reflexão: onda volta ao meio de origem", "Refração: onda muda de velocidade/direção", "Difração: onda contorna obstáculos", "Interferência: superposição de ondas"] },
      { label: "Espectro Eletromagnético", children: ["Rádio e micro-ondas: Wi-Fi, TV, radar", "Infravermelho: calor e controle remoto", "Luz visível: 380-700 nm", "UV, Raios X e Gama: ionizantes"] },
    ]},
  },

  // ─── QUÍMICA ADICIONAL ──────────────────────────────────────────────────────
  "ligações químicas": {
    category: "química",
    slides: [
      { title: "Ligações Químicas", subtitle: "Como os Átomos se Unem para Formar a Matéria",
        intro: "Ligações químicas são as forças que unem átomos para formar moléculas e compostos. Existem três tipos principais: covalente (compartilhamento de elétrons), iônica (transferência de elétrons) e metálica (elétrons livres nos metais). A configuração eletrônica e a regra do octeto explicam por que os átomos se ligam." },
      { title: "Os Três Tipos de Ligação Química", subtitle: "Iônica, Covalente e Metálica",
        bullets: ["Ligação Iônica: metal + não-metal — transferência de elétrons → formação de cátions e ânions (ex.: NaCl — sal de cozinha)", "Ligação Covalente: não-metal + não-metal — compartilhamento de pares de elétrons (ex.: H₂O, CO₂, H₂)", "Ligação Covalente Polar vs. Apolar: depende da diferença de eletronegatividade entre os átomos", "Ligação Metálica: metal + metal — 'mar de elétrons' livres que explicam condutividade e maleabilidade", "Regra do Octeto: átomos tendem a completar 8 elétrons na camada de valência"] },
      { title: "Ligações e Propriedades dos Materiais", subtitle: "Por que Água é Líquida e Sal é Sólido?",
        conclusion: "O tipo de ligação química determina as propriedades dos materiais: compostos iônicos têm alto ponto de fusão e conduzem eletricidade em solução. Compostos covalentes geralmente são líquidos ou gasosos à temperatura ambiente. Metais têm brilho, condutividade e maleabilidade. A compreensão das ligações é essencial para desenvolver novos materiais — plásticos, cerâmicas, semicondutores e materiais de construção." },
    ],
    mindMap: { branches: [
      { label: "Ligação Iônica", children: ["Metal cede elétrons → cátion (+)", "Não-metal ganha elétrons → ânion (-)", "Exemplo: NaCl (sal de cozinha)", "Alto ponto de fusão e ebulição"] },
      { label: "Ligação Covalente", children: ["Compartilhamento de pares de elétrons", "Simples (1 par), dupla (2 pares), tripla (3 pares)", "Polar: diferença de eletronegatividade", "Exemplos: H₂O, CO₂, CH₄, HCl"] },
      { label: "Ligação Metálica", children: ["Elétrons livres formam 'mar de elétrons'", "Explica alta condutividade elétrica", "Maleabilidade: deforma sem quebrar", "Brilho metálico característico"] },
      { label: "Forças Intermoleculares", children: ["Ligação de hidrogênio: F, O, N com H", "Dipolo-dipolo: moléculas polares", "Van der Waals: forças fracas universais", "Quanto mais forte a força → maior ponto de ebulição"] },
    ]},
  },

  "ácidos e bases": {
    category: "química",
    slides: [
      { title: "Ácidos e Bases", subtitle: "pH, Neutralização e Equilíbrio Ácido-Base",
        intro: "Ácidos e bases são substâncias fundamentais na química e no cotidiano. Pela teoria de Arrhenius, ácidos liberam H⁺ e bases liberam OH⁻ em solução aquosa. A escala de pH (0-14) mede a acidez: abaixo de 7 é ácido, acima de 7 é básico/alcalino, 7 é neutro." },
      { title: "Teorias, Escala de pH e Reações", subtitle: "De Arrhenius a Brønsted-Lowry",
        bullets: ["Arrhenius (1884): ácido libera H⁺, base libera OH⁻ em água", "Brønsted-Lowry: ácido doa próton (H⁺), base aceita próton", "Lewis: ácido aceita par de elétrons, base doa par de elétrons", "pH = -log[H⁺]: pH 0 = muito ácido; pH 14 = muito básico; pH 7 = neutro", "Neutralização: ácido + base → sal + água (ex.: HCl + NaOH → NaCl + H₂O)"] },
      { title: "Ácidos e Bases no Cotidiano", subtitle: "Do Suco de Laranja ao Cimento",
        conclusion: "Ácidos e bases estão em todo lugar: ácido clorídrico no estômago (pH ~2) digere alimentos, ácido acético no vinagre (pH ~3), bicarbonato de sódio é base (pH ~8.3). O pH do sangue humano (7,35-7,45) é controlado rigorosamente — desvios causam acidose ou alcalose, condições médicas graves. Chuva ácida (pH < 5,6) destrói florestas e monumentos históricos." },
    ],
    mindMap: { branches: [
      { label: "Teorias Ácido-Base", children: ["Arrhenius: H⁺ (ácido) e OH⁻ (base)", "Brønsted-Lowry: doação/aceitação de próton", "Lewis: aceitação/doação de par eletrônico", "Ácido conjugado e base conjugada"] },
      { label: "Escala de pH", children: ["pH 0-6: ácido (vinagre pH 3, estômago pH 2)", "pH 7: neutro (água pura)", "pH 8-14: básico (sabão pH 10, NaOH pH 14)", "pOH + pH = 14 (a 25°C)"] },
      { label: "Reações", children: ["Neutralização: ácido + base → sal + água", "Hidrólise: sal reage com água → ácido ou base", "Tampão: soluções que resistem a mudanças de pH", "Indicadores: tornam visível a mudança de pH"] },
      { label: "Cotidiano", children: ["Chuva ácida: SO₂ e NO₂ na atmosfera", "Antiácidos: neutralizam ácido estomacal", "pH do sangue: 7,35-7,45 (vital)", "Solo ácido: calagem com CaCO₃ para agricultura"] },
    ]},
  },

  // ─── MATEMÁTICA ADICIONAL ────────────────────────────────────────────────────
  "trigonometria": {
    category: "matemática",
    slides: [
      { title: "Trigonometria", subtitle: "As Relações entre Ângulos e Lados dos Triângulos",
        intro: "A trigonometria é o ramo da matemática que estuda as relações entre os ângulos e os lados dos triângulos. Desenvolvida pela astronomia na Antiguidade (Hiparco, séc. II a.C.), hoje é aplicada em engenharia, arquitetura, física, música e qualquer fenômeno oscilatório." },
      { title: "Razões Trigonométricas e Círculo Unitário", subtitle: "Seno, Cosseno e Tangente",
        bullets: ["No triângulo retângulo: sen = cateto oposto / hipotenusa; cos = cateto adjacente / hipotenusa; tg = cateto oposto / adjacente", "Ângulos notáveis: sen30°=1/2; sen45°=√2/2; sen60°=√3/2", "Relação fundamental: sen²α + cos²α = 1 (identidade pitagórica)", "Círculo trigonométrico: raio = 1, define seno e cosseno para qualquer ângulo", "Lei dos Senos: a/senA = b/senB = c/senC; Lei dos Cossenos: a² = b² + c² − 2bc·cosA"] },
      { title: "Aplicações da Trigonometria", subtitle: "De GPS a Sinais de Áudio",
        conclusion: "A trigonometria é essencial em: navegação (GPS usa triângulação), arquitetura (cálculo de telhados e estruturas), física (ondas senoidais, MHS), engenharia elétrica (corrente alternada e fase), astronomia (distâncias estelares) e produção musical (síntese de sons via ondas seno e cosseno). O ENEM frequentemente testa trigonometria em contextos de altura de edificações e análise de ondas." },
    ],
    mindMap: { branches: [
      { label: "Razões no Triângulo Retângulo", children: ["sen = CO / hip (cateto oposto / hipotenusa)", "cos = CA / hip (cateto adjacente / hipotenusa)", "tg = CO / CA = sen / cos", "Relação de Pitágoras: a² + b² = c²"] },
      { label: "Ângulos Notáveis", children: ["30°: sen=1/2, cos=√3/2, tg=√3/3", "45°: sen=cos=√2/2, tg=1", "60°: sen=√3/2, cos=1/2, tg=√3", "90°: sen=1, cos=0, tg=indefinida"] },
      { label: "Leis Trigonométricas", children: ["Lei dos Senos: a/senA = b/senB = c/senC", "Lei dos Cossenos: a² = b²+c²-2bc·cosA", "Identidades: sen²+cos²=1; 1+tg²=sec²", "Adição: sen(A+B)=senA·cosB+cosA·senB"] },
      { label: "Aplicações", children: ["Ondas sonoras e eletromagnéticas (senoidal)", "GPS e triangulação de posição", "MHS (Movimento Harmônico Simples)", "Inclinações em arquitetura e engenharia civil"] },
    ]},
  },

  "probabilidade": {
    category: "matemática",
    slides: [
      { title: "Probabilidade e Estatística", subtitle: "A Matemática do Acaso e dos Dados",
        intro: "Probabilidade é o ramo da matemática que quantifica a chance de eventos ocorrerem. A fórmula básica é P(A) = casos favoráveis / casos possíveis, para resultados igualmente prováveis. A estatística coleta, organiza e interpreta dados para extrair conclusões — base de pesquisas científicas, sondagens e inteligência artificial." },
      { title: "Conceitos Fundamentais", subtitle: "Espaço Amostral, Combinatória e Distribuições",
        bullets: ["Evento: resultado ou conjunto de resultados de um experimento aleatório", "P(A) = n(A) / n(Ω): probabilidade varia entre 0 (impossível) e 1 (certo)", "Princípio Multiplicativo: número de sequências = n₁ × n₂ × ... × nₖ", "Permutação: arranjos onde a ordem importa — P(n,r) = n! / (n-r)!", "Combinação (C(n,r)): grupos onde a ordem não importa — C(n,r) = n! / r!(n-r)!"] },
      { title: "Estatística e Big Data", subtitle: "Como os Dados Governam o Mundo Moderno",
        conclusion: "Média, moda e mediana são medidas de tendência central. Desvio padrão e variância medem a dispersão. A distribuição normal (curva de Gauss) aparece em alturas humanas, notas escolares e erros de medição. No mundo atual, empresas como Google, Amazon e redes sociais usam probabilidade e estatística para prever comportamentos, recomendar produtos e direcionar publicidade. Estatística e probabilidade representam ~14% das questões de matemática do ENEM." },
    ],
    mindMap: { branches: [
      { label: "Probabilidade Básica", children: ["P(A) = n(A) / n(Ω)", "P(A) ∈ [0, 1]", "P(complementar) = 1 - P(A)", "Eventos mutuamente exclusivos: P(A∪B) = P(A)+P(B)"] },
      { label: "Análise Combinatória", children: ["Princípio Multiplicativo", "Fatorial: n! = n × (n-1) × ... × 1", "Permutação: P(n,r) = n!/(n-r)!", "Combinação: C(n,r) = n!/[r!(n-r)!]"] },
      { label: "Estatística Descritiva", children: ["Média aritmética e ponderada", "Mediana: valor central ordenado", "Moda: valor mais frequente", "Desvio padrão: dispersão em torno da média"] },
      { label: "Aplicações", children: ["Pesquisas de opinião e eleitorais", "Controle de qualidade industrial", "Machine Learning e IA preditiva", "Diagnóstico médico e epidemiologia"] },
    ]},
  },

  "geometria plana": {
    category: "matemática",
    slides: [
      { title: "Geometria Plana", subtitle: "Formas, Áreas e Perímetros",
        intro: "A geometria plana estuda as figuras bidimensionais — aquelas que existem em um plano. Originada pela necessidade de medir terras na Antiguidade egípcia e organizada por Euclides (~300 a.C.) em 'Os Elementos', é aplicada em arquitetura, design, cartografia e engenharia." },
      { title: "Principais Figuras e Fórmulas", subtitle: "Triângulos, Quadriláteros e Circunferências",
        bullets: ["Triângulo: área = (base × altura) / 2; soma dos ângulos internos = 180°", "Quadrado: área = a²; Retângulo: área = b × h; Paralelogramo: A = b × h", "Teorema de Pitágoras: a² = b² + c² (em triângulo retângulo)", "Circunferência: comprimento = 2πr; Área do círculo = πr²", "Polígono regular de n lados: soma dos ângulos internos = (n-2) × 180°"] },
      { title: "Geometria no ENEM e na Vida", subtitle: "Por que a Geometria é Tão Importante",
        conclusion: "A geometria plana aparece em ~10% das questões do ENEM. É aplicada em: projetos de construção civil e arquitetura, cálculo de azulejos e pisos (áreas), design gráfico e tipografia, cartografia e GPS, e obras de arte (perspectiva, proporção áurea). A proporção áurea (φ = 1,618) aparece no Partenon, na Mona Lisa e no design do iPhone." },
    ],
    mindMap: { branches: [
      { label: "Triângulos", children: ["Equilátero: três lados iguais, 3 ângulos de 60°", "Isósceles: dois lados iguais", "Escaleno: todos os lados diferentes", "Teorema de Pitágoras: a²=b²+c²"] },
      { label: "Quadriláteros", children: ["Quadrado: a² / Retângulo: b×h", "Triângulo: b×h/2 / Trapézio: (B+b)×h/2", "Paralelogramo: b×h / Losango: D×d/2", "Soma dos ângulos internos: 360°"] },
      { label: "Círculo e Circunferência", children: ["Área do círculo: A = πr²", "Comprimento da circunferência: C = 2πr", "Setor circular: A = πr²θ/360", "Pi (π) ≈ 3,14159..."] },
      { label: "Aplicações", children: ["Arquitetura: projetos e plantas baixas", "Azulejamento: cálculo de área", "Design: proporção áurea φ = 1,618", "Cartografia: projeção de mapas"] },
    ]},
  },

  // ─── GEOGRAFIA ADICIONAL ─────────────────────────────────────────────────────
  "urbanização": {
    category: "geografia",
    slides: [
      { title: "Urbanização", subtitle: "O Processo de Crescimento das Cidades",
        intro: "Urbanização é o processo de crescimento das cidades, seja em termos de população (rural → urbana) ou de expansão territorial. Em 2007, pela primeira vez na história, mais da metade da humanidade vivia em cidades. No Brasil, 84,4% da população vive em áreas urbanas — Censo IBGE 2022 — uma das maiores taxas da América Latina." },
      { title: "Urbanização no Brasil e no Mundo", subtitle: "Metrópoles, Megalópoles e Desafios Urbanos",
        bullets: ["Brasil urbano: 84,4% da população (IBGE, Censo 2022) — resultado do êxodo rural nas décadas de 1950 a 1970", "Grande São Paulo: ~21,6 milhões de hab. (IBGE 2022) — maior metrópole da América do Sul", "Megalópoles globais: Tóquio (~37 mi), Delhi (~33 mi), Xangai (~29 mi), Gran SP (~22 mi)", "Urbanização desigual: favelas e periferias sem infraestrutura adequada em países em desenvolvimento", "Plano Diretor: instrumento municipal obrigatório que organiza o uso e ocupação do solo urbano"] },
      { title: "Problemas e Soluções Urbanas", subtitle: "A Cidade Sustentável do Futuro",
        conclusion: "As grandes cidades concentram riqueza, serviços e inovação, mas também concentram pobreza, violência e poluição. Problemas urbanos: especulação imobiliária, déficit habitacional de 8 milhões de moradias no Brasil, mobilidade urbana (congestionamentos), saneamento básico e ilhas de calor. Cidades inteligentes — que usam tecnologia para gerir mobilidade, energia e resíduos — são o caminho apontado pela ONU para cidades sustentáveis (ODS 11)." },
    ],
    mindMap: { branches: [
      { label: "Conceitos", children: ["Urbanização: aumento da pop. urbana", "Êxodo rural: migração do campo para cidades", "Metropolização: formação de grandes metrópoles", "Conurbação: fusão de cidades contíguas"] },
      { label: "Brasil Urbano", children: ["84,4% da população em áreas urbanas (Censo IBGE 2022)", "Êxodo rural: décadas de 1950-70 (industrialização e café)", "Grande São Paulo: ~21,6 mi hab. — maior metrópole da América do Sul", "RIDE: região integrada de desenvolvimento econômico"] },
      { label: "Problemas Urbanos", children: ["Déficit habitacional: 8 mi moradias no BR", "Favelização e segregação socioespacial", "Trânsito e mobilidade urbana", "Saneamento básico e poluição"] },
      { label: "Soluções", children: ["Plano Diretor: organização do solo urbano", "BRT, metrô e transporte integrado", "Estatuto da Cidade (Lei 10.257/2001)", "Cidades inteligentes: tecnologia + sustentabilidade"] },
    ]},
  },

  "placas tectônicas": {
    category: "geografia",
    slides: [
      { title: "Placas Tectônicas", subtitle: "O Movimento que Molda os Continentes",
        intro: "A teoria das placas tectônicas explica como a litosfera (crosta terrestre) é dividida em grandes blocos rígidos que se movem sobre o manto, causando terremotos, vulcões e a formação de montanhas. Proposta por Alfred Wegener em 1912 como 'Deriva Continental', tornou-se a teoria unificadora das Ciências da Terra." },
      { title: "Tipos de Bordas e Fenômenos", subtitle: "Convergentes, Divergentes e Transformantes",
        bullets: ["Bordas Divergentes: placas se afastam → formação de novos oceanos (ex.: Dorsal do Atlântico Médio)", "Bordas Convergentes: placas colidem → formação de montanhas ou subducção (ex.: Himalaias, Andes)", "Bordas Transformantes: placas deslizam horizontalmente (ex.: Falha de San Andreas, EUA)", "Anel de Fogo do Pacífico: 75% dos vulcões e 90% dos terremotos ocorrem aqui", "Terremoto de Lisboa (1755), Japão (2011): tsunami causou 20.000 mortes"] },
      { title: "Consequências e Previsão", subtitle: "Vivendo em um Planeta Ativo",
        conclusion: "O movimento das placas tectônicas formou todos os continentes e oceanos atuais — há 250 milhões de anos existia um único supercontinente (Pangeia). Ao longo de milhões de anos, as placas se rearranjarão novamente. A previsão de terremotos ainda é um problema científico não resolvido — apenas o monitoramento sísmico antecipado e construções antissísmicas salvam vidas." },
    ],
    mindMap: { branches: [
      { label: "Teoria e História", children: ["Alfred Wegener: Deriva Continental (1912)", "Pangeia: único continente há 250 ma", "Prova: encaixe dos continentes + fósseis", "Teoria aceita nos anos 1960: expansão do fundo oceânico"] },
      { label: "Tipos de Bordas", children: ["Divergente: afastamento, dorsais oceânicas", "Convergente: colisão → montanhas ou fossa", "Transformante: deslizamento horizontal", "Ponto quente: vulcão no interior da placa (Hawaii)"] },
      { label: "Anel de Fogo", children: ["Bordeia o Pacífico (40.000 km)", "75% dos vulcões ativos do planeta", "90% dos terremotos mundiais", "Países: Japão, Indonésia, Chile, EUA"] },
      { label: "Consequências", children: ["Terremotos: magnitude em Richter", "Tsunamis: ondas sísmicas oceânicas", "Vulcões: erupções e formação de ilhas", "Formação de montanhas: Himalaias, Andes, Alpes"] },
    ]},
  },

  // ─── LITERATURA ──────────────────────────────────────────────────────────────
  "modernismo brasileiro": {
    category: "literatura",
    slides: [
      { title: "Modernismo Brasileiro", subtitle: "1922 – 1945 | A Revolução da Literatura Nacional",
        intro: "O Modernismo brasileiro nasceu oficialmente com a Semana de Arte Moderna de São Paulo (11-18 de fevereiro de 1922), um conjunto de conferências, recitais e exposições que propunha romper com o conservadorismo literário e artístico. Foi influenciado pelas vanguardas europeias (Futurismo, Cubismo, Dadaísmo) e buscou criar uma arte tipicamente brasileira." },
      { title: "Fases e Principais Autores", subtitle: "Da Destruição à Construção da Identidade Nacional",
        bullets: ["1ª fase (1922-1930): destruição e experimentação — Oswald de Andrade, Mário de Andrade, Manuel Bandeira", "Manifesto Antropófago (Oswald, 1928): 'devorar' a cultura europeia e recriá-la com identidade brasileira", "2ª fase (1930-1945): consolidação — prosa regional e social: Graciliano Ramos, Jorge Amado, Érico Veríssimo", "Vidas Secas (Graciliano, 1938): seca, miséria e desumanização no Nordeste — obra obrigatória", "3ª fase (1945+): Guimarães Rosa ('Grande Sertão: Veredas', 1956) e Clarice Lispector"] },
      { title: "Legado do Modernismo", subtitle: "Como o Modernismo Criou a Literatura Brasileira Contemporânea",
        conclusion: "O Modernismo libertou a literatura brasileira das regras parnasiano-simbolistas, introduziu o verso livre, a linguagem coloquial e os temas sociais e nacionais. Mário de Andrade criou 'Macunaíma' (1928), o 'herói sem nenhum caráter' — síntese do povo brasileiro. Graciliano Ramos inaugurou o romance regional de denúncia social. Guimarães Rosa reinventou a língua portuguesa com a simbologia do sertão. Obras obrigatórias em todos os vestibulares do Brasil." },
    ],
    mindMap: { branches: [
      { label: "Semana de Arte Moderna", children: ["11-18 fev. 1922, Teatro Municipal SP", "Poesia, música, pintura e arquitetura", "Di Cavalcanti: quadros cubistas e mestiços", "Reação hostil do público conservador"] },
      { label: "1ª Fase (1922-30)", children: ["Mário de Andrade: Macunaíma (1928)", "Oswald de Andrade: Manifesto Antropófago", "Manuel Bandeira: verso livre e cotidiano", "Ronald de Carvalho, Alcântara Machado"] },
      { label: "2ª Fase (1930-45)", children: ["Graciliano Ramos: Vidas Secas (1938)", "Jorge Amado: Capitães da Areia, Gabriela", "Érico Veríssimo: O Tempo e o Vento", "José Lins do Rego: ciclo da cana-de-açúcar"] },
      { label: "3ª Fase (1945+)", children: ["Guimarães Rosa: Grande Sertão: Veredas", "Clarice Lispector: A Paixão Segundo G.H.", "João Cabral de Melo Neto: Morte e Vida Severina", "Drummond: poesia social e existencial"] },
    ]},
  },

  "realismo naturalismo": {
    category: "literatura",
    slides: [
      { title: "Realismo e Naturalismo", subtitle: "1870 – 1902 | A Prosa da Realidade Brasileira",
        intro: "O Realismo e o Naturalismo são escolas literárias que reagiram ao sentimentalismo romântico, buscando retratar a realidade com objetividade e rigor científico. No Brasil, o Realismo é marcado por Machado de Assis e o Naturalismo por Aluísio Azevedo, com obras que denunciam as contradições da sociedade imperial." },
      { title: "Características e Obras Fundamentais", subtitle: "Machado, Aluísio e a Sociedade Imperial",
        bullets: ["Realismo: narrador onisciente, crítica social, anti-romantismo, análise psicológica profunda dos personagens", "Machado de Assis: 'Memórias Póstumas de Brás Cubas' (1881) — narrador morto; 'Dom Casmurro' (1899) — Capitu traiu?", "Naturalismo: influência do determinismo e positivismo científico — raça, meio e momento histórico determinam o indivíduo", "Aluísio Azevedo: 'O Cortiço' (1890) — meio social degrada o ser humano; 'O Mulato' (1881) — crítica ao racismo maranhense", "Eça de Queirós (Portugal): 'O Crime do Padre Amaro', 'O Primo Basílio' — influência no Brasil"] },
      { title: "Machado de Assis: O Maior Escritor Brasileiro", subtitle: "Por que Machado é Genial",
        conclusion: "Machado de Assis (1839-1908) é considerado o maior escritor da literatura brasileira e um dos maiores da língua portuguesa. Filho de Francisco José de Assis (pintor e pintor de paredes negro) e Maria Leopoldina Machado da Câmara (açoriana), nasceu livre no Morro do Livramento, Rio de Janeiro. Gago e epiléptico, superou barreiras sociais e raciais pelo talento literário. Seu realismo psicológico antecipou a modernidade: narradores não confiáveis e crítica velada à hipocrisia da elite carioca. Obrigatório para qualquer vestibular." },
    ],
    mindMap: { branches: [
      { label: "Realismo", children: ["Anti-romantismo: crítica à idealização", "Narrador onisciente e imparcial", "Análise psicológica dos personagens", "Crítica à hipocrisia da burguesia"] },
      { label: "Machado de Assis", children: ["Memórias Póstumas de Brás Cubas (1881)", "Quincas Borba (1891)", "Dom Casmurro (1899): mistério de Capitu", "Fundador e presidente da Academia Brasileira de Letras"] },
      { label: "Naturalismo", children: ["Determinismo: raça, meio e momento", "Descrições minuciosas e científicas", "Personagens condicionados pelo ambiente", "Denúncia social explícita"] },
      { label: "Aluísio Azevedo", children: ["O Mulato (1881): racismo no Maranhão", "Casa de Pensão (1884)", "O Cortiço (1890): obra máxima naturalista", "Personagens determinados pelo meio social"] },
    ]},
  },

  // ─── SOCIOLOGIA ─────────────────────────────────────────────────────────────
  "marxismo": {
    category: "filosofia",
    slides: [
      { title: "Marxismo", subtitle: "Karl Marx e Friedrich Engels | Séc. XIX",
        intro: "O marxismo é a teoria filosófica, econômica e política desenvolvida por Karl Marx (1818-1883) e Friedrich Engels (1820-1895). Propõe que a história humana é movida pela luta de classes e que o capitalismo, baseado na exploração do trabalho, seria inevitavelmente superado pelo socialismo e, posteriormente, pelo comunismo." },
      { title: "Conceitos Fundamentais do Marxismo", subtitle: "Classes, Mais-Valia e Materialismo Histórico",
        bullets: ["Luta de classes: história da humanidade é a história da luta entre classes sociais opostas", "Mais-valia: diferença entre o valor produzido pelo trabalhador e o salário que recebe — base da exploração capitalista", "Materialismo histórico: as condições económicas (infraestrutura) determinam as relações sociais e culturais (superestrutura)", "Manifesto Comunista (1848): 'Proletários de todos os países, uni-vos!'", "O Capital (1867): análise profunda da economia capitalista e da exploração do trabalho"] },
      { title: "Impacto e Críticas ao Marxismo", subtitle: "Do Socialismo Real ao Neoliberalismo",
        conclusion: "O marxismo inspirou a Revolução Russa (1917), a Revolução Chinesa (1949), a Revolução Cubana (1959) e movimentos sociais em todo o mundo. Críticos apontam que os regimes comunistas do século XX (URSS, China maoísta, Coreia do Norte) resultaram em autoritarismo e violações dos direitos humanos. O marxismo continua influente na sociologia, filosofia e movimentos sociais contemporâneos — questões como desigualdade, alienação e luta de classes permanecem relevantes." },
    ],
    mindMap: { branches: [
      { label: "Conceitos Econômicos", children: ["Mais-valia: lucro extraído do trabalhador", "Mais-trabalho vs. trabalho necessário", "Capital: trabalho acumulado transformado em riqueza", "Lei da queda tendencial da taxa de lucro"] },
      { label: "Conceitos Filosóficos", children: ["Materialismo histórico e dialético", "Infraestrutura (econômica) determina superestrutura", "Alienação: trabalhador separado do produto", "Ideologia: das ideias da classe dominante"] },
      { label: "Obras Fundamentais", children: ["Manifesto Comunista (Marx e Engels, 1848)", "O Capital (Marx, 1867)", "A Ideologia Alemã (1846)", "Contribuição à Crítica da Economia Política"] },
      { label: "Impacto Histórico", children: ["Revolução Russa (1917)", "Revolução Chinesa (1949)", "Cuba, Vietnam, Angola...", "Partidos socialdemocratas e trabalhistas"] },
    ]},
  },

  "democracia": {
    category: "filosofia",
    slides: [
      { title: "Democracia", subtitle: "Do Governo do Povo à Democracia Moderna",
        intro: "Democracia (do grego: demos = povo; kratos = poder) é o sistema político em que o poder emana do povo. Nasceu na Grécia Antiga (Atenas, século V a.C.) na forma direta — todos os cidadãos deliberavam nas assembleias. No mundo moderno predomina a democracia representativa, em que o povo elege representantes para governar." },
      { title: "Tipos de Democracia e Princípios", subtitle: "Direta, Representativa e Participativa",
        bullets: ["Democracia Direta (Atenas, séc. V a.C.): cidadãos votavam diretamente nas leis — excluídos mulheres, escravos e estrangeiros", "Democracia Representativa: elege parlamentos e presidentes — modelo dominante no mundo atual", "Democracia Participativa: combina representação com mecanismos diretos (referendos, iniciativas populares)", "Separação dos Poderes (Montesquieu): Executivo, Legislativo e Judiciário como garantia contra tirania", "Sufrágio universal: todos os cidadãos adultos têm direito ao voto — no Brasil, desde a CF de 1988"] },
      { title: "Democracia no Século XXI", subtitle: "Desafios e Ameaças no Mundo Atual",
        conclusion: "Freedom House (2023) aponta que 72 países vivem retrocesso democrático. Ameaças atuais: desinformação e fake news que manipulam eleições, polarização política extrema, erosão de instituições e ataques ao Judiciário. O Brasil viveu tentativa de golpe em 8 de janeiro de 2023. A democracia exige cidadãos informados, instituições fortes e participação ativa — não é um estado permanente, mas uma conquista que precisa ser defendida continuamente." },
    ],
    mindMap: { branches: [
      { label: "Origens", children: ["Atenas, séc. V a.C.: Péricles e a democracia direta", "Ágora: espaço da deliberação pública", "Exclusão: mulheres, escravos e estrangeiros", "Roma: República com Senado (509 a.C.)"] },
      { label: "Tipos Modernos", children: ["Representativa: eleições periódicas", "Direta: referendos e plebiscitos", "Participativa: conselhos e orçamento participativo", "Liberal: direitos individuais + eleições"] },
      { label: "Princípios Democráticos", children: ["Soberania popular", "Separação dos poderes (Montesquieu)", "Direitos fundamentais garantidos", "Estado de Direito: lei acima dos governantes"] },
      { label: "Ameaças Atuais", children: ["Desinformação e fake news eleitorais", "Polarização política extrema", "Discurso autoritário e populismo", "Ataques às instituições independentes"] },
    ]},
  },

  // ─── CIÊNCIAS / FÍSICA ───────────────────────────────────────────────────────
  "energia": {
    category: "física",
    slides: [
      { title: "Energia", subtitle: "A Capacidade de Realizar Trabalho",
        intro: "Energia é a capacidade de um sistema realizar trabalho ou produzir calor. Segundo a Lei da Conservação da Energia — enunciada por Joule, Helmholtz e Mayer no séc. XIX e consolidada pela Termodinâmica — energia não se cria nem se destrói, apenas se transforma. (Nota: Lavoisier enunciou a conservação da MASSA, não da energia.) Existem diversas formas: cinética, potencial, térmica, elétrica, química, nuclear e radiante." },
      { title: "Formas, Transformações e Fontes de Energia", subtitle: "Da Energia Solar à Nuclear",
        bullets: ["Energia Cinética: Ec = mv²/2 — depende da massa e da velocidade do objeto", "Energia Potencial Gravitacional: Ep = mgh — depende da massa, gravidade e altura", "Energia Térmica: agitação desordenada das partículas — calor é transmissão de energia térmica", "Fontes renováveis: solar, eólica, hidrelétrica, biomassa, maremotriz", "Fontes não-renováveis: petróleo, gás natural, carvão mineral, urânio (nuclear)"] },
      { title: "A Crise Energética e a Transição para Renováveis", subtitle: "O Futuro da Energia no Brasil e no Mundo",
        conclusion: "O Brasil tem matriz elétrica privilegiada: 83% de energia renovável (80% hidrelétrica + solar e eólica crescentes). O mundo migra de combustíveis fósseis — que causam 75% das emissões de CO₂ — para renováveis. Energia solar já é a mais barata da história. Baterias de lítio, hidrogênio verde e fusão nuclear são as fronteiras da energia do século XXI." },
    ],
    mindMap: { branches: [
      { label: "Formas de Energia", children: ["Cinética: energia do movimento (Ec=mv²/2)", "Potencial: energia armazenada (Ep=mgh)", "Térmica: agitação das partículas", "Elétrica, química, nuclear, radiante"] },
      { label: "Conservação", children: ["Energia não se cria nem se destrói", "Transforma-se de uma forma em outra", "Eficiência: parte vira calor (perda)", "Lei da Conservação: base da termodinâmica"] },
      { label: "Fontes Renováveis", children: ["Hidrelétrica: 80% da matriz elétrica BR", "Solar: fotovoltaica e termossolar", "Eólica: ventos convertidos em eletricidade", "Biomassa: etanol de cana (Brasil)"] },
      { label: "Desafios Energéticos", children: ["Combustíveis fósseis: 75% das emissões", "Hidrogênio verde: energia limpa do futuro", "Fusão nuclear: promessa de energia ilimitada", "Baterias: armazenamento para renováveis"] },
    ]},
  },
};
