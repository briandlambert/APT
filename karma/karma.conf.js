// Karma configuration
// Generated on Sat Aug 12 2017 17:08:42 GMT-0700 (PDT)
const coverage = process.env.CODE_COVERAGE || false;

module.exports = function(config) {

  var webpackTestConfig = require('../configs/webpack.karma');

  config.set({
    basePath:'',

    frameworks: ['jasmine'],

    files: [
      'karma.entry.js'
    ],

    exclude: [],

    preprocessors: {
      'karma.entry.js':['coverage','webpack','sourcemap']
    },

    webpack: webpackTestConfig,

    webpackMiddleware:{
      noInfo:true,
      stats:{
        chunks:false
      }
    },

    coverageReporter:{
      type:'in-memory'
    },

    remapCoverageReporter:{
      'text-summary':null,
      json:'./coverage/coverage.json',
      html:'./coverage/html'
    },

    reporters: getReporters(),

    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,

    phantomJsLauncher:{
      exitOnResourceError:true
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    browsers: ['Chrome', 'PhantomJS'],

    singleRun: true,

    concurrency: Infinity
  })
}

function getReporters()
{
  var repoters = ['mocha'];
  if(coverage === 'true'){
    repoters.push('coverage');
    repoters.push('remap-coverage');
  }
  return repoters;
}
