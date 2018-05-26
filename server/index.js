const express = require('express');
const bodyParser = require('body-parser')
const searchGithub = require('../helpers/github.js');
const db = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  let query = (Object.keys(req.body)[0])
  console.log('query',query)
  // let cb = (searchResult) => console.log('-----APP POST',searchResult)
  let usersRepos = searchGithub.getReposByUsername(query,db.save)
  
});


app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  let log = (blah)=> console.log('------YOOOOOOOO', blah);
  db.fetch('repos',log)
  res.send('hi')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

