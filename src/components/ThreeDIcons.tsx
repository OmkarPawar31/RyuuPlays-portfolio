import React from 'react';

interface ThreeDIconProps {
  size?: number;
  className?: string;
}

// 3D Isometric Channel Story / Book Codex
export const ThreeDStoryIcon: React.FC<ThreeDIconProps> = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 3D Extruded Book Spine & Base */}
    <polygon points="6,12 24,6 42,12 42,34 24,40 6,34" fill="#161820" stroke="#363A48" strokeWidth="1.2" />
    <polygon points="6,12 24,6 24,38 6,34" fill="#222632" stroke="#D93829" strokeWidth="1" />
    <polygon points="24,6 42,12 42,34 24,38" fill="#1B1E27" stroke="#363A48" strokeWidth="1" />
    {/* 3D Pages Layer */}
    <polygon points="10,14 24,9 38,14 38,16 24,11 10,16" fill="#EDE9E3" fillOpacity="0.85" />
    <polygon points="10,18 24,13 38,18 38,20 24,15 10,20" fill="#EDE9E3" fillOpacity="0.6" />
    {/* Center Crimson Ribbon Bookmark */}
    <polygon points="23,6 25,6 25,26 24,24 23,26" fill="#D93829" />
  </svg>
);

// 3D Isometric Upload Schedule / Clock Cube
export const ThreeDScheduleIcon: React.FC<ThreeDIconProps> = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 3D Isometric Box Top & Faces */}
    <polygon points="24,4 42,14 24,24 6,14" fill="#242936" stroke="#D93829" strokeWidth="1" />
    <polygon points="6,14 24,24 24,44 6,34" fill="#191B24" stroke="#383D4D" strokeWidth="1.2" />
    <polygon points="24,24 42,14 42,34 24,44" fill="#14161E" stroke="#383D4D" strokeWidth="1.2" />
    {/* Clock Face on Top Isometric Plane */}
    <ellipse cx="24" cy="14" rx="10" ry="5.5" fill="#12141A" stroke="#EDE9E3" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="24" y1="14" x2="24" y2="10" stroke="#D93829" strokeWidth="1.2" />
    <line x1="24" y1="14" x2="29" y2="16" stroke="#EDE9E3" strokeWidth="1" />
    {/* Date Grid Accent on Front Left */}
    <rect x="10" y="24" width="3" height="3" fill="#D93829" />
    <rect x="15" y="26" width="3" height="3" fill="#EDE9E3" fillOpacity="0.5" />
    <rect x="10" y="29" width="3" height="3" fill="#EDE9E3" fillOpacity="0.5" />
    <rect x="15" y="31" width="3" height="3" fill="#D93829" />
  </svg>
);

// 3D Isometric Contact / Collaboration Capsule
export const ThreeDContactIcon: React.FC<ThreeDIconProps> = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 3D Envelope Base */}
    <polygon points="4,16 24,6 44,16 24,28" fill="#252A38" stroke="#383E4F" strokeWidth="1.2" />
    <polygon points="4,16 24,28 24,42 4,30" fill="#1A1C25" stroke="#D93829" strokeWidth="1" />
    <polygon points="44,16 24,28 24,42 44,30" fill="#15171F" stroke="#383E4F" strokeWidth="1.2" />
    {/* 3D Top Flap Open */}
    <polygon points="4,16 24,6 44,16 24,18" fill="#2E3445" stroke="#D93829" strokeWidth="1" />
    {/* Crimson Wax Seal Emblem */}
    <polygon points="21,21 27,21 27,27 21,27" fill="#D93829" stroke="#FFA399" strokeWidth="0.6" />
  </svg>
);

// 3D Minecraft Voxel Block (for Niche 1)
export const ThreeDVoxelCubeIcon: React.FC<ThreeDIconProps> = ({ size = 38, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="20,4 36,13 20,22 4,13" fill="#2D3342" stroke="#485064" strokeWidth="1" />
    <polygon points="4,13 20,22 20,36 4,27" fill="#1C1F28" stroke="#383E4E" strokeWidth="1" />
    <polygon points="20,22 36,13 36,27 20,36" fill="#15171E" stroke="#D93829" strokeWidth="1" />
    {/* Voxel pixel grid */}
    <polygon points="12,10 20,14 28,10 20,6" fill="#D93829" />
  </svg>
);

// 3D Valorant Target Prism (for Niche 2)
export const ThreeDTargetPrismIcon: React.FC<ThreeDIconProps> = ({ size = 38, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="20,2 38,12 20,38 2,12" fill="#1A1D26" stroke="#363C4C" strokeWidth="1" />
    <polygon points="20,2 38,12 20,20 2,12" fill="#252A37" stroke="#D93829" strokeWidth="1" />
    <circle cx="20" cy="18" r="5" fill="#14161D" stroke="#EDE9E3" strokeWidth="0.8" />
    <circle cx="20" cy="18" r="2" fill="#D93829" />
    <line x1="20" y1="10" x2="20" y2="26" stroke="#D93829" strokeWidth="1" strokeDasharray="2 1" />
  </svg>
);

// 3D Tournament Shield (for Niche 3)
export const ThreeDShieldCrestIcon: React.FC<ThreeDIconProps> = ({ size = 38, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="8,6 20,2 32,6 32,24 20,38 8,24" fill="#171A22" stroke="#363C4C" strokeWidth="1.2" />
    <polygon points="8,6 20,2 20,38 8,24" fill="#232835" stroke="#D93829" strokeWidth="1" />
    <polygon points="20,2 32,6 32,24 20,38" fill="#15171F" stroke="#363C4C" strokeWidth="1" />
    {/* Inner Star */}
    <polygon points="20,12 22,17 27,17 23,20 25,25 20,22 15,25 17,20 13,17 18,17" fill="#D93829" />
  </svg>
);

// 3D Guide Shard (for Niche 4)
export const ThreeDGuideShardIcon: React.FC<ThreeDIconProps> = ({ size = 38, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="20,2 34,14 20,38 6,14" fill="#262C3A" stroke="#424A5C" strokeWidth="1" />
    <polygon points="20,2 34,14 20,24" fill="#303748" stroke="#FFA399" strokeWidth="0.8" />
    <polygon points="20,2 6,14 20,24" fill="#D93829" />
    <polygon points="6,14 20,38 20,24" fill="#1A1C25" stroke="#363C4C" strokeWidth="1" />
    <polygon points="34,14 20,38 20,24" fill="#15171E" stroke="#363C4C" strokeWidth="1" />
  </svg>
);

// 3D Studio Production Monolith
export const ThreeDStudioMonolithIcon: React.FC<ThreeDIconProps> = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="24,4 40,12 24,20 8,12" fill="#2C3242" stroke="#485166" strokeWidth="1" />
    <polygon points="8,12 24,20 24,44 8,36" fill="#1D212C" stroke="#D93829" strokeWidth="1" />
    <polygon points="24,20 40,12 40,36 24,44" fill="#151720" stroke="#3A4050" strokeWidth="1.2" />
    {/* Sound Wave Telemetry Stripes */}
    <line x1="12" y1="24" x2="20" y2="28" stroke="#D93829" strokeWidth="1.5" />
    <line x1="12" y1="28" x2="20" y2="32" stroke="#EDE9E3" strokeWidth="1.2" />
    <line x1="12" y1="32" x2="20" y2="36" stroke="#EDE9E3" strokeWidth="1.2" />
  </svg>
);

// 3D Audience Intelligence / Analytics Chart
export const ThreeDAnalyticsIcon: React.FC<ThreeDIconProps> = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Base Grid */}
    <polygon points="24,10 44,20 24,30 4,20" fill="#181B24" stroke="#363A48" strokeWidth="1.2" />
    {/* Bar 1 3D */}
    <polygon points="12,18 17,15 17,29 12,32" fill="#1F232F" stroke="#3A4050" strokeWidth="0.8" />
    <polygon points="12,18 17,15 15,14 10,17" fill="#2E3445" />
    {/* Bar 2 3D (Middle Peak) */}
    <polygon points="22,10 27,7 27,27 22,30" fill="#2A2F3E" stroke="#D93829" strokeWidth="1" />
    <polygon points="22,10 27,7 25,6 20,9" fill="#D93829" />
    {/* Bar 3 3D */}
    <polygon points="32,14 37,11 37,25 32,28" fill="#1F232F" stroke="#3A4050" strokeWidth="0.8" />
    <polygon points="32,14 37,11 35,10 30,13" fill="#2E3445" />
  </svg>
);
