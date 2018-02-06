/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall(options) {
    if (!options.dryRun && isPackageMissing(this, 'ember-wormhole')) {
      return this.addPackagesToProject([
        { name: 'ember-wormhole', target: '^0.5.4' },
      ]);
    }
  }
};
