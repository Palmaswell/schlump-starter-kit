import {generatePages} from './schlump';
import css from './css';
import js from './bundle';

export default function serve () {
	generatePages();
	css();
	js();
}

serve();
