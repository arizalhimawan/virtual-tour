// src/App.tsx

import React from 'react';
// KRITIS: Import Navigate untuk redirect
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import halaman dari folder pages/
import LandingPage from './pages/LandingPage';
import VirtualTourPage from './pages/VirtualTourPage';
import DestinationListPage from './pages/DestinationListPage';
import DestinationTourPage from './pages/DestinationTourPage';

function App() {
  return (
    <Router>
      <Routes>

        {/* Rute 1: Halaman Utama (Default) */}
        <Route path="/" element={<LandingPage />} />

        {/* Rute-rute yang Valid */}
        <Route path="/destinations" element={<DestinationListPage />} />
        <Route path="/tour" element={<VirtualTourPage />} />
        <Route path="/tour/:id" element={<DestinationTourPage />} />

        {/* KRITIS: WILD CARD ROUTE (Mencegah URL yang Tidak Dikenal) */}
        {/* Jika pengguna mencoba mengakses path yang tidak valid, pindahkan ke LandingPage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;