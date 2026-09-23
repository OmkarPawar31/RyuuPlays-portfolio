import React from 'react';
import { CHANNEL_INFO, FEATURED_VIDEO } from '../data/videos';
import { PlayIcon, MailIcon, ClockIcon } from './Icons';

interface HeroSectionProps {
  onPlayFeatured: () => void;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayFeatured, onOpenInquiry }) => {
  return (
    <section
      className="hero-section"
      style={{
        paddingTop: '120px',
        paddingBottom: '60px',
        borderBottom: '1px solid var(--border-subtle)',
        backgroundColor: 'transparent',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <style>{`
        /* Avatar bounces in from above */
        @keyframes avatarDrop {
          0%   { opacity: 0; transform: translateY(-90px) scale(0.8); }
          55%  { opacity: 1; transform: translateY(14px)  scale(1.05); }
          74%  { transform: translateY(-7px) scale(0.97); }
          88%  { transform: translateY(4px)  scale(1.01); }
          100% { opacity: 1; transform: translateY(0px)  scale(1); }
        }

        /* Continuous gentle levitating floating animation */
        @keyframes pfpFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
            box-shadow: 0 4px 20px rgba(217, 56, 41, 0.25), 0 0 10px rgba(217, 56, 41, 0.15);
          }
          50% {
            transform: translateY(-12px) rotate(1.5deg) scale(1.02);
            box-shadow: 0 16px 36px rgba(217, 56, 41, 0.45), 0 0 20px rgba(217, 56, 41, 0.3);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
            box-shadow: 0 4px 20px rgba(217, 56, 41, 0.25), 0 0 10px rgba(217, 56, 41, 0.15);
          }
        }

        /* Title shakes and drops */
        @keyframes titleShakeDrop {
          0%   { opacity: 0; transform: translateY(-70px) rotate(-4deg); }
          18%  { opacity: 1; transform: translateY(20px)  rotate(2.5deg); }
          34%  { transform: translateY(-12px) rotate(-1.8deg); }
          50%  { transform: translateY(9px)   rotate(1deg); }
          66%  { transform: translateY(-5px)  rotate(-0.6deg); }
          80%  { transform: translateY(3px)   rotate(0.3deg); }
          92%  { transform: translateY(-1px)  rotate(0deg); }
          100% { opacity: 1; transform: translateY(0px)   rotate(0deg); }
        }

        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0px); }
        }

        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.85) translateY(12px); }
          70%  { transform: scale(1.05) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0px); }
        }

        .hero-avatar-wrap {
          animation: avatarDrop 0.95s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          animation-delay: 0.1s;
        }
        .hero-avatar-floating {
          animation: pfpFloat 4s ease-in-out infinite alternate;
          transition: transform 0.3s ease;
        }
        .hero-avatar-floating:hover {
          transform: scale(1.06) translateY(-14px) !important;
        }
        .hero-word {
          animation: titleShakeDrop 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: calc(0.3s + var(--word-index) * 0.12s);
          display: inline-block;
          margin-right: 0.24em;
        }
        .hero-handle {
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.9s;
        }
        .hero-tagline {
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 1.0s;
        }
        .hero-buttons {
          animation: popIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          animation-delay: 1.1s;
        }
        .hero-quick-stats {
          animation: fadeSlideUp 0.5s ease both;
          animation-delay: 1.25s;
        }
        .hero-telemetry {
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 1.45s;
        }

        .hero-stat-divider {
          border-left: 1px solid var(--border-subtle);
          border-right: 1px solid var(--border-subtle);
        }
      `}</style>

      <div className="hero-parallax-bg" data-parallax-speed="-0.02" aria-hidden="true">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid-lines" />
      </div>

      <div className="container hero-content-parallax" data-parallax-speed="-0.06" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        {/* ── Avatar — Entry animation + Continuous Floating ── */}
        <div className="hero-avatar-wrap" style={{ marginBottom: '24px' }}>
          <div
            className="hero-avatar-floating"
            style={{
              width: '148px',
              height: '148px',
              borderRadius: 'var(--radius-sharp)',
              overflow: 'hidden',
              border: '2px solid var(--accent-red)',
              backgroundColor: '#0A0B0E',
              cursor: 'pointer',
            }}
          >
            <img
              src={CHANNEL_INFO.logoSrc || '/logo.png'}
              alt="RyuPlays Official Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Channel Name ── */}
        <h1 className="hero-title" style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.035em', marginBottom: '8px', color: 'var(--text-primary)' }}>
          {CHANNEL_INFO.name.split(' ').map((word, index) => (
            <span className="hero-word" style={{ '--word-index': index } as React.CSSProperties} key={word}>{word}</span>
          ))}
        </h1>

        {/* ── Handle row ── */}
        <div
          className="hero-handle"
          style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>{CHANNEL_INFO.handle}</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>{CHANNEL_INFO.subscribers} Subscribers</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>{CHANNEL_INFO.totalVideos} Videos</span>
        </div>

        {/* ── Tagline ── */}
        <p
          className="hero-tagline"
          style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: 1.6, marginBottom: '28px' }}
        >
          {CHANNEL_INFO.tagline}
        </p>

        {/* ── CTA Buttons ── */}
        <div
          className="hero-buttons"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}
        >
          <button type="button" className="btn btn-primary" onClick={onPlayFeatured}>
            <PlayIcon size={16} />
            <span>Watch Featured</span>
          </button>
          <a href="#videos" className="btn btn-secondary">
            <span>Explore Library</span>
          </a>
          <button type="button" className="btn btn-ghost" onClick={onOpenInquiry}>
            <MailIcon size={16} />
            <span>Inquire</span>
          </button>
        </div>

        {/* ── Quick Stats Strip (no box, just a thin line separator) ── */}
        <div
          className="hero-quick-stats hero-quick-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            width: '100%',
            maxWidth: '480px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '48px',
          }}
        >
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '4px' }}>Total Views</div>
            <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{CHANNEL_INFO.totalViews}</div>
          </div>
          <div className="hero-stat-divider" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '4px' }}>Avg Retention</div>
            <div style={{ fontWeight: 800, color: 'var(--accent-red)', fontSize: '1.1rem' }}>64.8%</div>
          </div>
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '4px' }}>Schedule</div>
            <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.9rem' }}>Tue &amp; Sat</div>
          </div>
        </div>

        {/* ── Telemetry Bar (3 cards, no outer box) ── */}
        <div
          className="hero-telemetry hero-telemetry-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            width: '100%',
            maxWidth: '960px',
          }}
        >
          {[
            { label: 'Community Reach', value: CHANNEL_INFO.subscribers, sub: 'Organic gaming enthusiasts' },
            { label: 'Lifetime Views', value: CHANNEL_INFO.totalViews, sub: 'Across 230+ broadcasts' },
            { label: 'Top Production', value: `${FEATURED_VIDEO.views} Views`, sub: `${FEATURED_VIDEO.duration} Runtime`, accent: true },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: '18px 22px',
                backgroundColor: 'rgba(23,24,29,0.75)',
                border: '1px solid var(--border-subtle)',
                textAlign: 'left',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
            >
              <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                {item.label}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: item.accent ? 'var(--accent-red)' : 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {item.accent && <ClockIcon size={13} />}
                {item.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '3px' }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
