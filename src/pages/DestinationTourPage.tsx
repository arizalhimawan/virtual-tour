// src/pages/DestinationTourPage.tsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PanoramaVideoPlayer from "../components/PanoramaVideoPlayer";
import Footer from '../components/Footer';

const tourData: { [key: string]: { title: string, description: string, videoPath: string } } = {

    'patung-liberty': {
        title: 'Patung Liberty',
        description: 'Menampilkan miniatur ikonik Patung Liberty yang menjadi simbol kebebasan dan persahabatan. Suasana Amerika menjadikannya tempat favorit untuk berswafoto.',
        videoPath: '/liberty 5Mbps.mp4'
    },
    'big-ben': {
        title: 'Big Ben',
        description: 'Miniatur menara jam Big Ben, simbol London yang megah. Tampilkan foto Anda dengan latar belakang Inggris yang klasik.',
        videoPath: '/jalan sepanjang monumen 5Mbps.mp4'
    },
    'ka-bah': {
        title: 'Ka\'bah',
        description: 'Miniatur Ka\'bah yang membawa nuansa Mekah di jantung kota Madiun. Tempat yang unik untuk merasakan suasana suci.',
        videoPath: '/kakbah 5Mbps.mp4'
    },
    'menara-eiffel': {
        title: 'Menara Eiffel',
        description: 'Menampilkan miniatur ikonik Menara Eiffel yang menampilkan suasana romantis ala Kota Paris. Pilihan favorit untuk berswafoto.',
        videoPath: '/eiffel 5Mbps.mp4'
    },
    'patung-merlion': {
        title: 'Patung Merlion',
        description: 'Patung Merlion yang megah membawa suasana Singapura di PSC. Ikon yang sempurna untuk latar belakang foto Anda.',
        videoPath: '/merlion 5Mbps.mp4'
    },
    'kereta-cepat-shinkansen': {
        title: 'Kereta Cepat Shinkansen',
        description: 'Miniatur kereta cepat Shinkansen Jepang yang melambangkan kecepatan dan kemajuan teknologi. Cocok untuk penggemar fotografi transportasi.',
        videoPath: '/timur merlion 5Mbps.mp4'
    },
    'kincir-angin': {
        title: 'Kincir Angin Belanda',
        description: 'Ikonik Kincir Angin yang membawa nuansa pedesaan Belanda. Latar yang unik untuk foto dengan kesan Eropa yang damai.',
        videoPath: '/jalan sepanjang monumen 5Mbps.mp4'
    },
    'london-bridge': {
        title: 'London Bridge',
        description: 'Miniatur London Bridge yang menampilkan nuansa klasik Eropa. Rasakan atmosfer Inggris tanpa harus ke London.',
        videoPath: '/jalan sepanjang monumen 5Mbps.mp4'
    },
};

const DestinationTourPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const data = id ? tourData[id] : null;

    // Logic: Menangani data tidak ditemukan (Sangat Responsif)
    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-4">
                        Destinasi Tidak Ditemukan
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Kami tidak dapat menemukan destinasi dengan ID: <span className="font-mono text-red-700">{id}</span>
                    </p>
                    <button onClick={() => navigate('/destinations')} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
                        Kembali ke Daftar Destinasi
                    </button>
                </main>
                <Footer />
            </div>
        );
    }

    const handleBack = () => navigate(-1);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            <Header />

            {/* Main container memusatkan konten dan memberikan padding vertikal */}
            <main className="max-w-4xl mx-auto px-4 w-full flex-grow py-8 sm:py-12">

                {/* 2. JUDUL DAN TOMBOL BACK */}
                {/* Gunakan Flex untuk mengatur judul dan tombol. items-start agar sejajar. */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-3 sm:space-y-0">

                    {/* Judul: Lebih kecil di HP (text-2xl) dan lebih besar di layar lainnya (sm:text-3xl) */}
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center sm:text-left w-full sm:w-auto order-2 sm:order-1">
                        Virtual Tour: {data.title}
                    </h1>

                    <button
                        onClick={handleBack}
                        className="bg-blue-600 text-white text-base font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition w-full sm:w-auto order-1 sm:order-2"
                    >
                        &larr; Kembali
                    </button>
                </div>
                
                {/* 3. PEMUTAR VIDEO 360 */}
                <PanoramaVideoPlayer videoPath={data.videoPath} />

                {/* 4. DESKRIPSI DINAMIS */}
                {/* Menggunakan padding vertikal dan ukuran teks yang nyaman */}
                <div className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-inner">
                    <h2 className="text-xl font-semibold mb-2 text-center">Tentang {data.title}</h2>
                    <p className="leading-relaxed text-justify">
                        {data.description}
                    </p>
                </div>

            </main>

            <Footer />

        </div>
    );
};

export default DestinationTourPage;