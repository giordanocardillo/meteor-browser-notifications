Package.describe({
  name: 'mpaddock:browser-notifications',
  version: '0.1.0',
  summary: 'Send browser notifications to clients from a Meteor server.',
  git: 'https://github.com/mpaddock/meteor-browser-notifications',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('coffeescript');
  api.use('mongo');
  api.export('BrowserNotifications');
  api.addFiles('browser-notifications.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mpaddock:browser-notifications');
  api.addFiles('browser-notifications-tests.js');
});
