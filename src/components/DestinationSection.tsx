// src/components/DestinationSection.tsx (FINAL FIX - GRID 2 KOLOM SELALU AKTIF)

import React from 'react';
import { useNavigate } from 'react-router-dom';
import libertyImage from '../assets/liberty.jpg';
import kaabaImage from '../assets/kabah.jpg';
import eiffelImage from '../assets/paris.jpg';
import merlionImage from '../assets/merlion.jpg';

// Data simulasi untuk kartu destinasi (dibiarkan sama)
const destinations = [
    {
        'name': 'Patung Liberty',
        'image': libertyImage,
        'desc': 'Jelajahi ikon Patung Liberty melalui VR tour interaktif',
        'alt': 'Patung Liberty'
    },
    {
        'name': "Ka'bah",
        'image': kaabaImage,
        'desc': 'Jelajahi ikon Ka\'bah melalui VR tour interaktif',
        'alt': 'Ka\'bah'
    },
    {
        'name': 'Menara Eiffel',
        'image': eiffelImage,
        'desc': 'Jelajahi ikon Menara Eiffel melalui VR tour interaktif',
        'alt': 'Menara Eiffel'
    },
    {
        'name': 'Patung Merlion',
        'image': merlionImage,
        'desc': 'Jelajahi ikon Patung Merlion melalui VR tour interaktif',
        'alt': 'Patung Merlion'
    },
];

const DestinationSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        // Padding dan margin vertikal disesuaikan agar lebih proporsional
        <div className="max-w-5xl mx-auto px-4 mt-12 md:mt-16 pb-12 md:pb-16">


            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-2">
                PSC Destinations
            </h2>


            <p className="text-center text-sm md:text-base text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
                Jelajahi destinasi dunia di PSC Virtual Tour: Mekah, Paris, Amerika, Singapura, dan berbagai spot menarik lainnya!
            </p>


            {/* PERUBAHAN KRITIS: grid-cols-2 selalu aktif */}
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-10">

                {destinations.map((dest, index) => (
                    <div key={index} className="flex flex-col">

                        <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 mb-2">
                            <img
                                src={dest.image}
                                alt={dest.alt}
                                // Tinggi Gambar Responsif (diperkecil di HP)
                                className="w-full h-24 sm:h-40 md:h-52 object-cover"
                            />
                        </div>


                        {/* Judul & Deskripsi Dibuat Lebih Kecil di HP */}
                        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mt-1">{dest.name}</h3>

                        <p className="text-xs text-gray-500 mb-3">{dest.desc}</p>

                        <button
                            onClick={() =>
                                navigate('/tour', {
                                    state: {
                                        videoPath:
                                            index === 0
                                                ? '/liberty 5Mbps.mp4'
                                                : index === 1
                                                    ? '/kakbah 5Mbps.mp4'
                                                    : index === 2
                                                        ? '/eiffel 5Mbps.mp4'
                                                        : '/merlion 5Mbps.mp4',
                                    },
                                })
                            }
                            // Tombol Dibuat Sangat Kecil di HP
                            className="w-fit px-3 py-1 bg-[#f0e6c9] text-xs font-semibold text-black rounded-lg shadow-md hover:bg-[#d8c29b] transition duration-300"
                        >
                            START VR TOUR
                        </button>

                    </div>
                ))}
            </div>


            {/* Tombol EXPLORE MORE */}
            <div className="text-center mt-12 md:mt-16">
                <button
                    onClick={() => navigate('/destinations')}
                    className="bg-green-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg hover:bg-green-800 transition duration-300 text-sm md:text-base"
                >
                    EXPLORE MORE DESTINATION
                </button>
            </div>

        </div>
    );
};

export default DestinationSection;