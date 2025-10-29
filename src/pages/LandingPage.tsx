// src/pages/LandingPage.tsx

import React from 'react';

// Import SEMUA komponen yang membentuk halaman utama
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import DestinationSection from '../components/DestinationSection';
import VirtualTourSection from '../components/VirtualTourSection';
import LocationSection from '../components/LocationSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
    return (
        // Wrapper utama halaman. Antialiased dan overflow-x-hidden (Penting untuk AOS)
        <div className="min-h-screen antialiased overflow-x-hidden">

            {/* 1. HEADER (Paling Atas) */}
            <Header />

            {/* Container Utama Konten Halaman */}
            <main>

                {/* 2. HERO BANNER - Animasi Dikerjakan di dalam HeroBanner.tsx */}
                <HeroBanner />

                {/* 3. ABOUT SECTION - Animasi Fade Up */}
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
                    <AboutSection />
                </div>

                {/* 4. DESTINATION SECTION - Animasi Fade Up dengan sedikit delay */}
                <div data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-once="true">
                    <DestinationSection />
                </div>

                {/* 5. VIRTUAL TOUR SECTION (Carousel 360°) - Animasi Slide dari Kiri */}
                <div data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-out" data-aos-once="true">
                    <VirtualTourSection />
                </div>

                {/* 6. LOCATION SECTION (Embed Maps) - Animasi Zoom In */}
                <div data-aos="zoom-in" data-aos-delay="400" data-aos-easing="ease-in-out" data-aos-once="true">
                    <LocationSection />
                </div>

                {/* 7. GALLERY SECTION (Carousel Foto) - Animasi Slide dari Kanan */}
                <div data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-once="true">
                    <GallerySection />
                </div>

            </main>

            {/* 8. FOOTER (Paling Bawah) - Animasi Fade Up dengan delay yang lebih panjang */}
            <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out" data-aos-once="true">
                <Footer />
            </div>

        </div>
    );
};

export default LandingPage;