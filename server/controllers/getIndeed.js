const request = require('request');
const getIndeed = require('../models/jobs');

exports.get = (req, res) => {
  var ip = req.headers['x-forwarded-for'] || 
  req.connection.remoteAddress || 
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress;
  
  let data = getIndeed(null,'Software engineer', 'San Francisco', ip)(res);
  return data;
  res.end();
}


