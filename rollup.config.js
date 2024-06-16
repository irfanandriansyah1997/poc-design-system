import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';
import path from 'path';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const inputDir = 'src';
const outputDir = 'dist';
const isWatch = process.env.ROLLUP_WATCH === 'true';

/////////////////////////////////////////////////////////////////////////////
// Use glob to dynamically find all .ts and .tsx files
/////////////////////////////////////////////////////////////////////////////

const inputFiles = glob.sync(`${inputDir}/components/**/*.{ts,tsx}`);
const entries = inputFiles.reduce((acc, file) => {
  const entry = path.relative(inputDir, file);
  const name = entry.replace(/\.[^/.]+$/, ''); // remove file extension

  // Ignore files you want to exclude
  if (!entry.includes('.test.') && !entry.includes('.stories.')) {
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
        sourcemap: isWatch
      }
    ],
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      typescript(),
      resolve({
        mainFields: ['module', 'main'],
        preserveSymlinks: true
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      terser()
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
