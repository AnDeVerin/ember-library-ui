'use strict';

module.exports = function (environment) {
  let ENV = {
    DS: {
      host: 'http://localhost:3000',
    },
    modulePrefix: 'library-ui',
    environment,
    rootURL: '/',
    locationType: 'auto',
    fastboot: {
      hostWhitelist: [
        'example.com',
        'subdomain.example.com',
        /^localhost:\d+$/,
      ],
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth-token': {
      refreshAccessTokens: false,
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.DS.host = 'https://cryptic-island-93715.herokuapp.com';
    ENV.fastboot.hostWhitelist = [ENV.DS.host, 'localhost:4200'];
  }

  ENV['ember-simple-auth-token'].serverTokenEndpoint = `${ENV.DS.host}/session`;

  return ENV;
};
