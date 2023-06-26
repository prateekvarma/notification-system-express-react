const users = require('../models/users.model');
const logs = require('../models/logs.model');

function processNotification(req, res) {
  const { category, message } = req.body;

  // backend validation
  if(!category || !message) {
    res.status(400).send({ success: false });
  }

  // Find users who are subscribed to the category
  const recipients = users.filter((user) => user.subscribed.includes(category));

  // "Send" notifications and log them
  recipients.forEach((recipient) => {
    recipient.channels.forEach((channel) => {
      const log = {
        id: logs.length + 1 || 1,
        type: channel,
        category,
        message,
        userName: recipient.name,
        email: recipient.email,
        time: new Date().toISOString(),
      };
      // interacting with real APIs to send notifications can go here
      logs.push(log);
    });
  });

  res.status(201).send({ success: true });
}

module.exports = { processNotification };
