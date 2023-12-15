// protractor.conf.js
exports.config = {
    framework: 'jasmine',
    specs: ['e2e/**/*.spec.js'], // Path to your integration test files
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu', '--window-size=800,600'],
      },
    },
    chromeDriverVersion: '120.0.6099.71',
    baseUrl: 'http://34.174.97.158:4200/', // Update with your application URL
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 10000,
    },
  };
  