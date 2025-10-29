// src/components/GallerySection.tsx (RESPONSIVE)

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import libertyImage from '../assets/liberty.jpg';
import kaabaImage from '../assets/kabah.jpg';

const galleryItems = [
    { title: 'Patung Liberty', image: libertyImage },
    { title: "Ka'bah View", image: kaabaImage },
    { title: "Eiffel View", image: kaabaImage },
    { title: "Merlion View", image: kaabaImage },
    { title: "Big Ben View", image: kaabaImage },
    { title: "Shinkansen View", image: kaabaImage },
    { title: "Kincir Angin View", image: kaabaImage },
    { title: "London Bridge View", image: kaabaImage },
];

const GallerySection: React.FC = () => {
    // Jarak scroll disesuaikan dengan lebar kartu + gap
    const scrollRef = useRef<HTMLDivElement>(null); 
    const scrollDistance = 350; 

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gray-100 py-12 md:py-16 mt-12 md:mt-16">
            <div className="max-w-7xl mx-auto">
                
                {/* Judul Responsif: text-2xl di HP, md:text-3xl di Tablet/Laptop */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 px-4">
                    Gallery at PSC
                </h2>

                {/* Carousel Container */}
                <div className="relative">
                    
                    {/* Scrollable Content (KUNCI RESPONSIVITAS) */}
                    <div 
                        ref={scrollRef} 
                        // Di HP: Beri padding horizontal agar kartu pertama tidak menempel di tepi layar
                        className="flex space-x-6 overflow-x-scroll snap-x snap-mandatory pb-4 scrollbar-hide px-4 lg:px-0"
                    >
                        
                        {galleryItems.map((item, index) => (
                            <div 
                                key={index} 
                                // Lebar Kartu Responsif: w-[85vw] di HP, sm:w-80 di Tablet ke atas
                                className="w-[85vw] sm:w-80 flex-shrink-0 snap-center rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden bg-white"
                            >
                                {/* Gambar Galeri */}
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    // Tinggi gambar responsif: h-48 di HP, md:h-64 di Tablet ke atas
                                    className="w-full h-48 md:h-64 object-cover" 
                                />
                                {/* Label opsional di bawah gambar */}
                                <div className="p-3 text-center">
                                    <p className="text-sm text-gray-700">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tombol Navigasi (Overlay) - HANYA MUNCUL DI LAYAR MD KE ATAS */}
                    <button 
                        onClick={scrollLeft} 
                        // hidden md:block: Tombol disembunyikan di HP
                        className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full lg:-translate-x-1/2 p-3 bg-white/90 rounded-full shadow-xl hover:bg-white transition z-10"
                        style={{ marginLeft: '1rem' }}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    
                    <button 
                        onClick={scrollRight} 
                        // hidden md:block: Tombol disembunyikan di HP
                        className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full lg:translate-x-1/2 p-3 bg-white/90 rounded-full shadow-xl hover:bg-white transition z-10"
                        style={{ marginRight: '1rem' }}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default GallerySection;