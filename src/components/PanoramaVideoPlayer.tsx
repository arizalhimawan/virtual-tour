// src/components/PanoramaVideoPlayer.tsx
import React, { useEffect, useRef, useState } from "react";

interface PanoramaVideoPlayerProps {
  videoPath: string;
}

const PanoramaVideoPlayer: React.FC<PanoramaVideoPlayerProps> = ({ videoPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const panoramaRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [uiState, setUiState] = useState({
    started: false,
    ready: false,
    muted: true,
  });

  // 🧹 Cleanup saat keluar halaman
  useEffect(() => {
    return () => {
      console.log("🧹 Cleaning up Panolens...");
      try {
        const pano = panoramaRef.current;
        const viewer = viewerRef.current;
        const video = videoRef.current;

        if (video) {
          video.pause();
          video.src = "";
          video.load();
        }

        pano?.dispose?.();
        viewer?.dispose?.();

        panoramaRef.current = null;
        viewerRef.current = null;
        videoRef.current = null;
      } catch (e) {
        console.warn("⚠️ Error cleaning up:", e);
      }
    };
  }, []);

  const handleStart = () => {
    if (uiState.started) return; // ⛔ Cegah klik berulang
    setUiState((s) => ({ ...s, started: true }));

    const PANOLENS = (window as any).PANOLENS;
    if (!PANOLENS || !containerRef.current) {
      console.error("❌ PANOLENS belum dimuat!");
      return;
    }

    console.log("✅ PANOLENS loaded:", PANOLENS.VERSION);

    const panorama = new PANOLENS.VideoPanorama(videoPath, {
      autoplay: true,
      loop: true,
      muted: true,
      crossOrigin: "anonymous",
      playsinline: true,
    });

    const viewer = new PANOLENS.Viewer({
      container: containerRef.current,
      controlBar: true,
      cameraFov: 75,
      autoHideInfospot: false,
      deviceOrientationControl: true,
    });

    viewer.add(panorama);

    panorama.addEventListener("enter-fade-start", () => {
      console.log("🎬 Video loaded!");
      videoRef.current = panorama.videoElement;
      setUiState((s) => ({ ...s, ready: true }));
    });

    panoramaRef.current = panorama;
    viewerRef.current = viewer;
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setUiState((s) => ({ ...s, muted: video.muted }));
    }
  };

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black"
      style={{ height: "70vh" }}
    >
      {/* Tempat viewer */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Overlay Start Tour */}
      {!uiState.started && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-40">
          <p className="text-white text-lg sm:text-xl text-center mb-6">
            Klik untuk memulai pengalaman Virtual Tour.
          </p>
          <button
            onClick={handleStart}
            className="bg-red-600 text-white text-lg sm:text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105"
          >
            Start Tour
          </button>
          <p className="text-gray-400 text-sm mt-4 text-center">
            Video akan diputar dalam mode Mute.
          </p>
        </div>
      )}

      {/* Overlay Loading */}
      {uiState.started && !uiState.ready && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-30">
          <p className="text-white text-lg sm:text-xl animate-pulse">
            Memuat Virtual Tour...
          </p>
        </div>
      )}

      {/* Tombol suara */}
      {uiState.ready && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 bg-black bg-opacity-60 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-opacity-80 transition"
        >
          {uiState.muted ? "🔇" : "🔊"}
        </button>
      )}
    </div>
  );
};

export default PanoramaVideoPlayer;