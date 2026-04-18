import React from 'react';
import { useMode } from '../hooks/useMode';
import { GraduationCap, Zap } from 'lucide-react';

const ModeToggle = () => {
  const { mode, toggleMode } = useMode();
  const isCreator = mode === 'creator';

  return (
    <div
      style={{
        display: 'flex',
        gap: '4px',
        padding: '4px',
        borderRadius: '100px',
        background: isCreator ? '#f4f0ff' : 'rgba(255,255,255,0.06)',
        border: isCreator ? '1px solid #e0d4ff' : '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <button
        onClick={() => mode !== 'student' && toggleMode()}
        style={{
          flex: 1,
          padding: '8px 14px',
          border: 'none',
          borderRadius: '100px',
          background: mode === 'student' ? 'var(--student-primary)' : 'transparent',
          color: mode === 'student' ? 'white' : isCreator ? '#888' : 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          cursor: 'pointer',
          transition: 'all 0.25s',
          fontWeight: '700',
          fontSize: '0.8rem',
          whiteSpace: 'nowrap',
        }}
      >
        <GraduationCap size={16} />
        Estudante
      </button>
      <button
        onClick={() => mode !== 'creator' && toggleMode()}
        style={{
          flex: 1,
          padding: '8px 14px',
          border: 'none',
          borderRadius: '100px',
          background: mode === 'creator' ? 'linear-gradient(135deg, #8b5cf6, #d946ef)' : 'transparent',
          color: mode === 'creator' ? 'white' : 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          cursor: 'pointer',
          transition: 'all 0.25s',
          fontWeight: '700',
          fontSize: '0.8rem',
          whiteSpace: 'nowrap',
        }}
      >
        <Zap size={16} />
        Criador
      </button>
    </div>
  );
};

export default ModeToggle;
