import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import reactRefresh from "eslint-plugin-react-refresh";
import stylistic from "@stylistic/eslint-plugin";

import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["build", "node_modules"] },
  {
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylistic": stylistic
    },
    settings: {
      "import/extensions": [".js", ".jsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"],
      },
      "import/resolver": {
        "alias": {
          "map": [["@", "./src"]],
          "extensions": [".ts", ".tsx", ".js", ".jsx"]
        },
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: [".ts", ".tsx", ".js", ".jsx"],
          moduleDirector: ["node_modules"],
        }
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "all",
          "ignoreRestSiblings": true,
          "destructuredArrayIgnorePattern": "_",
          "argsIgnorePattern": "^__"
        }
      ],
      "import/no-unresolved": "warn",
      "import/newline-after-import": "error",
      "import/order": [
        "error",
        {
          pathGroups: [],
          groups: [
            "external",
            "internal",
            "object",
            ["parent", "sibling", "index"],
            "type"
          ],
          "newlines-between": "always",
          "warnOnUnassignedImports": true
        }
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { "prefer": "type-imports" },
      ],
      "@typescript-eslint/no-var-requires": 0,
      "@stylistic/indent": ["error", 2],
      "@stylistic/block-spacing": "error",
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/indent-binary-ops": ["error", 2],
      "@stylistic/jsx-closing-bracket-location": [1, 'tag-aligned'],
      "@stylistic/jsx-curly-spacing": 2,
      "@stylistic/no-extra-semi": "error",
      "@stylistic/type-named-tuple-spacing": "error",
      "@stylistic/type-generic-spacing": "error",
      "@stylistic/space-before-blocks": "error",
      "@stylistic/rest-spread-spacing": ["error", "never"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/nonblock-statement-body-position": ["error", "beside"],
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-mixed-spaces-and-tabs": "error",
      "@stylistic/no-mixed-operators": "error",
      "quotes": ["error", "double"]
    },
  },
)
