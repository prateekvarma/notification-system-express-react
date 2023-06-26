const { BaseNotification } = require('./BaseNotification');

class SMSNotification extends BaseNotification {
  constructor(user, message, category) {
    super(user, message, category);
    this.type = 'SMS Notification';
  }

  send() {
    // Logic to send SMS
    this.log();
  }
}

module.exports = { SMSNotification };
