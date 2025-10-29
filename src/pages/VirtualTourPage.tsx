// src/pages/VirtualTourPage.tsx (FINAL FIX: VIDEO PATH)

import React, { useEffect, useRef, useState } from "react";
import * as PANOLENS from "panolens";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoBox from "../components/InfoBox";
import { useNavigate } from "react-router-dom";

// Hapus Deklarasi Global/CDN jika Anda menggunakan NPM Panolens
// Jika Anda menggunakan CDN, hapus baris import * as PANOLENS dan gunakan declare global

// KRITIS: PATH DIUBAH KE WEBM YANG SUDAH DI-INJECT
const VIDEO_PATH = "/cobaa.webm";

const VirtualTourPage: React.FC = () => {
    const navigate = useNavigate();
    const viewerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null); // Elemen video tersembunyi
    const [isViewerReady, setIsViewerReady] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const viewerInstance = useRef<any | null>(null);
    const panoramaInstance = useRef<any | null>(null);

    const handleStartVideo = () => {
        // Cek dulu apakah Panolens sudah diinisialisasi
        if (!videoRef.current) return;

        const videoElement = videoRef.current;
        videoElement.muted = false;
        videoElement.play()
            .then(() => setIsVideoPlaying(true))
            .catch((e) => alert("Gagal play video. Perlu izin media."));
    };

    useEffect(() => {
        if (!viewerRef.current || !videoRef.current) return;

        const PANOLENS = window.PANOLENS;
        if (!PANOLENS) {
            console.error("KRITIS: PANOLENS (CDN) belum dimuat!");
            return;
        }

        const videoElement = videoRef.current;

        // 1. OPSI PANOLENS (Gunakan elemen video yang sudah ada)
        const videoOptions = {
            loop: true,
            muted: true,
            playsinline: true,
            crossOrigin: "anonymous",
            videoElement: videoElement // Hubungkan ke elemen video DOM
        };

        const panorama = new PANOLENS.VideoPanorama(VIDEO_PATH, videoOptions);
        panoramaInstance.current = panorama;

        const viewer = new PANOLENS.Viewer({ container: viewerRef.current, autoHideInfospot: false, controlBar: true, cameraFov: 75, });
        viewerInstance.current = viewer;
        viewer.add(panorama);

        // 2. EVENT LISTENER UNTUK MEMASTIKAN TEXTURE SIAP
        const onVideoReady = () => {
            console.log("Video texture is ready! Setting texture to panorama.");
            panorama.setVideoTexture(videoElement);
            setIsViewerReady(true);
            videoElement.play().catch(() => { }); // Coba play muted

            videoElement.removeEventListener('canplaythrough', onVideoReady);
        };

        videoElement.addEventListener('error', (e) => {
            console.error("DIAGNOSTIC: Video failed to load/decode.", e);
            alert("Video gagal dimuat. Periksa 360 metadata dan codec.");
        });

        videoElement.addEventListener('canplaythrough', onVideoReady);
        videoElement.load(); // Panggil load() untuk memulai pemuatan

        return () => { if (viewerInstance.current) { viewerInstance.current.dispose(); } };
    }, []);

    const handleBack = () => navigate(-1);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="max-w-7xl mx-auto px-4 mt-6 sm:mt-10 flex-grow w-full pb-12 relative">

                {/* Tombol Back */}
                <div className="text-right mb-4">
                    <button onClick={handleBack} className="bg-[#f0e6c9] text-black text-sm font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#d8c29b] transition">
                        Back
                    </button>
                </div>

                {/* Judul dan Deskripsi Container */}
                <div className="flex flex-col items-center mb-4 text-center">
                    {/* ... Judul/Deskripsi ... */}
                </div>

                {/* ELEMEN VIDEO TERSEMBUNYI (Memaksa Load CORS) */}
                <video
                    ref={videoRef}
                    src={VIDEO_PATH}
                    crossOrigin="anonymous"
                    playsInline loop muted preload="auto"
                    className="hidden"
                />

                {/* Kontainer untuk tampilan 360 */}
                <div
                    ref={viewerRef}
                    className="w-full rounded-xl overflow-hidden shadow-2xl relative"
                    style={{ height: "24rem" }}
                    data-height-responsive="md:h-[500px] lg:h-[700px]"
                >
                    {/* Overlay START TOUR */}
                    {isViewerReady && !isVideoPlaying && (
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-20 p-4">
                            <p className="text-white text-lg sm:text-xl text-center mb-6">Klik untuk memulai pengalaman Virtual Tour (diperlukan oleh browser).</p>
                            <button onClick={handleStartVideo} className="bg-red-600 text-white text-lg sm:text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105">
                                Start Tour
                            </button>
                            <p className="text-gray-400 text-sm mt-4 text-center">Video akan diputar dalam mode Mute.</p>
                        </div>
                    )}

                    {!isViewerReady && (
                        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-30">
                            <div className="text-white text-xl sm:text-2xl">Memuat Virtual Tour...</div>
                        </div>
                    )}
                </div>

                <InfoBox />
            </main>
            <Footer />
        </div>
    );
};

export default VirtualTourPage;