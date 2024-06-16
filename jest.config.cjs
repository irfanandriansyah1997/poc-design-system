module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/utils/test.tsx"],
  coverageReporters: ["json", "html"],
  moduleNameMapper: { "@/(.*)$": "<rootDir>/src/$1" },
  passWithNoTests: true,
  globals: {
    IS_REACT_ACT_ENVIRONMENT: true,
  },
  prettierPath: require.resolve("prettier-2"),
  preset: 'ts-jest',
  resetMocks: false,
  roots: ["<rootDir>/src"],
  setupFiles: ["jest-localstorage-mock"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTest.ts"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}"],
  transform: {
    "^.+\\.svg$": "jest-transformer-svg",
  },
};
