BrowserNotifications = new Mongo.Collection('browserNotifications')

if Meteor.isServer
  BrowserNotifications.sendNotification = (opts) ->
    id = BrowserNotifications.insert
      userId: opts.userId
      title: opts.title
      body: opts.body

    #60 second window for the browser to receive and present the notification.
    Meteor.setTimeout () ->
      BrowserNotifications.remove id
    , 60000


  Meteor.publish 'notifications', ->
    BrowserNotifications.find({userId: @userId})

  BrowserNotifications.allow
    insert: -> false
    update: -> false
    remove: (userId, doc) -> userId is doc.userId

if Meteor.isClient
  Meteor.subscribe 'notifications'

  BrowserNotifications.find().observe
    added: (doc) ->
      Notification.requestPermission (p) ->
        new Notification doc.title,
          body: doc.body
      BrowserNotifications.remove(doc._id)
