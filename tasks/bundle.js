import {resolve} from 'path';
import {createWriteStream} from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';


export default function bundle () {
	const date = new Date;
	const src = resolve('./src/scripts/index.babel');
	const dest = resolve('./docs/index.js');

	browserify({ debug: true })
		.transform(babelify.configure({
			presets: ['es2015', 'stage-2'],
			extensions: [".babel"],
			comments: false
		}))
		.require(src, {entry: true})
		.bundle()
		.on('error', err => {
			console.error(`${date}: [Scripts Bundle] 😡  ${err}`);
		})
		.pipe(createWriteStream(dest))
		.on('finish', () => {
			console.log(`${date}: [Scripts Bundle] ✌🏻  were succesfully bundled`);
		});

}
