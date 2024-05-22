import css from "rollup-plugin-import-css"

export default {
	input: "./src/index.js",
	output: {
		file: "./dist/bundle.js",
		format: "cjs",
	},
	plugins: [css()],
}
