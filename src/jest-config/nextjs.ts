import type { Config } from 'jest';
// deno-lint-ignore no-unused-vars
import type { Config as ConfigNamespace } from '@jest/types';
import nextJest from 'next/jest';
import { config as baseConfig } from './base.ts';

const createJestConfig = nextJest({
  dir: './',
});

// To see more about the config options, see:
// https://nextjs.org/docs/pages/building-your-application/testing/jest

const config = {
  ...baseConfig,
  moduleFileExtensions: [...baseConfig.moduleFileExtensions, 'jsx', 'tsx', 'ts'],
} as const satisfies Config;

export default createJestConfig(config);
