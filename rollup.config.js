import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

const common = {
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
    json(), // required to resolve some issues with "default" exports not existing in tr46, once, etc.
],
};

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    ...common,
    input: "src/index.ts",
    output: {
      file: "dist/index.mjs",
      format: "esm",
    },
  },
];

export default config;
