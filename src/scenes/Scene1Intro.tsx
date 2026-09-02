import React from 'react';
import { AbsoluteFill } from 'remotion';
import { palette, fonts } from '../theme';
import { Frame } from '../components/Frame';
import { MaskLine, Fade, FadeUp } from '../components/Text';
import { Rule } from '../components/Ui';

export const Scene1Intro: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Fade start={0} duration={14} end={118} endDuration={26}>
        <div
          style={{
            position: 'relative',
            width: 940,
            height: 600,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Frame
            width={940}
            height={600}
            start={4}
            drawFrames={96}
            color={palette.charcoal}
            strokeWidth={2}
            cornerLength={132}
            mode="corners"
            inset={0}
          />

          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 18,
            }}
          >
            <MaskLine start={12} duration={30}>
              <span
                style={{
                  fontFamily: fonts.serif,
                  fontSize: 300,
                  fontWeight: 600,
                  color: palette.charcoal,
                  lineHeight: 0.9,
                  letterSpacing: '-4px',
                }}
              >
                11
              </span>
            </MaskLine>

            <MaskLine start={46} duration={24}>
              <span
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 58,
                  letterSpacing: '20px',
                  color: palette.charcoal,
                  fontWeight: 400,
                  paddingLeft: '20px',
                }}
              >
                SECRETS
              </span>
            </MaskLine>

            <MaskLine start={78} duration={30}>
              <span
                style={{
                  fontFamily: fonts.signature,
                  fontSize: 92,
                  color: palette.champagne,
                  lineHeight: 1,
                }}
              >
                de beauté
              </span>
            </MaskLine>

            <FadeUp start={112} duration={16}>
              <Rule
                width={120}
                start={0}
                drawFrames={18}
                color={palette.champagne}
                height={1.5}
                style={{ marginTop: 14 }}
              />
            </FadeUp>
          </div>
        </div>
      </Fade>
    </AbsoluteFill>
  );
};
