import { terser } from "rollup-plugin-terser"
import babel from "rollup-plugin-babel"

export default {
  input: 'src/index.js',
  output: {
    file: './dist/form-rule.js',
    format: 'umd',
    name: 'myname'
  },
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**",
      externalHelpers: true
    }),
    // terser({ compress: { drop_console: true } })
  ]
}
