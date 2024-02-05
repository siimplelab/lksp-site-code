// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        "modules": false
      }
    ]
  ]
};
