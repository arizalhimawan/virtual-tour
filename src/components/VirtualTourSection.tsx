// src/components/VirtualTourSection.tsx (RESPONSIVE)

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Data simulasi untuk 8 item video YouTube (Gunakan ID video yang valid)
const tourItems = [
    // ... (Data tetap sama)
    { title: 'Patung Liberty', desc: 'Jelajahi ikon Patung Liberty melalui VR tour interaktif', videoId: 'dQw4w9WgXcQ', image: '../assets/liberty.jpg' },
    { title: "Ka'bah", desc: 'Jelajahi ikon Ka\'bah melalui VR tour interaktif', videoId: 'jNQXAC9IVRw', image: '../assets/kabah.jpg' },
    { title: 'Menara Eiffel', desc: 'Jelajahi ikon Menara Eiffel melalui VR tour interaktif', videoId: '54ZaK9F96jM', image: '../assets/paris.jpg' },
    { title: 'Patung Merlion', desc: 'Jelajahi ikon Patung Merlion melalui VR tour interaktif', videoId: 'k4YRWT_aldU', image: '../assets/merlion.jpg' },
    { title: 'Big Ben', desc: 'Jelajahi ikon Big Ben melalui VR tour interaktif', videoId: 'Ukg_U_U_U_U', image: '../assets/bigbenn.jpg' },
    { title: 'Shanghai Tower', desc: 'Jelajahi ikon Shanghai Tower melalui VR tour interaktif', videoId: 'E_q_q_q_q_q', image: '../assets/psc.jpg' },
    { title: 'Taj Mahal', desc: 'Jelajahi ikon Taj Mahal melalui VR tour interaktif', videoId: 'F_r_r_r_r_r', image: '../assets/psc.jpg' },
    { title: 'Colosseum', desc: 'Jelajahi ikon Colosseum melalui VR tour interaktif', videoId: 'G_s_s_s_s_s', image: '../assets/psc.jpg' },
];

const VirtualTourSection: React.FC = () => {
    // Referensi ke elemen DOM
    const scrollRef = useRef<HTMLDivElement>(null);

    // Jarak scroll: Lebar Kartu (w-80 = 320px) + Jarak (space-x-6 = 24px). Total 344px.
    // Dibulatkan menjadi 350px untuk memastikan kartu berikutnya muncul penuh.
    const scrollDistance = 350;

    // 💡 FUNGSI GESER KIRI
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth'
            });
        }
    };

    // 💡 FUNGSI GESER KANAN
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollDistance,
                behavior: 'smooth'
            });
        }
    };

    // Fungsi untuk mendapatkan URL Embed YouTube
    const getEmbedUrl = (videoId: string) =>
        `https://www.youtube.com/embed/${videoId}?rel=0&amp;vq=hd1080&amp;modestbranding=1&amp;enablejsapi=1`; // Tambahkan JS API untuk kontrol yang lebih baik

    return (
        <div className="bg-gray-100 py-16 mt-0"> {/* Ubah warna background dan padding */}
            {/* Padding horizontal hanya diterapkan di sini untuk kontainer utama. */}
            <div className="max-w-7xl mx-auto">

                {/* Judul Responsif: text-2xl di HP, md:text-3xl di Tablet/Laptop */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 px-4">
                    360° Virtual Tour
                </h2>

                {/* Carousel Container */}
                <div className="relative">

                    {/* Scrollable Content */}
                    <div
                        ref={scrollRef}
                        // Di HP, beri padding kiri/kanan agar kartu pertama/terakhir tidak menempel di tepi
                        className="flex space-x-6 overflow-x-scroll snap-x snap-mandatory pb-4 scrollbar-hide px-4 lg:px-0"
                    >

                        {tourItems.map((item, index) => (
                            <div
                                key={index}
                                className="w-[85vw] sm:w-80 flex-shrink-0 snap-center rounded-xl shadow-xl transition hover:shadow-2xl overflow-hidden bg-white"
                            >

                                {/* Embed Video YouTube - Memanfaatkan Aspect Ratio Utility Tailwind */}
                                {/* Aspect 16/9: pt-[56.25%] */}
                                <div className="relative pt-[56.25%] w-full bg-black">
                                    <iframe
                                        // iframe harus absolute dan mengisi parent 16:9
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={getEmbedUrl(item.videoId)}
                                        title={`360 Virtual Tour: ${item.title}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr; fullscreen"
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>

                                {/* Deskripsi Kartu */}
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Tombol Navigasi (Overlay) - HANYA MUNCUL DI LAYAR MD KE ATAS */}
                    <button
                        onClick={scrollLeft}
                        className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full lg:-translate-x-1/2 p-3 bg-white/90 rounded-full shadow-xl hover:bg-white transition z-10"
                        style={{ marginLeft: '1rem' }} // Tambahkan margin di kiri
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full lg:translate-x-1/2 p-3 bg-white/90 rounded-full shadow-xl hover:bg-white transition z-10"
                        style={{ marginRight: '1rem' }} // Tambahkan margin di kanan
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default VirtualTourSection;