import babel from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import resolve from '@rollup/plugin-node-resolve';

import fs from 'fs';

import path, { join } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const generateScopedName =
    mode === 'production' ? '[hash:base64:2]' : '[local]_[hash:base64:2]';
  return {
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName,
      },
    },
    json: {
      stringify: true,
    },
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@context': path.resolve(__dirname, './src/context'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },
    build: {
      rollupOptions: {
        plugins: [
          resolve(),
          // commonjs(),
          babel({ babelHelpers: 'bundled' }),
        ],
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: (a) =>
            a.name.endsWith('.js') ? a.name : '[name].js',
          chunkFileNames: (a) =>
            a.name.endsWith('.js') ? a.name : '[name].js',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const [, module] = /node_modules\/(@?[a-z0-9-]+?[a-z0-9-]+)/.exec(
                id
              );
              const path = join(
                process.cwd(),
                'node_modules',
                module,
                'package.json'
              );
              if (fs.existsSync(path)) {
                try {
                  const packageJson = require(path);
                  const version = packageJson.version;
                  console.log(module, version);
                  return `@vendor/${module}_${version}.js`;
                } catch (error) {}
              }
            }
          },
        },
      },
    },
  };
});
