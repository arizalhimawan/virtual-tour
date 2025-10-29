// src/components/LocationSection.tsx (FINAL FIX - TINGGI MINIMALIS HP)

import React from 'react';

const LocationSection: React.FC = () => {
    // Lokasi yang di-embed: Pahlawan Street Center, Madiun.
    const mapEmbedUrl = "https://maps.google.com/maps?q=Pahlawan+Street+Center+Kota+Madiun&t=&z=16&ie=UTF8&iwloc=&output=embed";

    return (
        // Kontainer utama dengan padding dan margin responsif
        <div className="max-w-5xl mx-auto px-4 mt-12 md:mt-16 pb-12 md:pb-16">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-10">
                PSC Location
            </h2>

            {/* Container Peta */}
            <div className="rounded-xl overflow-hidden shadow-2xl">

                {/* KUNCI PERBAIKAN: Tinggi adaptif. H-64 di HP (256px) - Paling kecil yang proporsional */}
                <div className="w-full h-64 md:h-[500px] lg:h-[550px]">
                    <iframe
                        title="Pahlawan Street Center Location"
                        // Memastikan iframe mengisi 100% lebar dan tinggi
                        className="w-full h-full"
                        src={mapEmbedUrl}
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default LocationSection;