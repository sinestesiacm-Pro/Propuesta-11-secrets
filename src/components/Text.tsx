import React from 'react';
import { useCurrentFrame, interpolate, spring } from 'remotion';
import { clamp, ease } from '../theme';

export const RevealWords: React.FC<{
  text: string;
  start?: number;
  stagger?: number;
  duration?: number;
  y?: number;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
}> = ({
  text,
  start = 0,
  stagger = 3,
  duration = 14,
  y = 26,
  style,
  wordStyle,
}) => {
  const frame = useCurrentFrame();
  const words = text.split(' ');
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        ...style,
      }}
    >
      {words.map((word, i) => {
        const delay = start + i * stagger;
        const op = interpolate(frame, [delay, delay + duration], [0, 1], clamp);
        const ty = interpolate(frame, [delay, delay + duration], [y, 0], {
          ...clamp,
          easing: ease.out,
        });
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              transform: `translateY(${ty}px)`,
              opacity: op,
              marginRight: '0.28em',
              ...wordStyle,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const MaskLine: React.FC<{
  children: React.ReactNode;
  start?: number;
  duration?: number;
  distance?: number;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
}> = ({
  children,
  start = 0,
  duration = 20,
  distance = 100,
  style,
  innerStyle,
}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [start, start + duration], [0, 1], {
    ...clamp,
    easing: ease.out,
  });
  return (
    <div style={{ overflow: 'hidden', ...style }}>
      <div
        style={{
          transform: `translateY(${(1 - p) * distance}%)`,
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const FadeUp: React.FC<{
  children: React.ReactNode;
  start?: number;
  duration?: number;
  y?: number;
  style?: React.CSSProperties;
}> = ({ children, start = 0, duration = 18, y = 30, style }) => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [start, start + duration], [0, 1], clamp);
  const ty = interpolate(frame, [start, start + duration], [y, 0], {
    ...clamp,
    easing: ease.out,
  });
  return (
    <div style={{ opacity: op, transform: `translateY(${ty}px)`, ...style }}>
      {children}
    </div>
  );
};

export const Fade: React.FC<{
  children: React.ReactNode;
  start?: number;
  duration?: number;
  end?: number | null;
  endDuration?: number;
  style?: React.CSSProperties;
}> = ({ children, start = 0, duration = 16, end = null, endDuration = 16, style }) => {
  const frame = useCurrentFrame();
  let op = interpolate(frame, [start, start + duration], [0, 1], clamp);
  if (end != null) {
    op = interpolate(
      frame,
      [start, start + duration, end, end + endDuration],
      [0, 1, 1, 0],
      clamp
    );
  }
  return <div style={{ opacity: op, ...style }}>{children}</div>;
};

export const FadeOut: React.FC<{
  children: React.ReactNode;
  at: number;
  duration?: number;
  style?: React.CSSProperties;
}> = ({ children, at, duration = 22, style }) => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [at, at + duration], [1, 0], clamp);
  return <div style={{ opacity: op, ...style }}>{children}</div>;
};

export const SpringIn: React.FC<{
  children: React.ReactNode;
  start?: number;
  config?: { damping?: number; mass?: number; stiffness?: number };
  y?: number;
  style?: React.CSSProperties;
}> = ({
  children,
  start = 0,
  config = { damping: 200, mass: 0.8, stiffness: 80 },
  y = 40,
  style,
}) => {
  const frame = useCurrentFrame();
  const s = spring({
    frame: frame - start,
    fps: 30,
    config,
  });
  const op = interpolate(s, [0, 0.5], [0, 1], clamp);
  return (
    <div
      style={{
        opacity: op,
        transform: `translateY(${(1 - s) * y}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
