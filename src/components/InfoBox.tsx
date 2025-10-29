// src/components/InfoBox.tsx (FINAL FIX - STACKED & CENTERED)

import React from 'react';
import { Clock, MapPin, Zap } from 'lucide-react';

const InfoBox: React.FC = () => {
      return (
            // Container Utama: max-w-3xl agar terpusat dan rapi di desktop
            <div className="bg-[#006400] text-white max-w-3xl mx-auto p-6 md:p-8 lg:p-10 rounded-xl shadow-2xl mt-10 md:mt-16">

                  {/* Judul Box: text-center default */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-yellow-300 text-center mb-6">
                        Informasi Pengunjung
                  </h3>

                  {/* Deskripsi: Dibuat terpusat */}
                  <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed text-center">
                        Buka setiap hari dari pukul 07.00 hingga 23.00. Pahlawan Street Center merupakan tempat jalan-jalan, berkumpul bersama keluarga, menikmati kuliner.
                  </p>

                  {/* KUNCI PERBAIKAN: Hapus Grid. Gunakan Flexbox Kolom Biasa dan pusatkan UL. */}
                  {/* max-w-sm mx-auto memastikan daftar tidak merentang ke seluruh lebar di desktop */}
                  <ul className="space-y-4 text-base md:text-lg max-w-sm mx-auto">

                        {/* Konten Daftar 1: Jam Buka */}
                        <li className="flex items-start">
                              <Clock className="w-5 h-5 mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                              <span><span className="font-bold">Jam Buka:</span> 07.00 - 23.00</span>
                        </li>

                        {/* Konten Daftar 2: Lokasi */}
                        <li className="flex items-start">
                              <MapPin className="w-5 h-5 mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                              <span><span className="font-bold">Lokasi:</span> Jalan Pahlawan, Kota Madiun</span>
                        </li>

                        {/* Konten Daftar 3: Fasilitas */}
                        <li className="flex items-start">
                              <Zap className="w-5 h-5 mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                              <span><span className="font-bold">Fasilitas:</span> Pusat kuliner, spot foto</span>
                        </li>
                  </ul>
            </div>
      );
};

export default InfoBox;