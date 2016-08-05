const request = require('request');
const getIndeed = require('../models/jobs');

const redisClient = require('redis').createClient;
const redis = redisClient(6379, 'localhost');

exports.post = (req, res) => {
  let jobTitle = req.body.jobTitle,
      city = req.body.city;

  let key = JSON.stringify(req.body);

  redis.del(key);

  redis.get(key, (err, result) => {
    res.setHeader('Content-Type', 'application/json');
    if (result) {
      console.log('return from redis');
      res.send(JSON.parse(result));
      res.end();
    } else {
      let ip = req.headers['x-forwarded-for']
            || req.connection.remoteAddress
            || req.socket.remoteAddress
            || req.connection.socket.remoteAddress;
      console.log('make api call');
      getIndeed(jobTitle, city, ip)(res).then((res) => {
        redis.set(key, res.data);
        res.parse;
        res.end();
      }, (err) => {
        console.log('err: ', err);
        res.end();
      });
    }
  });
}
