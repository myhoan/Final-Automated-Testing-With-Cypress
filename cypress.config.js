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
    userProfile: {
      username: "hoandinh2805",
      first_name: "Hoan",
      last_name: "Dinh Thi My",
      email: "hoandinh2805@gmail.com",
      url: "hoandinh2805.com",
      location: "Ho Chi Minh",
      bio: "No pain no gain",
      instagram_username: "hoandinh",
      twitter_username: "hoandinh",
    },
  },
});
