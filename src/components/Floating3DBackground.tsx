import React, { useMemo } from 'react';

/* ─── 3D Icon Renderers ──────────────────────────────────────────────── */

const MinecraftBlock = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="26,4 48,16 26,28 4,16" fill="#2A3040" stroke="#D93829" strokeWidth="1.4" />
    <polygon points="4,16 26,28 26,48 4,36" fill="#161820" stroke="#3A4050" strokeWidth="1.2" />
    <polygon points="48,16 26,28 26,48 48,36" fill="#1E2230" stroke="#3A4050" strokeWidth="1.2" />
    <rect x="18" y="11" width="5" height="5" fill="#D93829" opacity="0.9" />
    <rect x="28" y="8" width="4" height="4" fill="#EDE9E3" opacity="0.5" />
    <rect x="32" y="13" width="3" height="3" fill="#D93829" opacity="0.5" />
  </svg>
);

const ValCrosshair = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#3A4050" strokeWidth="1.5" fill="none" />
    <circle cx="30" cy="30" r="15" stroke="#D93829" strokeWidth="1.2" fill="none" />
    <line x1="30" y1="4"  x2="30" y2="18" stroke="#EDE9E3" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="30" y1="42" x2="30" y2="56" stroke="#EDE9E3" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="4"  y1="30" x2="18" y2="30" stroke="#EDE9E3" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="42" y1="30" x2="56" y2="30" stroke="#EDE9E3" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="30" cy="30" r="3.5" fill="#D93829" />
    <line x1="12" y1="12" x2="18" y2="18" stroke="#D93829" strokeWidth="1.8" opacity="0.9" />
    <line x1="48" y1="12" x2="42" y2="18" stroke="#D93829" strokeWidth="1.8" opacity="0.9" />
    <line x1="12" y1="48" x2="18" y2="42" stroke="#D93829" strokeWidth="1.8" opacity="0.9" />
    <line x1="48" y1="48" x2="42" y2="42" stroke="#D93829" strokeWidth="1.8" opacity="0.9" />
  </svg>
);

const KatanaBlade = () => (
  <svg width="44" height="74" viewBox="0 0 44 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,2 34,58 22,68 10,58" fill="#1E2230" stroke="#3A4050" strokeWidth="1.3" />
    <polygon points="22,2 34,58 22,68" fill="#2A2F40" stroke="#D93829" strokeWidth="1.2" />
    <polygon points="22,2 10,58 22,68" fill="#14161E" stroke="#3A4050" strokeWidth="1.2" />
    <line x1="22" y1="4" x2="22" y2="60" stroke="#EDE9E3" strokeWidth="1.5" opacity="0.6" />
    <ellipse cx="22" cy="58" rx="10" ry="4" fill="#D93829" opacity="0.85" />
    <ellipse cx="22" cy="57" rx="10" ry="4" fill="#C02818" stroke="#D93829" strokeWidth="1.2" />
    <rect x="19" y="61" width="6" height="10" fill="#1A1C24" stroke="#3A4050" strokeWidth="0.9" />
    <line x1="19" y1="63.5" x2="25" y2="63.5" stroke="#D93829" strokeWidth="1" opacity="0.7" />
    <line x1="19" y1="67" x2="25" y2="67" stroke="#D93829" strokeWidth="1" opacity="0.7" />
  </svg>
);

const GameController = () => (
  <svg width="74" height="52" viewBox="0 0 74 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 18C12 10 18 4 26 4H48C56 4 62 10 62 18L66 38C68 45 61 50 55 48L46 45L42 43H32L28 45L19 48C13 50 6 45 8 38L12 18Z" fill="#181B22" stroke="#363A47" strokeWidth="1.5" />
    <path d="M14 18C14 12 20 7 26 7H48C54 7 60 12 60 18L64 38C65 43 60 46 56 45L47 42L43 40H31L27 42L18 45C14 46 9 43 10 38L14 18Z" fill="#20242E" stroke="#D93829" strokeWidth="1.2" />
    <rect x="20" y="19" width="6" height="14" rx="1" fill="#323846" stroke="#484E5E" strokeWidth="0.9" />
    <rect x="16" y="23" width="14" height="6" rx="1" fill="#323846" stroke="#484E5E" strokeWidth="0.9" />
    <circle cx="23" cy="26" r="2.2" fill="#1A1C24" />
    <circle cx="50" cy="21" r="3.5" fill="#D93829" stroke="#E54E40" strokeWidth="0.9" />
    <circle cx="55" cy="26" r="3.5" fill="#2A3040" stroke="#484E5E" strokeWidth="0.9" />
    <circle cx="45" cy="26" r="3.5" fill="#2A3040" stroke="#484E5E" strokeWidth="0.9" />
    <circle cx="50" cy="31" r="3.5" fill="#2A3040" stroke="#484E5E" strokeWidth="0.9" />
    <rect x="18" y="2" width="10" height="3.5" rx="1" fill="#323846" stroke="#484E5E" strokeWidth="0.8" />
    <rect x="46" y="2" width="10" height="3.5" rx="1" fill="#D93829" stroke="#E54E40" strokeWidth="0.8" />
    <circle cx="31" cy="33" r="4.5" fill="#1A1C24" stroke="#363A47" strokeWidth="0.9" />
    <circle cx="43" cy="22" r="4.5" fill="#1A1C24" stroke="#363A47" strokeWidth="0.9" />
    <circle cx="37" cy="27" r="5" fill="#1A1C24" stroke="#363A47" strokeWidth="0.9" />
    <polygon points="35,25 39,27 35,29" fill="#D93829" />
  </svg>
);

const PlayPrism = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="28,4 52,44 4,44" fill="#1F2230" stroke="#363D50" strokeWidth="1.5" />
    <polygon points="4,44 28,4 14,50" fill="#161820" stroke="#D93829" strokeWidth="1.2" />
    <polygon points="52,44 28,4 42,50" fill="#2A2F3E" stroke="#363D50" strokeWidth="1.2" />
    <line x1="14" y1="50" x2="42" y2="50" stroke="#D93829" strokeWidth="1.8" />
    <polygon points="21,23 35,28 21,33" fill="#D93829" />
    <polygon points="22,24 33,28 22,32" fill="#E54E40" />
  </svg>
);

const DiamondGem = () => (
  <svg width="52" height="64" viewBox="0 0 52 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="26,4 48,22 26,42" fill="#262B37" stroke="#3E4557" strokeWidth="1.3" />
    <polygon points="26,4 4,22 26,42" fill="#1C1F28" stroke="#3E4557" strokeWidth="1.3" />
    <polygon points="26,42 48,22 26,60" fill="#181A22" stroke="#D93829" strokeWidth="1.3" />
    <polygon points="26,42 4,22 26,60" fill="#20232E" stroke="#3E4557" strokeWidth="1.3" />
    <line x1="26" y1="4" x2="26" y2="60" stroke="#EDE9E3" strokeWidth="1.2" strokeOpacity="0.45" />
    <line x1="4" y1="22" x2="48" y2="22" stroke="#EDE9E3" strokeWidth="0.9" strokeOpacity="0.25" />
  </svg>
);

const ChiibiFace = ({ logoSrc }: { logoSrc: string }) => (
  <div
    style={{
      width: '64px',
      height: '64px',
      borderRadius: '2px',
      overflow: 'hidden',
      border: '2px solid #D93829',
      backgroundColor: '#0A0B0E',
      position: 'relative',
    }}
  >
    <img
      src={logoSrc}
      alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        filter: 'contrast(1.05) brightness(0.9)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(217, 56, 41, 0.06)',
        pointerEvents: 'none',
      }}
    />
  </div>
);

const Shield = () => (
  <svg width="54" height="62" viewBox="0 0 54 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 4L50 14V34C50 47 27 60 27 60C27 60 4 47 4 34V14L27 4Z" fill="#1C2030" stroke="#363D50" strokeWidth="1.5" />
    <path d="M27 9L45 18V34C45 44 27 55 27 55C27 55 9 44 9 34V18L27 9Z" fill="#20242E" stroke="#D93829" strokeWidth="1.2" />
    <polygon points="27,20 33,31 27,37 21,31" fill="#D93829" opacity="0.95" />
    <polygon points="27,22 31,29 27,34 23,29" fill="#C02818" />
    <circle cx="27" cy="15" r="2.5" fill="#D93829" />
  </svg>
);

const CreepFace = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="26,4 48,16 26,28 4,16" fill="#1E2830" stroke="#2E3840" strokeWidth="1.3" />
    <polygon points="4,16 26,28 26,48 4,36" fill="#141E24" stroke="#2E3840" strokeWidth="1.3" />
    <polygon points="48,16 26,28 26,48 48,36" fill="#1A2428" stroke="#D93829" strokeWidth="1.3" />
    <rect x="7" y="26" width="4.5" height="4.5" fill="#D93829" opacity="0.9" />
    <rect x="11.5" y="26" width="4.5" height="4.5" fill="#D93829" opacity="0.9" />
    <rect x="9" y="30.5" width="4.5" height="4.5" fill="#D93829" opacity="0.7" />
    <rect x="7" y="35" width="3.5" height="3.5" fill="#D93829" opacity="0.6" />
    <rect x="13" y="35" width="3.5" height="3.5" fill="#D93829" opacity="0.6" />
  </svg>
);

const CrystalShard = () => (
  <svg width="46" height="70" viewBox="0 0 46 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="23,2 40,28 32,68 14,68 6,28" fill="#1A1E2C" stroke="#363D50" strokeWidth="1.3" />
    <polygon points="23,2 6,28 14,68" fill="#14161E" stroke="#3A4050" strokeWidth="1.2" />
    <polygon points="23,2 40,28 32,68" fill="#242A38" stroke="#D93829" strokeWidth="1.2" />
    <line x1="23" y1="4" x2="23" y2="64" stroke="#EDE9E3" strokeWidth="1.3" strokeOpacity="0.4" />
    <line x1="14" y1="30" x2="23" y2="20" stroke="#D93829" strokeWidth="1" opacity="0.6" />
    <line x1="23" y1="42" x2="34" y2="28" stroke="#EDE9E3" strokeWidth="0.9" opacity="0.3" />
  </svg>
);

/* HeartIcon removed per user request */

const BulletIcon = () => (
  <svg width="42" height="62" viewBox="0 0 42 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 22V42C8 50 12 58 21 58C30 58 34 50 34 42V22L21 4L8 22Z" fill="#161820" stroke="#363A47" strokeWidth="1.3" transform="translate(1,1)" />
    <path d="M8 22V42C8 50 12 58 21 58C30 58 34 50 34 42V22L21 4L8 22Z" fill="#232830" stroke="#D93829" strokeWidth="1.2" />
    <polygon points="21,3 8,22 34,22" fill="#D93829" />
    <polygon points="21,5 10,22 32,22" fill="#C02818" />
    <rect x="9" y="38" width="24" height="4.5" fill="#1A1C24" stroke="#484E5E" strokeWidth="0.9" />
    <line x1="15" y1="24" x2="12" y2="37" stroke="#EDE9E3" strokeWidth="1.2" opacity="0.3" />
  </svg>
);

/* ─── Types ──────────────────────────────────────────────────────────── */

type IconType =
  | 'minecraft-block'
  | 'val-crosshair'
  | 'katana'
  | 'controller'
  | 'play-prism'
  | 'diamond'
  | 'chibi-face'
  | 'shield'
  | 'creeper'
  | 'crystal'
  | 'bullet';

interface NodeDef {
  id: number;
  type: IconType;
  top: string;
  left: string;
  scale: number;
  opacity: number;
  duration: number;
  delay: number;
  rotX: number;
  rotY: number;
  rotZ: number;
}

/* ─── 24 nodes spread EVERYWHERE — all corners, center, mid-sections ── */
const NODES: NodeDef[] = [
  // Top band
  { id: 1,  type: 'chibi-face',      top: '4%',  left: '8%',  scale: 1.0,  opacity: 0.28, duration: 20, delay: 0,  rotX: 18,  rotY: -20, rotZ: 8   },
  { id: 2,  type: 'val-crosshair',   top: '3%',  left: '38%', scale: 0.9,  opacity: 0.22, duration: 17, delay: 1,  rotX: -10, rotY: 15,  rotZ: -8  },
  { id: 3,  type: 'controller',      top: '5%',  left: '72%', scale: 1.0,  opacity: 0.26, duration: 23, delay: 2,  rotX: -15, rotY: 28,  rotZ: -10 },
  { id: 4,  type: 'minecraft-block', top: '2%',  left: '90%', scale: 0.9,  opacity: 0.24, duration: 19, delay: 3,  rotX: -20, rotY: -30, rotZ: 12  },

  // Upper-mid band
  { id: 5,  type: 'katana',          top: '20%', left: '3%',  scale: 0.9,  opacity: 0.22, duration: 25, delay: 1,  rotX: 30,  rotY: 10,  rotZ: -25 },
  { id: 6,  type: 'diamond',         top: '18%', left: '28%', scale: 1.0,  opacity: 0.20, duration: 21, delay: 4,  rotX: -25, rotY: 35,  rotZ: 8   },
  { id: 7,  type: 'play-prism',      top: '22%', left: '55%', scale: 0.95, opacity: 0.22, duration: 18, delay: 2,  rotX: 22,  rotY: -12, rotZ: 15  },
  { id: 8,  type: 'creeper',         top: '16%', left: '82%', scale: 0.9,  opacity: 0.23, duration: 22, delay: 5,  rotX: 20,  rotY: -25, rotZ: 10  },

  // Center band
  { id: 9,  type: 'chibi-face',      top: '40%', left: '1%',  scale: 0.9,  opacity: 0.20, duration: 26, delay: 3,  rotX: 15,  rotY: -30, rotZ: 20  },
  { id: 10, type: 'shield',          top: '38%', left: '22%', scale: 0.95, opacity: 0.20, duration: 20, delay: 0,  rotX: -18, rotY: 22,  rotZ: -14 },
  { id: 11, type: 'crystal',         top: '42%', left: '48%', scale: 1.0,  opacity: 0.22, duration: 24, delay: 6,  rotX: 12,  rotY: -18, rotZ: 8   },
  { id: 12, type: 'crystal',         top: '36%', left: '74%', scale: 0.9,  opacity: 0.21, duration: 19, delay: 2,  rotX: 25,  rotY: -15, rotZ: 30  },
  { id: 13, type: 'bullet',          top: '44%', left: '94%', scale: 0.85, opacity: 0.20, duration: 22, delay: 7,  rotX: -30, rotY: 20,  rotZ: -18 },

  // Lower-mid band
  { id: 14, type: 'minecraft-block', top: '60%', left: '6%',  scale: 1.0,  opacity: 0.22, duration: 21, delay: 4,  rotX: 20,  rotY: -25, rotZ: 10  },
  { id: 15, type: 'val-crosshair',   top: '62%', left: '32%', scale: 0.9,  opacity: 0.20, duration: 18, delay: 1,  rotX: -10, rotY: -28, rotZ: 15  },
  { id: 16, type: 'katana',          top: '58%', left: '60%', scale: 0.9,  opacity: 0.20, duration: 28, delay: 5,  rotX: -22, rotY: 14,  rotZ: -30 },
  { id: 17, type: 'controller',      top: '64%', left: '86%', scale: 0.9,  opacity: 0.22, duration: 23, delay: 3,  rotX: 15,  rotY: -30, rotZ: 20  },

  // Bottom band
  { id: 18, type: 'diamond',         top: '78%', left: '4%',  scale: 0.9,  opacity: 0.20, duration: 25, delay: 2,  rotX: -15, rotY: 25,  rotZ: -8  },
  { id: 19, type: 'chibi-face',      top: '80%', left: '25%', scale: 0.85, opacity: 0.18, duration: 22, delay: 6,  rotX: 18,  rotY: 12,  rotZ: -20 },
  { id: 20, type: 'bullet',          top: '76%', left: '50%', scale: 0.9,  opacity: 0.20, duration: 20, delay: 3,  rotX: -12, rotY: -18, rotZ: 14  },
  { id: 21, type: 'play-prism',      top: '82%', left: '76%', scale: 0.9,  opacity: 0.20, duration: 24, delay: 8,  rotX: -15, rotY: 30,  rotZ: -8  },
  { id: 22, type: 'play-prism',      top: '86%', left: '93%', scale: 0.9,  opacity: 0.20, duration: 19, delay: 4,  rotX: -20, rotY: 18,  rotZ: -12 },

  // Extra scattered
  { id: 23, type: 'creeper',         top: '52%', left: '15%', scale: 0.85, opacity: 0.18, duration: 30, delay: 9,  rotX: 16,  rotY: -22, rotZ: 18  },
  { id: 24, type: 'crystal',         top: '30%', left: '94%', scale: 0.8,  opacity: 0.18, duration: 27, delay: 7,  rotX: 12,  rotY: -18, rotZ: 22  },
];

/* ─── Component ──────────────────────────────────────────────────────── */

interface Floating3DBackgroundProps {
  logoSrc?: string;
}

export const Floating3DBackground: React.FC<Floating3DBackgroundProps> = ({ logoSrc = '/logo.png' }) => {
  const nodes = useMemo(() => NODES, []);

  const renderIcon = (type: IconType) => {
    switch (type) {
      case 'minecraft-block': return <MinecraftBlock />;
      case 'val-crosshair':   return <ValCrosshair />;
      case 'katana':          return <KatanaBlade />;
      case 'controller':      return <GameController />;
      case 'play-prism':      return <PlayPrism />;
      case 'diamond':         return <DiamondGem />;
      case 'chibi-face':      return <ChiibiFace logoSrc={logoSrc} />;
      case 'shield':          return <Shield />;
      case 'creeper':         return <CreepFace />;
      case 'crystal':         return <CrystalShard />;
      case 'bullet':          return <BulletIcon />;
      default:                return null;
    }
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 2,          /* sit ABOVE page content backgrounds */
        perspective: '1400px',
      }}
    >
      <style>{`
        .float-node {
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .float-node:hover {
          opacity: 0.72 !important;
          transform: scale(1.35) !important;
          filter: brightness(1.6) drop-shadow(0 0 8px rgba(217,56,41,0.5));
          z-index: 10;
        }
      `}</style>

      {nodes.map((node) => (
        <div
          key={node.id}
          className="float-node"
          style={{
            position: 'absolute',
            top: node.top,
            left: node.left,
            opacity: node.opacity,
            transform: `scale(${node.scale}) rotateX(${node.rotX}deg) rotateY(${node.rotY}deg) rotateZ(${node.rotZ}deg)`,
            transformStyle: 'preserve-3d',
            animation: `floatNode${(node.id % 3) + 1} ${node.duration}s ease-in-out infinite alternate`,
            animationDelay: `${node.delay}s`,
            willChange: 'transform',
            mixBlendMode: 'screen',
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
        >
          {renderIcon(node.type)}
        </div>
      ))}

      <style>{`
        @keyframes floatNode1 {
          0%   { transform: translateY(0px)    translateX(0px)   rotateX(14deg)  rotateY(-18deg) rotateZ(5deg);  }
          40%  { transform: translateY(-24px)  translateX(14px)  rotateX(-8deg)  rotateY(22deg)  rotateZ(-10deg);}
          100% { transform: translateY(20px)   translateX(-12px) rotateX(20deg)  rotateY(-14deg) rotateZ(16deg); }
        }
        @keyframes floatNode2 {
          0%   { transform: translateY(0px)    translateX(0px)   rotateX(-12deg) rotateY(18deg)  rotateZ(-8deg); }
          50%  { transform: translateY(-30px)  translateX(-16px) rotateX(10deg)  rotateY(-25deg) rotateZ(12deg); }
          100% { transform: translateY(22px)   translateX(18px)  rotateX(-18deg) rotateY(20deg)  rotateZ(-14deg);}
        }
        @keyframes floatNode3 {
          0%   { transform: translateY(0px)    translateX(0px)   rotateX(20deg)  rotateY(-15deg) rotateZ(10deg); }
          30%  { transform: translateY(-18px)  translateX(22px)  rotateX(-14deg) rotateY(28deg)  rotateZ(-6deg); }
          100% { transform: translateY(26px)   translateX(-20px) rotateX(16deg)  rotateY(-22deg) rotateZ(20deg); }
        }
      `}</style>
    </div>
  );
};
