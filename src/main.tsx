import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import App from './App.tsx';
import Contact from './pages/Contact.tsx';
import WeatherWizard from './pages/WeatherWizard.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="contact" element={<Contact />} />
          <Route path="weather-wizard" element={<WeatherWizard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
