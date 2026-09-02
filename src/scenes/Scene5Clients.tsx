import React from 'react';
import { AbsoluteFill } from 'remotion';
import { palette, fonts } from '../theme';
import { Frame } from '../components/Frame';
import { RevealWords, Fade, MaskLine, FadeUp } from '../components/Text';

export const Scene5Clients: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <div
        style={{
          position: 'relative',
          width: 1300,
          height: 560,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* persistent frame across both statements */}
        <Frame
          width={1300}
          height={560}
          start={4}
          drawFrames={64}
          color={palette.charcoal}
          strokeWidth={1.5}
          cornerLength={120}
          mode="corners"
          fadeOutStart={324}
          fadeOutFrames={26}
        />

        {/* Phase A: NOT JUST FOLLOWERS. */}
        <Fade start={8} duration={16} end={66} endDuration={16}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <MaskLine start={10} duration={18}>
              <span
                style={{
                  fontFamily: fonts.serif,
                  fontSize: 64,
                  fontWeight: 400,
                  color: palette.muted,
                  letterSpacing: '4px',
                }}
              >
                NOT JUST
              </span>
            </MaskLine>
            <MaskLine start={26} duration={22}>
              <span
                style={{
                  fontFamily: fonts.serif,
                  fontSize: 158,
                  fontWeight: 600,
                  color: palette.charcoal,
                  letterSpacing: '2px',
                  lineHeight: 1,
                }}
              >
                FOLLOWERS.
              </span>
            </MaskLine>
          </div>
        </Fade>

        {/* Phase B: DES CLIENTS. */}
        <Fade start={82} duration={20} end={300} endDuration={22}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 26,
            }}
          >
            <MaskLine start={84} duration={24}>
              <span
                style={{
                  fontFamily: fonts.serif,
                  fontSize: 168,
                  fontWeight: 600,
                  color: palette.charcoal,
                  letterSpacing: '2px',
                  lineHeight: 1,
                }}
              >
                DES CLIENTS.
              </span>
            </MaskLine>

            {/* subtitle: emotional arrow */}
            <FadeUp start={140} duration={18}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 22,
                  fontFamily: fonts.sans,
                  fontSize: 30,
                  letterSpacing: '6px',
                  color: palette.oliveGreen,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  paddingLeft: '6px',
                }}
              >
                <span>Visibilité</span>
                <span style={{ color: palette.champagne, fontSize: 26 }}>
                  →
                </span>
                <span>Confiance</span>
                <span style={{ color: palette.champagne, fontSize: 26 }}>
                  →
                </span>
                <span>Réservation</span>
              </div>
            </FadeUp>
          </div>
        </Fade>
      </div>
    </AbsoluteFill>
  );
};
