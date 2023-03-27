module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "import",
    "prettier",
    "react-hooks",
    "@typescript-eslint",
    "eslint-plugin-boundaries",
  ],
  overrides: [
    {
      files: [
        ".js",
        ".ts",
        ".jsx",
        ".tsx",
        "**/*.spec.js",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.spec.tsx",
      ],
    },
  ],
  rules: {
    "linebreak-style": ["error", "unix"],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
      },
    ],
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: "app",
            allow: [
              "processes",
              "pages",
              "widgets",
              "features",
              "entities",
              "shared",
            ],
          },
          {
            from: "processes",
            allow: ["pages", "widgets", "features", "entities", "shared"],
          },
          {
            from: "pages",
            allow: ["widgets", "features", "entities", "shared"],
          },
          { from: "widgets", allow: ["features", "entities", "shared"] },
          { from: "features", allow: ["entities", "shared"] },
          { from: "entities", allow: ["shared"] },
          { from: "shared", allow: ["shared"] },
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["app/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["processes/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["pages/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["widgets/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["features/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["entities/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["shared/*/*/**"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/app"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/processes"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/pages"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/widgets"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/features"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/entities"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/shared"],
          },
        ],
      },
    ],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "no-console": "off",
    "no-shadow": "off",
    "no-debugger": "error",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state", "self"],
      },
    ],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": [
      0,
      {
        html: "ignore",
      },
    ],

    "@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "boundaries/elements": [
      { type: "app", pattern: "app/*" },
      { type: "processes", pattern: "processes/*" },
      { type: "pages", pattern: "pages/*" },
      { type: "widgets", pattern: "widgets/*" },
      { type: "features", pattern: "features/*" },
      { type: "entities", pattern: "entities/*" },
      { type: "shared", pattern: "shared/*" },
    ],
  },
};
