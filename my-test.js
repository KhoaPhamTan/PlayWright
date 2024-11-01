const base = require('@playwright/test');

exports.test = base.test.extend({
  // Define an option and provide a default value.
  // We can later override it in the config.
  person: [{username: 'KaKaTeo', password: 'ga7x0830'}, { option: true }],
});
