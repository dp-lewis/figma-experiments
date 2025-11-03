# Copilot Instructions for Figma Experiments

## Design Token Usage

**ALWAYS use design tokens when creating or modifying components:**

Use CSS custom properties from `styles/tokens/tokens-with-units.css`


**Token Build Process:**
- Design tokens are generated from `tokens/tokens.json` (exported from Figma)
- Build tokens with units using: `npm run tokens:build-with-units`
- This creates `styles/tokens/tokens-with-units.css` with appropriate px units for sizes/spacing

## Component Development

**ALWAYS create a Storybook story for new components:**

1. **Component Structure:** Place components in appropriate folders:
   - `components/atoms/` - Basic UI elements (buttons, inputs, etc.)
   - `components/molecules/` - Combinations of atoms
   - `components/pages/` - Full page layouts

2. **Required Files for Each Component:**
   - `ComponentName.jsx` - React component
   - `ComponentName.stories.js` - Storybook story
   - `component-name.css` - Component-specific styles (if needed beyond tokens)

3. **Storybook Story Template with Figma Design Links:**
   ```javascript
   import React from 'react';
   import ComponentName from './ComponentName';

   export default {
     title: 'Category/ComponentName',
     component: ComponentName,
     parameters: {
       layout: 'centered', // or 'fullscreen' for pages
       design: {
         type: 'figma',
         url: 'https://www.figma.com/design/[FILE_KEY]/[FILE_NAME]?node-id=X-Y',
       },
     },
     tags: ['autodocs'],
   };

   export const Default = {
     args: {
       // component props
     },
   };

   export const Variant = {
     args: {
       // variant props
     },
   };
   ```

4. **Storybook Story Best Practices:**
   - **ALWAYS include React import:** `import React from 'react';`
   - **Keep stories simple:** Avoid complex render functions that can cause parsing errors
   - **Use simple args objects:** Prefer `args: {}` over custom render functions
   - **Avoid arrow functions in stories:** Use simple object notation instead
   - **Test incrementally:** Start with basic Default story, then add variants
   - **Handle syntax carefully:** Storybook v10+ is strict about JavaScript syntax

5. **Figma Designs Addon:**
   - Always include Figma design links in stories using `@storybook/addon-designs`
   - Use the exact node-id from Figma dev mode (e.g., `node-id=1-61`)
   - Include design links at both story and variant levels when relevant

6. **CSS Approach:**
   - Prefer CSS custom properties (design tokens) over hardcoded values
   - Use semantic class names
   - Keep component styles scoped and maintainable

## Figma Integration

When working with Figma designs:
- Use Figma dev mode to extract design tokens and components
- Ensure generated code uses existing design token CSS custom properties
- Convert Figma exports to match project structure and token system
- Maintain consistency with existing component patterns

## Development Workflow

1. **New Component Process:**
   - Create component with design tokens
   - Write Storybook story with multiple variants
   - **Test stories incrementally:** Start with Default story, add variants one by one
   - Test in Storybook before integration
   - Ensure responsive and accessible

2. **Storybook Troubleshooting:**
   - If parsing errors occur, simplify stories to basic args objects
   - Remove complex render functions and arrow function syntax
   - Ensure React is imported in all story files
   - Restart Storybook after making story changes
   - Check for duplicate imports or syntax errors

3. **Token Updates:**
   - Update `tokens/tokens.json` from Figma exports
   - Run `npm run tokens:build-with-units` to regenerate CSS
   - Verify components still work with updated tokens

## Quality Standards

- **Accessibility:** Include proper ARIA labels, semantic HTML
- **Responsive:** Components should work across different screen sizes
- **Performance:** Optimize for fast loading and smooth interactions
- **Consistency:** Follow established patterns and naming conventions