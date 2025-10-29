// src/components/AboutSection.tsx (FINAL FIX - JUDUL RATA KIRI)

import React from 'react';
import aboutImage from '../assets/psc.jpg';

const AboutSection: React.FC = () => {
    return (

        <div className="max-w-7xl mx-auto mt-12 md:mt-16 px-4">


            <div className="bg-gray-100 py-10 md:py-16 rounded-xl md:rounded-2xl shadow-xl">

                <div className="px-4 md:px-8 lg:px-12">

                    {/* Judul 1: ABOUT - Hapus text-center, ganti menjadi text-left default */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 text-left">
                        ABOUT
                    </h2>

                    {/* Judul 2: PSC VIRTUAL TOUR - Hapus text-center, ganti menjadi text-left default */}
                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-6 md:mb-8 text-left">
                        PSC VIRTUAL TOUR
                    </p>

                    {/* Konten 2 Kolom (Grid 2 Kolom Selalu Aktif) */}
                    <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">

                        {/* KOLOM KIRI: DESKRIPSI (Rata Kiri secara default) */}
                        <div className="text-gray-600 space-y-3 text-xs sm:text-sm md:text-base text-left">
                            <p>
                                PSC Virtual Tour hadir untuk memudahkan menjelajahi kawasan Pahlawan Street Center tanpa batasan ruang dan waktu. Kami menggunakan teknologi fotografi 360 derajat.
                            </p>
                            <p>
                                Tujuan utama kami adalah memberikan platform yang interaktif dan menarik bagi pengunjung. Jelajahi tempat-tempat ikonik dan nikmati pengalaman virtual yang unik!
                            </p>
                        </div>

                        {/* KOLOM KANAN: GAMBAR */}
                        <div className="rounded-xl shadow-2xl overflow-hidden">
                            <img
                                src={aboutImage}
                                alt="Pahlawan Street Center Night View"
                                className="w-full h-auto max-h-40 sm:max-h-56 md:max-h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;