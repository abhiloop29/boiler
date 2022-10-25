module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "eslint:recommended"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: [
    "react"
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
    // "react/prop-types": "off"
  }
};
