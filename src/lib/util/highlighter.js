// @ts-nocheck

import { getHighlighter, setCDN } from 'shiki';
import {theme} from "./thingy.js";
import { vada } from './vadaGrammar.js';
import { regex } from './regexGrammar.js';

const default_submap = {
  '{': '&lbrace;',
  '}': '&rbrace;',
  '`': '&grave;'
}
// setCDN("/shiki/");
setCDN("https://unpkg.com/shiki@0.10.1");
const staticHighlighter = await getHighlighter({
  theme: theme
});

staticHighlighter.loadLanguage(regex);
staticHighlighter.loadLanguage(vada);

/**
 * @param {string} code
 * @param {any} lang
 * @param {any} meta
 */
async function highlighter(code, lang, meta) {
    // console.log(`${lang} | ${meta}`);

    const shikiHighlighter = staticHighlighter;
    
    if (lang == 'regex') {
      await shikiHighlighter.loadLanguage(regex);
      // console.log(code);
    } else {
      await shikiHighlighter.loadLanguage(vada);
      
    }

    const html = shikiHighlighter.codeToHtml(code, {lang});
    return html.replace(
      /[{}`]/g, 
      (character) => (default_submap[character])
    )
};

export default highlighter;