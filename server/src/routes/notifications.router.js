const express = require('express');

const {
  processNotification,
} = require('../controllers/notifications.controller');

const notificationsRouter = express.Router();

notificationsRouter.post('/notify', processNotification);

module.exports = notificationsRouter;
