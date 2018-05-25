const request = require('request');
const config = require('../config.js');

let getReposByUsername = (query,cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/'+query+'/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(err, res, body) {  
      if (err) {
        console.log('ERROR')
      } else {
        let json = JSON.parse(body);
        console.log('-------->repo search results',json);
        cb(json)
      }
  });
}

module.exports.getReposByUsername = getReposByUsername;