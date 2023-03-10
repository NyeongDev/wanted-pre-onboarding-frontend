module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-var': 'error',
		'no-multiple-empty-lines': 'warn',
		'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
		'no-shadow': 'warn',
		'dot-notation': 'warn',
		'no-unused-vars': 'error',
		'no-undef': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react/destructuring-assignment': 'warn',
		'react/jsx-pascal-case': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'react/no-direct-mutation-state': 'error',
		'react/jsx-no-useless-fragment': 'warn',
		'react/no-unused-state': 'warn',
		'react/jsx-key': 'warn',
		'react/self-closing-comp': 'warn',
		'react/jsx-curly-brace-presence': 'warn',
		'react/react-in-jsx-scope': 0,
		'import/prefer-default-export': 'off',
		'linebreak-style': 0,
	},
};
