const logs = require('../../models/logs.model');

class BaseNotification {
  constructor(user, message, category) {
    this.user = user;
    this.message = message;
    this.category = category;
    this.time = new Date().toISOString();
  }

  log() {
    logs.push({
      id: logs.length + 1 || 1,
      type: this.type,
      category: this.category,
      message: this.message,
      userName: this.user.name,
      email: this.user.email,
      time: this.time,
    });
  }
}

module.exports = { BaseNotification };
