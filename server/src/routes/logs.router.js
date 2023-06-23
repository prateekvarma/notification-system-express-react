const express = require('express');

const { getAllLogs } = require('../controllers/logs.controller');

const logsRouter = express.Router();

logsRouter.get('/logs', getAllLogs);    

module.exports = logsRouter;
