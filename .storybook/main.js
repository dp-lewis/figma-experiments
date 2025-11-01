

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-designs",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;