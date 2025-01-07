import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // Apply for all JavaScript files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node, // Add Node.js globals like `process`, `__dirname`, etc.
        ...globals.browser, // Keep browser globals if needed
      },
    },
  },
  // Extend recommended rules from the JavaScript plugin
  pluginJs.configs.recommended,
];
