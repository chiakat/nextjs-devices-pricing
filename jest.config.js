// jest.config.js
const nextJest = require('next/jest')
const path = require('path');

const source = path.join(__dirname);
const destination = path.join(__dirname, 'public');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: source,
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: [path.join(__dirname,'jest.setup.js'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);