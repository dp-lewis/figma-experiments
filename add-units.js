const fs = require('fs');
const path = require('path');

console.log('🚀 Post-processing tokens to add units...');

// Read the generated CSS file
const tokensPath = path.join(__dirname, 'styles/tokens/tokens.css');
let cssContent = fs.readFileSync(tokensPath, 'utf8');

console.log('📖 Original tokens loaded');

// Define which tokens should get px units
const PX_PATTERNS = [
  /--text-size-/g,
  /--spacing-/g
];

// Apply px units to matching tokens
PX_PATTERNS.forEach(pattern => {
  cssContent = cssContent.replace(
    new RegExp(`(${pattern.source.slice(0, -2)}[^:]+: )(\\d+)(;)`, 'g'),
    '$1$2px$3'
  );
});

// Write the processed CSS
const outputPath = path.join(__dirname, 'styles/tokens/tokens-with-units.css');
fs.writeFileSync(outputPath, cssContent);

console.log('✅ Tokens processed with units!');
console.log('📁 Output: styles/tokens/tokens-with-units.css');
console.log('\nUnits added to:');
console.log('- Text size tokens (px)');
console.log('- Spacing tokens (px)');