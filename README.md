# Browser Notifications

A package to send browser notifications to Meteor clients from the server.

## Installation

``` sh
$ meteor add mpaddock:browser-notifications
```

## API

On the server, BrowserNotifications.sendNotification takes an object of options:
```
BrowserNotifications.sendNotification({
  userId: a12345678,
  title: "Notification title",
  body: "Notification body",
  icon: "Icon URL"
});
```

Notifications are sent to the client upon publication. After 60 seconds, they are removed from the database so users aren't flooded with notifications upon return to the page.
