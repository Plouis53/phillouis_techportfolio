module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "no-empty": "off",
    "no-misleading-character-class": "off",
    "no-useless-escape": "off",
    "no-prototype-builtins": "off",
    "no-cond-assign": "off",
    "no-unused-vars": "off",
    "no-fallthrough": "off",
    "no-func-assign": "off",
    "getter-return": "off",
    "valid-typeof": "off",
    "no-control-regex": "off",
    "no-undef": "off",
    "no-unsafe-finally": "off",
    "react/no-children-prop": "off",
    "react/no-unknown-property": [
      "error",
      {
        ignore: ["errors", "register", "isValid"],
      },
    ],
  },
};
