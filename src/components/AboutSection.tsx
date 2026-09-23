import React from 'react';
import { CHANNEL_INFO, UPLOAD_SCHEDULE, CONTENT_PILLARS, PRODUCTION_STANDARDS } from '../data/videos';
import { ClockIcon } from './Icons';
import {
  ThreeDStoryIcon,
  ThreeDScheduleIcon,
  ThreeDStudioMonolithIcon,
  ThreeDVoxelCubeIcon,
  ThreeDTargetPrismIcon,
  ThreeDShieldCrestIcon,
  ThreeDGuideShardIcon,
} from './ThreeDIcons';

export const AboutSection: React.FC = () => {
  const getNiche3DIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ThreeDVoxelCubeIcon size={36} />;
      case 1:
        return <ThreeDTargetPrismIcon size={36} />;
      case 2:
        return <ThreeDShieldCrestIcon size={36} />;
      case 3:
        return <ThreeDGuideShardIcon size={36} />;
      default:
        return <ThreeDVoxelCubeIcon size={36} />;
    }
  };

  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-kicker">Channel Story</span>
          <h2 className="section-title">About Ryuu Plays</h2>
          <p className="section-description">
            Content philosophy, gaming pillars, and weekly stream schedule.
          </p>
        </div>

        {/* 2-Column Split: Channel Story & Production Pipeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: '24px',
            marginBottom: '40px',
          }}
          className="about-split-grid"
        >
          {/* Left: Channel Story with 3D Story Codex Icon */}
          <div className="card-panel reveal-left" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span className="badge-tag badge-tag-accent">
                Est. {CHANNEL_INFO.establishedYear}
              </span>
              <ThreeDStoryIcon size={46} />
            </div>

            <h3 style={{ fontSize: '1.45rem', lineHeight: 1.3, marginBottom: '16px' }}>
              Gaming Journey & Story
            </h3>

            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>
                {CHANNEL_INFO.tagline} Focused on interactive multiplayer survival SMPs, custom heart lifesteal battles, and competitive <strong>Valorant ranked grinds</strong>.
              </p>
              <p>
                With over 230+ broadcasts and a growing guild of 1,000+ subscribers, our streams are centered around genuine community gameplay, interactive server events, and aim mastery.
              </p>
            </div>
          </div>

          {/* Right: Studio Environment with 3D Studio Monolith Icon */}
          <div className="card-panel reveal-right" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span className="badge-tag">
                  Stream Rig
                </span>
                <ThreeDStudioMonolithIcon size={44} />
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '16px' }}>
                Broadcast Setup
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {PRODUCTION_STANDARDS.map((item) => (
                  <div
                    key={item.spec}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sharp)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-red)', fontWeight: 700 }}>
                      {item.spec}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Niche (4-Column Grid with 3D Icons) */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '20px' }}>
            <span className="section-kicker">Content Focus</span>
            <h3 style={{ fontSize: '1.35rem' }}>Gaming Niches</h3>
          </div>

          <div className="grid-4col">
            {CONTENT_PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`card-panel reveal reveal-d${(index % 4) + 1}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '20px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                      0{index + 1}
                    </span>
                    {getNiche3DIcon(index)}
                  </div>

                  <h4 style={{ fontSize: '1rem', lineHeight: 1.3, marginBottom: '8px' }}>
                    {pillar.title}
                  </h4>

                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {pillar.summary}
                  </p>
                </div>

                <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.725rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    {pillar.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Schedule (2-Column Grid with 3D Clock Cube Icon) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <span className="section-kicker">Cadence</span>
              <h3 style={{ fontSize: '1.35rem' }}>Broadcast Schedule</h3>
            </div>
            <ThreeDScheduleIcon size={46} />
          </div>

          <div className="grid-2col">
            {UPLOAD_SCHEDULE.map((slot) => (
              <div
                key={slot.day}
                className="card-panel reveal"
                style={{
                  padding: '26px',
                  backgroundColor: 'var(--bg-primary)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="badge-tag badge-tag-accent">
                    {slot.day}
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--bg-secondary)',
                      padding: '4px 8px',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sharp)',
                      fontWeight: 600,
                    }}
                  >
                    <ClockIcon size={12} />
                    <span>{slot.timeUtc}</span>
                  </div>
                </div>

                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {slot.format}
                </h4>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {slot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
