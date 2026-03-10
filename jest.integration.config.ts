import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const configIntegration: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  displayName: "integration",
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/tests/integration/**/*.test.[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"], // Paksa Node condition untuk MSW
  },
  //  ini coverge trsehold
  coverageThreshold: {
    global: {
      lines: 70,
      functions: 70,
      branches: 60,
    },
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  coverageDirectory: "<rootDir>coverage/integration",
  coverageReporters: ["text", "html"],
  // transform: {
  // 	"^.+\\.(t|j)sx?$": "@swc/jest",
  // },
  //  collectCoverageFrom menentukan target perhitungan coverage,
  // bukan file mana yang dites. Jadi ini solusi paling efektif untuk pisah coverage.
  collectCoverageFrom: [
    "app/ex-login/page/*.{ts,tsx}", // hanya pages
    // "src/pages/home.{ts,tsx}", // hanya pages
    // "!src/components/**", // jangan hitung komponen
  ],
};

export default createJestConfig(configIntegration);
