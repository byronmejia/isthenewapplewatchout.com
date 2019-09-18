// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
    transform: {
        "^.+\\.(ts|tsx|js|html)$": "ts-jest",
    },
    clearMocks: true,
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "text"],
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/*.spec.{ts,tsx}",
        "!**/*.stories.{ts,tsx}",
        "!**/*.mock.{ts,tsx}",
        "!**/*.d.ts",
        "!**/*test-setup.ts",
    ],
    setupFilesAfterEnv: ["./test-setup.ts"],
    moduleNameMapper: {
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@style/(.*)$": "<rootDir>/src/style/$1",
    },
};
