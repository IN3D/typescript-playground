module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      './tests/*'
    ],
    preprocessors: {
      './tests/*': ['typescript']
    },
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['mocha'],
    reportSlowerThan: 5,
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher')
    ]
  });
};
