import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialHub } from './components/SocialHub';
import { FeaturedVideo } from './components/FeaturedVideo';
import { VideoGallery } from './components/VideoGallery';
import { AboutSection } from './components/AboutSection';
import { ChannelStats } from './components/ChannelStats';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { Floating3DBackground } from './components/Floating3DBackground';
import { FEATURED_VIDEO, VIDEO_GALLERY, CHANNEL_INFO } from './data/videos';
import type { VideoItem } from './types';

export const App: React.FC = () => {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax-speed]'));
    let frame: number | undefined;
    const update = () => {
      const scrollTop = window.scrollY;
      const available = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', String(available > 0 ? scrollTop / available : 0));
      // Direct scroll-to-transform mapping: equivalent to scrub: true + ease: none.
      if (!reducedMotion) parallaxItems.forEach((item) => {
        item.style.transform = `translate3d(0, ${scrollTop * Number(item.dataset.parallaxSpeed ?? 0)}px, 0)`;
      });
      frame = undefined;
    };
    const onScroll = () => { if (frame === undefined) frame = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, []);

  const handleOpenInquiry = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayVideo = (video: VideoItem) => {
    setActiveModalVideo(video);
  };

  const handleCloseModal = () => {
    setActiveModalVideo(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div className="scroll-progress" aria-hidden="true" />
      {/* 3D Isometric Floating Background Models — zIndex 2, blends over everything */}
      <Floating3DBackground logoSrc={CHANNEL_INFO.logoSrc} />

      {/* Sticky Header Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} logoSrc={CHANNEL_INFO.logoSrc} />

      {/* Main Content Sections — transparent backgrounds let bg icons show through */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {/* 1. Main Display / Hero Section */}
        <HeroSection
          onPlayFeatured={() => handlePlayVideo(FEATURED_VIDEO)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 2. Social Network Section (Placed directly below main display) */}
        <SocialHub />

        {/* 3. Featured Showcase */}
        <FeaturedVideo
          video={FEATURED_VIDEO}
          onPlay={handlePlayVideo}
        />

        {/* 4. Video & Broadcast Archives Gallery */}
        <VideoGallery
          videos={VIDEO_GALLERY}
          onPlayVideo={handlePlayVideo}
        />

        {/* 5. About Section with 3D Icons (Story, Niches, Broadcast Schedule) */}
        <AboutSection />

        {/* 6. Audience Telemetry & Metrics */}
        <ChannelStats />

        {/* 7. Collaboration & Business Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Embedded Video Player Modal — highest z-index */}
      <VideoModal
        video={activeModalVideo}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
