import {resolve} from 'path';
import {writeFile} from 'fs';
import sass from 'node-sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default function css () {
	const srcFile = resolve('./src/css/index.scss');
	const buildFile = resolve('./docs/index.css')
	const time = new Date();

	const processor = [
		autoprefixer({ browsers: ['last 2 versions']}),
		cssnano()
	]

	const scss = sass.render({
		file: srcFile,
		outputStyle: 'nested',
		sourceMap: true
	}, (err, scss) => {
		if (err) throw err;

		postcss(processor).process(scss.css).then(result => {
			writeFile(buildFile, result, err => {
				if (err) throw err;
	            console.log(`${time}: [CSS build] ✌🏻 compilation was successfully completed`);
				});

		}, err => {
			console.error(`${time}: [PostCSS build] 😡 ${err}`);
		})
	})
}
