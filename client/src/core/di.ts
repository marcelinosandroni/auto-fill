/**
 * DI Container - AutoFill Guardian
 */

export const container = {
  _initialized: true,
};

export type Container = typeof container;
export type ContainerKeys = keyof Container;
