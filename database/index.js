const mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/27017/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userName: String,
  userId: String,
  repoName: String,
  repoUrl: String,
  forks: Number,
  size: Number,

  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArray) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repoArray.forEach((entry)=> {
    let newRepo = new Repo(
      {
        userName: entry.owner.login,
        userId: entry.owner.id,
        repoName: entry.name,
        repoUrl: entry.html_url,
        forks: entry.forks,
        size: entry.size,

      }
    )
    newRepo.save(function (err, Repo) {
      if (err) return console.error(err);
      else {
        console.log(`Inserted ${Repo.repoName} repo!`)
      }
    });
  })
}

let fetch = (name,cb) => {
  //   mongoose.connection.collection(name, function (err, collection) {
  //      console.log((collection.find()));
  //  });
  Repo.find(function (err, repos) {
    if (err) return console.error(err);
    cb(repos);
  }).sort({ size: 'descending'})
}
  

module.exports.save = save;
module.exports.fetch = fetch;