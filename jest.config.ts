// jest.config.js
import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    testEnvironment: "jsdom",
    preset: "ts-jest",
    verbose: true,
    // ... other Jest configuration options
    // Place the ts-jest configuration within the transform object
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
    },

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    moduleNameMapper: {
      "src/(.*)": "<rootDir>/src/$1",
    },
  };
};
