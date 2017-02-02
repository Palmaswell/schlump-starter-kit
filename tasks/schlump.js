import {resolve} from 'path';
import schlump from 'schlump';

const handleConfig = (config, fn) => {
	const src = config.src || 'src';
	const dest = config.dest || 'dist';
	const options = {
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
	return fn(options);
}

export function generatePages () {
	const config = {
		destStatics: './docs',
  		dest: './docs',
  		scopedCss: './src/css/_scoped.css',
  		cssVariables: true
  	}

  	handleConfig(config, schlump.build);
}

