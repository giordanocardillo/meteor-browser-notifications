Package.describe({
  name: 'giordanocardillo:browser-notifications',
  version: '1.0.0',
  summary: 'Send browser notifications to clients from a Meteor server.',
  git: 'https://github.com/giordanocardillo/meteor-browser-notifications',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('coffeescript');
  api.use('mongo');
  api.export('BrowserNotifications');
  api.addFiles('browser-notifications.coffee');
});
