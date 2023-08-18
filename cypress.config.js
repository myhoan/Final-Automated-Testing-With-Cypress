const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  on("task", { downloadFile });
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
    token: "Vj1ROvfg8mXjDM5Pg_5WHGdn6ZzH3pODeEW8kQCSYEc",
    userProfile: {
      username: "hoandinh2805",
      first_name: "Hoan",
      last_name: "Dinh Thi My",
      email: "nhitran2405@gmail.com",
      url: "hoandinh2805.com",
      location: "Ho Chi Minh",
      bio: "No pain no gain",
      instagram_username: "hoandinh",
      twitter_username: "hoandinh",
    },
  },
});
