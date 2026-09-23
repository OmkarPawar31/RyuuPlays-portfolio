import React from 'react';
import { ChannelLogo } from './ChannelLogo';

interface FloatingLogoBackgroundProps {
  customLogoSrc?: string;
}

interface FloatingNode {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  rotation: number;
  driftX: number;
}

const NODES: FloatingNode[] = [
  { id: 1, top: '8%', left: '10%', size: 28, opacity: 0.06, duration: 18, delay: 0, rotation: 12, driftX: 15 },
  { id: 2, top: '15%', left: '85%', size: 36, opacity: 0.07, duration: 22, delay: 3, rotation: -10, driftX: -20 },
  { id: 3, top: '28%', left: '4%', size: 22, opacity: 0.04, duration: 16, delay: 1, rotation: 8, driftX: 12 },
  { id: 4, top: '35%', left: '92%', size: 30, opacity: 0.06, duration: 24, delay: 5, rotation: -15, driftX: -16 },
  { id: 5, top: '48%', left: '14%', size: 34, opacity: 0.05, duration: 20, delay: 2, rotation: 6, driftX: 18 },
  { id: 6, top: '58%', left: '80%', size: 24, opacity: 0.06, duration: 19, delay: 4, rotation: -8, driftX: -14 },
  { id: 7, top: '70%', left: '8%', size: 32, opacity: 0.06, duration: 25, delay: 6, rotation: 14, driftX: 20 },
  { id: 8, top: '80%', left: '88%', size: 26, opacity: 0.05, duration: 17, delay: 2, rotation: -12, driftX: -10 },
  { id: 9, top: '90%', left: '22%', size: 20, opacity: 0.04, duration: 21, delay: 5, rotation: 9, driftX: 15 },
  { id: 10, top: '94%', left: '75%', size: 30, opacity: 0.06, duration: 23, delay: 1, rotation: -6, driftX: -18 },
];

export const FloatingLogoBackground: React.FC<FloatingLogoBackgroundProps> = ({ customLogoSrc }) => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {NODES.map((node) => (
        <div
          key={node.id}
          style={{
            position: 'absolute',
            top: node.top,
            left: node.left,
            opacity: node.opacity,
            animation: `floatAround ${node.duration}s ease-in-out infinite alternate`,
            animationDelay: `${node.delay}s`,
            transform: `rotate(${node.rotation}deg)`,
            transition: 'opacity 0.3s ease',
          }}
        >
          <ChannelLogo
            size={node.size}
            color="var(--text-primary)"
            src={customLogoSrc}
          />
        </div>
      ))}

      <style>{`
        @keyframes floatAround {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-24px) translateX(12px) rotate(6deg);
          }
          100% {
            transform: translateY(18px) translateX(-10px) rotate(-6deg);
          }
        }
      `}</style>
    </div>
  );
};
