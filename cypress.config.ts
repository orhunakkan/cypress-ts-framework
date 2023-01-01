const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 60000,
    viewportHeight: 1000,
    viewportWidth: 1200,
    env: {
      demoEnvVar: "Demo Environment",
      demoQa: "https://demoqa.com",
      internetHerokuApp: "https://the-internet.herokuapp.com",
      globalSqa: "https://www.globalsqa.com"
    }
  },
});
