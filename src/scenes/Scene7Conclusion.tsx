import React from 'react';
import { AbsoluteFill } from 'remotion';
import { palette, fonts } from '../theme';
import { Frame } from '../components/Frame';
import { RevealWords, Fade, MaskLine, FadeUp } from '../components/Text';
import { Rule } from '../components/Ui';

export const Scene7Conclusion: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 30,
          width: 1240,
        }}
      >
        {/* brand name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <MaskLine start={6} duration={22}>
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 52,
                letterSpacing: '16px',
                color: palette.charcoal,
                fontWeight: 500,
                paddingLeft: '16px',
              }}
            >
              11 SECRETS
            </span>
          </MaskLine>
          <MaskLine start={24} duration={24}>
            <span
              style={{
                fontFamily: fonts.signature,
                fontSize: 84,
                color: palette.champagne,
                lineHeight: 1,
              }}
            >
              de beauté
            </span>
          </MaskLine>
        </div>

        <FadeUp start={32} duration={14}>
          <Rule
            width={140}
            start={0}
            drawFrames={20}
            color={palette.champagne}
            height={1.5}
          />
        </FadeUp>

        {/* question */}
        <RevealWords
          text="Et si le prochain secret était simplement de vous découvrir ?"
          start={46}
          stagger={3}
          duration={13}
          style={{
            justifyContent: 'center',
            maxWidth: 1080,
            textAlign: 'center',
          }}
          wordStyle={{
            fontFamily: fonts.serif,
            fontSize: 40,
            fontWeight: 400,
            fontStyle: 'italic',
            color: palette.charcoal,
            lineHeight: 1.3,
          }}
        />

        {/* two statements */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            marginTop: 14,
          }}
        >
          <RevealWords
            text="Une nouvelle présence digitale."
            start={96}
            stagger={3}
            duration={12}
            style={{ justifyContent: 'center' }}
            wordStyle={{
              fontFamily: fonts.serif,
              fontSize: 34,
              fontWeight: 400,
              color: palette.oliveGreen,
              lineHeight: 1.3,
            }}
          />
          <RevealWords
            text="Une nouvelle façon de faire découvrir votre univers."
            start={128}
            stagger={3}
            duration={12}
            style={{ justifyContent: 'center' }}
            wordStyle={{
              fontFamily: fonts.serif,
              fontSize: 34,
              fontWeight: 500,
              color: palette.charcoal,
              lineHeight: 1.3,
            }}
          />
        </div>

        {/* CTA: elegant, not a button */}
        <FadeUp start={174} duration={18} style={{ marginTop: 18 }}>
          <div
            style={{
              position: 'relative',
              width: 360,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Frame
              width={360}
              height={80}
              start={174}
              drawFrames={28}
              color={palette.charcoal}
              strokeWidth={1.5}
              cornerLength={24}
              mode="corners"
            />
            <Fade start={190} duration={14}>
              <span
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 22,
                  letterSpacing: '6px',
                  color: palette.charcoal,
                  fontWeight: 600,
                  paddingLeft: '6px',
                }}
              >
                PRENDRE RENDEZ-VOUS
              </span>
            </Fade>
          </div>
        </FadeUp>

        {/* address */}
        <Fade start={210} duration={16}>
          <span
            style={{
              fontFamily: fonts.sans,
              fontSize: 18,
              letterSpacing: '3px',
              color: palette.muted,
              fontWeight: 400,
              textTransform: 'uppercase',
            }}
          >
            Rue de Lausanne 11 · 1020 Renens
          </span>
        </Fade>
      </div>
    </AbsoluteFill>
  );
};
