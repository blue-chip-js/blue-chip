import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: {
      name: "bundle.js",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [resolve(), commonjs()]
  },
  {
    input: "src/index.js",
    output: [{file: pkg.main, format: "cjs"}, {file: pkg.module, format: "es"}],
    plugins: [resolve()],
    external: ["pluralize", "json-api-normalizer", "graphql-normalizr"]
  }
];
