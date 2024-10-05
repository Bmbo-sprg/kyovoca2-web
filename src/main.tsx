import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';

const AppRouted = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouted />
  </StrictMode>
);
