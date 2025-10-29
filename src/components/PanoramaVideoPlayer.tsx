// src/components/PanoramaVideoPlayer.tsx (Solusi Paling Stabil untuk Video)

import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens'; // Sekarang diimpor tanpa error TypeScript!

interface PanoramaVideoPlayerProps {
    videoPath: string;
    heightClass?: string;
}

const PanoramaVideoPlayer: React.FC<PanoramaVideoPlayerProps> = ({ videoPath, heightClass = "h-[24rem]" }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const viewerRef = useRef<PANOLENS.Viewer | null>(null);
    const panoramaRef = useRef<PANOLENS.VideoPanorama | null>(null);
    const videoElementRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!containerRef.current || viewerRef.current) return;

        const viewer = new PANOLENS.Viewer({
            container: containerRef.current,
            autoRotate: true,
            controlBar: true, // Biarkan Panolens menampilkan control bar
        });
        viewerRef.current = viewer;

        const panorama = new PANOLENS.VideoPanorama(videoPath, {
            autoplay: true, // Panolens akan coba autoplay
            muted: true,    // Harus muted agar autoplay diizinkan
            loop: true,
            crossOrigin: 'anonymous',
        });
        panoramaRef.current = panorama;
        viewer.add(panorama);

        // Simpan referensi ke elemen video HTML yang dibuat Panolens
        const videoEl = panorama.videoElement;
        if (videoEl) {
            videoElementRef.current = videoEl;
            // Diagnostic untuk melihat apakah Panolens berhasil memuat video
            videoEl.addEventListener('error', () => {
                console.error("DIAGNOSTIC: Video failed to load. Check path, codec, and 360 metadata!");
                alert("Gagal memuat video 360. Periksa file dan metadata.");
            });
        }


        // Bersihkan instance Panolens saat komponen dilepas
        return () => {
            if (viewerRef.current) {
                viewerRef.current.dispose();
                viewerRef.current = null;
            }
        };
    }, [videoPath]);

    // Tombol overlay untuk mengaktifkan suara (diperlukan karena video mulai muted)
    const handleUnmute = () => {
        if (videoElementRef.current) {
            videoElementRef.current.muted = false;
            // Coba play lagi (beberapa browser memerlukan ini setelah unmute)
            videoElementRef.current.play();
        }
    };

    return (
        <div className="virtual-tour-wrapper relative">
            <div
                ref={containerRef}
                className={`w-full ${heightClass} rounded-xl overflow-hidden shadow-2xl relative`}
            >
                {/* Panolens akan menginjeksi canvas di sini */}
            </div>

            {/* Tombol Unmute Sederhana (Contoh Interaksi User) */}
            {videoElementRef.current && videoElementRef.current.muted && (
                <button
                    onClick={handleUnmute}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-white/70 text-black rounded z-20"
                >
                    Klik untuk Mengaktifkan Suara 🔊
                </button>
            )}
        </div>
    );
};

export default PanoramaVideoPlayer;