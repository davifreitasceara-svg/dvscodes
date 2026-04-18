import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Music2, Hash, BarChart2, Globe, Clock, Zap } from 'lucide-react';

// ─────────────── DATA ───────────────
const TRENDING_SOUNDS = [
  { id: 1, name: 'Espresso',         artist: 'Sabrina Carpenter',  bpm: 113, uses: '2.1M',  growth: '+340%', platform: 'TikTok', hot: true },
  { id: 2, name: 'BADDEST',          artist: 'K/DA',               bpm: 128, uses: '980K',  growth: '+210%', platform: 'Reels',  hot: true },
  { id: 3, name: 'APT.',             artist: 'ROSÉ & Bruno Mars',  bpm: 120, uses: '3.4M',  growth: '+580%', platform: 'TikTok', hot: true },
  { id: 4, name: 'Levii\'s Jeans',   artist: 'Beyoncé',            bpm: 102, uses: '440K',  growth: '+98%',  platform: 'Reels',  hot: false },
  { id: 5, name: 'Beautiful Things', artist: 'Benson Boone',       bpm: 120, uses: '1.8M',  growth: '+155%', platform: 'Shorts', hot: false },
  { id: 6, name: 'Die With A Smile', artist: 'Lady Gaga & Bruno',  bpm: 76,  uses: '2.7M',  growth: '+420%', platform: 'TikTok', hot: true },
];

const TRENDING_HASHTAGS = [
  { tag: '#fyp',           posts: '1.2T', growth: '+2%',   type: 'evergreen' },
  { tag: '#viral',         posts: '380B', growth: '+5%',   type: 'evergreen' },
  { tag: '#trending',      posts: '250B', growth: '+8%',   type: 'evergreen' },
  { tag: '#empreendedor',  posts: '12M',  growth: '+22%',  type: 'nicho' },
  { tag: '#dinheiro',      posts: '45M',  growth: '+18%',  type: 'nicho' },
  { tag: '#produtividade', posts: '8.2M', growth: '+31%',  type: 'nicho' },
  { tag: '#aestheticlife', posts: '20M',  growth: '+44%',  type: 'nicho' },
  { tag: '#studywithme',   posts: '4.1M', growth: '+67%',  type: 'alta' },
  { tag: '#softlife',      posts: '6.3M', growth: '+89%',  type: 'alta' },
  { tag: '#morningroutine',posts: '3.8M', growth: '+103%', type: 'alta' },
];

const CONTENT_CATEGORIES = [
  { name: 'Motivação', icon: '⚡', score: 94, posts: '18M/dia',  direction: 'up',   tip: 'Frases com fundo escuro performam 3x melhor' },
  { name: 'Finanças',  icon: '💰', score: 91, posts: '9M/dia',   direction: 'up',   tip: 'Revelar um número chocante no hook converte bem' },
  { name: 'Lifestyle', icon: '✨', score: 88, posts: '25M/dia',  direction: 'up',   tip: 'Morning routines aesthetics estão em alta' },
  { name: 'Humor',     icon: '😂', score: 86, posts: '40M/dia',  direction: 'up',   tip: 'Trend sounds com timing perfeito disparam views' },
  { name: 'Tutorial',  icon: '📚', score: 83, posts: '14M/dia',  direction: 'stable', tip: 'Tutoriais rápidos (≤30s) têm maior retenção' },
  { name: 'Venda',     icon: '🛍️', score: 79, posts: '6M/dia',   direction: 'down', tip: 'Menos CTA direto, mais storytelling de produto' },
  { name: 'Receitas',  icon: '🍳', score: 77, posts: '11M/dia',  direction: 'stable', tip: 'Close-up da textura dos alimentos gera saves' },
  { name: 'Fitness',   icon: '💪', score: 74, posts: '8M/dia',   direction: 'down', tip: 'Progresso real supera treinos impossíveis' },
];

const PLATFORM_STATS = [
  { platform: 'TikTok',  icon: '🎵', bestHour: '19h–21h', bestDay: 'Ter/Qui/Sex', avgReach: '12K', tip: 'Primeiros 3 segundos são decisivos' },
  { platform: 'Reels',   icon: '📸', bestHour: '11h–13h', bestDay: 'Qua/Sex/Dom', avgReach: '8K',  tip: 'Mostre o rosto no primeiro frame' },
  { platform: 'Shorts',  icon: '▶️', bestHour: '15h–18h', bestDay: 'Seg/Qua/Sáb', avgReach: '20K', tip: 'Título do vídeo aparece em busca' },
];

// ─────────────── COMPONENTS ───────────────
const GrowthBar = ({ growth }) => {
  const pct = parseInt(growth.replace(/[^0-9]/g, ''));
  const capped = Math.min(pct, 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ flex: 1, height: '4px', background: '#f1f5f9', borderRadius: '100px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }} animate={{ width: `${capped}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ height: '100%', borderRadius: '100px', background: pct >= 100 ? '#f59e0b' : pct >= 50 ? '#8b5cf6' : '#10b981' }}
        />
      </div>
      <span style={{ fontSize: '0.7rem', fontWeight: '800', color: pct >= 100 ? '#b45309' : pct >= 50 ? '#7c3aed' : '#10b981', whiteSpace: 'nowrap' }}>
        {growth}
      </span>
    </div>
  );
};

const ScoreRing = ({ score }) => {
  const r = 18, circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 90 ? '#f59e0b' : score >= 80 ? '#8b5cf6' : '#64748b';
  return (
    <div style={{ position: 'relative', width: '48px', height: '48px', flexShrink: 0 }}>
      <svg width="48" height="48" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="24" cy="24" r={r} fill="none" stroke="#f1f5f9" strokeWidth="4" />
        <circle cx="24" cy="24" r={r} fill="none" stroke={color} strokeWidth="4"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: '900', color }}>{score}</span>
      </div>
    </div>
  );
};

// ─────────────── MAIN ───────────────
const TrendsModule = () => {
  const [activeTab, setActiveTab] = useState('sons');

  const tabs = [
    { id: 'sons',       label: 'Sons Virais',       icon: <Music2 size={15} /> },
    { id: 'hashtags',   label: 'Hashtags',          icon: <Hash size={15} /> },
    { id: 'conteudo',   label: 'Tipos de Conteúdo', icon: <BarChart2 size={15} /> },
    { id: 'plataformas',label: 'Melhores Horários', icon: <Clock size={15} /> },
  ];

  const now = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#111' }}>Tendências</h2>
          <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '3px', textTransform: 'capitalize' }}>
            Atualizado hoje · {now}
          </p>
        </div>
        <div style={{
          background: '#fef9c3', border: '1px solid #fde68a', borderRadius: '100px',
          padding: '5px 12px', fontSize: '0.72rem', fontWeight: '800', color: '#b45309',
          display: 'flex', alignItems: 'center', gap: '5px',
        }}>
          <TrendingUp size={12} /> Ao Vivo
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0', background: '#f4f4f5', borderRadius: '12px', padding: '4px' }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            flex: 1, padding: '8px 6px', borderRadius: '9px', border: 'none',
            background: activeTab === tab.id ? '#fff' : 'transparent',
            boxShadow: activeTab === tab.id ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            fontSize: '0.72rem', fontWeight: '700',
            color: activeTab === tab.id ? '#111' : '#888',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
            cursor: 'pointer', transition: '0.15s',
          }}>
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* ── SONS VIRAIS ── */}
      {activeTab === 'sons' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#ebebeb', borderRadius: '16px', overflow: 'hidden' }}>
          {TRENDING_SOUNDS.map((sound, i) => (
            <div key={sound.id} style={{
              background: '#fff', padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: '14px',
            }}>
              {/* Rank */}
              <span style={{ width: '20px', textAlign: 'center', fontSize: '0.85rem', fontWeight: '900', color: i < 3 ? '#f59e0b' : '#ccc' }}>
                {i + 1}
              </span>
              {/* Icon */}
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                background: sound.hot ? 'linear-gradient(135deg, #8b5cf6, #d946ef)' : '#f4f4f5',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Music2 size={18} color={sound.hot ? 'white' : '#aaa'} />
              </div>
              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <p style={{ fontWeight: '800', fontSize: '0.88rem', color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {sound.name}
                  </p>
                  {sound.hot && <span style={{ fontSize: '0.58rem', background: '#fef9c3', color: '#b45309', padding: '1px 6px', borderRadius: '100px', fontWeight: '800', flexShrink: 0 }}>🔥 HOT</span>}
                </div>
                <p style={{ fontSize: '0.72rem', color: '#aaa' }}>{sound.artist} · {sound.bpm} BPM · {sound.platform}</p>
                <GrowthBar growth={sound.growth} />
              </div>
              {/* Uses */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: '0.85rem', fontWeight: '800', color: '#111' }}>{sound.uses}</p>
                <p style={{ fontSize: '0.65rem', color: '#aaa' }}>usos</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* ── HASHTAGS ── */}
      {activeTab === 'hashtags' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['evergreen', 'nicho', 'alta'].map(type => {
            const labels = { evergreen: '🌳 Perennas (Use Sempre)', nicho: '🎯 De Nicho (Use no Tema)', alta: '🚀 Em Alta (Use Agora)' };
            const items = TRENDING_HASHTAGS.filter(h => h.type === type);
            return (
              <div key={type}>
                <p style={{ fontSize: '0.75rem', fontWeight: '800', color: '#555', marginBottom: '8px' }}>{labels[type]}</p>
                <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #ebebeb', overflow: 'hidden' }}>
                  {items.map((h, i) => (
                    <div key={h.tag} style={{
                      padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px',
                      borderBottom: i < items.length - 1 ? '1px solid #f6f6f6' : 'none',
                    }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#8b5cf6', flex: 1 }}>{h.tag}</span>
                      <span style={{ fontSize: '0.72rem', color: '#aaa', minWidth: '50px', textAlign: 'right' }}>{h.posts}</span>
                      <div style={{ width: '80px' }}>
                        <GrowthBar growth={h.growth} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}

      {/* ── TIPOS DE CONTEÚDO ── */}
      {activeTab === 'conteudo' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {CONTENT_CATEGORIES.map((cat) => (
            <div key={cat.name} style={{
              background: '#fff', borderRadius: '14px', padding: '16px',
              border: '1px solid #ebebeb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              display: 'flex', alignItems: 'flex-start', gap: '12px',
            }}>
              <ScoreRing score={cat.score} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '1rem' }}>{cat.icon}</span>
                  <p style={{ fontWeight: '800', fontSize: '0.88rem', color: '#111' }}>{cat.name}</p>
                  <span style={{ marginLeft: 'auto', fontSize: '0.7rem' }}>
                    {cat.direction === 'up' ? '📈' : cat.direction === 'down' ? '📉' : '➡️'}
                  </span>
                </div>
                <p style={{ fontSize: '0.68rem', color: '#aaa', marginBottom: '6px' }}>{cat.posts}</p>
                <p style={{ fontSize: '0.7rem', color: '#555', lineHeight: 1.4, background: '#f8fafc', padding: '6px', borderRadius: '6px' }}>
                  💡 {cat.tip}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* ── MELHORES HORÁRIOS ── */}
      {activeTab === 'plataformas' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {PLATFORM_STATS.map(p => (
            <div key={p.platform} style={{
              background: '#fff', borderRadius: '14px', padding: '18px',
              border: '1px solid #ebebeb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                }}>
                  {p.icon}
                </div>
                <div>
                  <p style={{ fontWeight: '800', fontSize: '1rem', color: '#111' }}>{p.platform}</p>
                  <p style={{ fontSize: '0.72rem', color: '#aaa' }}>Alcance médio: <strong style={{ color: '#8b5cf6' }}>{p.avgReach} views</strong></p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '10px' }}>
                  <p style={{ fontSize: '0.65rem', color: '#aaa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    <Clock size={10} style={{ display: 'inline', marginRight: '3px' }} />Melhor Horário
                  </p>
                  <p style={{ fontWeight: '800', fontSize: '0.92rem', color: '#111' }}>{p.bestHour}</p>
                </div>
                <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '10px' }}>
                  <p style={{ fontSize: '0.65rem', color: '#aaa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    <Globe size={10} style={{ display: 'inline', marginRight: '3px' }} />Melhores Dias
                  </p>
                  <p style={{ fontWeight: '800', fontSize: '0.92rem', color: '#111' }}>{p.bestDay}</p>
                </div>
              </div>
              <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={14} color="#16a34a" />
                <p style={{ fontSize: '0.72rem', color: '#15803d', fontWeight: '600' }}>{p.tip}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TrendsModule;
