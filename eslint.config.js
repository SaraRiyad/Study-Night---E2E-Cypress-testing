import globals from "globals";
import pluginJs from "@eslint/js";
import cypressPlugin from "eslint-plugin-cypress";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha,
            },
        },
        rules: {
            "no-var": "error",
            "no-unused-vars": "error",
            semi: ["error", "always"],
            "no-undef": "error",
            "no-unexpected-multiline": "error",
            "no-extra-parens": "error",
            eqeqeq: "error",
        },
    },
    {
        files: ["cypress/**/*.js", "cypress.config.js"],
        plugins: {
            cypress: cypressPlugin,
        },
        extends: ["plugin:cypress/recommended"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.cypress,
            },
        },
    },
    pluginJs.configs.recommended,
];
