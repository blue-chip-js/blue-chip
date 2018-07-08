import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "lib/index.js",
    output: {
      name: "bundle.js",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [resolve(), commonjs()]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "lib/index.js",
    output: [{file: pkg.main, format: "cjs"}, {file: pkg.module, format: "es"}],
    plugins: [resolve()],
    external: ["pluralize", "json-api-normalizer", "graphql-normalizr"]
  }
];
