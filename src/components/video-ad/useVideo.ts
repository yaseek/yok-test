/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback, useMemo } from 'react';

import Timer from './timer';
import { getProgressPoint } from './utils';

interface TOpts {
  progressPoints: number[];
  progressPointAction(progress: number):void;
  iabMRCViewabilityAction():void;
  iabMRCViewabilityDuration: number;
  intersectionThreshold: number;
}

export default function useVideo ({
  progressPoints,
  progressPointAction,
  intersectionThreshold,
  iabMRCViewabilityAction,
  iabMRCViewabilityDuration,
}: TOpts) {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [closed, setClose] = useState<boolean>(false);
  const [muted, setMute] = useState<boolean>(true);
  const [progress, setProgress] = useState<number | null>(null);

  const onRequestClose = useCallback(() => setClose(true), [setClose]);
  const toggleMute = useCallback(() => setMute(!muted), [muted, setMute]);

  const progressCheckpointsReversed = useMemo(() =>
    progressPoints.sort((a, b) => b - a)
  , []);

  const viewTimer = useMemo(() =>
    new Timer(iabMRCViewabilityDuration, iabMRCViewabilityAction)
  , []);

  const observer = useMemo(() =>
    new IntersectionObserver(async (entries) => {
      if (!video) return;

      if (entries[0]?.isIntersecting) {
        try {
          await video.play();
        } catch (e) {}
        viewTimer.start();
      } else {
        video.pause();
        viewTimer.pause();
      }
    }, {
      threshold: intersectionThreshold,
    })
  , [video]);

  const onPlayProgress = useCallback((event: Event) => {
    if (!video) return;

    setProgress(
      getProgressPoint(
        video.currentTime / video.duration * 100,
        progressCheckpointsReversed
      )
    );
  }, [video]);

  useEffect(() => {
    if (progress === null) return;
    progressPointAction(progress);
  }, [progress])

  useEffect(() => {
    if (!video) return;

    video.addEventListener('play', onPlayProgress);
    video.addEventListener('timeupdate', onPlayProgress);

    observer.observe(video);

    return () => {
      video.removeEventListener('play', onPlayProgress);
      video.removeEventListener('timeupdate', onPlayProgress);
    }
  }, [video])

  return {
    setVideo,
    closed,
    onRequestClose,
    muted,
    toggleMute,
  };
};
