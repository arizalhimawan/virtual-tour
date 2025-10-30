// src/components/HeroBanner.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.jpg';

const HeroBanner: React.FC = () => {
  const navigate = useNavigate();
  const backgroundImageUrl = background;

  // Tombol Style Dibuat Lebih Kecil di HP (px-4 py-2, text-sm)
  const buttonStyle = "px-4 py-2 bg-[#f0e6c9] text-sm md:px-8 md:py-3 md:text-base text-black font-semibold rounded-lg shadow-2xl hover:bg-[#d8c29b] transition duration-300 tracking-wider transform hover:scale-105";

  return (
    // Container utama: Padding vertikal responsif
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8 lg:py-10">


      {/* Container Tinggi Adaptif: h-[250px] di HP, meningkat di MD dan LG */}
      <div className="w-full h-[250px] md:h-[450px] lg:h-[600px] overflow-hidden relative bg-white rounded-xl sm:rounded-3xl shadow-2xl shadow-gray-400/50 border border-gray-100 ">

        <img
          src={backgroundImageUrl}
          alt="Pahlawan Street Center Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Tombol Posisi: Padding bawah responsif */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-6 md:pb-12 lg:pb-24">
          <button
            onClick={() =>
              navigate("/tour", {
                state: {
                  videoPath: "/jalan pahlawan 5Mbps.mp4", // video khusus untuk HeroBanner
                },
              })
            }
            className={buttonStyle} // Menggunakan style yang diperkecil
          >
            START TOUR
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroBanner;