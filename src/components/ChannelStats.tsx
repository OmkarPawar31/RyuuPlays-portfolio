import React from 'react';
import { CHANNEL_STATS } from '../data/videos';
import { ThreeDAnalyticsIcon } from './ThreeDIcons';

export const ChannelStats: React.FC = () => {
  return (
    <section id="metrics" className="section-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-kicker">Channel Telemetry & Reach</span>
            <h2 className="section-title">Audience Intelligence & Performance</h2>
            <p className="section-description">
              Transparent engagement and viewership metrics from verified YouTube Creator Studio.
            </p>
          </div>
          <ThreeDAnalyticsIcon size={52} />
        </div>

        {/* 4-Column Metric Grid */}
        <div className="grid-4col">
          {CHANNEL_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="card-panel reveal"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    marginBottom: '10px',
                  }}
                >
                  {stat.label}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.value}
                </div>
              </div>

              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
