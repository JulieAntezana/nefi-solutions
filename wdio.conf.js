exports.config = {
    runner: 'local',
    specs: [
        './e2e/**/*.krecorder.js',
    ],
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://nefi-solutions.firebaseapp.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    // Specify the path to Chromedriver executable
    chromedriverCustomPath: require('chromedriver').path,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function (passed, assertion) {
            // do something
        }
    },
};
