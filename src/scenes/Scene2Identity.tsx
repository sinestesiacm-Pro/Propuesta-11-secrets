import React from 'react';
import { AbsoluteFill } from 'remotion';
import { palette, fonts } from '../theme';
import { Frame } from '../components/Frame';
import { RevealWords, Fade, FadeUp, FadeOut } from '../components/Text';
import { BracketTag } from '../components/Ui';

export const Scene2Identity: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <FadeOut at={274} duration={22}>
        <div
          style={{
            position: 'relative',
            width: 1180,
            height: 720,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 64,
          }}
        >
        <Frame
          width={1180}
          height={720}
          start={2}
          drawFrames={70}
          color={palette.charcoal}
          strokeWidth={1.5}
          cornerLength={110}
          mode="corners"
          fadeOutStart={262}
          fadeOutFrames={26}
        />

        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <RevealWords
            text="Votre institut a déjà une identité."
            start={10}
            stagger={3}
            duration={14}
            style={{ justifyContent: 'center' }}
            wordStyle={{
              fontFamily: fonts.serif,
              fontSize: 56,
              fontWeight: 400,
              color: palette.charcoal,
              lineHeight: 1.15,
            }}
          />

          <RevealWords
            text="Mais son univers digital peut aller beaucoup plus loin."
            start={92}
            stagger={3}
            duration={14}
            style={{ justifyContent: 'center' }}
            wordStyle={{
              fontFamily: fonts.serif,
              fontSize: 56,
              fontWeight: 500,
              color: palette.oliveGreen,
              lineHeight: 1.15,
            }}
          />
        </div>

        <FadeUp start={160} duration={18} style={{ marginTop: 20 }}>
          <div
            style={{
              display: 'flex',
              gap: 48,
              opacity: 0.6,
            }}
          >
            {['Instagram', 'Google', 'Website'].map((label, i) => (
              <BracketTag
                key={label}
                label={label}
                start={170 + i * 18}
                width={220}
                height={62}
                fontSize={18}
                cornerLength={22}
                strokeWidth={1.2}
                bracketColor={palette.grayGreen}
                color={palette.grayGreen}
                fadeOutStart={262}
              />
            ))}
          </div>
        </FadeUp>
      </div>
      </FadeOut>
    </AbsoluteFill>
  );
};
