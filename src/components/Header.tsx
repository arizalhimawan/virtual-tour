// src/components/Header.tsx (FINAL FIX - NON-STICKY)

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
    // Data Kontak
    const phoneNomor = '112';
    const waNomor = '628113577800';
    const waDisplay = '0811  3577  800';
    const waPesan = encodeURIComponent('Halo, saya ingin mengajukan pengaduan');
    const waLink = `https://wa.me/${waNomor}?text=${waPesan}`;


    return (
        // KRITIS: Menghapus sticky top-0 z-50 agar header diam saat di-scroll
        <header className="shadow-md">

            {/* Tampilan (LAPTOP dan hp grid) */}
            <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] md:h-28">

                {/*LOGO CONTAINER KHUSUS DESKTOP */}
                <div className="hidden md:flex items-center justify-center py-2 md:row-span-2 bg-white border-b md:border-b-0">
                    <img src="/logo.png" alt="PSC Logo" className="h-16 w-auto px-4" />
                </div>

                {/*  BARIS 1 (WELCOME) */}
                <div className="w-full flex items-center bg-[#006400] px-4 md:px-6 h-1/2 md:h-auto py-2">

                    {/* LOGO VERSI MOBILE */}
                    <div className="flex md:hidden items-center mr-3">
                        <img src="/logo.png" alt="PSC Logo Mobile" className="h-8 w-auto" />
                    </div>

                    <h1 className="text-sm md:text-xl font-extrabold tracking-wider text-white">
                        WELCOME IN PSC VIRTUAL TOUR
                    </h1>
                </div>

                {/* BARIS 2: KONTAK (Telepon & WhatsApp) */}
                <div className="w-full flex flex-col justify-center bg-[#f0e6c9] px-4 md:px-6 h-1/2 md:h-auto border-t border-[#d8c29b] py-2">

                    <p className="text-xs sm:text-sm text-black font-semibold mb-1">Layanan Pengaduan:</p>

                    <div className="flex space-x-4">
                        {/* Tombol 1: Telepon (tel:) - Ikon Phone berwarna Merah/Biru (Darurat) */}
                        <a
                            href={`tel:${phoneNomor}`}
                            className="flex items-center text-xs sm:text-base text-black font-bold hover:text-blue-600 transition"
                        >
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-red-600" />
                            {phoneNomor}
                        </a>

                        {/* Tombol 2: WhatsApp (wa.me) - Menggunakan MessageSquare */}
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs sm:text-base text-black font-bold hover:text-green-800 transition"
                        >
                            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-500" />
                            {waDisplay}
                        </a>
                    </div>

                </div>
            </div>

            {/* Margin untuk jarak ke HeroBanner */}
            <div className="mb-8 md:mb-12 lg:mb-20"></div>
        </header>
    );
};

export default Header;