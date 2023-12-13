module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
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
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      restartOnFileChange: true
    });
  };
  