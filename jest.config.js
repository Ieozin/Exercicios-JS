module.exports = {
    testEnvironment: "node",
    reporters: [
      "default",
      ["jest-html-reporter", {
        outputPath: "./test-results/report.html"
      }]
    ]
  };