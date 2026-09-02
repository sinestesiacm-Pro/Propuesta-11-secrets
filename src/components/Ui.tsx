import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { palette, clamp, ease, fonts } from '../theme';
import { Frame } from './Frame';
import { Fade } from './Text';

export const BracketTag: React.FC<{
  label: string;
  start: number;
  width: number;
  height: number;
  fontSize?: number;
  color?: string;
  bracketColor?: string;
  strokeWidth?: number;
  cornerLength?: number;
  letterSpacing?: number;
  textStart?: number;
  fadeOutStart?: number | null;
  fadeOutFrames?: number;
  style?: React.CSSProperties;
}> = ({
  label,
  start,
  width,
  height,
  fontSize = 22,
  color = palette.charcoal,
  bracketColor = palette.charcoal,
  strokeWidth = 2,
  cornerLength = 26,
  letterSpacing = 2,
  textStart,
  fadeOutStart = null,
  fadeOutFrames = 16,
  style,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <Frame
        width={width}
        height={height}
        start={start}
        drawFrames={28}
        color={bracketColor}
        strokeWidth={strokeWidth}
        cornerLength={cornerLength}
        mode="corners"
        fadeOutStart={fadeOutStart}
        fadeOutFrames={fadeOutFrames}
      />
      <Fade
        start={textStart ?? start + 14}
        duration={14}
        end={fadeOutStart}
        endDuration={fadeOutFrames}
        style={{
          fontFamily: fonts.sans,
          fontSize,
          color,
          letterSpacing: `${letterSpacing}px`,
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        {label}
      </Fade>
    </div>
  );
};

export const Rule: React.FC<{
  width: number;
  start?: number;
  drawFrames?: number;
  color?: string;
  height?: number;
  style?: React.CSSProperties;
}> = ({
  width,
  start = 0,
  drawFrames = 22,
  color = palette.muted,
  height = 1.5,
  style,
}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [start, start + drawFrames], [0, 1], {
    ...clamp,
    easing: ease.out,
  });
  return (
    <div
      style={{
        width,
        height,
        background: color,
        transformOrigin: 'left center',
        transform: `scaleX(${p})`,
        ...style,
      }}
    />
  );
};

export const PaperGrain: React.FC<{ opacity?: number }> = ({
  opacity = 0.045,
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        pointerEvents: 'none',
        mixBlendMode: 'multiply',
      }}
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
};

export const Vignette: React.FC<{ opacity?: number }> = ({
  opacity = 0.18,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        pointerEvents: 'none',
        background:
          'radial-gradient(ellipse at center, rgba(35,34,32,0) 58%, rgba(35,34,32,0.5) 100%)',
      }}
    />
  );
};
