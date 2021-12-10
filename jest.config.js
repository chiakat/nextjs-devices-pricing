// jest.config.js
const nextJest = require('next/jest');
const path = require('path');

const source = path.join(__dirname);

const createJestConfig = nextJest({
  dir: source,
});

const customJestConfig = {
  setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
