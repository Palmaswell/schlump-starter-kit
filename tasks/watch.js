import {resolve, dirname, basename, extname} from 'path';
import watch from 'watch';
import css from './css';

export default function watchFolders () {
	const rootFolder = resolve('./src/');
	const cssFolder = `${rootFolder}/css`;
	const date = new Date();

	function findTask (path, file, cb, ext) {
		if (path === dirname(file) || '.' + ext === extname(file)) {
			cb();
		}
	};

	watch.createMonitor(rootFolder,  monitor => {
		monitor.on('created', (file, stat) => {
			console.log(`${date}: [Created File] ${file}. ${stat}`);
		});

		monitor.on('changed', (file, curr, prev) => {
			findTask(cssFolder, file, css, 'scss');

			console.log(`${date}: [Changed File] ${file}`);
		})

		monitor.on('removed', (file, stat) => {
			console.log(`${date}: [Removed File] ${file} ${stat}`);
		})
	});
}

watchFolders();
