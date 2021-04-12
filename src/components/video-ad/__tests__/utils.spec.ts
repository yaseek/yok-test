import { getProgressPoint } from '../utils';

describe('utils', () => {
  it('getProgressPoint', () => {
    expect(getProgressPoint(0, [])).toBeNull();
    expect(getProgressPoint(5, [30, 20, 10, 0])).toBe(0);
    expect(getProgressPoint(25, [30, 20, 10, 0])).toBe(20);
    expect(getProgressPoint(55, [30, 20, 10, 0])).toBe(30);
    expect(getProgressPoint(-1, [30, 20, 10, 0])).toBeNull();
  });

  it('getProgressPoint incorrect input', () => {
    expect(getProgressPoint(25, [10, 0, 30, 20])).toBe(10);
  })
})