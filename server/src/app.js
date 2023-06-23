const express = require('express');
const cors = require('cors');

const logsRouter = require('./routes/logs.router');
const notificationsRouter = require('./routes/notifications.router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(notificationsRouter);
app.use(logsRouter);

module.exports = app;
