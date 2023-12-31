module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false,
        jasmine: {
          // Jasmine-specific configuration, if needed
        }
      },
      browserConsoleLogOptions: {
        terminal: true,
        level: '' // Adjust the log level as needed
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      autoWatch: false,
      browsers: ['Chrome'],
      singleRun: true,
      restartOnFileChange: true
    });
  };
  