import css from 'rollup-plugin-import-css'
import copy from 'rollup-plugin-copy'

export default {
	input: './src/index.js',
	output: {
		file: './dist/bundle.js',
		format: 'cjs',
	},
	plugins: [
		css(),
		copy({
			targets: [
				{ src: './src/index.html', dest: './dist/index.html' },
				{
					src: [
						'./src/assets/fonts/Quicksand-Bold.ttf',
						'./src/assets/fonts/Quicksand-Regular.ttf',
						'./src/assets/fonts/Ravie Regular.ttf',
					],
					dest: './dist/assets/fonts',
				},
				{ src: './src/assets/images/*', dest: './dist/assets/images' },
				{ src: './src/assets/favicons/*', dest: './dist/assets/favicons' },
			],
		}),
	],
}
