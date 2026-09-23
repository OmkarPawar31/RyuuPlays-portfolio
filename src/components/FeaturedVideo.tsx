import React from 'react';
import type { VideoItem } from '../types';
import { PlayIcon, EyeIcon, ClockIcon, StatsIcon, ExternalLinkIcon } from './Icons';

interface FeaturedVideoProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
}

export const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ video, onPlay }) => {
  return (
    <section id="featured" className="section-wrapper" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-kicker">Showcase & Masterpiece</span>
          <h2 className="section-title">Highlighted Top-Performing Production</h2>
          <p className="section-description">
            Our most acclaimed investigative documentary, detailing FromSoftware architectural narrative systems and spatial worldbuilding.
          </p>
        </div>

        {/* 2-Column Split Showcase Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: '32px',
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sharp)',
            padding: '32px',
          }}
          className="featured-grid reveal"
        >
          {/* Left Column: Video Poster & Interactive Trigger */}
          <div
            className="featured-media scroll-scale reveal"
            style={{
              position: 'relative',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sharp)',
              overflow: 'hidden',
              cursor: 'pointer',
              aspectRatio: '16 / 9',
            }}
            onClick={() => onPlay(video)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPlay(video);
              }
            }}
            aria-label={`Play video: ${video.title}`}
          >
            {/* Thumbnail Image */}
            <img
              className="featured-thumbnail"
              src={video.thumbnailUrl}
              alt={video.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.85) contrast(1.05)',
                transition: 'transform 0.4s ease, filter 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.filter = 'brightness(0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(0.85)';
              }}
            />

            {/* Top Badges */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px' }}>
              <span className="badge-tag badge-tag-accent">Flagship Lore Analysis</span>
              <span className="badge-tag badge-tag-gold">Top Ranked</span>
            </div>

            {/* Bottom Duration Badge */}
            <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
              <div
                style={{
                  backgroundColor: 'rgba(16, 17, 20, 0.92)',
                  color: 'var(--text-primary)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-sharp)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <ClockIcon size={14} />
                <span>{video.duration}</span>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '64px',
                height: '64px',
                backgroundColor: 'rgba(217, 56, 41, 0.95)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-sharp)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #FFFFFF',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
              }}
            >
              <PlayIcon size={26} />
            </div>
          </div>

          {/* Right Column: In-depth Editorial Telemetry */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {video.tags.map((tag) => (
                  <span key={tag} className="badge-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.625rem',
                  lineHeight: 1.25,
                  marginBottom: '16px',
                  color: 'var(--text-primary)',
                }}
              >
                {video.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                {video.description}
              </p>

              {/* Performance Metric Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  padding: '16px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sharp)',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <EyeIcon size={12} /> Total Views
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                    {video.views}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <StatsIcon size={12} /> Retention
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-red)', marginTop: '2px' }}>
                    {video.retentionRate}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ClockIcon size={12} /> Published
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                    {video.uploadDate}
                  </div>
                </div>
              </div>

              {/* Key Highlight quote */}
              {video.keyHighlight && (
                <div
                  style={{
                    padding: '12px 16px',
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sharp)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: '24px',
                  }}
                >
                  <strong style={{ color: 'var(--text-primary)' }}>Industry Reception: </strong>
                  {video.keyHighlight}
                </div>
              )}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onPlay(video)}
              >
                <PlayIcon size={16} />
                <span>Launch Embedded Player</span>
              </button>

              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLinkIcon size={16} />
                <span>Open on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* The page intentionally has one pinned showcase to avoid scroll jank. */
        .featured-media {
          position: sticky !important;
          top: 108px;
          align-self: start;
        }
        @media (max-width: 900px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-media {
            position: relative !important;
            top: auto;
          }
        }
      `}</style>
    </section>
  );
};
