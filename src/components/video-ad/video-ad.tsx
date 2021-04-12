import React from 'react';

import useVideo from './useVideo';
import { noop } from './utils';
import { CloseButton, MuteButton } from './controls';
import css from './video-ad.module.css';

interface TProps {
  src: string;
  progressPoints?: number[];
  progressPointAction?(progress: number): void;
  iabMRCViewabilityAction?(): void;
  iabMRCViewabilityDuration?: number;
  intersectionThreshold?: number;
}

const VideoAd = ({
  src,
  progressPoints = [],
  progressPointAction = noop,
  iabMRCViewabilityAction = noop,
  iabMRCViewabilityDuration = 0,
  intersectionThreshold = 0,
}: TProps) => {
  const { setVideo, closed, onRequestClose, muted, toggleMute } = useVideo({
    progressPoints,
    progressPointAction,
    iabMRCViewabilityAction,
    iabMRCViewabilityDuration,
    intersectionThreshold,
  });

  return closed
    ? null
    : (
      <div className={css.videoContainer}>
        <div className={css.videoBlock}>
          <video
            className={css.video}
            ref={setVideo}
            autoPlay={false}
            preload="auto"
            muted={muted}
            loop={false}
            playsInline
          >
            <source {...{ src }} />
          </video>
          <CloseButton {...{ onRequestClose }} />
          <MuteButton  onClick={toggleMute} />
        </div>
      </div>
    );
}

export default React.memo(VideoAd);
