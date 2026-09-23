import React from 'react';
import { SOCIAL_LINKS } from '../data/videos';
import { YouTubeIcon, DiscordIcon, InstagramIcon, TwitchIcon, SteamIcon, ExternalLinkIcon } from './Icons';

export const SocialHub: React.FC = () => {
  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'yt-channel':
        return <YouTubeIcon size={22} />;
      case 'discord-hub':
        return <DiscordIcon size={22} />;
      case 'instagram-hq':
        return <InstagramIcon size={20} />;
      case 'twitch-streams':
        return <TwitchIcon size={20} />;
      case 'steam-curator':
        return <SteamIcon size={20} />;
      default:
        return <ExternalLinkIcon size={20} />;
    }
  };

  return (
    <section id="community" className="section-wrapper" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-kicker">Network & Ecosystem</span>
          <h2 className="section-title">Community & Social Links</h2>
          <p className="section-description">
            Connect across active community hubs for live research sessions, gameplay streams, and behind-the-scenes production updates.
          </p>
        </div>

        {/* 2-Column Responsive Grid (No 3-card rows) */}
        <div className="grid-2col">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-panel reveal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                transitionDelay: `${idx * 75}ms`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: 'var(--bg-primary)',
                    border: link.logoImg ? '2px solid rgba(88, 101, 242, 0.4)' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sharp)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    flexShrink: 0,
                    overflow: 'hidden',
                    boxShadow: link.logoImg ? '0 0 16px rgba(88, 101, 242, 0.25)' : 'none',
                  }}
                >
                  {link.logoImg ? (
                    <img
                      src={link.logoImg}
                      alt={`${link.handle} server logo`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    getSocialIcon(link.id)
                  )}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                      {link.platform}
                    </h3>
                    <span className="badge-tag" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                      {link.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{link.handle}</strong> • <span style={{ color: 'var(--text-muted)' }}>{link.followers}</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                }}
              >
                <ExternalLinkIcon size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
