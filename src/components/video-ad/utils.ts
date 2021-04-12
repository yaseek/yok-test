export const noop = () => undefined;

/*
 * points should be sorted descended
 */
export const getProgressPoint =
  (progress: number, points: number[]): number | null =>
    points.find((checkPoint) => (progress >= checkPoint)) ?? null;
