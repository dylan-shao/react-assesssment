module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "no-unused-expressions": "off"
  },
  "env": {
    "browser": true,
    "node": true
  }
};