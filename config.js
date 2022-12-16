const StyleDictionary = require('style-dictionary');

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    "scss": {
      "transformGroup": "scss",
      "buildPath": "build/scss/",
      "files": [{
        "destination": "_variables.scss",
        "format": "scss/variables"
      }]
    },
    "css": {
      "transformGroup": "css",
      "buildPath": "build/css/",
      "files": [{
        "destination": "variables.css",
        "format": "css/variables"
      }]
    }
  }
}

/**
 * Transform typography shorthands for css variables
 */
StyleDictionary.registerTransform({
  name: "typography/shorthand",
  type: "value",
  transitive: true,
  matcher: (token) => token.type === "typography",
  transformer: (token) => {
    const {fontWeight, fontSize, lineHeight, fontFamily} = token.original.value;
    return `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
  },
});