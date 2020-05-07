module.exports = {
  "extends": [
    "react-app",
    "google"
  ],
  "rules": {
    "max-len": ["error", { "code": 300, "ignoreComments": true, "ignoreTemplateLiterals": true, "ignoreStrings": true }],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "brace-style": ["error", "stroustrup"],
    "linebreak-style": 0,
    "no-tabs": 0,
    "no-invalid-this": "off",
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": false
      }
    }],
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": [],
      "specialLink": []
    }]
  },
}