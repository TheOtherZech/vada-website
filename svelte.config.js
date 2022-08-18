import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex';
import highlighter from './src/lib/util/highlighter.js';
import rehypeSlug from 'rehype-slug';
import sectionize from 'remark-sectionize';
import remarkFootnotes from 'remark-footnotes';

const mdsvex_config = mdsvex({
	// layout: {
	//     'test': './src/lib/layout/MDSection.svelte'
	// },

	extensions: ['.svelte', '.svx'],

	highlight: {
		highlighter: highlighter
	},
	rehypePlugins: [rehypeSlug],
	remarkPlugins: [sectionize, remarkFootnotes]
});

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		preprocess({
			scss: {
				// prependData: `@import './../src/style/global.css';`
			}
		}),
		mdsvex_config
	],
	kit: {
		adapter: adapter()
	}
};

// export default config;
