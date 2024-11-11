import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  shims: true,
  entry: ['src/**/*.{css,js,json,ts}'],
  format: ['esm', 'cjs'],
  external: ['next', 'react', 'react-dom', 'jest', 'tailwindcss', 'tsup', '@types/jest'],
  dts: false,
  clean: true,
  tsconfig: 'tsconfig.json',
  sourcemap: true,
  ...options,
}));
