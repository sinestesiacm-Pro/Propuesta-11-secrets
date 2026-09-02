import React from 'react';
import { Composition } from 'remotion';
import { VIDEO, VIDEO_9x16 } from './theme';
import { Video16x9, Video9x16 } from './Video';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main16x9"
        component={Video16x9}
        durationInFrames={VIDEO.durationInFrames}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />
      <Composition
        id="Main9x16"
        component={Video9x16}
        durationInFrames={VIDEO_9x16.durationInFrames}
        fps={VIDEO_9x16.fps}
        width={VIDEO_9x16.width}
        height={VIDEO_9x16.height}
      />
    </>
  );
};
