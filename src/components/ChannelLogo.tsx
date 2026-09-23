import React from 'react';

interface ChannelLogoProps {
  size?: number;
  className?: string;
  src?: string;
  color?: string;
}

export const ChannelLogo: React.FC<ChannelLogoProps> = ({
  size = 32,
  className = '',
  src,
  color = 'currentColor',
}) => {
  if (src) {
    return (
      <div
        className={className}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: 'var(--radius-sharp)',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          backgroundColor: '#0D0E10',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <img
          src={src}
          alt="RyuPlays Logo"
          width={size}
          height={size}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  }

  // Fallback geometric logo
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RyuPlays Logo"
    >
      <rect x="2" y="2" width="36" height="36" stroke={color} strokeWidth="2" fill="none" />
      <path
        d="M12 10H24C27.3137 10 30 12.6863 30 16C30 19.3137 27.3137 22 24 22H12V10Z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <path
        d="M20 22L28 30"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <path
        d="M12 10V30"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  );
};
