const { defineConfig } = require("cypress");

module.exports = {
  projectId: "zou9xn", // Your project ID from Cypress Cloud
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: "http://localhost:3000", // Replace with your application URL
  },
};

