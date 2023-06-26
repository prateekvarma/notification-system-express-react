const { BaseNotification } = require('./BaseNotification');

class PushNotification extends BaseNotification {
  constructor(user, message, category) {
    super(user, message, category);
    this.type = 'Push Notification';
  }

  send() {
    // Logic to send Push Notification
    this.log();
  }
}

module.exports = { PushNotification };
