// src/pages/VirtualTourPage.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoBox from "../components/InfoBox";
import PanoramaVideoPlayer from "../components/PanoramaVideoPlayer";
import { useLocation, useNavigate } from "react-router-dom";

const VirtualTourPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { videoPath, title, description } = location.state || {};

    const VIDEO_PATH = location.state?.videoPath ?? "/jalan pahlawan 5Mbps.mp4"; // default

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="max-w-7xl mx-auto px-4 mt-6 sm:mt-10 flex-grow w-full pb-12 relative">

                {/* Tombol Back */}
                <div className="text-right mb-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#f0e6c9] text-black text-sm font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#d8c29b] transition"
                    >
                        Back
                    </button>
                </div>

                {/* ✅ Judul dan Deskripsi destinasi */}
                <div className="text-center mb-6 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-200">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 drop-shadow-sm">
                        {title || "Virtual Tour"}
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                        {description || "Nikmati pengalaman virtual 360° yang imersif."}
                    </p>
                </div>

                {/* Pemutar Video 360 */}
                <PanoramaVideoPlayer videoPath={VIDEO_PATH} />

                <InfoBox />
            </main>

            <Footer />
        </div>
    );
};

export default VirtualTourPage;