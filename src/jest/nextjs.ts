import nextJest from 'next/jest/dist/index.js';
import { jestBaseConfig } from './base.ts';
import type { Config } from 'jest';

// For more information about the config options, see:
// https://nextjs.org/docs/app/building-your-application/testing/jest
const createJestConfig = nextJest({
  dir: './',
});

export const jestNextJsConfig = createJestConfig(jestBaseConfig) as Config;
