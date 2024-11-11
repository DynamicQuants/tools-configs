import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/*.{css,js,json,ts}'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  external: ['next', 'react', 'react-dom', 'jest', 'tailwindcss', 'tsup', '@types/jest'],
  dts: false,
  clean: true,
  ...options,
}));
