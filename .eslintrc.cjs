// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		indent: ['error', 'tab'],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'prettier/prettier': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': [
			'error',
			{ allow: ['private-constructors'] },
		],
	},
};
