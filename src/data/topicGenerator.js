// ─── GERADOR INTELIGENTE — cria conteúdo para QUALQUER tema ─────────────────
// Usado quando o tema não está na base cadastrada

const CATEGORY_KEYWORDS = {
  história: ['história','guerra','revolução','império','república','era','século','período','colonial','ditadura','monarquia','feudalismo','civilização','antiguidade','independência','colonização','nazismo','fascismo','reforma','tratado','batalha','regime','czar','faraó','presidente','líder'],
  biologia: ['biologia','célula','dna','genes','organismo','animal','planta','vegetal','espécie','ecossistema','vírus','bactéria','proteína','enzima','mitose','meiose','fotossíntese','respiração','digestão','nervoso','sangue','coração','pulmão','fígado','muscular','esquelético','reprodução','evolução','taxonomia','reino','filo','classe','ordem','família','genero'],
  física: ['física','força','energia','movimento','velocidade','aceleração','massa','peso','luz','som','onda','elétrico','magnético','termodinâmica','calor','temperatura','óptica','circuito','campo','pressão','volume','densidade','atrito','impulso','momento','trabalho','potência','resonância','espectro','fóton','relatividade','quântica'],
  química: ['química','substância','elemento','molécula','átomo','reação','ácido','base','sal','óxido','orgânica','inorgânica','solução','mistura','ligação','elétron','próton','nêutron','radioatividade','hidrocarboneto','polímero','plástico','metal','catalisador','oxidação','redução','equilíbrio','termoquímica'],
  matemática: ['matemática','função','equação','geometria','trigonometria','logaritmo','probabilidade','estatística','progressão','matriz','determinante','número','conjunto','operação','fração','decimal','porcentagem','álgebra','polinômio','inequação','sistema','binômio','exponencial','limite','integral','derivada'],
  geografia: ['geografia','clima','bioma','continente','país','estado','cidade','região','urbanização','rural','indústria','agropecuária','hidrografia','relevo','população','placa','terremoto','vulcão','erosão','solo','vegetação','corrente','oceano','latitude','longitude','cartografia','mapa','globalização','migração'],
  filosofia: ['filosofia','ética','moral','política','democracia','liberdade','justiça','conhecimento','razão','existência','verdade','bem','mal','sociedade','lógica','metafísica','epistemologia','ontologia','utilitarismo','contrato','soberania','direito','norma'],
  sociologia: ['sociologia','sociedade','cultura','classe','capitalismo','socialismo','marxismo','trabalho','social','identidade','desigualdade','poder','dominação','ideologia','estrutura','função','grupo','instituição','mobilidade','estratificação'],
  literatura: ['literatura','romance','poema','poesia','conto','crônica','autor','obra','romantismo','realismo','naturalismo','modernismo','simbolismo','parnasianismo','vanguarda','personagem','narrador','enredo','estilo','verso','prosa','metáfora','linguagem'],
  astronomia: ['astronomia','universo','galáxia','estrela','planeta','satélite','cometa','asteroide','buraco','nebulosa','cosmologia','big bang','expansão','light','cosmos','supernova','anã','quasar','pulsares','gravitação','órbita'],
  tecnologia: ['tecnologia','computador','internet','software','hardware','programação','robótica','blockchain','dados','digital','rede','algoritmo','código','sistema','dispositivo','processador','binário','chip'],
};

const detectCategory = (topic) => {
  const t = topic.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  let best = 'default'; let max = 0;
  for (const [cat, words] of Object.entries(CATEGORY_KEYWORDS)) {
    const score = words.filter(w => t.includes(w)).length;
    if (score > max) { max = score; best = cat; }
  }
  return best;
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// ─── TEMPLATES POR CATEGORIA ──────────────────────────────────────────────────
const TEMPLATES = {
  história: {
    slideStructure: (t) => ({
      intro: `${capitalize(t)} é um dos temas centrais da história universal, com impacto direto na formação das sociedades contemporâneas. Envolve processos sociais, políticos e econômicos que moldaram o mundo como o conhecemos hoje.`,
      section1: { title: 'Contexto Histórico', items: [`Período e localização geográfica de ${t}`, 'Antecedentes e causas do evento/processo', 'Personagens e forças políticas envolvidas', 'Situação socioeconômica da época'] },
      section2: { title: 'Desenvolvimento', items: ['Principais eventos e datas-chave', 'Conflitos e tensões centrais', 'Grupos sociais envolvidos e seus interesses', 'Momentos de virada e decisões cruciais'] },
      section3: { title: 'Consequências', items: ['Transformações políticas geradas', 'Mudanças sociais e econômicas', 'Impacto sobre populações e territórios', 'Legado de longo prazo para a história'] },
      section4: { title: 'Para a Prova', items: ['Datas e personagens mais cobrados em vestibulares', 'Relação com outros eventos históricos', 'Comparação com processos similares', 'Importância para compreender o mundo atual'] },
      conclusion: `${capitalize(t)} representa um marco na trajetória histórica humana. Compreendê-lo permite entender como chegamos ao mundo contemporâneo — com suas instituições, tensões e estruturas sociais. Esse tema é frequentemente cobrado no ENEM e nas principais provas de vestibular do Brasil.`,
    }),
    bullets: (t) => [
      `${capitalize(t)}: processo histórico de grande relevância para a compreensão da modernidade`,
      'Contexto: inserido em um período de grandes transformações sociais e políticas',
      'Causas estruturais: contradições econômicas, tensões sociais e disputas de poder',
      'Desenvolvimento: série de eventos encadeados que culminaram em mudanças profundas',
      'Legado: consequências que se estendem até o presente e moldam estruturas atuais',
    ],
  },
  biologia: {
    slideStructure: (t) => ({
      intro: `${capitalize(t)} é um tema fundamental da biologia, relacionado ao funcionamento dos organismos vivos e à compreensão dos processos que sustentam a vida. Seu estudo é essencial para áreas como medicina, biotecnologia e ecologia.`,
      section1: { title: 'Definição e Conceitos Básicos', items: [`O que é ${t} e como se define`, 'Principais componentes e estruturas envolvidas', 'Localização no organismo ou no ecossistema', 'Relação com outros sistemas e processos biológicos'] },
      section2: { title: 'Funcionamento e Mecanismos', items: ['Etapas do processo biológico', 'Substâncias e moléculas envolvidas', 'Condições necessárias para ocorrer', 'Produto final ou resultado do processo'] },
      section3: { title: 'Importância e Aplicações', items: ['Importância para o organismo ou ecossistema', 'Aplicações médicas e biotecnológicas', 'Doenças e distúrbios relacionados', 'Pesquisas científicas recentes na área'] },
      section4: { title: 'Para a Prova', items: ['Equações e fórmulas importantes', 'Comparação com processos biológicos similares', 'Questões frequentes em vestibular/ENEM', 'Experimentos clássicos associados ao tema'] },
      conclusion: `O estudo de ${t} é essencial para compreender como os organismos vivos funcionam e se adaptam. Esse conhecimento tem aplicações diretas em medicina, biotecnologia, agricultura e conservação ambiental, e é tema recorrente em exames vestibulares brasileiros, especialmente no ENEM.`,
    }),
    bullets: (t) => [
      `${capitalize(t)}: processo ou estrutura biológica de alta relevância`,
      'Localização: ocorre em estruturas específicas do organismo ou célula',
      'Mecanismo: envolve reações químicas e interações moleculares precisas',
      'Regulação: controlado por enzimas, hormônios e sinais celulares',
      'Importância: vital para manutenção da homeostase e sobrevivência do organismo',
    ],
  },
  física: {
    slideStructure: (t) => ({
      intro: `${capitalize(t)} é um fenômeno ou conceito fundamental da física, descrito por leis matemáticas precisas. Seu estudo revela como a natureza funciona em nível macroscópico e microscópico, com aplicações em engenharia, tecnologia e compreensão do universo.`,
      section1: { title: 'Definição e Grandezas', items: [`Definição formal de ${t}`, 'Grandezas físicas envolvidas e suas unidades no SI', 'Equações e relações matemáticas principais', 'Condições e contextos em que ocorre'] },
      section2: { title: 'Leis e Princípios', items: ['Lei(s) física(s) que governa(m) o fenômeno', 'Princípios de conservação relevantes', 'Limites e condições de validade das leis', 'Relação com outros conceitos físicos'] },
      section3: { title: 'Aplicações Tecnológicas', items: ['Aplicações em engenharia e tecnologia', 'Equipamentos e dispositivos que utilizam o conceito', 'Importância na indústria e no cotidiano', 'Fronteiras do conhecimento e pesquisas atuais'] },
      section4: { title: 'Para a Prova', items: ['Fórmulas que precisam ser memorizadas', 'Problemas típicos de vestibular/ENEM', 'Erros comuns ao resolver questões', 'Conexão com outros temas de física'] },
      conclusion: `${capitalize(t)} é um dos pilares da física e sua compreensão é indispensável para qualquer estudante de ciências exatas. As leis que governam esse fenômeno permitem desde projetar pontes e aviões até entender a origem do universo. Tema frequente no ENEM e nos vestibulares mais concorridos do Brasil.`,
    }),
    bullets: (t) => [
      `${capitalize(t)}: fenômeno físico descrito por leis matemáticas precisas`,
      'Grandezas: envolve medidas de tempo, espaço, energia, força e/ou matéria',
      'Equações: relações matemáticas que permitem calcular e prever comportamentos',
      'Aplicações: engenharia, tecnologia, medicina e compreensão do cosmos',
      'Conservação: relacionado às leis de conservação de energia e/ou quantidade de movimento',
    ],
  },
  química: {
    slideStructure: (t) => ({
      intro: `${capitalize(t)} é um tema central da química, relacionado à composição, estrutura e transformação da matéria. Entender ${t} é fundamental para compreender desde reações do cotidiano até processos industriais e farmacêuticos.`,
      section1: { title: 'Definição e Nomenclatura', items: [`Conceito e definição de ${t}`, 'Classificação e tipos principais', 'Nomenclatura e simbologia usada', 'Relação com a Tabela Periódica'] },
      section2: { title: 'Propriedades e Estrutura', items: ['Estrutura atômica ou molecular', 'Propriedades físicas (estado, cor, ponto de fusão)', 'Propriedades químicas (reatividade, acidez, solubilidade)', 'Ligações químicas envolvidas'] },
      section3: { title: 'Reações e Aplicações', items: ['Tipos de reações químicas envolvidas', 'Catalisadores e condições de reação', 'Aplicações industriais e cotidianas', 'Impacto ambiental e saúde'] },
      section4: { title: 'Para a Prova', items: ['Equações químicas balanceadas importantes', 'Estequiometria: cálculos de mol e massa', 'Erros comuns em questões de vestibular', 'Questões contextualizadas do ENEM'] },
      conclusion: `${capitalize(t)} é tema recorrente em vestibulares e no ENEM, especialmente em questões contextualizadas sobre cotidiano, meio ambiente e tecnologia. Dominar esse conteúdo abre portas para carreiras em química, farmácia, engenharia química e medicina.`,
    }),
    bullets: (t) => [
      `${capitalize(t)}: substância, processo ou conceito fundamental da química`,
      'Estrutura: composição atômica e molecular que determina propriedades',
      'Propriedades: físicas (estado, cor, temperatura) e químicas (reatividade)',
      'Reações: transformações que envolvem quebra e formação de ligações químicas',
      'Aplicações: indústria química, farmacêutica, alimentar e ambiental',
    ],
  },
  matemática: {
    slideStructure: (t) => ({
      intro: `${capitalize(t)} é um conceito ou área da matemática com aplicações diretas em ciências exatas, tecnologia e resolução de problemas do cotidiano. Dominar ${t} é essencial para o ENEM e para cursos de exatas, engenharia, economia e computação.`,
      section1: { title: 'Definição e Conceitos Básicos', items: [`Definição formal de ${t}`, 'Notação e simbologia matemática', 'Propriedades e axiomas fundamentais', 'Pré-requisitos: o que precisa saber antes'] },
      section2: { title: 'Fórmulas e Teoremas', items: ['Fórmulas principais e quando usá-las', 'Teoremas importantes e suas demonstrações', 'Casos especiais e exceções', 'Representação gráfica quando aplicável'] },
      section3: { title: 'Resolução de Problemas', items: ['Estratégia geral para resolver questões', 'Exemplos resolvidos passo a passo', 'Erros mais comuns e como evitá-los', 'Problemas que aparecem no ENEM/vestibulares'] },
      section4: { title: 'Aplicações', items: ['Aplicações em física, química e biologia', 'Uso em finanças e economia cotidiana', 'Aplicações em computação e tecnologia', 'Por que esse conteúdo importa na vida real'] },
      conclusion: `${capitalize(t)} é uma das áreas mais cobradas em exames nacionais. No ENEM, questões de matemática sempre envolvem contextualização com situações reais — entender não apenas as fórmulas, mas o raciocínio por trás delas, é o que diferencia um bom desempenho.`,
    }),
    bullets: (t) => [
      `${capitalize(t)}: conceito matemático fundamental com amplas aplicações`,
      'Fórmulas: relações matemáticas que permitem calcular e resolver problemas',
      'Propriedades: características que facilitam operações e simplificações',
      'Resolução: método sistemático para abordar questões relacionadas',
      'ENEM: tema frequentemente contextualizado em situações do cotidiano',
    ],
  },
  default: {
    slideStructure: (t) => ({
      intro: `${capitalize(t)} é um tema relevante para o currículo escolar brasileiro, com conexões interdisciplinares importantes. Seu estudo contribui para uma formação crítica e amplia a compreensão do mundo contemporâneo.`,
      section1: { title: 'Conceitos Fundamentais', items: [`Definição e caracterização de ${t}`, 'Principais aspectos e dimensões do tema', 'Contexto histórico e científico', 'Conceitos relacionados e conexões'] },
      section2: { title: 'Desenvolvimento do Tema', items: ['Aspectos principais e mais detalhados', 'Diferentes perspectivas e abordagens', 'Casos e exemplos representativos', 'Processos e mecanismos envolvidos'] },
      section3: { title: 'Impactos e Importância', items: ['Relevância social e cultural', 'Aplicações práticas e tecnológicas', 'Impactos no cotidiano e na sociedade', 'Perspectivas futuras e tendências'] },
      section4: { title: 'Para Aprofundar', items: ['Pontos mais cobrados em vestibulares', 'Fontes e referências para estudo', 'Conexões com outras disciplinas', 'Questões reflexivas para o debate em sala'] },
      conclusion: `${capitalize(t)} é um tema que merece atenção especial por sua relevância interdisciplinar e por frequentemente aparecer em exames vestibulares e no ENEM. Uma compreensão sólida desse conteúdo contribui para a formação integral e o pensamento crítico do estudante.`,
    }),
    bullets: (t) => [
      `${capitalize(t)}: tema relevante para a formação escolar e o ENEM`,
      'Conceito: definição e caracterização dos aspectos principais',
      'Contexto: inserido em um amplo panorama histórico, científico ou cultural',
      'Importância: impacto direto na compreensão do mundo contemporâneo',
      'Aplicações: presente em situações cotidianas e em problemas práticos',
    ],
  },
};

// ─── ESTRUTURA DE RAMOS PADRÃO POR CATEGORIA ─────────────────────────────────
const DEFAULT_BRANCHES = {
  história: (t) => [
    { label: 'Contexto', children: [`Época e localidade de ${t}`, 'Antecedentes históricos', 'Forças políticas envolvidas', 'Situação socioeconômica'] },
    { label: 'Personagens', children: ['Líderes e governantes principais', 'Grupos sociais envolvidos', 'Personagens secundários relevantes', 'Influências intelectuais e ideológicas'] },
    { label: 'Eventos', children: ['Marco inicial do processo', 'Momentos de virada decisivos', 'Conflitos e crises centrais', 'Desfecho e resolução'] },
    { label: 'Legado', children: ['Consequências imediatas', 'Mudanças de longo prazo', 'Impacto na atualidade', 'Importância para o Brasil'] },
  ],
  biologia: (t) => [
    { label: 'Estrutura', children: [`Local onde ${t} ocorre`, 'Componentes e organelas envolvidas', 'Substâncias e moléculas-chave', 'Condições necessárias'] },
    { label: 'Processo', children: ['Estágios ou etapas sequenciais', 'Reagentes consumidos', 'Produtos gerados', 'Regulação enzimática'] },
    { label: 'Importância', children: ['Função no organismo', 'Relação com outros sistemas', 'Papel no ecossistema', 'Evolução do processo'] },
    { label: 'Medicina', children: ['Doenças associadas ao tema', 'Tratamentos e biotecnologia', 'Pesquisas atuais', 'Aplicações farmacêuticas'] },
  ],
  física: (t) => [
    { label: 'Grandezas', children: ['Grandezas físicas envolvidas', 'Unidades no Sistema Internacional', 'Instrumentos de medição', 'Ordem de grandeza'] },
    { label: 'Equações', children: ['Equação principal', 'Relações com outras grandezas', 'Casos especiais e limites', 'Derivações importantes'] },
    { label: 'Fenômenos', children: ['Observações experimentais', 'Experimentos históricos clássicos', 'Demonstrações laboratoriais', 'Evidências empíricas'] },
    { label: 'Tecnologia', children: ['Dispositivos e máquinas', 'Aplicações industriais', 'Tecnologias emergentes', 'Impacto no cotidiano'] },
  ],
  química: (t) => [
    { label: 'Estrutura Química', children: ['Fórmula molecular ou estrutural', 'Ligações químicas envolvidas', 'Geometria molecular', 'Polaridade e solubilidade'] },
    { label: 'Propriedades', children: ['Estado físico à temperatura ambiente', 'Ponto de fusão e ebulição', 'Reatividade e estabilidade', 'Toxicidade e segurança'] },
    { label: 'Reações', children: ['Tipos de reações associadas', 'Condições (temperatura, pressão, catalisador)', 'Velocidade de reação', 'Equilíbrio químico'] },
    { label: 'Aplicações', children: ['Indústria química e farmacêutica', 'Uso doméstico e cotidiano', 'Impacto ambiental', 'Síntese e fabricação'] },
  ],
  matemática: (t) => [
    { label: 'Definição', children: ['Definição formal', 'Notação e simbologia', 'Condições de validade', 'Casos particulares'] },
    { label: 'Fórmulas', children: ['Fórmula principal', 'Casos especiais', 'Demonstração simplificada', 'Relação com outras fórmulas'] },
    { label: 'Resolução', children: ['Passo a passo geral', 'Exemplo resolvido', 'Erros comuns a evitar', 'Dicas e atalhos'] },
    { label: 'Aplicações', children: ['Em física e ciências', 'Em finanças e cotidiano', 'Em computação e dados', 'ENEM e vestibulares'] },
  ],
  default: (t) => [
    { label: 'Conceitos', children: [`Definição de ${t}`, 'Características principais', 'Tipos e classificações', 'Conceitos relacionados'] },
    { label: 'Desenvolvimento', children: ['Aspectos históricos/científicos', 'Mecanismos e processos', 'Exemplos representativos', 'Casos de estudo'] },
    { label: 'Importância', children: ['Relevância social e cultural', 'Aplicações práticas', 'Impacto no cotidiano', 'Perspectivas futuras'] },
    { label: 'Para a Prova', children: ['Pontos mais cobrados', 'ENEM e vestibulares', 'Conexões interdisciplinares', 'Questões reflexivas'] },
  ],
};

export const generateFallback = (topicInput) => {
  const topic = topicInput.trim();
  const category = detectCategory(topic);
  const template = TEMPLATES[category] || TEMPLATES.default;
  const structure = template.slideStructure(topic);
  const branchFn = DEFAULT_BRANCHES[category] || DEFAULT_BRANCHES.default;

  return {
    category,
    isGenerated: true, // indica que é conteúdo gerado, não da base
    slides: [
      {
        title: capitalize(topic),
        subtitle: `${category.charAt(0).toUpperCase() + category.slice(1)} | Gerado por DVS IA`,
        intro: structure.intro,
      },
      {
        title: `Aspectos Principais de ${capitalize(topic)}`,
        subtitle: 'Conceitos, Processos e Características',
        bullets: template.bullets(topic),
      },
      {
        title: `Conclusão e Importância`,
        subtitle: `Por que ${capitalize(topic)} é Essencial para seus Estudos`,
        conclusion: structure.conclusion,
      },
    ],
    mindMap: {
      branches: branchFn(topic),
    },
    // Para o resumo: seções detalhadas
    summaryExtra: {
      sections: [
        structure.section1,
        structure.section2,
        structure.section3,
        structure.section4,
      ],
    },
  };
};
