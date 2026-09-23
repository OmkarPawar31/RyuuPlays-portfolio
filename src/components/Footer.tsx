import React from 'react';
import { CHANNEL_INFO } from '../data/videos';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '64px',
        paddingBottom: '48px',
      }}
    >
      <div className="container">
        {/* Top Split */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '32px',
            paddingBottom: '48px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Left Brand Identity */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--accent-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-sharp)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                }}
              >
                R
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                {CHANNEL_INFO.name}
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {CHANNEL_INFO.tagline}. Independent creator media studio dedicated to deep-dive gaming narratives and mechanical frame telemetry.
            </p>
          </div>

          {/* Quick Section Jump Links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '16px' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
                <li>
                  <a href="#featured" style={{ color: 'var(--text-secondary)' }}>Showcase Video</a>
                </li>
                <li>
                  <a href="#videos" style={{ color: 'var(--text-secondary)' }}>Video Archives</a>
                </li>
                <li>
                  <a href="#about" style={{ color: 'var(--text-secondary)' }}>Channel Story</a>
                </li>
                <li>
                  <a href="#metrics" style={{ color: 'var(--text-secondary)' }}>Audience Metrics</a>
                </li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '16px' }}>
                Business Desk
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
                <li>
                  <a href="#contact" style={{ color: 'var(--text-secondary)' }}>Collaboration Booking</a>
                </li>
                <li>
                  <a href="#community" style={{ color: 'var(--text-secondary)' }}>Community Guild</a>
                </li>
                <li>
                  <span style={{ color: 'var(--text-muted)' }}>Location: {CHANNEL_INFO.businessLocation}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {CHANNEL_INFO.name}. All rights reserved. All featured game trademarks belong to their respective publishers.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              padding: '6px 12px',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sharp)',
              backgroundColor: 'var(--bg-secondary)',
            }}
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
