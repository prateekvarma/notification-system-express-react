const logs = require('../models/logs.model');

function getAllLogs(req, res) {
  // res.status(200).json(logs)
  return res.status(200).send(logs);
}

module.exports = { getAllLogs };
