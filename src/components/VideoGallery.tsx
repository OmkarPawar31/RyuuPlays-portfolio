import React, { useState, useRef, useEffect } from 'react';
import type { VideoItem, VideoCategory } from '../types';
import { PlayIcon, SearchIcon, EyeIcon, ClockIcon, SlidersIcon } from './Icons';

interface VideoGalleryProps {
  videos: VideoItem[];
  onPlayVideo: (video: VideoItem) => void;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ videos, onPlayVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'views' | 'newest' | 'duration'>('views');
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories: { id: VideoCategory; label: string }[] = [
    { id: 'all', label: 'All Videos' },
    { id: 'minecraft-smp', label: 'Minecraft SMP' },
    { id: 'valorant', label: 'Valorant' },
    { id: 'minecraft-guides', label: 'Guides & Shorts' },
    { id: 'events-pvp', label: 'Events & PvP' },
  ];

  // Intersection Observer for section entry animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredVideos = React.useMemo(() => {
    return videos
      .filter((video) => {
        const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
        const matchesSearch =
          video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'views') return b.rawViews - a.rawViews;
        if (sortBy === 'newest') return b.publishTimestamp - a.publishTimestamp;
        if (sortBy === 'duration') return b.duration.localeCompare(a.duration);
        return 0;
      });
  }, [videos, selectedCategory, searchQuery, sortBy]);

  useEffect(() => {
    if (!sectionVisible || filteredVideos.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setActiveDeckIndex((index) => (index + 1) % filteredVideos.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [sectionVisible, filteredVideos.length]);

  const moveDeck = (direction: -1 | 1) => {
    setActiveDeckIndex((index) => (index + direction + filteredVideos.length) % filteredVideos.length);
  };

  return (
    <section
      id="videos"
      ref={sectionRef}
      style={{
        padding: '96px 0',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'rgba(16,17,20,0.72)',
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <style>{`
        .video-deck-stage {
          position: relative;
          min-height: 480px;
          perspective: 1400px;
          transform-style: preserve-3d;
          isolation: isolate;
        }
        .arrow-btn {
          transition: opacity 0.2s ease, transform 0.15s ease, background 0.2s ease;
        }
        .arrow-btn:hover { transform: scale(1.1); background: rgba(217,56,41,0.22) !important; }
        .arrow-btn:active { transform: scale(0.94); }
        .vid-card {
          transition: border-color 0.4s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease !important;
          cursor: pointer;
          transform-style: preserve-3d;
          transform-origin: 50% 50%;
        }
        .vid-card:hover, .vid-card:focus-within {
          border-color: var(--accent-red) !important;
          filter: brightness(1.12);
          z-index: 30 !important;
        }
        .vid-thumb-img {
          transition: transform 0.35s ease, filter 0.35s ease;
          filter: brightness(0.82);
        }
        .vid-thumb:hover .vid-thumb-img { transform: scale(1.04); filter: brightness(0.96); }
        .vid-play-btn {
          opacity: 0;
          transition: opacity 0.22s ease, transform 0.22s ease;
          transform: scale(0.8);
        }
        .vid-thumb:hover .vid-play-btn { opacity: 1; transform: scale(1); }
        .filter-tab {
          transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease, transform 0.15s ease;
        }
        .filter-tab:hover { transform: translateY(-1px); }
        @media (max-width: 700px) {
          .video-deck-stage { min-height: 450px; }
          .vid-card { width: min(88vw, 320px) !important; }
          .video-toolbar {
            width: 100%;
            margin-left: 0 !important;
            flex-wrap: wrap;
          }
          .video-toolbar > div:first-child { flex: 1 1 190px; }
          .video-toolbar input { width: 100% !important; }
          .arrow-btn[data-direction="left"] { left: 0 !important; }
          .arrow-btn[data-direction="right"] { right: 0 !important; }
        }
        @media (max-width: 480px) {
          .video-deck-stage { min-height: 420px; }
          .vid-card { min-height: 400px !important; }
          .vid-card p { display: none; }
          .vid-card > div:last-child { padding: 16px !important; }
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div
          style={{
            marginBottom: '36px',
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          <span className="section-kicker">Broadcast Library</span>
          <h2 className="section-title">Videos &amp; Gallery</h2>
          <p className="section-description">
            Browse all streams, ranked matches, SMP adventures, and guides from the archive.
          </p>
        </div>

        {/* Filter Controls */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '32px',
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className="filter-tab"
                  onClick={() => { setSelectedCategory(cat.id); setActiveDeckIndex(0); }}
                  style={{
                    padding: '8px 18px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    backgroundColor: active ? 'var(--accent-red)' : 'transparent',
                    color: active ? '#fff' : 'var(--text-muted)',
                    border: `1px solid ${active ? 'var(--accent-red)' : 'var(--border-subtle)'}`,
                    borderRadius: 'var(--radius-sharp)',
                    cursor: 'pointer',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}

            {/* Spacer + Search + Sort */}
            <div className="video-toolbar" style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                  <SearchIcon size={14} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setActiveDeckIndex(0); }}
                  placeholder="Search videos..."
                  style={{
                    padding: '8px 12px 8px 32px',
                    backgroundColor: 'rgba(23,24,29,0.7)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sharp)',
                    color: 'var(--text-primary)',
                    fontSize: '0.8rem',
                    outline: 'none',
                    width: '200px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-red)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <SlidersIcon size={13} />
                <select
                  value={sortBy}
                  onChange={(e) => { setSortBy(e.target.value as 'views' | 'newest' | 'duration'); setActiveDeckIndex(0); }}
                  style={{
                    backgroundColor: 'rgba(23,24,29,0.7)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sharp)',
                    padding: '7px 10px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="views">Most Viewed</option>
                  <option value="newest">Latest</option>
                  <option value="duration">Runtime</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ── Carousel Container ─────────────────────────────────────── */}
        <div
          style={{
            position: 'relative',
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          }}
        >
          {/* Left Arrow */}
          <button
            type="button"
            className="arrow-btn"
            data-direction="left"
            onClick={() => moveDeck(-1)}
            aria-label="Show previous videos"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '2px',
              background: 'rgba(16,17,20,0.88)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: filteredVideos.length > 1 ? 1 : 0.25,
              pointerEvents: filteredVideos.length > 1 ? 'all' : 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            className="arrow-btn"
            data-direction="right"
            onClick={() => moveDeck(1)}
            aria-label="Show next videos"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '2px',
              background: 'rgba(16,17,20,0.88)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: filteredVideos.length > 1 ? 1 : 0.25,
              pointerEvents: filteredVideos.length > 1 ? 'all' : 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Rotating 3D deck: three cards are visible in front while the rest recede behind. */}
          {filteredVideos.length === 0 ? (
            <div style={{ padding: '64px 24px', textAlign: 'center', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sharp)' }}>
              <h3 style={{ marginBottom: '8px' }}>No videos match</h3>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setActiveDeckIndex(0); }}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              className="video-deck-stage"
              style={{
                overflow: 'hidden',
              }}
            >
              {filteredVideos.map((video, i) => {
                const total = filteredVideos.length;
                const forwardDistance = (i - activeDeckIndex + total) % total;
                const deckSlot = forwardDistance > total / 2 ? forwardDistance - total : forwardDistance;
                const distance = Math.abs(deckSlot);
                const visibleAtFront = distance <= 1;
                const horizontalOffset = deckSlot * 340;
                const depth = visibleAtFront ? 40 - distance * 30 : -260 - distance * 80;
                return (
                <article
                  key={video.id}
                  className="vid-card"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    width: '320px',
                    minHeight: '430px',
                    zIndex: 20 - distance,
                    backgroundColor: 'rgba(23,24,29,0.82)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sharp)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: sectionVisible ? (visibleAtFront ? 1 - distance * 0.18 : Math.max(0.03, 0.22 - distance * 0.05)) : 0,
                    pointerEvents: visibleAtFront ? 'auto' : 'none',
                    transform: sectionVisible
                      ? `translate3d(calc(-50% + ${horizontalOffset}px), ${distance * 16}px, ${depth}px) rotateY(${-deckSlot * 22}deg) rotateZ(${-deckSlot * 2}deg) scale(${visibleAtFront ? 1 - distance * 0.06 : 0.72})`
                      : 'translate3d(-50%, 48px, -300px) scale(0.72)',
                    transition: `opacity 0.85s ease, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease`,
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className="vid-thumb"
                    style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', cursor: 'pointer' }}
                    onClick={() => onPlayVideo(video)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') onPlayVideo(video); }}
                    aria-label={`Play: ${video.title}`}
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="vid-thumb-img"
                      draggable={false}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />

                    {/* Duration badge */}
                    <div style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'rgba(13,14,17,0.92)', color: 'var(--text-primary)', fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', border: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <ClockIcon size={11} />
                      <span>{video.duration}</span>
                    </div>

                    {/* Category */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                      <span className="badge-tag" style={{ textTransform: 'capitalize' }}>
                        {video.category.replace(/-/g, ' ')}
                      </span>
                    </div>

                    {/* Hover Play button */}
                    <div
                      className="vid-play-btn"
                      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) scale(0.8)', width: '52px', height: '52px', backgroundColor: 'rgba(217,56,41,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.3)' }}
                    >
                      <PlayIcon size={22} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                          <EyeIcon size={12} /> {video.views} Views
                        </span>
                        <span>•</span>
                        <span>{video.uploadDate}</span>
                      </div>

                      <h3 style={{ fontSize: '1.05rem', lineHeight: 1.35, marginBottom: '8px', cursor: 'pointer' }} onClick={() => onPlayVideo(video)}>
                        {video.title}
                      </h3>

                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        {video.description}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', marginTop: '14px', flexWrap: 'wrap', gap: '6px' }}>
                      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        {video.tags.slice(0, 2).map((t) => (
                          <span key={t} style={{ fontSize: '0.68rem', color: 'var(--text-muted)', padding: '2px 7px', border: '1px solid var(--border-subtle)' }}>
                            #{t}
                          </span>
                        ))}
                      </div>
                      <button type="button" className="btn btn-secondary btn-sm" onClick={() => onPlayVideo(video)}>
                        <PlayIcon size={13} />
                        <span>Watch</span>
                      </button>
                    </div>
                  </div>
                </article>
                );
              })}
            </div>
          )}

          {/* Deck position controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '16px' }}>
            {filteredVideos.slice(0, 8).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show video ${i + 1}`}
                onClick={() => setActiveDeckIndex(i)}
                style={{
                  height: '6px',
                  borderRadius: '1px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: i === activeDeckIndex ? 'var(--accent-red)' : 'var(--border-strong)',
                  width: i === activeDeckIndex ? '16px' : '6px',
                  transition: 'background 0.2s ease, width 0.2s ease',
                  padding: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-red)'; e.currentTarget.style.width = '16px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--border-strong)'; e.currentTarget.style.width = '6px'; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
