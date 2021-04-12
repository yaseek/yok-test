import React from 'react';

import { TAction } from './types';
import css from './video-ad.module.css';

interface TCloseProps {
  onRequestClose: TAction;
}

export const CloseButton = ({ onRequestClose }: TCloseProps) => (
  <div
    className={`${css.control} ${css.close}`}
    onClick={onRequestClose}
  />
);

interface TMuteProps {
  onClick: TAction;
}

export const MuteButton = ({ onClick }: TMuteProps) => (
  <div
    className={`${css.control} ${css.mute}`}
    {...{ onClick }}
  />
);
