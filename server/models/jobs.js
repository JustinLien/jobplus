'use strict';
const request = require('request');
const Promise = require('promise');

let getIndeed = (query, city, userIP) => {
  query = encodeURI(query);
  city = encodeURI(city);

  return (res) => {
    return new Promise((resolve, reject) => {
      request('http://api.indeed.com/ads/apisearch?format=json&publisher=' + 
        process.env.INDEED + '&q=' + 
        query + '&l=' + 
        city + '&radius=.5&st=jobsite&jt=fulltime&limit=15&filter=1&latlong=1&co=us&userip=' +
        userIP + '&v=2', 
        (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              parse: res.send(JSON.parse(body)),
              data: body
            });
          }
        });
    })
  }
};

module.exports = getIndeed;
