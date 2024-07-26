import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>'],
  resetMocks: true,
  setupFiles: ['<rootDir>/tests/jestSetup.js'],
};

export default createJestConfig(config);
