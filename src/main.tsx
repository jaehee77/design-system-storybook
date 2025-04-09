import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@fontsource/noto-sans-kr/400.css'; // Specify weight
import '@fontsource/noto-sans-kr/700.css'; // Specify weight

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
