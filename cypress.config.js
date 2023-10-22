const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/support/e2e",
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true, //tambahkan jika ingin run all specs di cypress open
    baseUrl: 'https://magento.softwaretestingboard.com',
    supportFile: false,
    setupNodeEvents(on, config) {
      return config
    },
    //implement node event listeners here .
  },
},
);
