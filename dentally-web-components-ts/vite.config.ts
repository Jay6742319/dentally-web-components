import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: '$1',
      },
    ],
  },
  build: {
    lib: {
      entry: 'components.ts',
      name: "DentallyWebComponents",
      fileName: (format) => `dentally-web-components.${format}.js`,
    }
  }
});
