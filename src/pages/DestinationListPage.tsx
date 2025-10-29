// src/pages/DestinationListPage.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import libertyImage from "../assets/liberty.jpg";
import bigbenImage from "../assets/bigben.webp";
import kabahImage from "../assets/kabah.jpg";
import parisImage from "../assets/paris.jpg";
import merlionImage from "../assets/merlion.jpg";
import jepangImage from "../assets/jepang.jpg";
import kinciranginImage from "../assets/kincirangin.jpg";
import londonbridgeImage from "../assets/londonbridge.jpg";

const destinations = [
    { name: "Patung Liberty", desc: "Zona New York di PSC Kota Madiun menampilkan nuansa Amerika", image: libertyImage, alt: "Patung Liberty" },
    { name: "Big Ben", desc: "Zona London di PSC Kota Madiun menampilkan nuansa Inggris yang klasik", image: bigbenImage, alt: "Big Ben" },
    { name: "Ka'bah", desc: "Zona Mekah di PSC Kota Madiun menampilkan nuansa suci", image: kabahImage, alt: "Ka'bah" },
    { name: "Menara Eiffel", desc: "Zona Paris di PSC Kota Madiun menampilkan nuansa khas Paris", image: parisImage, alt: "Menara Eiffel" },
    { name: "Patung Merlion", desc: "Patung Merlion membawa suasana Singapura di PSC", image: merlionImage, alt: "Patung Merlion" },
    { name: "Kereta Cepat Shinkansen", desc: "Menampilkan nuansa teknologi cepat Jepang", image: jepangImage, alt: "Shinkansen" },
    { name: "Kincir Angin", desc: "Menampilkan nuansa Eropa pedesaan Belanda", image: kinciranginImage, alt: "Kincir Angin" },
    { name: "London Bridge", desc: "Miniatur jembatan ikonik yang membawa nuansa Inggris", image: londonbridgeImage, alt: "London Bridge" },
];

const DestinationListPage: React.FC = () => {
    const navigate = useNavigate();
    const createSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto pt-4 pb-16 px-4 lg:px-6">
                {/* Judul dan Tombol Back */}
                <div className="flex justify-between items-center mb-6 pt-4">
                    <h1 className="text-xl sm:text-3xl font-extrabold text-gray-900 flex-1 text-center">
                        PSC DESTINATION
                    </h1>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#f0e6c9] text-black text-sm font-bold py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-[#d8c29b] transition flex-shrink-0"
                    >
                        Back
                    </button>
                </div>

                {/* Deskripsi Peta */}
                <p className="text-center text-sm md:text-base text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
                    Jelajahi destinasi dunia di PSC Virtual Tour: Mekah, Paris, Amerika, Singapura, dan berbagai spot menarik lainnya!
                </p>

                {/* DAFTAR KARTU DESTINASI RESPONSIVE */}
                <div className="space-y-8">
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            // KRITIS: Mengunci Flexbox ke tampilan horizontal (row) di SEMUA UKURAN
                            className="flex items-center justify-between px-4 sm:px-8 py-6 bg-white rounded-3xl shadow-xl border border-gray-100 transition duration-300 hover:shadow-2xl"
                        >
                            {/* KONTEN TEKS DAN TOMBOL (Kolom Kiri) */}
                            {/* flex-grow agar mengambil ruang yang tersisa */}
                            <div className="flex-grow pr-4 sm:pr-10 flex flex-col items-start text-left">
                                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                                    {dest.name}
                                </h3>
                                <p className="text-sm md:text-lg text-gray-600 mb-4">
                                    {dest.desc}
                                </p>

                                <button
                                    onClick={() => navigate(`/tour/${createSlug(dest.name)}`)}
                                    // Tombol kecil di HP
                                    className="px-4 py-1 sm:px-6 sm:py-2 bg-green-700 text-white text-sm font-semibold rounded-lg shadow-md w-fit hover:bg-green-800 transition"
                                >
                                    Start VR Tour
                                </button>
                            </div>

                            {/* GAMBAR CONTAINER (Kolom Kanan) */}
                            {/* Kunci: Rasio 16:9 Landscape yang kecil */}
                            <div className="relative w-40 h-24 sm:w-48 sm:h-28 md:w-52 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.alt}
                                    // object-cover untuk mengisi penuh dan menghilangkan ruang putih
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>


            </main>

            <Footer />
        </div>
    );
};

export default DestinationListPage;