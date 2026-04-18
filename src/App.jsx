import React from 'react';
import { ModeProvider } from './hooks/useMode';
import MainLayout from './layouts/MainLayout';
import './index.css';

function App() {
  return (
    <ModeProvider>
      <MainLayout />
    </ModeProvider>
  );
}

export default App;


