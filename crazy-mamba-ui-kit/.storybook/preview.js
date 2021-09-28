// use preview.js for global code such as CSS imports or JS mocks that applies to all stories

// preview.js file can be an ES module and export the following keys:
// decorators, parameters, globalTypes

// preview.js is the file where we can import the global css/sass, so it will apply the styles to the components
// import "..src/styles/theme.css";

// If you have a top wrapper with a specific class name which has styles, you should add the same wrapper through decorator.
// import { addDecorator } from "@storybook/react";

// For each story, the parent element will be div with class name "platform"
// addDecorator(story => <div className="platform">{story()}</div>);

// Any other global config or javascript mocks (formatters etc.) should be added in preview.js
// import { addDecorator } from "@storybook/react";
// import { withI18n } from "storybook-addon-i18n";
// addDecorator(withI18n);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}