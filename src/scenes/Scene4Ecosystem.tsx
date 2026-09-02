import React from 'react';
import { AbsoluteFill } from 'remotion';
import { palette, fonts } from '../theme';
import { Frame } from '../components/Frame';
import { DrawLine } from '../components/Frame';
import { RevealWords, Fade, FadeUp, MaskLine, FadeOut } from '../components/Text';
import { BracketTag } from '../components/Ui';

const CX = 960;
const CY = 540;
const R = 430;

const CHANNELS = [
  { label: 'INSTAGRAM', angle: -90 },
  { label: 'FACEBOOK', angle: -38.57 },
  { label: 'GOOGLE', angle: 12.86 },
  { label: 'SEO', angle: 64.29 },
  { label: 'WEBSITE', angle: 115.71 },
  { label: 'CONTENT', angle: 167.14 },
  { label: 'ADS', angle: 218.57 },
].map((c) => {
  const rad = (c.angle * Math.PI) / 180;
  return {
    label: c.label,
    x: CX + R * Math.cos(rad),
    y: CY + R * Math.sin(rad),
  };
});

const TAG_W = 250;
const TAG_H = 66;

export const Scene4Ecosystem: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* connecting lines from center to each channel */}
      {CHANNELS.map((c, i) => {
        const start = 108 + i * 26;
        return (
          <DrawLine
            key={`line-${c.label}`}
            x1={CX}
            y1={CY}
            x2={c.x}
            y2={c.y}
            start={start}
            drawFrames={26}
            color={palette.muted}
            strokeWidth={1}
            fadeOutStart={404}
            fadeOutFrames={24}
          />
        );
      })}

      {/* center node dot */}
      <Fade start={6} duration={14} end={420} endDuration={26}>
        <div
          style={{
            position: 'absolute',
            left: CX - 7,
            top: CY - 7,
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: palette.champagne,
          }}
        />
      </Fade>

      {/* center text */}
      <FadeOut at={424} duration={22}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            pointerEvents: 'none',
          }}
        >
        <Fade start={8} duration={16} end={70} endDuration={18}>
          <span
            style={{
              fontFamily: fonts.sans,
              fontSize: 34,
              letterSpacing: '10px',
              color: palette.muted,
              fontWeight: 400,
              paddingLeft: '10px',
            }}
          >
            UNE MARQUE.
          </span>
        </Fade>
        <MaskLine start={48} duration={22}>
          <span
            style={{
              fontFamily: fonts.serif,
              fontSize: 74,
              fontWeight: 600,
              color: palette.charcoal,
              letterSpacing: '2px',
            }}
          >
            UN ÉCOSYSTÈME.
          </span>
        </MaskLine>
        </div>
      </FadeOut>

      {/* channel tags */}
      {CHANNELS.map((c, i) => {
        const start = 108 + i * 26;
        return (
          <div
            key={c.label}
            style={{
              position: 'absolute',
              left: c.x - TAG_W / 2,
              top: c.y - TAG_H / 2,
              width: TAG_W,
              height: TAG_H,
            }}
          >
            <BracketTag
              label={c.label}
              start={start}
              width={TAG_W}
              height={TAG_H}
              fontSize={20}
              cornerLength={24}
              strokeWidth={1.4}
              bracketColor={palette.charcoal}
              color={palette.charcoal}
              letterSpacing={3}
              fadeOutStart={404}
              fadeOutFrames={24}
            />
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
