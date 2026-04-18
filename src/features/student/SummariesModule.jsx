import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Download, Copy, Check, Search, Sparkles,
  AlertCircle, BookOpen, Clock, Hash, ChevronDown, ChevronUp
} from 'lucide-react';
import { findTopic, TOPIC_EXAMPLES } from '../../data/knowledgeBase';

// ─── CORES POR CATEGORIA ──────────────────────────────────────────────────────
const CATEGORY_COLORS = {
  história:   { bg: '#faf5ff', border: '#e9d5ff', accent: '#7c3aed', badge: '#ede9fe', badgeText: '#5b21b6' },
  biologia:   { bg: '#f0fdf4', border: '#bbf7d0', accent: '#059669', badge: '#dcfce7', badgeText: '#166534' },
  física:     { bg: '#eff6ff', border: '#bfdbfe', accent: '#1d4ed8', badge: '#dbeafe', badgeText: '#1e40af' },
  astronomia: { bg: '#f5f3ff', border: '#ddd6fe', accent: '#5b21b6', badge: '#ede9fe', badgeText: '#4c1d95' },
  química:    { bg: '#fffbeb', border: '#fde68a', accent: '#d97706', badge: '#fef3c7', badgeText: '#92400e' },
  geografia:  { bg: '#ecfeff', border: '#a5f3fc', accent: '#0891b2', badge: '#cffafe', badgeText: '#164e63' },
  tecnologia: { bg: '#f5f3ff', border: '#ddd6fe', accent: '#6d28d9', badge: '#ede9fe', badgeText: '#4c1d95' },
  filosofia:  { bg: '#fff1f2', border: '#fecdd3', accent: '#e11d48', badge: '#ffe4e6', badgeText: '#9f1239' },
  matemática: { bg: '#fdf2f8', border: '#f5d0fe', accent: '#a21caf', badge: '#fae8ff', badgeText: '#701a75' },
  literatura: { bg: '#fff7ed', border: '#fed7aa', accent: '#c2410c', badge: '#ffedd5', badgeText: '#9a3412' },
  default:    { bg: '#f8fafc', border: '#e2e8f0', accent: '#4f46e5', badge: '#e0e7ff', badgeText: '#3730a3' },
};
const getColors = (cat) => CATEGORY_COLORS[cat] || CATEGORY_COLORS.default;

// ─── GERADOR DE RESUMO ────────────────────────────────────────────────────────
const buildSummary = (topicName, data) => {
  const s = data.slides;
  const m = data.mindMap;

  // Extrai todos os fatos dos bullets do slide 2
  const bullets = s[1].bullets || [];

  // Extrai todos os sub-nós do mapa mental
  const allFacts = m.branches.flatMap(b =>
    b.children.map(c => ({ branch: b.label, fact: c }))
  );

  return {
    title: s[0].title,
    subtitle: s[0].subtitle,
    category: data.category,
    intro: s[0].intro,
    sections: m.branches.map((b, i) => ({
      title: b.label,
      items: b.children,
    })),
    keyPoints: bullets,
    conclusion: s[2].conclusion,
    wordCount: [s[0].intro, s[1].bullets?.join(' '), s[2].conclusion].join(' ').split(/\s+/).length,
    readTime: Math.ceil([s[0].intro, s[1].bullets?.join(' '), s[2].conclusion].join(' ').split(/\s+/).length / 200),
  };
};

// ─── SEÇÃO EXPANSÍVEL ─────────────────────────────────────────────────────────
const Section = ({ title, items, accent, idx }) => {
  const [open, setOpen] = useState(true);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + idx * 0.07 }}
      style={{ border: `1px solid ${accent}25`, borderRadius: '14px', overflow: 'hidden', marginBottom: '16px' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', background: `${accent}08`, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accent, boxShadow: `0 0 8px ${accent}` }} />
          <span style={{ fontWeight: '800', color: '#1e293b', fontSize: '0.95rem' }}>{title}</span>
          <span style={{ background: `${accent}18`, color: accent, fontSize: '0.7rem', fontWeight: '700', padding: '2px 8px', borderRadius: '100px' }}>
            {items.length} pontos
          </span>
        </div>
        {open ? <ChevronUp size={16} style={{ color: accent }} /> : <ChevronDown size={16} style={{ color: accent }} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}>
            <div style={{ padding: '12px 20px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px 12px', background: 'white', borderRadius: '10px', border: '1px solid #f0f4f8' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${accent}15`, border: `1.5px solid ${accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: '900', color: accent }}>{i + 1}</span>
                  </div>
                  <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── MODULE PRINCIPAL ─────────────────────────────────────────────────────────
const SummariesModule = () => {
  const [topic, setTopic] = useState('');
  const [summary, setSummary] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);

  const handleGenerate = (customTopic) => {
    const t = (customTopic || topic).trim();
    if (!t) return;
    setGenerating(true);
    setSummary(null);
    setNotFound(false);

    setTimeout(() => {
      const data = findTopic(t);
      if (!data) { setNotFound(true); setGenerating(false); return; }
      setSummary(buildSummary(t, data));
      setGenerating(false);
    }, 1400);
  };

  const handleCopy = () => {
    if (!summary) return;
    const text = [
      `# ${summary.title}`,
      `${summary.subtitle}`,
      `\n## Introdução\n${summary.intro}`,
      ...summary.sections.map(s => `\n## ${s.title}\n${s.items.map((it, i) => `${i + 1}. ${it}`).join('\n')}`),
      `\n## Pontos-Chave\n${summary.keyPoints.map((k, i) => `${i + 1}. ${k}`).join('\n')}`,
      `\n## Conclusão\n${summary.conclusion}`,
    ].join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleExport = () => {
    if (!summary) return;
    const text = [
      `# ${summary.title}`,
      `${summary.subtitle}`,
      `\n## Introdução\n${summary.intro}`,
      ...summary.sections.map(s => `\n## ${s.title}\n${s.items.map((it, i) => `${i + 1}. ${it}`).join('\n')}`),
      `\n## Pontos-Chave\n${summary.keyPoints.map((k, i) => `${i + 1}. ${k}`).join('\n')}`,
      `\n## Conclusão\n${summary.conclusion}`,
    ].join('\n');
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Resumo_${summary.title.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const colors = summary ? getColors(summary.category) : null;

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: 'calc(100vh - 120px)' }}>

      {/* Header */}
      <div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111' }}>Resumos com IA</h2>
        <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '4px' }}>Digite o tema escolar e a IA gera um resumo completo e estruturado com conteúdo real.</p>
      </div>

      {/* Input */}
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '16px 20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Search size={18} style={{ color: '#94a3b8', flexShrink: 0 }} />
        <input value={topic} onChange={e => { setTopic(e.target.value); setNotFound(false); }}
          onKeyDown={e => e.key === 'Enter' && handleGenerate()}
          placeholder="Ex: Fotossíntese, Segunda Guerra Mundial, Tabela Periódica, Genética..."
          style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1rem', color: '#1e293b', background: 'transparent', fontWeight: '500' }} />
        <button onClick={() => handleGenerate()} disabled={!topic.trim() || generating}
          style={{ background: topic.trim() ? 'linear-gradient(135deg, #f59e0b, #d97706)' : '#e2e8f0', color: topic.trim() ? 'white' : '#94a3b8', border: 'none', padding: '12px 22px', borderRadius: '10px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', cursor: topic.trim() ? 'pointer' : 'not-allowed', transition: '0.2s', fontSize: '0.9rem', boxShadow: topic.trim() ? '0 4px 14px rgba(245,158,11,0.4)' : 'none', whiteSpace: 'nowrap' }}>
          <Sparkles size={16} /> Gerar Resumo
        </button>
      </div>

      {/* Not Found */}
      {notFound && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '14px', padding: '18px 22px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
          <AlertCircle size={20} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <p style={{ fontWeight: '800', color: '#92400e', marginBottom: '8px' }}>Tema não encontrado na base de conhecimento</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {TOPIC_EXAMPLES.slice(0, 8).map(ex => (
                <button key={ex} onClick={() => { setTopic(ex); handleGenerate(ex); }}
                  style={{ background: '#fef3c7', border: '1px solid #fde68a', color: '#92400e', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}>
                  {ex}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Generating */}
      <AnimatePresence>
        {generating && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px' }}>
            <div style={{ position: 'relative', width: '72px', height: '72px' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '3px solid #fde68a', borderTopColor: '#f59e0b', animation: 'spin 0.9s linear infinite' }} />
              <div style={{ position: 'absolute', inset: '12px', borderRadius: '50%', border: '2px solid transparent', borderTopColor: '#d97706', animation: 'spin 0.6s linear infinite reverse' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: '800', color: '#111', fontSize: '1.1rem', marginBottom: '6px' }}>Estruturando resumo...</p>
              <p style={{ color: '#666', fontSize: '0.88rem' }}>Organizando os dados reais por seções e pontos-chave</p>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { to { transform: rotate(360deg); } }` }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Document */}
      {summary && !generating && colors && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          style={{ flex: 1, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>

          {/* Toolbar */}
          <div style={{ padding: '14px 22px', borderBottom: '1px solid #f0f4f8', background: '#fafafa', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: colors.accent }} />
              <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#1e293b' }}>{summary.title}</span>
              <span style={{ background: colors.badge, color: colors.badgeText, padding: '3px 10px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '800', textTransform: 'capitalize' }}>
                {summary.category}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: '#94a3b8', fontSize: '0.75rem', fontWeight: '600', marginRight: '8px' }}>
                <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><Hash size={12} /> {summary.wordCount} palavras</span>
                <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><Clock size={12} /> ~{summary.readTime} min leitura</span>
              </div>
              <button onClick={handleCopy}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', border: '1px solid #e2e8f0', padding: '7px 14px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', color: '#374151', fontSize: '0.8rem' }}>
                {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
              <button onClick={handleExport} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#1e293b', border: 'none', padding: '7px 14px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', color: 'white', fontSize: '0.8rem' }}>
                <Download size={14} /> Salvar MD
              </button>
              <button onClick={() => { setSummary(null); setTopic(''); }}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', border: '1px dashed #e2e8f0', padding: '7px 14px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', color: '#94a3b8', fontSize: '0.8rem' }}>
                + Novo
              </button>
            </div>
          </div>

          {/* Document Body */}
          <div ref={contentRef} style={{ flex: 1, overflowY: 'auto', padding: '32px 40px' }}>

            {/* Title block */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              style={{ borderLeft: `5px solid ${colors.accent}`, paddingLeft: '24px', marginBottom: '32px' }}>
              <p style={{ color: colors.accent, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.72rem', marginBottom: '8px' }}>{summary.subtitle}</p>
              <h1 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#0f172a', lineHeight: 1.15, marginBottom: '8px' }}>{summary.title}</h1>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[summary.category, `${summary.wordCount} palavras`, `~${summary.readTime} min`].map((t, i) => (
                  <span key={i} style={{ background: colors.badge, color: colors.badgeText, padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'capitalize' }}>{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
              style={{ background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '22px 26px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <BookOpen size={16} style={{ color: colors.accent }} />
                <h3 style={{ fontWeight: '800', color: colors.accent, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Visão Geral</h3>
              </div>
              <p style={{ color: '#374151', lineHeight: 1.85, fontSize: '1rem', margin: 0, fontStyle: 'italic' }}>{summary.intro}</p>
            </motion.div>

            {/* Sections from mind map */}
            <h3 style={{ fontWeight: '800', color: '#1e293b', fontSize: '1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '4px', height: '18px', background: colors.accent, borderRadius: '2px' }} />
              Tópicos Detalhados
            </h3>
            {summary.sections.map((section, i) => (
              <Section key={i} idx={i} title={section.title} items={section.items} accent={colors.accent} />
            ))}

            {/* Key Points */}
            <h3 style={{ fontWeight: '800', color: '#1e293b', fontSize: '1rem', marginBottom: '16px', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '4px', height: '18px', background: colors.accent, borderRadius: '2px' }} />
              Pontos-Chave para a Prova
            </h3>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {summary.keyPoints.map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: `${colors.accent}06`, border: `1px solid ${colors.accent}20`, borderRadius: '12px', padding: '14px 18px', borderLeft: `4px solid ${colors.accent}` }}>
                  <div style={{ minWidth: '26px', height: '26px', borderRadius: '8px', background: colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '900', fontSize: '0.72rem', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p style={{ color: '#1e293b', fontSize: '0.94rem', lineHeight: 1.65, margin: 0, fontWeight: '500' }}>{point}</p>
                </div>
              ))}
            </motion.div>

            {/* Conclusion */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              style={{ background: `linear-gradient(135deg, ${colors.accent}12, ${colors.accent}06)`, border: `1px solid ${colors.accent}30`, borderRadius: '16px', padding: '26px 30px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={16} color="white" />
                </div>
                <h3 style={{ fontWeight: '900', color: '#0f172a', fontSize: '1rem', margin: 0 }}>Conclusão e Importância</h3>
              </div>
              <p style={{ color: '#1e293b', lineHeight: 1.85, fontSize: '1rem', margin: 0 }}>{summary.conclusion}</p>
            </motion.div>

            {/* Footer */}
            <div style={{ textAlign: 'center', marginTop: '32px', paddingTop: '20px', borderTop: '1px solid #f0f4f8' }}>
              <p style={{ color: '#94a3b8', fontSize: '0.78rem', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Sparkles size={12} /> Gerado pela DVS IA — Base de Conhecimento Escolar
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Empty State */}
      {!summary && !generating && !notFound && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', background: '#fff', border: '1px dashed #e2e8f0', borderRadius: '20px', textAlign: 'center', padding: '50px' }}>
          <div style={{ width: '68px', height: '68px', borderRadius: '20px', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={32} style={{ color: '#d97706' }} />
          </div>
          <div>
            <h3 style={{ fontWeight: '800', color: '#374151', fontSize: '1.15rem', marginBottom: '8px' }}>Digite um tema escolar acima</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', maxWidth: '400px', lineHeight: 1.6 }}>
              A IA gera um resumo completo com <strong>introdução, tópicos detalhados, pontos-chave para a prova</strong> e conclusão — tudo com dados reais verificados.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
            {TOPIC_EXAMPLES.slice(0, 7).map(ex => (
              <button key={ex} onClick={() => { setTopic(ex); handleGenerate(ex); }}
                style={{ background: '#fff7ed', border: '1px solid #fed7aa', color: '#c2410c', padding: '6px 14px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer', transition: '0.15s' }}>
                {ex}
              </button>
            ))}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { to { transform: rotate(360deg); } }` }} />
    </motion.div>
  );
};

export default SummariesModule;
