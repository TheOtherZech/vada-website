// import type {ILanguageRegistration} from "shiki";

const vada = {
	id: 'vada',
	scopeName: 'source.vada',
	grammar: {
		name: 'vada',
		scopeName: 'source.vada',
		fileTypes: ['vada'],
		patterns: [
			{ include: '#comments' },
			{ include: '#punctuation' },
			{ include: '#idents' },
			{ include: '#literals' },
			{ include: '#operators' }
		],
		repository: {
			// These two are required by vscode-textmate for some reason
			$self: {},
			$base: {},

			comments: {
				patterns: [
					{
						name: 'comment',
						match: '\\/\\/.*'
					}
				]
			},

			literals: {
				patterns: [
					{
						// binary literal,
						name: 'number',
						match: '\\b0b[0-1]+\\b'
					},
					{
						// integer literal
						name: 'number',
						match: '[0-9][0-9_]*'
					},
					{
						// string literal
						name: 'string',
						match: `"[A-Za-z0-9 _]*"`
					}
				]
			},
			idents: {
				patterns: [
					{
						// section line
						name: 'constant',
						match: '--- ([a-zA-Z]+\\w*):*'
					},
					{
						// field declaration
						match: '[a-zA-Z]+\\w*:',
						name: 'variable.declaration'
					},
					{
						// un-sigil'd refs
						name: 'variable.other',
						match: '[a-zA-Z]+\\w*'
					},
					{
						// primitives
						name: 'keyword.type',
						match: '(\\!)([a-zA-Z]+\\w*)'
					},
					{
						// schemas
						name: 'entity',
						match: '(\\$)([a-zA-Z]+\\w*)'
					},
					{
						// keywords
						name: 'keyword.other',
						match: '(\\@)([a-zA-Z]+\\w*)'
					},
					{
						// transforms
						name: 'keyword.operator.special',
						match: '#[a-zA-Z]+\\w*'
					}
				]
			},
			punctuation: {
				patterns: [
					{
						// comma
						name: 'punctuation.comma',
						match: ','
					},
					{
						// curly braces
						name: 'punctuation.brackets.curly',
						match: '[{}]'
					},
					{
						// parentheses, round brackets
						name: 'punctuation.brackets.round',
						match: '[()]'
					},
					{
						// comment: 'semicolon',
						name: 'punctuation.semi',
						match: ';'
					},
					{
						// comment: 'square brackets',
						name: 'punctuation.brackets.square',
						match: '[\\[\\]]'
					},
					{
						// comment: 'angle brackets',
						name: 'punctuation.brackets.angle',
						match: '(?<!=)[<>]'
					}
				]
			},
			operators: {
				patterns: [
					{
						// comment: 'math operators',
						name: 'keyword.operator.math',
						match: '[\\+\\-\\/\\*\\^\\&\\|<>=:]|\\.\\.\\.'
					},
					{
						//  namespace operator
						name: 'keyword.operator.namespace',
						match: '::'
					},
					{
						// 'dot access'
						name: 'keyword.operator.access.dot',
						match: '\\.(?!\\.)'
					},
					{
						//   pipes
						name: 'keyword.operator.math',
						match: '->|~>'
					}
				]
			}
		}
	}
};

export { vada };
