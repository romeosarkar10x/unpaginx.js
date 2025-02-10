import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "./prettier.config.mjs";

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            "no-unused-vars": "warn",
            "prefer-const": "error",
            "prettier/prettier": ["warn", prettierConfig],
        },

        languageOptions: {
            globals: {
                process: "readonly",
            },
        },
    },
];
