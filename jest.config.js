module.exports = {
  setupFilesAfterEnv: ["./src/tests/jest.setup.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Use babel-jest to transform JavaScript/TypeScript files
  },
};
