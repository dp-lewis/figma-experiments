module.exports = {
  source: ["styles/generated/tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "styles/generated/",
      files: [
        {
          destination: "tokens-from-figma.css",
          format: "css/variables",
          selector: ":root"
        }
      ]
    }
  }
};