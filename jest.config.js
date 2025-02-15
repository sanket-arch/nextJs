const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jest-fixed-jsdom", // Ensure it runs in a browser-like environment
  moduleNameMapper: {
    /**
     * Whenever Jest encounters an import that starts with @/ (e.g., @/components/Button),
     * It replaces @/ with <rootDir>/src/,
     * Then appends the rest of the path ($1 captures everything after @/).
     */
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  /**
   * This configuration tells Jest to run the specified setup file (jest.setup.ts)
   * after the testing environment is set up but before the actual tests run.
   */
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "src"], // Ensure Jest looks in node_modules
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
