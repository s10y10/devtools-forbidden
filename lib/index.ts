import DevtoolsForbidden from './forbidden';
import type { Options } from './types';

export function devtoolsForbidden(options?: Options) {
  new DevtoolsForbidden(options);
}

export type { Options };
