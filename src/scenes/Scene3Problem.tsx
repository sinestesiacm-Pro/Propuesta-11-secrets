import React from 'react';
import { AbsoluteFill } from 'remotion';
import { palette, fonts } from '../theme';
import { Frame } from '../components/Frame';
import { RevealWords, FadeUp, FadeOut } from '../components/Text';

const STATEMENTS = [
  'Une communauté encore à développer.',
  'Une visibilité locale à renforcer.',
  'Une marque qui mérite d’être davantage découverte.',
];

export const Scene3Problem: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <FadeOut at={276} duration={22}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            alignItems: 'center',
          }}
        >
        {STATEMENTS.map((stmt, i) => {
          const start = 8 + i * 62;
          const width = i === 2 ? 1180 : 980;
          return (
            <FadeUp key={i} start={start} duration={16}>
              <div
                style={{
                  position: 'relative',
                  width,
                  height: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Frame
                  width={width}
                  height={150}
                  start={start}
                  drawFrames={40}
                  color={i === 2 ? palette.oliveGreen : palette.charcoal}
                  strokeWidth={1.5}
                  cornerLength={36}
                  mode="corners"
                  fadeOutStart={268}
                  fadeOutFrames={22}
                />
                <RevealWords
                  text={stmt}
                  start={start + 12}
                  stagger={3}
                  duration={13}
                  style={{
                    justifyContent: 'center',
                    padding: '0 60px',
                  }}
                  wordStyle={{
                    fontFamily: fonts.serif,
                    fontSize: i === 2 ? 50 : 48,
                    fontWeight: 400,
                    color: i === 2 ? palette.oliveGreen : palette.charcoal,
                    lineHeight: 1.2,
                  }}
                />
              </div>
            </FadeUp>
          );
        })}
        </div>
      </FadeOut>
    </AbsoluteFill>
  );
};
