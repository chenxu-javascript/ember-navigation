/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'ember-wormhole', target: '^0.5.4' },
    ]);
  }
};
