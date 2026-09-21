export enum ReplaySpeedMultiplier {
  slow = 2,
  normal = 1,
  oneAndHalf = 2 / 3,
  fast = 0.5,
  fastest = 0,
}

export const defaultReplaySpeedMultiplier = ReplaySpeedMultiplier.normal;
