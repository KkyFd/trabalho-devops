const { defineConfig } = require("cypress");
const isLocal = process.env.CYPRESS_ENV === "local"; 

module.exports = defineConfig({
  e2e: {
    baseUrl: isLocal ? "http://localhost:8080" : "https://kkyfd.github.io/trabalho-devops/"
  },
});
