module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:astro/recommended"
  ],
  plugins: ['svelte3'],
  overrides: [{
    files: ['*.astro'],
    parser: "astro-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".astro"],
    },
  }, {
    files: ['*.svelte'], processor: 'svelte3/svelte3'
  }],
  parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
}