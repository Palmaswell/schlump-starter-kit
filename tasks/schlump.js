import {resolve} from 'path';
import schlump from 'schlump';

export default function generatePages (flags) {
	const src = 'src';
	const dest = 'docs';
	const staticsPath = resolve('./docs/');
	const destPath = resolve('./docs/');
	const scopedCSSPath = resolve('./src/css/_scoped.css');

	const config = {
		destStatics: './docs/',
  		dest: './docs',
  		scopedCss: './src/css/_scoped.css',
  		cssVariables: true
  	}


	function generateStatics(config) {
		const src = config.src || 'src';
		const dest = config.dest || 'dist';
		const opts = {
		srcPages: (config.srcPages || `${src}/pages`) + '/**/*.html',
		srcTemplates: (config.srcTemplates || `${src}/templates`) + '/**/*.{html,svg,md}',
		srcStatics: config.srcStatics || `${src}/statics`,
		srcHelpers: config.srcHelpers || `${src}/helpers`,
		dest,
		destStatics: config.destStatics || `${dest}/statics`,
		vars: config.var,
		disableValidation: config.disableValidation,
		redirectMap: config.redirectMap,
		scopedCss: config.scopedCss,
		cssVariables: config.cssVariables,
		templateImport: config.templateImport
		};

		return schlump.build(opts);
	}

	generateStatics(config);

}

generatePages();
