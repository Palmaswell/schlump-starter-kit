import {resolve, dirname, basename, extname} from 'path';
import watch from 'watch';
import css from './css';
import {generatePages} from './schlump';

export default function watchFolders () {
	const date = new Date();
	const src = resolve('./src/');
	const srcCSS = `${src}/css`;
	const srcPages = `${src}/pages`;
	const srcTemplates = `${src}/templates`;
	const srcHelpers = `${src}/helpers`;

	function findTask (path, file, cb, ext) {
		if (path === dirname(file) || '.' + ext === extname(file)) {
			cb();
		}
	};

	watch.createMonitor(src,  monitor => {
		monitor.on('created', (file, stat) => {
			console.log(`${date}: [Created File] ${file}. ${stat}`);
		});

		monitor.on('changed', (file, curr, prev) => {
			findTask(srcCSS, file, css, 'scss');
			findTask(srcPages, file, generatePages);
			findTask(srcTemplates, file, generatePages);
			findTask(srcHelpers, file, generatePages);


			console.log(`${date}: [Changed File] ${file}`);
		})

		monitor.on('removed', (file, stat) => {
			console.log(`${date}: [Removed File] ${file} ${stat}`);
		})
	});
}

watchFolders();
