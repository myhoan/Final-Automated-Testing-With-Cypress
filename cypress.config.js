const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  //Default configuration
  defaultCommandTimeout: 3000,
  e2e: {
    baseUrl: "https://unsplash.com",
    specPattern: ["cypress/e2e/ui/*.feature", "cypress/e2e/api/*.cy.js"],
    setupNodeEvents,
    chromeWebSecurity: false,
    video: false,
    watchForFileChanges: false,
  },
  env: {
    apiUrl: "https://api.unsplash.com",
    email: "nhitran2405@gmail.com",
    password: "minh123456789",
    token: "_wfh1yhQfBeDqEJg73Evk5LeY-G6v8i0n7bCCPXRxeY",
  },
});
