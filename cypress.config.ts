/* eslint-disable @typescript-eslint/no-require-imports */
import { defineConfig } from "cypress";
const { start_mockserver, stop_mockserver } = require("mockserver-node");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Tâches personnalisées pour le mock server
      on("task", {
        // Démarrer le mock server
        startMockServer: async () => {
          try {
            await start_mockserver({ serverPort: 5287, verbose: true });
            console.log("Mock server started on port 5287");
            return null;
          } catch (err) {
            console.error("Failed to start mock server:", err);
            throw err;
          }
        },

        // Arrêter le mock server
        stopMockServer: async () => {
          try {
            await stop_mockserver({ serverPort: 5287 });
            console.log("Mock server stopped");
            return null;
          } catch (err) {
            console.error("Failed to stop mock server:", err);
            throw err;
          }
        },
      });

      // Tu peux enregistrer d'autres tâches si nécessaire
      on("task", {
        setupResponse: require("./cypress/tasks/mockServerTasks").setupResponse,
        verifyRequest: require("./cypress/tasks/mockServerTasks").verifyRequest,
      });

      return config;
    },
    baseUrl: "http://localhost:3000",
  },
});