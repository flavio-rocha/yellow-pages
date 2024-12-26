import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Use ts-jest to work with TypeScript
  testEnvironment: 'jsdom', // Simulate a browser environment
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.node.json',
    },
  },
  roots: ['<rootDir>/src'], // Only look for test files inside the "src" folder
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // File extensions Jest will process
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'], // Match test files
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files using ts-jest
  },
  moduleNameMapper: {
    // Mock CSS and static assets
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mocks for CSS modules
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/fileMock.ts', // Mocks static files
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Run setup after the environment is ready
};

export default config;