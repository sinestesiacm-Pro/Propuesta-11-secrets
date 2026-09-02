import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { palette, SCENES, VIDEO, VIDEO_9x16 } from './theme';
import { PaperGrain, Vignette } from './components/Ui';
import { Scene1Intro } from './scenes/Scene1Intro';
import { Scene2Identity } from './scenes/Scene2Identity';
import { Scene3Problem } from './scenes/Scene3Problem';
import { Scene4Ecosystem } from './scenes/Scene4Ecosystem';
import { Scene5Clients } from './scenes/Scene5Clients';
import { Scene6Journey } from './scenes/Scene6Journey';
import { Scene7Conclusion } from './scenes/Scene7Conclusion';

export const Video16x9: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: palette.ivory }}>
      <PaperGrain opacity={0.05} />
      <Vignette opacity={0.12} />

      <Sequence
        from={SCENES.intro.from}
        durationInFrames={SCENES.intro.durationInFrames}
      >
        <Scene1Intro />
      </Sequence>
      <Sequence
        from={SCENES.identity.from}
        durationInFrames={SCENES.identity.durationInFrames}
      >
        <Scene2Identity />
      </Sequence>
      <Sequence
        from={SCENES.problem.from}
        durationInFrames={SCENES.problem.durationInFrames}
      >
        <Scene3Problem />
      </Sequence>
      <Sequence
        from={SCENES.ecosystem.from}
        durationInFrames={SCENES.ecosystem.durationInFrames}
      >
        <Scene4Ecosystem />
      </Sequence>
      <Sequence
        from={SCENES.clients.from}
        durationInFrames={SCENES.clients.durationInFrames}
      >
        <Scene5Clients />
      </Sequence>
      <Sequence
        from={SCENES.journey.from}
        durationInFrames={SCENES.journey.durationInFrames}
      >
        <Scene6Journey />
      </Sequence>
      <Sequence
        from={SCENES.conclusion.from}
        durationInFrames={SCENES.conclusion.durationInFrames}
      >
        <Scene7Conclusion />
      </Sequence>
    </AbsoluteFill>
  );
};

export const Video9x16: React.FC = () => {
  const scale = VIDEO_9x16.width / VIDEO.width;
  return (
    <AbsoluteFill style={{ backgroundColor: palette.ivory }}>
      <PaperGrain opacity={0.05} />
      <Vignette opacity={0.12} />
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ transform: `scale(${scale})` }}>
          <Video16x9 />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
