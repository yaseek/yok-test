import React from 'react';

import 'intersection-observer';

import VideoAd from './components/video-ad';

const CHECK_POINTS_PERCENTAGE = [0, 25, 50, 75, 100];

const checkpointAction = (progressPrc: number) => {
  console.log(`Video playback at ${progressPrc}%`);
}

const viewedAction = console.log.bind(null, 'Video viewed according to IAB/MRC');

export const App: React.FunctionComponent = () => (
  <VideoAd
    src="https://cdn.yoc.com/ad/demo/airbnb.mp4"
    progressPoints={CHECK_POINTS_PERCENTAGE}
    progressPointAction={checkpointAction}
    iabMRCViewabilityDuration={2000}
    iabMRCViewabilityAction={viewedAction}
    intersectionThreshold={0.5}
  />
);
