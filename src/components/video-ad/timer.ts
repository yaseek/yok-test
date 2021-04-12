import { TAction } from './types';

export default class Timer {
  private value: number = 0;
  private prevTimestamp: number = 0;

  private duration: number;
  private action: TAction | null;

  private paused: boolean = true;

  constructor (duration: number, action: TAction) {
    this.duration = duration;
    this.action = action;
  }

  private increment = (timestamp: number) => {
    if (this.paused) return;

    this.value += this.prevTimestamp ? timestamp - this.prevTimestamp : 0;
    if (this.value >= this.duration  && this.action) {
      void this.action();
      this.action = null;
    }

    this.prevTimestamp = timestamp;
    
    requestAnimationFrame(this.increment);
  }

  start () {
    if (!this.action) return;

    this.paused = false;
    requestAnimationFrame(this.increment);
  }

  pause () {
    this.paused = true;
  }
}