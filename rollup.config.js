import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/easyclip.umd.js',
      format: 'umd',
      name: 'easyclip',
      compact: true,
    },
    {
      file: 'dist/easyclip.min.js',
      format: 'umd',
      name: 'easyclip',
      plugins: [terser()],
    },
  ],
};
