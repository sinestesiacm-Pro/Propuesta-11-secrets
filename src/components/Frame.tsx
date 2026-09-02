import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { palette, clamp, ease } from '../theme';

type FrameProps = {
  width: number;
  height: number;
  start?: number;
  drawFrames?: number;
  color?: string;
  strokeWidth?: number;
  cornerLength?: number;
  mode?: 'corners' | 'full';
  fadeOutStart?: number | null;
  fadeOutFrames?: number;
  stagger?: number;
  inset?: number;
  style?: React.CSSProperties;
};

export const Frame: React.FC<FrameProps> = ({
  width,
  height,
  start = 0,
  drawFrames = 36,
  color = palette.charcoal,
  strokeWidth = 2,
  cornerLength = 90,
  mode = 'corners',
  fadeOutStart = null,
  fadeOutFrames = 24,
  stagger = 0.12,
  inset = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const w = width;
  const h = height;
  const cl = cornerLength;
  const i = inset;

  const overall = interpolate(
    frame,
    [start, start + drawFrames],
    [0, 1],
    { ...clamp, easing: ease.out }
  );

  const opacity =
    fadeOutStart != null
      ? interpolate(
          frame,
          [fadeOutStart, fadeOutStart + fadeOutFrames],
          [1, 0],
          clamp
        )
      : 1;

  const dashFor = (cornerIndex: number, pathLen: number) => {
    const delay = cornerIndex * stagger * drawFrames;
    const p = interpolate(
      frame,
      [start + delay, start + delay + drawFrames * (1 - stagger)],
      [0, 1],
      { ...clamp, easing: ease.out }
    );
    return pathLen * (1 - p);
  };

  const corners = [
    `M ${i} ${i + cl} L ${i} ${i} L ${i + cl} ${i}`,
    `M ${w - i - cl} ${i} L ${w - i} ${i} L ${w - i} ${i + cl}`,
    `M ${w - i} ${h - i - cl} L ${w - i} ${h - i} L ${w - i - cl} ${h - i}`,
    `M ${i + cl} ${h - i} L ${i} ${h - i} L ${i} ${h - i - cl}`,
  ];

  const cornerLen = 2 * cl;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={{ position: 'absolute', top: 0, left: 0, opacity, ...style }}
    >
      {mode === 'corners' ? (
        corners.map((d, idx) => (
          <path
            key={idx}
            d={d}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            strokeDasharray={cornerLen}
            strokeDashoffset={dashFor(idx, cornerLen)}
          />
        ))
      ) : (
        <rect
          x={i}
          y={i}
          width={w - 2 * i}
          height={h - 2 * i}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeDasharray={2 * (w - 2 * i) + 2 * (h - 2 * i)}
          strokeDashoffset={
            (2 * (w - 2 * i) + 2 * (h - 2 * i)) * (1 - overall)
          }
        />
      )}
    </svg>
  );
};

type LineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  start?: number;
  drawFrames?: number;
  color?: string;
  strokeWidth?: number;
  fadeOutStart?: number | null;
  fadeOutFrames?: number;
};

export const DrawLine: React.FC<LineProps> = ({
  x1,
  y1,
  x2,
  y2,
  start = 0,
  drawFrames = 30,
  color = palette.muted,
  strokeWidth = 1.2,
  fadeOutStart = null,
  fadeOutFrames = 20,
}) => {
  const frame = useCurrentFrame();
  const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const p = interpolate(frame, [start, start + drawFrames], [0, 1], {
    ...clamp,
    easing: ease.inOut,
  });
  const opacity =
    fadeOutStart != null
      ? interpolate(
          frame,
          [fadeOutStart, fadeOutStart + fadeOutFrames],
          [1, 0],
          clamp
        )
      : 1;
  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: 'absolute', top: 0, left: 0, opacity }}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={len}
        strokeDashoffset={len * (1 - p)}
      />
    </svg>
  );
};
