import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  shims: true,
  entry: ['src/**/*.{css,js,json,ts}'],
  format: ['esm'],
  external: ['next', 'react', 'react-dom', 'jest', 'tailwindcss', 'tsup', '@types/jest'],
  dts: false,
  clean: true,
  tsconfig: 'tsconfig.json',
  splitting: false,
  ...options,
}));
