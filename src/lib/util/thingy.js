// import type { IShikiTheme } from 'shiki';

export const theme = {
	name: 'Gamut',
	type: 'dark',
	fg: 'elbow',
	bg: 'knee',
	colors: {
		'editor.background': '#252730',
		'editor.foreground': '#DCDEE5',
		foreground: '#DCDEE5',
		'editor.lineHighlightBackground': '#272A36',
		'editorLineNumber.foreground': '#5E6275',
		'editorLineNumber.activeForeground': '#DCDEE5',
		'editorOverviewRuler.border': '#505674',
		'editor.selectionBackground': '#505674',
		'sideBar.background': '#212227',
		'sideBar.border': '#030306',
		'activityBar.background': '#212227',
		'activityBar.foreground': '#DCDEE5',
		'activityBar.border': '#030306',
		'activityBar.inactiveForeground': '#5E6275',
		'tab.activeForeground': '#DCDEE5',
		'tab.activeBorderTop': '#1D6DC6',
		'tab.inactiveForeground': '#5E6275',
		'tab.inactiveBackground': '#191A1F',
		'editorGroupHeader.tabsBackground': '#191A1F',
		'editorGroupHeader.noTabsBackground': '#272A36',
		'editorGroup.border': '#030306',
		'list.focusBackground': '#1D6DC6',
		'list.inactiveFocusBackground': '#00000000',
		'list.inactiveSelectionBackground': '#00000000',
		'list.focusForeground': '#DCDEE5',
		'list.activeSelectionForeground': '#DCDEE5',
		'list.hoverBackground': '#00000000',
		'list.focusOutline': '#00000000',
		'editorWidget.background': '#212227',
		'editorWidget.border': '#030306',
		'panel.border': '#030306',
		'statusBar.background': '#191A1F',
		'statusBar.foreground': '#8990B1',
		'statusBar.border': '#030306',
		'rust_analyzer.inlayHints.foreground': '#5E6275'
	},
	settings: [
		{
			scope: 'keyword',
			settings: {
				foreground: '#FE7BB3',
				fontStyle: 'bold'
			}
		},
		{
			scope: 'storage',
			settings: {
				foreground: '#FE7BB3',
				fontStyle: 'bold'
			}
		},
		{
			scope: 'variable.language.this',
			settings: {
				foreground: '#FE7BB3',
				fontStyle: 'bold'
			}
		},
		{
			scope: 'keyword.operator.sizeof',
			settings: {
				foreground: '#FE7BB3',
				fontStyle: 'bold'
			}
		},
		{
			scope: 'keyword.operator.math',
			settings: {
				foreground: '#FE7BB3',
				fontStyle: 'bold '
			}
		},
		{
			scope: 'variable',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'variable.declaration',
			settings: {
				foreground: '#3dbfe2',
				fontStyle: ''
			}
		},
		{
			scope: 'constant',
			settings: {
				foreground: '#72BFB0',
				fontStyle: 'underline'
			}
		},
		{
			scope: 'entity',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'support.type.property-name',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'entity.name.type',
			settings: {
				foreground: '#8FF4E0',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.java',
			settings: {
				foreground: '#8FF4E0',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.cs',
			settings: {
				foreground: '#8FF4E0',
				fontStyle: ''
			}
		},
		{
			scope: 'constant.language',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'support.function',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.arithmetic',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.increment',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.decrement',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.increment-decrement',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.bitwise',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.logical',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.comparison',
			settings: {
				foreground: '#8DBF70',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.special',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: 'underline'
			}
		},
		{
			scope: 'keyword.type',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.primitive',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.built-in',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'entity.name.type.numeric',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'entity.name.type.primitive',
			settings: {
				foreground: '#adff2f',
				fontStyle: 'underline'
			}
		},
		{
			scope: 'storage.type.numeric.go',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.byte.go',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.boolean.go',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.string.go',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.uintptr.go',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.error.go',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.rune.go',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.type.annotation',
			settings: {
				foreground: '#B2DD9A',
				fontStyle: ''
			}
		},
		{
			scope: 'constant.numeric',
			settings: {
				foreground: '#CDC072',
				fontStyle: ''
			}
		},
		{
			scope: 'string',
			settings: {
				foreground: '#FE8673',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.string',
			settings: {
				foreground: '#FE8673',
				fontStyle: ''
			}
		},
		{
			scope: 'entity.name.type.namespace',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.modifier.import',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.modifier.package',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'constant.character.escape',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.interpolation',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'constant.other.placeholder',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'comment',
			settings: {
				foreground: '#0000000',
				fontStyle: 'bold italic '
			}
		},
		{
			scope: 'punctuation',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'keyword.operator.logical.rust',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.modifier.pointer',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'storage.modifier.array',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'entity.name.section.markdown',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: 'bold'
			}
		},
		{
			scope: 'fenced_code.block.language',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.bold.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.constant.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.constant.begin.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.constant.end.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.heading.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.italic.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.list.begin.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.metadata.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.quote.begin.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.quote.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.raw.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.string.begin.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.definition.string.end.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'punctuation.separator.key-value.markdown',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'markup.heading.setext',
			settings: {
				foreground: '#72BFB0',
				fontStyle: ''
			}
		},
		{
			scope: 'markup.inline.raw.string.markdown',
			settings: {
				foreground: '#D0AAFC',
				fontStyle: ''
			}
		},
		{
			scope: 'markup.fenced_code.block.markdown',
			settings: {
				foreground: '#D0AAFC',
				fontStyle: ''
			}
		},
		{
			scope: 'markup.raw.block.markdown',
			settings: {
				foreground: '#D0AAFC',
				fontStyle: ''
			}
		},
		{
			scope: 'string.other.link.title.markdown',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'constant.other.reference.link.markdown',
			settings: {
				foreground: '#DCDEE5',
				fontStyle: ''
			}
		},
		{
			scope: 'markup.italic.markdown',
			settings: {
				fontStyle: 'italic'
			}
		},
		{
			scope: 'markup.bold.markdown',
			settings: {
				fontStyle: 'bold'
			}
		}
	]
};
