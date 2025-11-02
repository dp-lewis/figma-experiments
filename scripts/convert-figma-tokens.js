const fs = require('fs');
const path = require('path');

// Read the Figma tokens
const figmaTokens = JSON.parse(fs.readFileSync('styles/Tokens.json', 'utf8'));

// Transform Figma format to Style Dictionary format
const tokens = {};

figmaTokens.variables.forEach(variable => {
  const nameParts = variable.name.split('/').map(part => 
    part.toLowerCase().replace(/\s+/g, '-')
  );
  
  let current = tokens;
  for (let i = 0; i < nameParts.length - 1; i++) {
    if (!current[nameParts[i]]) {
      current[nameParts[i]] = {};
    }
    current = current[nameParts[i]];
  }
  
  const lastPart = nameParts[nameParts.length - 1];
  const value = variable.valuesByMode['4:0'];
  
  if (variable.type === 'COLOR') {
    const { r, g, b, a } = value;
    const red = Math.round(r * 255);
    const green = Math.round(g * 255);
    const blue = Math.round(b * 255);
    current[lastPart] = {
      value: a === 1 ? `rgb(${red}, ${green}, ${blue})` : `rgba(${red}, ${green}, ${blue}, ${a})`,
      type: 'color'
    };
  } else if (variable.type === 'FLOAT') {
    current[lastPart] = {
      value: `${value}px`,
      type: variable.name.includes('Text') ? 'fontSizes' : 'spacing'
    };
  } else if (variable.type === 'STRING') {
    current[lastPart] = {
      value: value,
      type: 'fontFamilies'
    };
  }
});

// Create the output directory if it doesn't exist
if (!fs.existsSync('styles/generated')) {
  fs.mkdirSync('styles/generated', { recursive: true });
}

// Write the transformed tokens
fs.writeFileSync('styles/generated/tokens.json', JSON.stringify(tokens, null, 2));

console.log('✅ Figma tokens converted to Style Dictionary format');
console.log('📍 Output: styles/generated/tokens.json');