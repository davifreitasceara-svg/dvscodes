import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, Copy, Check, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TranscriptionModule = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'pt-BR';

        recognitionRef.current.onresult = (event) => {
          let interim = '';
          let final = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) final += event.results[i][0].transcript;
            else interim += event.results[i][0].transcript;
          }
          if (final) setTranscript(prev => (prev ? prev + ' ' : '') + final);
          setInterimTranscript(interim);
        };

        recognitionRef.current.onerror = (event) => {
          setIsRecording(false);
          if (event.error === 'not-allowed') setError('Permissão de microfone negada. Autorize nas configurações do navegador.');
          else if (event.error === 'no-speech') setError(null);
          else setError(`Erro: ${event.error}`);
        };

        recognitionRef.current.onend = () => {
          if (isRecording) {
            try { recognitionRef.current.start(); } catch (_) {}
          }
        };
      } else {
        setError('Seu navegador não suporta reconhecimento de voz. Use o Chrome ou Edge.');
      }
    } catch (err) {
      setError('Falha ao iniciar o reconhecimento de voz.');
    }
    return () => { try { recognitionRef.current?.stop(); } catch (_) {} };
  }, []);

  const handleToggle = () => {
    if (!recognitionRef.current) { alert(error || 'Reconhecimento não disponível'); return; }
    try {
      if (isRecording) {
        recognitionRef.current.stop();
        setIsRecording(false);
        setInterimTranscript('');
      } else {
        setError(null);
        recognitionRef.current.start();
        setIsRecording(true);
      }
    } catch (err) { setIsRecording(false); }
  };

  const handleCopy = () => {
    if (!transcript.trim()) return;
    navigator.clipboard.writeText(transcript.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wordCount = transcript.trim() ? transcript.trim().split(/\s+/).length : 0;

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>

      <div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111' }}>Transcrição de Voz</h2>
        <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '4px' }}>Fale e o texto aparece automaticamente. Copie e use onde quiser.</p>
      </div>

      {/* Mic Button */}
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <motion.button
          onClick={handleToggle}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '120px', height: '120px', borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: isRecording
              ? 'linear-gradient(135deg, #ef4444, #dc2626)'
              : 'linear-gradient(135deg, #0ea5e9, #0284c7)',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: isRecording
              ? '0 0 0 0 rgba(239,68,68,0.4), 0 8px 30px rgba(239,68,68,0.4)'
              : '0 8px 30px rgba(14,165,233,0.35)',
            animation: isRecording ? 'mic-pulse 1.5s infinite' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          {isRecording ? <Square size={44} fill="white" /> : <Mic size={44} />}
        </motion.button>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: '800', color: isRecording ? '#ef4444' : '#111', fontSize: '1.1rem' }}>
            {isRecording ? '● Gravando...' : 'Clique para gravar'}
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px' }}>
            {isRecording ? 'Fale normalmente. Clique para parar.' : 'Reconhecimento automático em Português'}
          </p>
        </div>

        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '12px 20px', borderRadius: '12px', color: '#dc2626', fontSize: '0.88rem', fontWeight: '600', textAlign: 'center' }}>
            ⚠️ {error}
          </div>
        )}
      </div>

      {/* Transcript Display */}
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafafa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontWeight: '700', color: '#1e293b', fontSize: '0.9rem' }}>Texto Transcrito</span>
            {wordCount > 0 && (
              <span style={{ background: '#e2e8f0', padding: '2px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700', color: '#64748b' }}>
                {wordCount} palavras
              </span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {transcript && (
              <>
                <button onClick={() => { setTranscript(''); setInterimTranscript(''); }}
                  style={{ background: '#fff', border: '1px solid #e2e8f0', color: '#94a3b8', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: '600' }}>
                  <Trash2 size={14} /> Limpar
                </button>
                <button onClick={handleCopy}
                  style={{ background: copied ? '#10b981' : '#fff', border: `1px solid ${copied ? '#10b981' : '#e2e8f0'}`, color: copied ? 'white' : '#1e293b', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: '700', transition: '0.2s' }}>
                  {copied ? <><Check size={14} /> Copiado!</> : <><Copy size={14} /> Copiar</>}
                </button>
              </>
            )}
          </div>
        </div>

        <div style={{ minHeight: '280px', padding: '24px', fontSize: '1.05rem', lineHeight: '1.8', color: '#1e293b', position: 'relative' }}>
          {!transcript && !interimTranscript ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '220px', color: '#cbd5e1', gap: '12px' }}>
              <Mic size={48} strokeWidth={1} />
              <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>O texto aparecerá aqui enquanto você fala...</p>
            </div>
          ) : (
            <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {transcript}
              {interimTranscript && (
                <span style={{ color: '#94a3b8', fontStyle: 'italic' }}> {interimTranscript}</span>
              )}
            </p>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mic-pulse {
          0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.4), 0 8px 30px rgba(239,68,68,0.4); }
          70% { box-shadow: 0 0 0 20px rgba(239,68,68,0), 0 8px 30px rgba(239,68,68,0.4); }
          100% { box-shadow: 0 0 0 0 rgba(239,68,68,0), 0 8px 30px rgba(239,68,68,0.4); }
        }
      `}} />
    </motion.div>
  );
};

export default TranscriptionModule;
