// import type { ILanguageRegistration } from 'shiki';

const regex = {
	id: 'regex',
	scopeName: 'source.rgx',
	aliases: ['rgx', 'regex'],
	grammar: {
		name: 'regex',
		scopeName: 'source.rgx',
		fileTypes: ['rgx'],
		patterns: [{ include: '#core' }],
		repository: {
			// These two are required by vscode-textmate for some reason
			$self: {},
			$base: {},

			core: {
				patterns: [
					{
						// "Escaped Characters",
						name: 'keyword.other',
						match: '\\[\\^\\-\\.\\|\\?\\*\\+]'
					},
					{
						// "Control Characters",
						name: 'entity.name.type.primitive',
						match: '[\\^\\-\\.\\|\\?\\*\\+]'
					},
					{
						// "Numerics",
						name: 'variable.declaration',
						match: '[0-9]+'
					},
					{
						// "Characters",
						name: 'variable.declaration',
						match: '[a-zA-Z]'
					},
					{
						// "Circumfixes",
						name: 'keyword.operator.special',
						match: '([\\[\\]\\(\\)\\{\\}])'
					}
				]
			}
		}
	}
};

export { regex };
