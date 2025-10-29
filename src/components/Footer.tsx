// src/components/Footer.tsx (FINAL FIX - SPACING DAN ALIGNMENT HP)

import React from 'react';
import { Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        // Kontainer utama footer
        <footer className="bg-[#006400] text-white pt-10 md:pt-16 mt-12 md:mt-16">

            {/* Bagian Atas Footer (Konten Kolom) */}
            {/* KUNCI PERBAIKAN: Gunakan gap-y-8 di HP untuk jarak vertikal yang jelas */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-10 pb-8 md:pb-12">

                {/* Kolom 1: Logo & Slogan (Akan menjadi Baris 1 di HP) */}
                <div className="space-y-3"> {/* Tambahkan space-y-3 untuk jarak antar elemen di dalam kolom */}
                    {/* Judul Responsif */}
                    <h3 className="text-xl md:text-2xl font-bold">PSC VIRTUAL TOUR</h3>

                    <div className="flex items-center"> {/* Hapus mb-4 */}
                        {/* Ukuran Logo Responsif */}
                        <img src="/logo.png" alt="PSC Logo" className="h-12 md:h-16 w-auto mr-3" />
                    </div>

                    {/* Teks Slogan Responsif */}
                    <p className="text-sm md:text-base leading-relaxed"> {/* Hapus mt-4 */}
                        "Temukan pengalaman wisata kota yang unik,<br className="hidden sm:inline" />
                        penuh warna, dan selalu seru di PSC."
                    </p>
                </div>

                {/* Kolom 2: Kontak Kami (Akan menjadi Baris 2 di HP) */}
                {/* Hapus mt-4 md:mt-0, biarkan gap-y yang menanganinya */}
                <div>
                    <h3 className="text-lg md:text-xl font-bold mb-4">Kontak Kami:</h3>

                    {/* Teks Info Alamat/Dinas Responsif */}
                    <p className="mb-2 text-sm md:text-base text-green-400 font-bold">Dinas Komunikasi dan Informatika</p>
                    <p className="mb-4 text-sm md:text-base text-green-400 font-bold">Jl. Perintis Kemerdekaan No. 32 Madiun</p>

                    {/* Email */}
                    <div className="flex items-center mb-2">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                        <p className="text-sm md:text-base">Awak Sigap</p>
                    </div>

                    {/* Telepon */}
                    <div className="flex items-center mb-4">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                        <p className="text-sm md:text-base font-bold">(0351) 467327</p>
                    </div>

                    {/* Sosial Media Icons */}
                    <div className="flex space-x-4 mt-6">
                        <Facebook className="w-5 h-5 md:w-6 md:h-6 hover:text-green-300 transition cursor-pointer" />
                        <Instagram className="w-5 h-5 md:w-6 md:h-6 hover:text-green-300 transition cursor-pointer" />
                        <Youtube className="w-5 h-5 md:w-6 md:h-6 hover:text-green-300 transition cursor-pointer" />
                    </div>
                </div>

            </div>


            {/* Bagian Copyright */}
            <div className="bg-black/20 py-3 md:py-4 mt-4 md:mt-8">
                <div className="max-w-7xl mx-auto px-4 text-center text-xs md:text-sm font-bold">
                    © Copyright 2025 Diskominfo Kota Madiun
                </div>
            </div>

        </footer>
    );
};

export default Footer;