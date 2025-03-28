const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'od1pii',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportTitle: 'Cypress Test Results',
      reportPageTitle: 'Cypress Test Results',
      charts: true,
    },
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
