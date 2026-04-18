import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, Users, Clock, Star, BookmarkPlus, Check, Sparkles, Filter } from 'lucide-react';

// ─────────────── DATA ───────────────
const CATEGORIES = ['Todos', 'Reels', 'TikTok', 'Stories', 'Produto', 'Educação', 'Lifestyle', 'Humor'];

const TEMPLATES = [
  {
    id: 1, name: 'Hook Viral de Impacto', category: 'TikTok', platform: 'TikTok',
    duration: '0:15', uses: '48.2K', rating: 4.9, badge: 'Trending',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Abre forte, retém audiência e gera comentários.',
    tags: ['hook', 'engajamento', 'viral'],
  },
  {
    id: 2, name: 'Antes e Depois', category: 'Reels',
    duration: '0:30', uses: '31.7K', rating: 4.8, badge: 'Popular',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Transformação visual com corte dinâmico no beat.',
    tags: ['transformação', 'produto', 'impacto'],
  },
  {
    id: 3, name: 'Tutorial Minimalista', category: 'Educação',
    duration: '1:00', uses: '22.1K', rating: 4.7, badge: null,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Passo a passo clean com legendas automáticas.',
    tags: ['tutorial', 'educação', 'dicas'],
  },
  {
    id: 4, name: 'CTA de Venda Agressivo', category: 'Produto',
    duration: '0:15', uses: '19.4K', rating: 4.8, badge: 'Converte',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'Urgência, prova social e chamada para ação rápida.',
    tags: ['venda', 'cta', 'produto'],
  },
  {
    id: 5, name: 'Lifestyle Aesthetic', category: 'Lifestyle',
    duration: '0:30', uses: '15.8K', rating: 4.6, badge: null,
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    description: 'Cortes suaves sincronizados com música lo-fi.',
    tags: ['aesthetic', 'lifestyle', 'mood'],
  },
  {
    id: 6, name: 'Humor & Trend Sound', category: 'Humor',
    duration: '0:15', uses: '62.3K', rating: 4.9, badge: 'Viral',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    description: 'Timing perfeito para sons virais de humor.',
    tags: ['humor', 'trending', 'sons'],
  },
  {
    id: 7, name: 'Stories Countdown', category: 'Stories',
    duration: '0:15', uses: '11.2K', rating: 4.5, badge: null,
    gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    description: 'Contagem regressiva para lançamento ou promoção.',
    tags: ['stories', 'lançamento', 'timer'],
  },
  {
    id: 8, name: 'Depoimento Social Proof', category: 'Produto',
    duration: '0:30', uses: '8.9K', rating: 4.7, badge: null,
    gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    description: 'Formato que gera confiança e aumenta conversão.',
    tags: ['depoimento', 'prova social', 'confiança'],
  },
  {
    id: 9, name: 'Rotina Matinal Aesthetic', category: 'Lifestyle',
    duration: '1:00', uses: '27.5K', rating: 4.8, badge: 'Popular',
    gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
    description: 'Morning routine com filtros quentes e música chill.',
    tags: ['rotina', 'manhã', 'aesthetic'],
  },
  {
    id: 10, name: 'Dueto / Stitch Viral', category: 'TikTok',
    duration: '0:30', uses: '33.1K', rating: 4.6, badge: 'Trending',
    gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    description: 'Formato de reação com split screen dinâmico.',
    tags: ['dueto', 'reação', 'stitch'],
  },
];

const BADGE_COLORS = {
  Trending: { bg: '#f0fdf4', color: '#16a34a', border: '#86efac' },
  Popular: { bg: '#eff6ff', color: '#2563eb', border: '#93c5fd' },
  Viral: { bg: '#fef9c3', color: '#b45309', border: '#fde68a' },
  Converte: { bg: '#fdf4ff', color: '#7c3aed', border: '#d8b4fe' },
};

// ─────────────── TEMPLATE CARD ───────────────
const TemplateCard = ({ tpl, onUse, saved, onSave }) => {
  const badge = tpl.badge && BADGE_COLORS[tpl.badge];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      style={{
        background: '#fff', borderRadius: '16px',
        border: '1px solid #ebebeb', overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        cursor: 'pointer', transition: 'box-shadow 0.2s',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', height: '140px', background: tpl.gradient }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Play size={20} color="white" fill="white" />
          </div>
        </div>
        {/* Duration pill */}
        <div style={{
          position: 'absolute', bottom: '10px', left: '10px',
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
          borderRadius: '100px', padding: '3px 8px',
          fontSize: '0.7rem', fontWeight: '700', color: 'white',
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          <Clock size={11} /> {tpl.duration}
        </div>
        {/* Badge */}
        {badge && (
          <div style={{
            position: 'absolute', top: '10px', right: '10px',
            background: badge.bg, border: `1px solid ${badge.border}`,
            borderRadius: '100px', padding: '2px 8px',
            fontSize: '0.65rem', fontWeight: '800', color: badge.color,
          }}>
            {tpl.badge}
          </div>
        )}
        {/* Save button */}
        <button
          onClick={(e) => { e.stopPropagation(); onSave(tpl.id); }}
          style={{
            position: 'absolute', top: '8px', left: '8px',
            background: saved ? 'rgba(139,92,246,0.9)' : 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(4px)', border: 'none', borderRadius: '50%',
            width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: '0.15s',
          }}
        >
          {saved ? <Check size={14} color="white" /> : <BookmarkPlus size={14} color="white" />}
        </button>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 14px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <p style={{ fontWeight: '800', fontSize: '0.88rem', color: '#111', lineHeight: 1.3 }}>{tpl.name}</p>
        <p style={{ fontSize: '0.72rem', color: '#888', lineHeight: 1.4 }}>{tpl.description}</p>
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '2px' }}>
          {tpl.tags.map(t => (
            <span key={t} style={{
              fontSize: '0.62rem', background: '#f4f4f5',
              padding: '2px 7px', borderRadius: '100px', color: '#777', fontWeight: '600',
            }}>#{t}</span>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid #f4f4f5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.7rem', color: '#aaa', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Users size={11} /> {tpl.uses}
            </span>
            <span style={{ fontSize: '0.7rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Star size={11} fill="#f59e0b" /> {tpl.rating}
            </span>
          </div>
          <button
            onClick={() => onUse(tpl)}
            style={{
              padding: '6px 14px', borderRadius: '100px',
              background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
              color: 'white', border: 'none', fontSize: '0.72rem',
              fontWeight: '800', cursor: 'pointer',
            }}
          >
            Usar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────── MAIN ───────────────
const TemplatesModule = ({ onNavigate }) => {
  const [category, setCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [saved, setSaved] = useState(new Set());

  const filtered = TEMPLATES.filter(t => {
    const matchCat = category === 'Todos' || t.category === category;
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some(tag => tag.includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const handleUse = (tpl) => {
    onNavigate('viral');
  };

  const handleSave = (id) => {
    setSaved(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      {/* Header */}
      <div>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#111' }}>Templates</h2>
        <p style={{ fontSize: '0.82rem', color: '#999', marginTop: '4px' }}>
          Escolha um template pronto e personalize no Viral Studio
        </p>
      </div>

      {/* Search + Filter */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#bbb' }} />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Buscar templates..."
            style={{
              width: '100%', padding: '10px 14px 10px 38px',
              background: '#fff', border: '1px solid #ebebeb', borderRadius: '100px',
              fontSize: '0.85rem', outline: 'none', color: '#111',
            }}
          />
        </div>
        <button style={{
          padding: '10px 16px', background: '#fff', border: '1px solid #ebebeb',
          borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '0.82rem', fontWeight: '600', color: '#555', cursor: 'pointer',
        }}>
          <Filter size={14} /> Filtrar
        </button>
      </div>

      {/* Categories */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} style={{
            padding: '7px 16px', borderRadius: '100px', border: 'none',
            background: category === cat ? '#1a1a1a' : '#fff',
            color: category === cat ? 'white' : '#555',
            fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer',
            whiteSpace: 'nowrap', border: category === cat ? 'none' : '1px solid #ebebeb',
            transition: '0.15s',
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div style={{ display: 'flex', gap: '16px', padding: '14px 18px', background: '#fff', borderRadius: '12px', border: '1px solid #ebebeb' }}>
        {[
          { label: 'Templates Disponíveis', value: TEMPLATES.length },
          { label: 'Salvos por Você', value: saved.size },
          { label: 'Novos esta Semana', value: 3 },
        ].map((s, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontSize: '1.3rem', fontWeight: '900', color: '#111' }}>{s.value}</p>
            <p style={{ fontSize: '0.7rem', color: '#aaa', marginTop: '2px' }}>{s.label}</p>
            {i < 2 && <div style={{ position: 'absolute' }} />}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
        <AnimatePresence>
          {filtered.map((tpl, i) => (
            <motion.div key={tpl.id} layout>
              <TemplateCard
                tpl={tpl} onUse={handleUse}
                saved={saved.has(tpl.id)} onSave={handleSave}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <Sparkles size={40} color="#ddd" style={{ margin: '0 auto 12px' }} />
          <p style={{ color: '#aaa', fontWeight: '600' }}>Nenhum template encontrado</p>
        </div>
      )}
    </motion.div>
  );
};

export default TemplatesModule;
