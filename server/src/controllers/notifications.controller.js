// notifications.controller.js
const users = require('../models/users.model');
const { SMSNotification } = require('./util/SMSNotification');
const { EmailNotification } = require('./util/EmailNotification');
const { PushNotification } = require('./util/PushNotification');

function processNotification(req, res) {
  const { category, message } = req.body;

  // backend validation
  if (!category || !message) {
    res.status(400).send({ success: false });
  }

  // Find users who are subscribed to the category
  const recipients = users.filter((user) => user.subscribed.includes(category));

  // "Send" notifications and log them
  recipients.forEach((recipient) => {
    recipient.channels.forEach((channel) => {
      let notification;
      switch (channel) {
        case 'SMS':
          notification = new SMSNotification(recipient, message, category);
          break;
        case 'Email':
          notification = new EmailNotification(recipient, message, category);
          break;
        case 'Push':
          notification = new PushNotification(recipient, message, category);
          break;
        default:
          break;
      }
      if (notification) {
        notification.send();
      }
    });
  });

  res.status(201).send({ success: true });
}

module.exports = { processNotification };
