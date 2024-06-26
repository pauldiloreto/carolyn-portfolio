module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true
			}
		],
		'import/order': [
			1,
			{
				groups: [
					['builtin', 'external', 'internal'],
					['parent', 'index', 'sibling'],
					'object',
					'type'
				],
				'newlines-between': 'never',
				alphabetize: { order: 'asc', caseInsensitive: true }
			}
		]
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
