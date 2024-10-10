module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'airbnb-typescript/base',
    ],
    plugins: ['import'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'import/no-extraneous-dependencies': 'off',
        'no-explicit-any': 'off',
    },
};