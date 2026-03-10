import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({ dir: "./" });

const configUnit: Config = {
  displayName: "unit",
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/tests/unit/**/*.test.[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  coverageReporters: ["text", "html"],
  // hasil coverage akan di tempatkan di fodler coverage/unit
  coverageDirectory: "<rootDir>/coverage/unit",
};

export default createJestConfig(configUnit);
