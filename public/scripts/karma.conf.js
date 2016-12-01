// Karma configuration
// Generated on Wed Sep 23 2015 10:21:24 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'fixture'],

    //plugins: [
    //  'karma-fixture',
    //  'karma-html2js-preprocessor',
    //  'karma-json-fixtures-preprocessor'
    //],
    //plugins: [
    //  'karma-fixture',
    //  'karma-json-fixtures-preprocessor',
    //  'karma-chrome-launcher',
    //  'karma-phantomjs-launcher'
    //],

    files: [
      '../libs/angular-1.3.3.js',
      '../libs/angular-mocks-1.3.3.js',
      '../libs/jquery-2.1.0.min.js',
      '../libs/angular-1.3.3.js',
      '../libs/moment-2.7.0.min.js',
      '../libs/underscore-1.6.0.min.js',
      '../libs/angular-resource-1.3.3.js',
      '../libs/angular-cookies-1.3.3.js',
      '../libs/angular-sanitize-1.3.3.js',
      '../libs/angular-route-1.3.3.js',
      '../libs/ui-bootstrap-tpls-0.11.0.js',
      '../libs/select2-3.4.8.min.js',
      '../libs/sockjs-0.3.4.js',
      '../libs/stomp.js',
      '../libs/multiselect/multiselect.js',
      '../libs/perfect-scrollbar/src/perfect-scrollbar.js',
      '../libs/perfect-scrollbar/src/angular-perfect-scrollbar.js',
      '../libs/uuid.js',
      'modules/dsny-center-modal.js',
      'modules/about-us.js',
      'modules/work-units-information.js',
      'modules/ng-order-object-by.js',
      'modules/exception-override.js',
      'modules/error-stack.js',
      'directives/angular-flex-splitter.js',
      'directives/lvl-uuid.js',
      'directives/lvl-drag-drop.js',
      'directives/modal-directive.js',
      'directives/modal-directives.js',
      'directives/uiSelect2.js',
      'factories/modal-position.js',
      'factories/client-error.js',
      'factories/exception-handler.js',
      'factories/filter-runner.js',
      'factories/async-wrapper.js',
      'directives/center-modal.js',
      'directives/angular-ui-dropdown-button.js',
      'filters/boroBoardFilters.js',
      'filters/equipment-filters.js',
      'filters/personnel-filters.js',
      'filters/location-filters.js',
      'filters/tasks-filters.js',
      'filters/ops-board-filters.js',
      'app.js',
      'test/etc/constant.js',
      'models/equipment-model.js',
      'models/person-model.js',
      'models/task-model.js',
      'services/cache/category-data-service.js',
      'controllers/personnel-controller.js',
      'controllers/person-details.js',
      'services/board/board-data-service.js',
      'services/board/board-helper-service.js',
      'services/board/board-value-service.js',
      'services/ops-board-repository.js',
      'services/common/web-socket-service.js',
      'services/common/reference-data-service.js',
      'services/cache/shift-data-service.js',
      'services/cache/category-data-service.js',
      'services/cache/down-codes-service.js',
      'services/cache/material-service.js',
      'services/cache/personnel-status-service.js',
      'services/cache/repair-location-service.js',
      'services/cache/special-position-service.js',
      'services/cache/unavailability-code-service.js',
      'services/common/uuid-generator.js',
      'services/taskSetting/task-settings-service.js',
      'services/task/task-helper-service.js',
      'services/task/task-indicator-service.js',
      'services/common/recent-activity-logging-service.js',
      'services/equipment/equipment-helper-service.js',
      'services/personnel/personnel-helper-service.js',
      'services/common/info-service.js',
      'services/board/board-helper-service.js',
      'services/common/ops-board-interval.js',
      'services/common/work-units.js',
      'services/common/utility-service.js',
      'services/common/reports-service.js',
      'displayboard/*.js',
      'test/fixtures/**/*.json',
      'test/**/*Spec.js',
      {
        pattern: 'test/fixtures/**/*.json',
        watched: true,
        served:  true,
        included: false
      }
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/fixtures/**/*.json': ['json_fixtures']
    },
    jsonFixturesPreprocessor: {
      variableName: '__fixtures__',
      camelizeFilenames: true,
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers, 'Chrome',, 'PhantomJS_custom'
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS'], //work for mackbook
    browsers: ['PhantomJS'],

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
