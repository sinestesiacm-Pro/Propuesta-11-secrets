import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';
import { palette, fonts, clamp, ease } from '../theme';
import { DrawLine } from '../components/Frame';
import { FadeUp, Fade } from '../components/Text';

const STEPS = [
  'CONTENT',
  'VISIBILITÉ',
  'GOOGLE',
  'SITE WEB',
  'RÉSERVATION',
  'EXPÉRIENCE',
  'AVIS',
];

const ROW_H = 112;
const TOP = 60;
const LINE_X = 70;

export const Scene6Journey: React.FC = () => {
  const frame = useCurrentFrame();
  const lineStart = 16;
  const lineDraw = 280;
  const lineEndY = TOP + (STEPS.length - 1) * ROW_H;

  return (
    <AbsoluteFill
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Fade start={0} duration={12} end={330} endDuration={26}>
        <div
          style={{
            position: 'relative',
            width: 760,
            height: 820,
          }}
        >
          {/* vertical spine */}
          <DrawLine
            x1={LINE_X}
            y1={TOP}
            x2={LINE_X}
            y2={lineEndY}
            start={lineStart}
            drawFrames={lineDraw}
            color={palette.grayGreen}
            strokeWidth={1.5}
          />

          {/* steps */}
          {STEPS.map((step, i) => {
            const progress = i / (STEPS.length - 1);
            const start = lineStart + progress * lineDraw;
            const isLast = i === STEPS.length - 1;
            const y = TOP + i * ROW_H;

            const dotS = spring({
              frame: frame - start,
              fps: 30,
              config: { damping: 200, mass: 0.6, stiffness: 120 },
            });
            const dotScale = interpolate(dotS, [0, 1], [0, 1], clamp);

            return (
              <div
                key={step}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: y - 34,
                  width: 760,
                  height: 68,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 28,
                }}
              >
                {/* node */}
                <div
                  style={{
                    position: 'absolute',
                    left: LINE_X - 7,
                    top: 34 - 7,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: isLast ? palette.champagne : palette.charcoal,
                    border: `2px solid ${palette.ivory}`,
                    transform: `scale(${dotScale})`,
                  }}
                />

                {/* label */}
                <FadeUp start={start + 4} duration={16} style={{ marginLeft: 110 }}>
                  <span
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: isLast ? 38 : 34,
                      letterSpacing: '6px',
                      color: isLast ? palette.oliveGreen : palette.charcoal,
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      paddingLeft: '6px',
                    }}
                  >
                    {step}
                  </span>
                </FadeUp>

                {/* index */}
                <FadeUp
                  start={start + 8}
                  duration={14}
                  style={{ marginLeft: 'auto', marginRight: 30 }}
                >
                  <span
                    style={{
                      fontFamily: fonts.serif,
                      fontSize: 22,
                      color: palette.champagne,
                      fontWeight: 400,
                      fontVariantNumeric: 'lining-nums',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </FadeUp>
              </div>
            );
          })}
        </div>
      </Fade>
    </AbsoluteFill>
  );
};
