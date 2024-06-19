/* eslint-disable */
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const { dts } = require('rollup-plugin-dts');
const inputDir = 'src';
const outputDir = 'dist';
const isDevelopment = process.env.DEVELOPMENT === 'true';

/////////////////////////////////////////////////////////////////////////////
// Recursively find all .ts and .tsx files
/////////////////////////////////////////////////////////////////////////////

const getFiles = (dir, files = []) => {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);

    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
  return files;
};

const inputFiles = getFiles(path.join(__dirname, inputDir));
const entries = inputFiles.reduce((acc, file) => {
  const entry = path.relative(inputDir, file);
  const name = entry.replace(/\.[^/.]+$/, ''); // remove file extension

  // Ignore files you want to exclude
  if (
    !entry.includes('.test.') &&
    !entry.includes('stories') &&
    !entry.includes('.d.') &&
    !entry.includes('storybook') &&
    !entry.includes('setup-test')
  ) {
    acc[name] = path.join(inputDir, entry);
  }

  return acc;
}, {});

export default [
  {
    external: ['react', 'react-dom', '@emotion/react'],
    input: entries,
    output: [
      {
        dir: outputDir,
        format: 'esm',
        sourcemap: isDevelopment
      }
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      peerDepsExternal({ includeDependencies: true }),
      typescript(),
      resolve({
        mainFields: ['module', 'main'],
        preserveSymlinks: true
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      ...(isDevelopment
        ? []
        : [
            terser({
              compress: {
                drop_console: true,
                drop_debugger: true,
                passes: 2
              },
              ecma: 2015,
              format: { comments: false },
              mangle: {
                properties: { regex: /^_/ }
              },
              safari10: true,
              toplevel: true,
              warnings: true
            })
          ]),
      copy({
        targets: [{ dest: 'dist/@types', src: 'src/@types/**/*' }]
      })
    ],
    watch: {
      exclude: 'node_modules/**',
      include: 'src/**'
    }
  },
  {
    input: entries,
    output: {
      dir: outputDir,
      entryFileNames: '[name].d.ts',
      format: 'esm'
    },
    plugins: [dts()],
    watch: {
      exclude: 'node_modules/**',
      include: 'src/**'
    }
  }
];
