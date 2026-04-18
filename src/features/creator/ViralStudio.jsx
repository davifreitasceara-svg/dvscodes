import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload, Sparkles, Music2, FileText, Zap, Download,
  CheckCircle2, RotateCcw, TrendingUp, Share2, Copy,
  RefreshCw, Layers, Sun, Award, Sliders, ArrowUpCircle,
  ImagePlus, Scissors, Play, Pause, SkipForward
} from 'lucide-react';

// ─────────────── CONSTANTS ───────────────
const STORAGE_KEY = 'dvs-creator-projects';

const AI_STEPS = [
  { icon: Sun,        label: 'Melhorando Qualidade',    detail: 'Aumentando nitidez, ajustando brilho e contraste...' },
  { icon: Layers,     label: 'Calibrando Estilo',       detail: 'Calculando paleta de cores otimizada...' },
  { icon: Scissors,   label: 'Detectando Cortes',       detail: 'Identificando momentos de maior impacto...' },
  { icon: Music2,     label: 'Analisando Energia',      detail: 'Classificando clima emocional do conteúdo...' },
  { icon: TrendingUp, label: 'Sincronizando Tendências',detail: 'Cruzando com dados de viralização em tempo real...' },
  { icon: FileText,   label: 'Gerando Copy AI',         detail: 'Construindo hook de alto impacto com NLP...' },
  { icon: Award,      label: 'Score de Viralização',    detail: 'Calculando probabilidade de alcance orgânico...' },
];

const STYLES = [
  {
    id: 'profissional',
    label: 'Profissional',
    desc: 'Tom corporativo e limpo',
    filter: 'contrast(1.08) saturate(0.85) brightness(1.04)',
    canvasFilter: 'contrast(1.08) saturate(0.85) brightness(1.04)',
  },
  {
    id: 'aesthetic',
    label: 'Aesthetic',
    desc: 'Cores suaves e vintage',
    filter: 'saturate(1.25) contrast(0.92) brightness(1.08) sepia(0.12)',
    canvasFilter: 'saturate(1.25) contrast(0.92) brightness(1.08) sepia(0.12)',
  },
  {
    id: 'venda',
    label: 'Alto Impacto',
    desc: 'Vibrance e contraste para engajar',
    filter: 'contrast(1.22) saturate(1.45) brightness(1.08)',
    canvasFilter: 'contrast(1.22) saturate(1.45) brightness(1.08)',
  },
  {
    id: 'moderno',
    label: 'Moderno',
    desc: 'Équilibre escuro e futurista',
    filter: 'contrast(1.12) saturate(1.1) brightness(0.94) hue-rotate(-8deg)',
    canvasFilter: 'contrast(1.12) saturate(1.1) brightness(0.94) hue-rotate(-8deg)',
  },
  {
    id: 'cinema',
    label: 'Cinemático',
    desc: 'Tons quentes de filme',
    filter: 'sepia(0.3) contrast(1.15) saturate(1.2) brightness(0.96)',
    canvasFilter: 'sepia(0.3) contrast(1.15) saturate(1.2) brightness(0.96)',
  },
  {
    id: 'bw',
    label: 'P&B Editorial',
    desc: 'Preto e branco de alto contraste',
    filter: 'grayscale(1) contrast(1.3) brightness(1.05)',
    canvasFilter: 'grayscale(1) contrast(1.3) brightness(1.05)',
  },
];

const PLATFORMS = [
  { id: 'reels',   label: 'Reels',   ratio: '9:16', w: 1080, h: 1920 },
  { id: 'tiktok',  label: 'TikTok',  ratio: '9:16', w: 1080, h: 1920 },
  { id: 'shorts',  label: 'Shorts',  ratio: '9:16', w: 1080, h: 1920 },
  { id: 'feed',    label: 'Feed',    ratio: '1:1',  w: 1080, h: 1080 },
  { id: 'stories', label: 'Stories', ratio: '9:16', w: 1080, h: 1920 },
];

// Removendo MUSIC_TRACKS para usar iTunes API real.

const AI_ENHANCEMENTS = [
  { id: 'hd', label: 'Resolução HD/4K', icon: ArrowUpCircle, desc: 'Upscaling suave baseado na nuvem' },
  { id: 'color', label: 'Grade de Cores Pro', icon: Sparkles, desc: 'Balanço perfeito de branco e saturação' },
  { id: 'noise', label: 'Redução de Ruído', icon: Sliders, desc: 'Remove grânulos visuais indesejados' },
  { id: 'fps', label: 'Interpolação 60FPS', icon: Zap, desc: 'Frame blending para suavidade extra' },
];

const CAPTION_TEMPLATES = {
  profissional: {
    hook: 'Você está perdendo dinheiro por não saber isso.',
    body: '73% dos profissionais cometem esse erro todos os dias.\n\nDepois de 5 anos estudando o mercado, aprendi 3 coisas que ninguém te conta:\n\n1. Consistência bate talento\n2. O posicionamento vale mais que o produto\n3. Quem não aparece, não vende\n\nSalva esse conteúdo antes de fechar.',
    cta: '💬 Qual desses você já aplica? Comenta abaixo.',
    hashtags: '#marketing #empreendedorismo #negócios #sucesso #dicas #produtividade #br',
  },
  aesthetic: {
    hook: 'Às vezes você precisa parar para se encontrar.',
    body: 'A vida não é sobre ter tudo perfeito.\nÉ sobre encontrar beleza nas imperfeições.\n\nEste momento que parece irrelevante agora,\nserá exatamente o que você vai querer de volta um dia.\n\nPresença é o maior luxo que existe.',
    cta: '✨ Salva aqui se isso tocou você.',
    hashtags: '#aesthetic #lifestyle #mindset #inspiration #contentcreator #brasil #fyp',
  },
  venda: {
    hook: '⚠️ ÚLTIMO DIA. Não deixe pra amanhã.',
    body: 'Você ainda está esperando o momento certo?\n\nO momento certo É AGORA.\n\n✅ Resultado comprovado por +2.000 clientes\n✅ Suporte exclusivo incluso\n✅ Garantia de 30 dias\n✅ Acesso imediato após a compra\n\nVaga por tempo limitado. Depois disso, o preço dobra.',
    cta: '👇 Link na BIO. Clica agora antes de fechar.',
    hashtags: '#venda #promocao #oferta #produto #ecommerce #empreender #lucro #oportunidade',
  },
  moderno: {
    hook: 'O futuro pertence a quem se prepara hoje.',
    body: 'O mercado mudou.\nNão tem mais espaço para quem só observa.\n\nEnquanto você hesita,\nalguém está construindo o que você sonha.\n\nA diferença entre onde você está\ne onde quer chegar?\nUma decisão.',
    cta: '⚡ Segue pra mais conteúdo que transforma.',
    hashtags: '#tendência #inovação #tecnologia #futuro #viral #trending #growth',
  },
  cinema: {
    hook: 'Tem cenas que ficam registradas pra sempre.',
    body: 'Não porque eram perfeitas.\nMas porque eram autênticas.\n\nA câmera não capta o momento.\nEla capta a emoção.\n\nO que você quer que as pessoas sintam\nquando te veem?',
    cta: '🎬 Marca alguém que precisa ver isso.',
    hashtags: '#cinema #fotografia #arte #criativo #lifestyle #aesthetic #brasil',
  },
  bw: {
    hook: 'Às vezes o preto e branco diz mais que qualquer cor.',
    body: 'Quando você retira o ruído visual,\no que sobra é o que importa de verdade.\n\nO olhar.\nA postura.\nA história.\n\nSimplicidade é sofisticação.',
    cta: '🤍 Deixa um ❤️ se você concorda.',
    hashtags: '#blackandwhite #editorial #fotografia #arte #moda #brasil #aesthetic',
  },
};

// ─────────────── STORAGE UTILS ───────────────
const loadProjects = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
};

const saveProject = (proj) => {
  try {
    const projects = loadProjects();
    const updated = [proj, ...projects.filter(p => p.id !== proj.id)].slice(0, 30);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}
};

const createThumbnail = (file) => new Promise((resolve) => {
  const canvas = document.createElement('canvas');
  const img = new Image();
  img.onload = () => {
    const size = 160;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const min = Math.min(img.naturalWidth, img.naturalHeight);
    const sx = (img.naturalWidth - min) / 2;
    const sy = (img.naturalHeight - min) / 2;
    ctx.drawImage(img, sx, sy, min, min, 0, 0, size, size);
    resolve(canvas.toDataURL('image/jpeg', 0.7));
  };
  img.src = URL.createObjectURL(file);
});

// ─────────────── CANVAS DOWNLOAD ───────────────
const downloadImageWithFilter = async (file, filterStr, filename, ratioStr = '9:16') => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const [rw, rh] = ratioStr.split(':').map(Number);
      const targetAspect = rw / rh;
      const imgAspect = img.naturalWidth / img.naturalHeight;
      
      let finalW = img.naturalWidth;
      let finalH = img.naturalHeight;
      
      if (imgAspect > targetAspect) {
        finalW = finalH * targetAspect;
      } else {
        finalH = finalW / targetAspect;
      }
      
      canvas.width = finalW;
      canvas.height = finalH;
      const ctx = canvas.getContext('2d');
      ctx.filter = filterStr;
      
      const srcX = (img.naturalWidth - finalW) / 2;
      const srcY = (img.naturalHeight - finalH) / 2;
      
      ctx.drawImage(img, srcX, srcY, finalW, finalH, 0, 0, finalW, finalH);
      canvas.toBlob((blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        resolve();
      }, 'image/jpeg', 0.95);
    };
    img.onerror = reject;
    img.src = url;
  });
};

// ─────────────── RHYTHM BARS ───────────────
const RhythmBars = ({ active, color = '#8b5cf6', size = 'sm' }) => {
  const h = size === 'sm' ? 20 : 28;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: `${h}px` }}>
      {[1,2,3,4,5,6].map((i) => (
        <div key={i} style={{
          width: size === 'sm' ? '3px' : '4px',
          height: '100%',
          background: color,
          borderRadius: '2px',
          transformOrigin: 'bottom',
          animation: active
            ? `rhythm-pulse ${0.4 + i * 0.1}s ${i * 0.06}s ease-in-out infinite alternate`
            : 'none',
          transform: active ? 'scaleY(1)' : 'scaleY(0.2)',
          opacity: active ? 1 : 0.3,
          transition: 'transform 0.3s, opacity 0.3s',
        }} />
      ))}
    </div>
  );
};

// ─────────────── VIRAL SCORE ───────────────
const ViralScore = ({ score }) => {
  const r = 38;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 85 ? '#f59e0b' : score >= 65 ? '#8b5cf6' : '#64748b';
  const label = score >= 85 ? 'Viral Ready' : score >= 65 ? 'Alto Potencial' : 'Otimizando...';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <div style={{ position: 'relative', width: '90px', height: '90px', flexShrink: 0 }}>
        <svg width="90" height="90" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="45" cy="45" r={r} fill="none" stroke="#f1f5f9" strokeWidth="7" />
          <circle cx="45" cy="45" r={r} fill="none" stroke={color} strokeWidth="7"
            strokeDasharray={circ} strokeDashoffset={offset}
            strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1.3s ease, stroke 0.4s' }} />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: '900', color, lineHeight: 1 }}>{score}%</span>
        </div>
      </div>
      <div>
        <p style={{ fontWeight: '800', fontSize: '0.9rem', color: '#111', marginBottom: '4px' }}>{label}</p>
        <p style={{ fontSize: '0.72rem', color: '#888', lineHeight: 1.4 }}>
          {score >= 85
            ? 'Excelente combinação de copy, estilo e música. Pronto para postar!'
            : score >= 65
              ? 'Boa performance esperada. Use "Maximizar" para chegar ao topo.'
              : 'Ajuste o estilo e a legenda para aumentar o potencial viral.'}
        </p>
      </div>
    </div>
  );
};

// ─────────────── UPLOAD ZONE ───────────────
const UploadZone = ({ onFileAccepted }) => {
  const onDrop = useCallback((files) => {
    if (files[0]) onFileAccepted(files[0]);
  }, [onFileAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [], 'video/*': [] },
    maxFiles: 1,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', padding: '12px 0 32px', minHeight: '75vh', justifyContent: 'center' }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '72px', height: '72px', borderRadius: '20px',
          background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 8px 32px rgba(139,92,246,0.35)',
        }}>
          <Scissors size={32} color="white" />
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#111', marginBottom: '8px' }}>
          Viral Studio
        </h2>
        <p style={{ color: '#888', fontSize: '0.95rem' }}>
          Envie sua mídia. A IA edita, adiciona música e otimiza para postar.
        </p>
      </div>

      <div {...getRootProps()} style={{
        width: '100%', maxWidth: '520px', minHeight: '240px',
        border: `2px dashed ${isDragActive ? '#8b5cf6' : '#d1d5db'}`,
        borderRadius: '20px',
        background: isDragActive ? '#f5f3ff' : '#fafafa',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '16px', cursor: 'pointer', transition: 'all 0.2s',
      }}>
        <input {...getInputProps()} />
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: isDragActive ? '#8b5cf6' : '#f4f4f5',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s',
        }}>
          <Upload size={24} color={isDragActive ? 'white' : '#666'} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: '700', color: '#111', fontSize: '0.95rem' }}>
            {isDragActive ? 'Solte para começar' : 'Arraste ou clique para enviar'}
          </p>
          <p style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '4px' }}>
            JPG, PNG, MP4, MOV — até 200MB
          </p>
        </div>
        <button style={{
          padding: '10px 24px', borderRadius: '100px',
          background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
          color: 'white', border: 'none', fontWeight: '700',
          fontSize: '0.85rem', cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(139,92,246,0.4)',
        }}>
          Escolher Arquivo
        </button>
      </div>

      {/* Feature grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', maxWidth: '520px', width: '100%' }}>
        {[
          { icon: <Sliders size={16} />, text: 'Edição Automática' },
          { icon: <Music2 size={16} />, text: 'Música Sincronizada' },
          { icon: <FileText size={16} />, text: 'Legenda com IA' },
          { icon: <TrendingUp size={16} />, text: 'Score Viral' },
          { icon: <ImagePlus size={16} />, text: '6 Estilos Pro' },
          { icon: <Download size={16} />, text: 'Export em HD' },
        ].map((f, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: '#fff', borderRadius: '12px', padding: '10px 12px',
            border: '1px solid #ebebeb', fontSize: '0.78rem', fontWeight: '600', color: '#444',
          }}>
            <span style={{ color: '#8b5cf6', flexShrink: 0 }}>{f.icon}</span>
            {f.text}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ─────────────── PROCESSING ───────────────
const ProcessingScreen = ({ file, onComplete }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const isVideo = file.type.startsWith('video/');
  const previewUrl = useRef(URL.createObjectURL(file)).current;

  useEffect(() => {
    const total = 4200;
    const stepTime = total / AI_STEPS.length;
    let s = 0;
    const si = setInterval(() => { s++; setStep(s); if (s >= AI_STEPS.length) clearInterval(si); }, stepTime);
    const pi = setInterval(() => setProgress(p => { if (p >= 100) { clearInterval(pi); return 100; } return p + 1.2; }), total / 84);
    const done = setTimeout(onComplete, total + 500);
    return () => { clearInterval(si); clearInterval(pi); clearTimeout(done); };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', padding: '40px 0', minHeight: '70vh', justifyContent: 'center' }}
    >
      {/* Preview with scan */}
      <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
        {isVideo
          ? <video src={previewUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} muted autoPlay loop />
          : <img src={previewUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        }
        <motion.div
          animate={{ top: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
          style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'rgba(139,92,246,0.9)', boxShadow: '0 0 10px rgba(139,92,246,0.8)', top: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(139,92,246,0.06)' }} />
      </div>

      {/* Step label */}
      <div style={{ textAlign: 'center' }}>
        <motion.p key={step} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          style={{ fontWeight: '800', fontSize: '1.1rem', color: '#111', marginBottom: '6px' }}
        >
          {step < AI_STEPS.length ? AI_STEPS[step].label : '✓ Processamento Concluído'}
        </motion.p>
        <motion.p key={`d${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ fontSize: '0.82rem', color: '#888' }}
        >
          {step < AI_STEPS.length ? AI_STEPS[step].detail : 'Abrindo o estúdio...'}
        </motion.p>
      </div>

      {/* Progress bar */}
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.75rem', color: '#888' }}>
          <span style={{ fontWeight: '600' }}>Processando com IA</span>
          <span style={{ fontWeight: '800', color: '#8b5cf6' }}>{Math.min(100, Math.round(progress))}%</span>
        </div>
        <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '100px', overflow: 'hidden' }}>
          <motion.div animate={{ width: `${progress}%` }} style={{
            height: '100%', borderRadius: '100px',
            background: 'linear-gradient(90deg, #8b5cf6, #d946ef)',
          }} transition={{ ease: 'linear' }} />
        </div>
      </div>

      {/* Steps dots */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '380px' }}>
        {AI_STEPS.map((s, i) => {
          const Icon = s.icon;
          const done = i < step;
          const active = i === step;
          return (
            <motion.div key={i} animate={{ scale: active ? 1.1 : 1 }} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', width: '52px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '12px',
                background: done ? '#8b5cf6' : active ? '#f5f3ff' : '#f8fafc',
                border: active ? '2px solid #8b5cf6' : '1px solid #e2e8f0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: '0.2s',
              }}>
                {done
                  ? <CheckCircle2 size={18} color="white" />
                  : <Icon size={16} color={active ? '#8b5cf6' : '#cbd5e1'} />
                }
              </div>
              <span style={{ fontSize: '0.55rem', textAlign: 'center', color: active ? '#8b5cf6' : '#aaa', fontWeight: active ? '700' : '500', lineHeight: 1.3 }}>
                {s.label.split(' ').slice(0, 2).join(' ')}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// ─────────────── STUDIO ───────────────
const StudioView = ({ file, onReset, onSave }) => {
  const [style, setStyle] = useState('moderno');
  const [platform, setPlatform] = useState('reels');
  const [music, setMusic] = useState(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [libraryTracks, setLibraryTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const audioRef = useRef(null);
  const [score, setScore] = useState(70);
  const [templateStyle, setTemplateStyle] = useState('moderno');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [hook, setHook] = useState('');
  const [maxed, setMaxed] = useState(false);
  const [isMaxing, setIsMaxing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [enhancements, setEnhancements] = useState(['hd', 'color']);
  const isVideo = file.type.startsWith('video/');
  const previewUrl = useRef(URL.createObjectURL(file)).current;

  const SCORE_MAP = { profissional: 68, aesthetic: 74, venda: 82, moderno: 71, cinema: 76, bw: 65 };

  const toggleEnhancement = (id) => {
    setEnhancements(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  const applyStyle = useCallback((styleId, boosted = false) => {
    const t = CAPTION_TEMPLATES[styleId] || CAPTION_TEMPLATES.moderno;
    setHook(t.hook);
    setCaption(t.body);
    setHashtags(t.hashtags + (boosted ? ' #fyp #viral #foryoupage #trending #explorepage' : ''));
    const base = SCORE_MAP[styleId] ?? 70;
    setScore(boosted ? Math.min(98, base + 22) : base);
  }, []);

  useEffect(() => { applyStyle('moderno'); }, []);

  // Inicializar o elemento de áudio e buscar Top Hits
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = 0.5;

    fetch('https://itunes.apple.com/search?term=tiktok+hits+2024&entity=song&limit=50')
      .then(r => r.json())
      .then(data => {
        const tracks = data.results.map((r, i) => ({
          id: r.trackId.toString(),
          name: r.trackName,
          artist: r.artistName,
          bpm: 100 + (r.trackId % 30),
          previewUrl: r.previewUrl,
          category: i < 15 ? 'Em Alta Global' : i < 35 ? 'Para Você' : 'Recomendadas'
        }));
        setLibraryTracks(tracks);
        if (tracks.length > 0) setMusic(tracks[0].id);
      }).catch(e => console.error('Erro na API iTunes', e));

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  // Busca do iTunes API em tempo real
  useEffect(() => {
    if (searchQuery.trim().length <= 2) {
      setSearchResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&entity=song&limit=200`);
        const data = await res.json();
        setSearchResults(data.results.map(r => ({
          id: r.trackId.toString(),
          name: r.trackName,
          artist: r.artistName,
          bpm: 100 + (r.trackId % 30),
          previewUrl: r.previewUrl,
          category: 'Resultados da Busca'
        })));
      } catch (e) { console.error('iTunes search failed:', e); }
      finally { setIsSearching(false); }
    }, 600);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const allTracks = searchQuery.trim().length > 2 ? searchResults : libraryTracks;
  const currentMusic = [...libraryTracks, ...searchResults].find(t => t.id === music);
  const getCategories = () => [...new Set(allTracks.map(t => t.category))];

  // Controlar o playback
  useEffect(() => {
    if (!audioRef.current || !currentMusic?.previewUrl) return;
    
    if (musicPlaying) {
      if (audioRef.current.src !== currentMusic.previewUrl) {
        audioRef.current.src = currentMusic.previewUrl;
      }
      audioRef.current.play().catch(e => console.error('Play evitado:', e));
    } else {
      audioRef.current.pause();
    }
  }, [music, musicPlaying, currentMusic]);

  const handleStyleChange = (id) => {
    setStyle(id);
    setTemplateStyle(id);
    applyStyle(id, maxed);
  };

  const handleMaximize = () => {
    setIsMaxing(true);
    setTimeout(() => {
      setStyle('venda');
      setTemplateStyle('venda');
      setMusic('pedro');
      setMusicPlaying(true);
      if (isVideo) setEnhancements(['hd', 'noise', 'color', 'fps']);
      else setEnhancements(['hd', 'noise', 'color']);
      applyStyle('venda', true);
      setMaxed(true);
      setIsMaxing(false);
      onSave({ style: 'venda', score: 98, music: 'pedro', maxed: true });
    }, 2400);
  };

  const currentStyleData = STYLES.find(s => s.id === style);
  const currentPlatformData = PLATFORMS.find(p => p.id === platform) || PLATFORMS[0];
  
  let finalFilter = currentStyleData?.canvasFilter || '';
  if (finalFilter === 'none') finalFilter = '';
  if (enhancements.includes('color')) finalFilter += ' saturate(1.35) hue-rotate(2deg) contrast(1.05)';
  if (enhancements.includes('hd')) finalFilter += ' contrast(1.15) brightness(1.05)';
  if (enhancements.includes('noise')) finalFilter += ' blur(0.3px)';
  if (enhancements.includes('fps') && isVideo) finalFilter += ' drop-shadow(0 0 2px rgba(255,255,255,0.1))'; // Trick
  if (!finalFilter.trim()) finalFilter = 'none';

  const handleDownload = async () => {
    setDownloading(true);
    try {
      if (isVideo) {
        const a = document.createElement('a');
        a.href = previewUrl;
        a.download = `dvs-viral-${platform}-${Date.now()}.${file.name.split('.').pop()}`;
        a.click();
      } else {
        await downloadImageWithFilter(
          file,
          finalFilter,
          `dvs-${style}-${platform}-${Date.now()}.jpg`,
          currentPlatformData.ratio
        );
      }
      onSave({ style, score, music, maxed });
    } catch (e) {
      console.error(e);
    }
    setDownloading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${hook}\n\n${caption}\n\n${hashtags}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      className="viral-studio-grid"
    >
      {/* ───── LEFT PANEL: VIDEO PREVIEW ───── */}
      <div className="viral-left-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>

        {/* Topbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontWeight: '800', fontSize: '1.05rem', color: '#111', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {file.name.length > 30 ? file.name.substring(0, 30) + '...' : file.name}
              {maxed && <span style={{ fontSize: '0.65rem', background: '#f59e0b', color: '#000', padding: '2px 8px', borderRadius: '100px', fontWeight: '800' }}>VIRAL</span>}
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: '2px' }}>
              {(file.size / 1024 / 1024).toFixed(1)} MB · {isVideo ? 'Vídeo' : 'Imagem'} · {platform.toUpperCase()}
            </p>
          </div>
          <button onClick={onReset} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'none', border: '1px solid #e2e8f0', borderRadius: '100px', cursor: 'pointer', fontSize: '0.78rem', fontWeight: '600', color: '#666' }}>
            <RefreshCw size={13} /> Novo Upload
          </button>
        </div>

        {/* Preview */}
        <div style={{ 
          borderRadius: '16px', overflow: 'hidden', position: 'relative', background: '#000', 
          boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
          aspectRatio: currentPlatformData.ratio.replace(':', '/'),
          maxHeight: '480px', margin: '0 auto', width: '100%',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          {isVideo
            ? <video src={previewUrl} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: finalFilter, transition: 'filter 0.5s' }} />
            : <img src={previewUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: finalFilter, transition: 'filter 0.5s ease' }} />
          }

          {/* caption overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
            padding: '32px 16px 16px',
          }}>
            <p style={{ fontWeight: '800', fontSize: '0.9rem', color: 'white', lineHeight: 1.35, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              {hook}
            </p>
            <div style={{ marginTop: '8px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {hashtags.split(' ').slice(0, 4).map(h => (
                <span key={h} style={{ fontSize: '0.68rem', background: 'rgba(139,92,246,0.8)', padding: '2px 7px', borderRadius: '100px', fontWeight: '700', color: 'white' }}>{h}</span>
              ))}
            </div>
          </div>

          {/* Music badge */}
          {musicPlaying && currentMusic && (
            <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', borderRadius: '100px', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RhythmBars active color="white" />
              <span style={{ fontSize: '0.72rem', color: 'white', fontWeight: '600' }}>{currentMusic.name}</span>
            </div>
          )}

          {/* Viral badge */}
          {maxed && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ position: 'absolute', top: '12px', right: '12px', background: '#f59e0b', color: '#000', fontSize: '0.68rem', fontWeight: '900', padding: '4px 10px', borderRadius: '100px' }}>
              🔥 VIRAL READY
            </motion.span>
          )}
        </div>

        {/* Style selector */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', border: '1px solid #ebebeb' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Estilo Visual</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {STYLES.map(s => (
              <button key={s.id} onClick={() => handleStyleChange(s.id)} style={{
                padding: '10px', borderRadius: '10px', border: `1.5px solid ${style === s.id ? '#8b5cf6' : '#e2e8f0'}`,
                background: style === s.id ? '#f5f3ff' : '#fafafa',
                cursor: 'pointer', textAlign: 'left', transition: '0.15s',
              }}>
                <div style={{ width: '100%', height: '40px', borderRadius: '6px', background: '#e8e8e8', overflow: 'hidden', marginBottom: '6px' }}>
                  <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, #dde2ea, #c8cdd8)`, filter: s.filter }} />
                </div>
                <p style={{ fontSize: '0.72rem', fontWeight: '700', color: style === s.id ? '#7c3aed' : '#333' }}>{s.label}</p>
                <p style={{ fontSize: '0.62rem', color: '#aaa', marginTop: '1px' }}>{s.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', border: '1px solid #ebebeb' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Formato de Exportação</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {PLATFORMS.map(p => (
              <button key={p.id} onClick={() => setPlatform(p.id)} style={{
                padding: '8px 14px', borderRadius: '100px', border: 'none', cursor: 'pointer',
                background: platform === p.id ? '#1a1a1a' : '#f4f4f5',
                color: platform === p.id ? 'white' : '#555',
                fontSize: '0.78rem', fontWeight: '700', transition: '0.15s',
              }}>
                {p.label} <span style={{ opacity: 0.6, fontSize: '0.65rem' }}>{p.ratio}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', border: '1px solid #ebebeb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Legenda Gerada por IA</p>
            <button onClick={handleCopy} style={{
              display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 12px',
              background: copied ? '#f0fdf4' : '#f8fafc', border: `1px solid ${copied ? '#86efac' : '#e2e8f0'}`,
              borderRadius: '100px', cursor: 'pointer', fontSize: '0.72rem', fontWeight: '700',
              color: copied ? '#16a34a' : '#666',
            }}>
              {copied ? <CheckCircle2 size={12} /> : <Copy size={12} />}
              {copied ? 'Copiado!' : 'Copiar tudo'}
            </button>
          </div>

          <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px', marginBottom: '10px', border: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: '700', color: '#8b5cf6', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Hook</p>
            <input value={hook} onChange={e => setHook(e.target.value)} style={{
              width: '100%', background: 'transparent', border: 'none', outline: 'none',
              fontSize: '0.88rem', fontWeight: '700', color: '#111', lineHeight: 1.4,
            }} />
          </div>

          <textarea value={caption} onChange={e => setCaption(e.target.value)} placeholder="Legenda completa..." style={{
            width: '100%', minHeight: '100px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px',
            padding: '12px', color: '#333', fontSize: '0.82rem', lineHeight: 1.6, resize: 'vertical', outline: 'none', marginBottom: '8px',
          }} />

          <textarea value={hashtags} onChange={e => setHashtags(e.target.value)} placeholder="#hashtags" style={{
            width: '100%', minHeight: '48px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px',
            padding: '10px 12px', color: '#8b5cf6', fontSize: '0.78rem', lineHeight: 1.5, resize: 'vertical', outline: 'none',
          }} />
        </div>
      </div>

      {/* ───── RIGHT PANEL: CONTROLS ───── */}
      <div className="viral-right-panel" style={{ background: '#fff', border: '1px solid #ebebeb', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '24px' }}>

        {/* Viral Score */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '18px', border: '1px solid #ebebeb', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>Score de Viralização</p>
          <ViralScore score={score} />
        </div>

        {/* Maximize Button */}
        <AnimatePresence mode="wait">
          {!maxed ? (
            <motion.button key="max" onClick={handleMaximize} disabled={isMaxing}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{
                width: '100%', height: '56px', borderRadius: '14px', border: 'none',
                background: isMaxing ? '#c4b5fd' : 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                color: 'white', fontSize: '0.95rem', fontWeight: '800', cursor: isMaxing ? 'wait' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                boxShadow: '0 6px 24px rgba(139,92,246,0.4)',
              }}>
              {isMaxing ? <><RotateCcw className="animate-spin" size={18} /> Otimizando...</> : <><Zap size={18} /> Maximizar Viral</>}
            </motion.button>
          ) : (
            <motion.div key="maxed" initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{
              padding: '14px 18px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #fef9c3, #fef3c7)', border: '1px solid #fde68a',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <Award size={22} color="#d97706" />
              <div>
                <p style={{ fontWeight: '800', color: '#92400e', fontSize: '0.85rem' }}>Conteúdo Maximizado</p>
                <p style={{ color: '#b45309', fontSize: '0.72rem' }}>Score: 98% · Pronto para postar</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Enhancements */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '18px', border: '1px solid #ebebeb', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>Melhorias de IA (Processamento)</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {AI_ENHANCEMENTS.map(enh => {
              const Icon = enh.icon;
              const active = enhancements.includes(enh.id);
              if (enh.id === 'fps' && !isVideo) return null; // No FPS for images
              return (
                <button key={enh.id} onClick={() => toggleEnhancement(enh.id)} style={{
                  display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px',
                  background: active ? '#f0fdf4' : '#fafafa', border: `1px solid ${active ? '#86efac' : '#e2e8f0'}`,
                  borderRadius: '10px', cursor: 'pointer', textAlign: 'left', transition: '0.15s'
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: active ? '#16a34a' : '#f1f5f9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Icon size={16} color={active ? 'white' : '#64748b'} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: '700', color: active ? '#15803d' : '#333' }}>{enh.label}</p>
                    <p style={{ fontSize: '0.65rem', color: active ? '#16a34a' : '#888' }}>{enh.desc}</p>
                  </div>
                  <div style={{
                    width: '40px', height: '22px', borderRadius: '100px', background: active ? '#22c55e' : '#e2e8f0',
                    display: 'flex', alignItems: 'center', padding: '2px', transition: '0.2s',
                    justifyContent: active ? 'flex-end' : 'flex-start'
                  }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Music System (Unlimited + Real Audio) */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '18px', border: '1px solid #ebebeb', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Banco de Músicas (Apple Music)</p>
              <p style={{ fontSize: '0.62rem', color: '#aaa', marginTop: '2px' }}>Faixas reais com preview de áudio</p>
            </div>
            <button onClick={() => setMusicPlaying(p => !p)} style={{ 
              background: '#f8fafc', border: '1px solid #e2e8f0', cursor: 'pointer', color: '#8b5cf6',
              padding: '6px 12px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '5px',
              fontSize: '0.7rem', fontWeight: '700'
            }}>
              {musicPlaying ? <><Pause size={12}/> Pausar BGM</> : <><Play size={12} fill="#8b5cf6"/> Tocar BGM</>}
            </button>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <input 
              type="text" 
              placeholder="Pesquisar artistas e faixas reais..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: '10px',
                border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '0.8rem',
                outline: 'none', color: '#333'
              }}
            />
          </div>

          <div style={{ maxHeight: '280px', overflowY: 'auto', paddingRight: '4px' }}>
            {isSearching ? (
              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#888', padding: '20px' }}><RotateCcw className="animate-spin" size={14} style={{ marginRight: '6px' }}/> Buscando músicas...</p>
            ) : allTracks.length === 0 ? (
              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#888', padding: '20px' }}>Nenhuma música encontrada.</p>
            ) : getCategories().map(cat => (
              <div key={cat} style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '0.68rem', color: '#7c3aed', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', background: '#f5f3ff', padding: '4px 8px', borderRadius: '6px' }}>{cat}</p>
                {allTracks.filter(t => t.category === cat).map(track => {
                  const isSelected = music === track.id;
                  return (
                    <div key={track.id} style={{
                      display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px',
                      borderRadius: '10px', marginBottom: '4px', cursor: 'pointer',
                      background: isSelected ? '#fef9c3' : '#fafafa', border: `1px solid ${isSelected ? '#fde68a' : '#ebebeb'}`,
                      transition: '0.15s'
                    }} onClick={() => { 
                      if (music === track.id) {
                        setMusicPlaying(!musicPlaying);
                      } else {
                        setMusic(track.id); 
                        setMusicPlaying(true); 
                      }
                    }}>
                      <button style={{
                        width: '32px', height: '32px', borderRadius: '50%',
                        background: isSelected && musicPlaying ? '#f59e0b' : '#e2e8f0',
                        border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', transition: '0.15s', flexShrink: 0
                      }}>
                        {isSelected && musicPlaying ? <Pause size={12} color="white" /> : <Play size={12} color={isSelected ? '#b45309' : '#666'} fill={isSelected ? '' : '#666'} />}
                      </button>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: '800', color: isSelected ? '#92400e' : '#222', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{track.name}</p>
                        <p style={{ fontSize: '0.65rem', color: isSelected ? '#b45309' : '#888', marginTop: '1px' }}>{track.artist}</p>
                      </div>
                      {isSelected && <RhythmBars active={musicPlaying} color="#d97706" />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Download */}
        <button onClick={handleDownload} disabled={downloading}
          style={{
            width: '100%', height: '52px', borderRadius: '14px', border: 'none',
            background: downloading ? '#f1f5f9' : '#111', color: downloading ? '#888' : 'white',
            fontSize: '0.9rem', fontWeight: '800', cursor: downloading ? 'wait' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            transition: '0.2s', boxShadow: downloading ? 'none' : '0 4px 16px rgba(0,0,0,0.2)',
          }}>
          {downloading
            ? <><RotateCcw className="animate-spin" size={16} /> Exportando...</>
            : <><Download size={16} /> Exportar em Alta Qualidade</>
          }
        </button>

        <button style={{
          width: '100%', height: '52px', borderRadius: '14px', border: '1.5px solid #e2e8f0',
          background: 'white', color: '#333', fontSize: '0.88rem', fontWeight: '700', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        }}>
          <Share2 size={16} /> Compartilhar
        </button>
      </div>
    </motion.div>
  );
};

// ─────────────── ROOT ───────────────
const ViralStudio = () => {
  const [stage, setStage] = useState('upload');
  const [file, setFile] = useState(null);

  const handleFile = useCallback(async (f) => {
    setFile(f);
    setStage('processing');
  }, []);

  const handleComplete = useCallback(() => setStage('studio'), []);
  const handleReset = useCallback(() => { setFile(null); setStage('upload'); }, []);

  const handleSave = useCallback(async (meta) => {
    if (!file) return;
    const thumb = file.type.startsWith('image/')
      ? await createThumbnail(file)
      : null;
    saveProject({
      id: Date.now(),
      name: file.name,
      date: new Date().toLocaleString('pt-BR'),
      size: `${(file.size / 1024 / 1024).toFixed(1)}MB`,
      type: file.type.startsWith('video/') ? 'video' : 'image',
      thumb,
      ...meta,
    });
  }, [file]);

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
      <AnimatePresence mode="wait">
        {stage === 'upload' && (
          <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.97 }}>
            <UploadZone onFileAccepted={handleFile} />
          </motion.div>
        )}
        {stage === 'processing' && file && (
          <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProcessingScreen file={file} onComplete={handleComplete} />
          </motion.div>
        )}
        {stage === 'studio' && file && (
          <motion.div key="studio" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <StudioView file={file} onReset={handleReset} onSave={handleSave} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ViralStudio;
