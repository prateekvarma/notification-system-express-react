const { BaseNotification } = require('./BaseNotification');

class EmailNotification extends BaseNotification {
  constructor(user, message, category) {
    super(user, message, category);
    this.type = 'Email Notification';
  }

  send() {
    // Logic to send Email
    this.log();
  }
}

module.exports = { EmailNotification };
