import type { Config } from 'jest';
import { config as baseConfig } from './base.ts';

const config = {
  ...baseConfig,
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
} as const satisfies Config;

export default config;
