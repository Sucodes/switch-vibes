const obj = {
  preset: "ts-jest",
  transform: { "^.+\\.ts?$": "ts-jest" },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};

export default obj;
