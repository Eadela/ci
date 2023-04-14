module.exports = {
  "root": true,
  "settings": {
    "import/extensions": [
      ".js",
      ".jsx"
    ],
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx"
        ]
      },
      // todo 相对路径不对
      "alias": [
        [
          "@",
          "./src"
        ],
        [
          "@C",
          "./src/components"
        ],
        [
          "@V",
          "./src/views"
        ],
        [
          "@assets",
          "./src/assets"
        ],
        [
          "@libs",
          "./src/libs"
        ],
        [
          "@api",
          "./src/api"
        ]
      ]
    }
  },
  "extends": "@eadela/eslint-config",
  "rules": {
  }
}
