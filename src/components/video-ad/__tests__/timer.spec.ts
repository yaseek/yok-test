import Timer from '../timer';

const sleep = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

describe('Timer', () => {
  it('fired', async () => {
    const action = jest.fn();
    const timer = new Timer(500, action);

    timer.start();
    await sleep(600);
    await sleep(600);
    expect(action).toHaveBeenCalledTimes(1);
  });

  it('not fired', async () => {
    const action = jest.fn();
    const timer = new Timer(1000, action);

    timer.start();
    await sleep(600);
    timer.pause();
    await sleep(600);
    expect(action).not.toHaveBeenCalled();
  });
});