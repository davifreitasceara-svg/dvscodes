import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus, Calendar, Clock, Check, X, ChevronLeft,
  ChevronRight, Trash2, Edit3, Send, Globe
} from 'lucide-react';

// ─────────────── CONSTANTS ───────────────
const STORAGE_KEY = 'dvs-scheduled-posts';
const PLATFORMS = ['TikTok', 'Reels', 'Shorts', 'Feed', 'Stories'];
const DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

const PLATFORM_COLORS = {
  TikTok:  { bg: '#f0fdf4', border: '#86efac', color: '#16a34a', dot: '#22c55e' },
  Reels:   { bg: '#fdf4ff', border: '#d8b4fe', color: '#7c3aed', dot: '#a855f7' },
  Shorts:  { bg: '#fff1f2', border: '#fecdd3', color: '#e11d48', dot: '#f43f5e' },
  Feed:    { bg: '#eff6ff', border: '#93c5fd', color: '#2563eb', dot: '#3b82f6' },
  Stories: { bg: '#fff7ed', border: '#fdba74', color: '#c2410c', dot: '#f97316' },
};

// ─────────────── STORAGE ───────────────
const load = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; } };
const save = (posts) => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); } catch {} };

// ─────────────── MODAL ───────────────
const PostModal = ({ onClose, onSave, editing }) => {
  const today = new Date();
  const pad = n => String(n).padStart(2, '0');
  const defaultDate = `${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;

  const [form, setForm] = useState({
    title: editing?.title || '',
    caption: editing?.caption || '',
    platform: editing?.platform || 'Reels',
    date: editing?.date || defaultDate,
    time: editing?.time || '19:00',
    status: editing?.status || 'scheduled',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const valid = form.title.trim() && form.date && form.time;

  const handleSave = () => {
    if (!valid) return;
    onSave({ ...form, id: editing?.id || Date.now() });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(4px)', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.95, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
        style={{
          background: '#fff', borderRadius: '20px', padding: '24px', width: '100%', maxWidth: '480px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontWeight: '900', fontSize: '1.1rem', color: '#111' }}>
            {editing ? 'Editar Post' : 'Agendar Post'}
          </h3>
          <button onClick={onClose} style={{ background: '#f4f4f5', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <X size={16} color="#666" />
          </button>
        </div>

        {/* Title */}
        <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#555', display: 'block', marginBottom: '6px' }}>Título do Post *</label>
        <input value={form.title} onChange={e => set('title', e.target.value)}
          placeholder="Ex: Dica de produtividade #1"
          style={{ width: '100%', padding: '10px 14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '0.88rem', outline: 'none', color: '#111', marginBottom: '14px' }} />

        {/* Platform */}
        <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#555', display: 'block', marginBottom: '6px' }}>Plataforma *</label>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {PLATFORMS.map(p => {
            const c = PLATFORM_COLORS[p];
            return (
              <button key={p} onClick={() => set('platform', p)} style={{
                padding: '7px 14px', borderRadius: '100px', border: `1.5px solid ${form.platform === p ? c.border : '#e2e8f0'}`,
                background: form.platform === p ? c.bg : 'transparent',
                color: form.platform === p ? c.color : '#888',
                fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer', transition: '0.15s',
              }}>{p}</button>
            );
          })}
        </div>

        {/* Date + Time */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#555', display: 'block', marginBottom: '6px' }}>Data *</label>
            <input type="date" value={form.date} onChange={e => set('date', e.target.value)}
              style={{ width: '100%', padding: '10px 12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '0.85rem', outline: 'none', color: '#111' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#555', display: 'block', marginBottom: '6px' }}>Hora *</label>
            <input type="time" value={form.time} onChange={e => set('time', e.target.value)}
              style={{ width: '100%', padding: '10px 12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '0.85rem', outline: 'none', color: '#111' }} />
          </div>
        </div>

        {/* Caption */}
        <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#555', display: 'block', marginBottom: '6px' }}>Legenda / Notas</label>
        <textarea value={form.caption} onChange={e => set('caption', e.target.value)}
          placeholder="Legenda, hashtags, observações..."
          style={{ width: '100%', minHeight: '80px', padding: '10px 14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '0.84rem', outline: 'none', resize: 'vertical', color: '#333', marginBottom: '20px' }} />

        <button onClick={handleSave} disabled={!valid} style={{
          width: '100%', height: '48px', borderRadius: '12px', border: 'none',
          background: valid ? 'linear-gradient(135deg, #8b5cf6, #d946ef)' : '#f1f5f9',
          color: valid ? 'white' : '#aaa', fontSize: '0.9rem', fontWeight: '800',
          cursor: valid ? 'pointer' : 'not-allowed',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          boxShadow: valid ? '0 4px 16px rgba(139,92,246,0.3)' : 'none',
        }}>
          <Send size={16} /> {editing ? 'Salvar Alterações' : 'Agendar Post'}
        </button>
      </motion.div>
    </motion.div>
  );
};

// ─────────────── POST CARD ───────────────
const PostCard = ({ post, onEdit, onDelete, onToggle }) => {
  const c = PLATFORM_COLORS[post.platform] || PLATFORM_COLORS.Reels;
  const dateObj = new Date(`${post.date}T${post.time}`);
  const isFuture = dateObj > new Date();
  const isPast = !isFuture;

  return (
    <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
      style={{
        background: '#fff', borderRadius: '14px', padding: '14px 16px',
        border: `1px solid ${post.status === 'published' ? '#d1fae5' : '#ebebeb'}`,
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        display: 'flex', alignItems: 'center', gap: '12px',
        opacity: post.status === 'published' ? 0.8 : 1,
      }}
    >
      {/* Status dot */}
      <div style={{
        width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0,
        background: post.status === 'published' ? '#22c55e' : isPast ? '#ef4444' : c.dot,
        boxShadow: `0 0 6px ${post.status === 'published' ? '#86efac' : isPast ? '#fca5a5' : c.border}`,
      }} />

      {/* Platform badge */}
      <div style={{
        padding: '4px 10px', borderRadius: '8px', background: c.bg, border: `1px solid ${c.border}`,
        fontSize: '0.7rem', fontWeight: '800', color: c.color, flexShrink: 0,
      }}>{post.platform}</div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontWeight: '800', fontSize: '0.88rem', color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</p>
        <p style={{ fontSize: '0.72rem', color: '#aaa', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Clock size={11} />
          {dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })} · {post.time}
        </p>
      </div>

      {/* Status label */}
      <span style={{
        fontSize: '0.65rem', fontWeight: '800', padding: '3px 8px', borderRadius: '100px', flexShrink: 0,
        background: post.status === 'published' ? '#f0fdf4' : isPast ? '#fef2f2' : '#f5f3ff',
        color: post.status === 'published' ? '#16a34a' : isPast ? '#b91c1c' : '#7c3aed',
        border: `1px solid ${post.status === 'published' ? '#86efac' : isPast ? '#fca5a5' : '#c4b5fd'}`,
      }}>
        {post.status === 'published' ? '✓ Publicado' : isPast ? '! Atrasado' : 'Agendado'}
      </span>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '4px' }}>
        {post.status !== 'published' && (
          <button onClick={() => onToggle(post.id)} title="Marcar como publicado" style={{ background: '#f0fdf4', border: 'none', borderRadius: '8px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Check size={14} color="#16a34a" />
          </button>
        )}
        <button onClick={() => onEdit(post)} style={{ background: '#f8fafc', border: 'none', borderRadius: '8px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Edit3 size={14} color="#666" />
        </button>
        <button onClick={() => onDelete(post.id)} style={{ background: '#fff1f2', border: 'none', borderRadius: '8px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Trash2 size={14} color="#f43f5e" />
        </button>
      </div>
    </motion.div>
  );
};

// ─────────────── MINI CALENDAR ───────────────
const MiniCalendar = ({ posts, onDayClick }) => {
  const [current, setCurrent] = useState(new Date());
  const year = current.getFullYear(), month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const postDays = new Set(
    posts.map(p => {
      const d = new Date(p.date + 'T00:00');
      return d.getMonth() === month && d.getFullYear() === year ? d.getDate() : null;
    }).filter(Boolean)
  );

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const today = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();

  return (
    <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #ebebeb' }}>
      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <button onClick={() => setCurrent(new Date(year, month - 1))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', padding: '4px' }}>
          <ChevronLeft size={18} />
        </button>
        <p style={{ fontWeight: '800', fontSize: '0.9rem', color: '#111' }}>
          {MONTHS[month]} {year}
        </p>
        <button onClick={() => setCurrent(new Date(year, month + 1))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', padding: '4px' }}>
          <ChevronRight size={18} />
        </button>
      </div>
      {/* Weekdays */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '6px' }}>
        {DAYS.map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: '0.65rem', fontWeight: '700', color: '#bbb', padding: '4px 0' }}>{d}</div>
        ))}
      </div>
      {/* Days */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
        {cells.map((day, i) => {
          const isToday = day === today && month === todayMonth && year === todayYear;
          const hasPost = day && postDays.has(day);
          return (
            <div key={i} onClick={() => day && onDayClick(day)} style={{
              height: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              borderRadius: '8px', cursor: day ? 'pointer' : 'default',
              background: isToday ? '#8b5cf6' : 'transparent',
              transition: '0.1s',
            }}>
              {day && (
                <>
                  <span style={{ fontSize: '0.78rem', fontWeight: isToday ? '900' : '500', color: isToday ? 'white' : '#333', lineHeight: 1 }}>{day}</span>
                  {hasPost && <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: isToday ? 'rgba(255,255,255,0.8)' : '#8b5cf6', marginTop: '1px' }} />}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─────────────── MAIN ───────────────
const SchedulerModule = () => {
  const [posts, setPosts] = useState(load);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => { save(posts); }, [posts]);

  const handleSave = (post) => {
    setPosts(prev => {
      const exists = prev.find(p => p.id === post.id);
      return exists ? prev.map(p => p.id === post.id ? post : p) : [post, ...prev];
    });
    setShowModal(false);
    setEditing(null);
  };

  const handleDelete = (id) => setPosts(prev => prev.filter(p => p.id !== id));
  const handleEdit = (post) => { setEditing(post); setShowModal(true); };
  const handleToggle = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, status: 'published' } : p));

  const filtered = posts.filter(p => {
    if (filter === 'scheduled') return p.status !== 'published';
    if (filter === 'published') return p.status === 'published';
    return true;
  }).sort((a, b) => new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time));

  const upcoming = posts.filter(p => p.status !== 'published' && new Date(p.date + 'T' + p.time) > new Date()).length;
  const published = posts.filter(p => p.status === 'published').length;
  const late = posts.filter(p => p.status !== 'published' && new Date(p.date + 'T' + p.time) < new Date()).length;

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '20px', alignItems: 'start' }}
      >
        {/* ── LEFT ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#111' }}>Agendamento</h2>
              <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '3px' }}>Organize sua calendário de conteúdo</p>
            </div>
            <button onClick={() => { setEditing(null); setShowModal(true); }} style={{
              display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 18px',
              background: 'linear-gradient(135deg, #8b5cf6, #d946ef)', color: 'white',
              border: 'none', borderRadius: '100px', fontWeight: '800', fontSize: '0.85rem', cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(139,92,246,0.35)',
            }}>
              <Plus size={16} /> Agendar Post
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {[
              { label: 'Agendados', value: upcoming, color: '#8b5cf6', bg: '#f5f3ff' },
              { label: 'Publicados', value: published, color: '#16a34a', bg: '#f0fdf4' },
              { label: 'Atrasados', value: late, color: '#e11d48', bg: '#fff1f2' },
            ].map(s => (
              <div key={s.label} style={{ background: s.bg, borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
                <p style={{ fontSize: '1.6rem', fontWeight: '900', color: s.color }}>{s.value}</p>
                <p style={{ fontSize: '0.72rem', color: s.color, fontWeight: '600', opacity: 0.8 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0', background: '#f4f4f5', borderRadius: '10px', padding: '3px' }}>
            {[
              { id: 'all', label: `Todos (${posts.length})` },
              { id: 'scheduled', label: `Pendentes (${upcoming + late})` },
              { id: 'published', label: `Publicados (${published})` },
            ].map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)} style={{
                flex: 1, padding: '7px 8px', borderRadius: '8px', border: 'none',
                background: filter === f.id ? '#fff' : 'transparent',
                boxShadow: filter === f.id ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                fontSize: '0.75rem', fontWeight: '700', color: filter === f.id ? '#111' : '#888',
                cursor: 'pointer', transition: '0.15s',
              }}>{f.label}</button>
            ))}
          </div>

          {/* Posts List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <AnimatePresence>
              {filtered.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '16px', border: '1px solid #ebebeb' }}
                >
                  <Calendar size={40} color="#ddd" style={{ margin: '0 auto 12px' }} />
                  <p style={{ color: '#aaa', fontWeight: '600', marginBottom: '6px' }}>
                    {filter === 'all' ? 'Nenhum post agendado ainda' : 'Nenhum post nessa categoria'}
                  </p>
                  <p style={{ color: '#ccc', fontSize: '0.78rem' }}>
                    Clique em "Agendar Post" para começar
                  </p>
                </motion.div>
              ) : (
                filtered.map(post => (
                  <PostCard key={post.id} post={post} onEdit={handleEdit} onDelete={handleDelete} onToggle={handleToggle} />
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'sticky', top: '24px' }}>
          <MiniCalendar posts={posts} onDayClick={() => {}} />

          {/* Quick Tips */}
          <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', border: '1px solid #ebebeb' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '800', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              💡 Dicas de Frequência
            </p>
            {[
              { platform: 'TikTok',  freq: '1–3x por dia',   color: '#22c55e' },
              { platform: 'Reels',   freq: '4–7x por semana', color: '#a855f7' },
              { platform: 'Shorts',  freq: '1x por dia',      color: '#f43f5e' },
              { platform: 'Feed',    freq: '3–5x por semana', color: '#3b82f6' },
              { platform: 'Stories', freq: '2–5x por dia',    color: '#f97316' },
            ].map(t => (
              <div key={t.platform} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f6f6f6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: t.color }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#333' }}>{t.platform}</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#888' }}>{t.freq}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <PostModal
            editing={editing}
            onClose={() => { setShowModal(false); setEditing(null); }}
            onSave={handleSave}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SchedulerModule;
