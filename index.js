'use strict';

module.exports = {
  name: 'ember-navigation',
  included: function(app) {

    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    app.import('vendor/styles/app.css');

    this.appConfig = app.project.config(app.env);
    this.addonConfig = this.appConfig['ember-navigation'] || {};

    return app;
  },
};
