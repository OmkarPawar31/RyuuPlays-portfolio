import React, { useState, useEffect } from 'react';
import { MailIcon, YouTubeIcon } from './Icons';
import { ChannelLogo } from './ChannelLogo';
import { CHANNEL_INFO } from '../data/videos';

interface NavbarProps {
  onOpenInquiry: () => void;
  logoSrc?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, logoSrc }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Community', href: '#community' },
    { label: 'Featured', href: '#featured' },
    { label: 'Videos', href: '#videos' },
    { label: 'About', href: '#about' },
    { label: 'Metrics', href: '#metrics' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="navbar-dropdown"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        backgroundColor: scrolled ? 'rgba(16, 17, 20, 0.96)' : 'rgba(16, 17, 20, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <style>{`
        @keyframes navDropDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          65% {
            transform: translateY(3px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .navbar-dropdown {
          animation: navDropDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Brand */}
        <a
          href="#"
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-red)',
            }}
          >
            <ChannelLogo size={30} src={logoSrc} color="var(--accent-red)" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              {CHANNEL_INFO.name}
            </div>
            <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              {CHANNEL_INFO.subscribers}
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                transition: 'color var(--transition-fast)',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex' }}
            title="YouTube Channel"
          >
            <YouTubeIcon size={15} />
            <span className="hide-mobile">YouTube</span>
          </a>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={onOpenInquiry}
          >
            <MailIcon size={14} />
            <span>Contact</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sharp)',
              backgroundColor: 'var(--bg-secondary)',
            }}
          >
            <div style={{ width: '18px', height: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ width: '100%', height: '2px', backgroundColor: 'currentColor' }} />
              <span style={{ width: '100%', height: '2px', backgroundColor: 'currentColor' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '16px 24px 20px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  padding: '6px 0',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
