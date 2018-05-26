const mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/27017/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userName: String,
  userId: Number,
  repoName: String,
  repoUrl: String,
  
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
        repoUrl: entry.html_url
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
    mongoose.connection.db.collection(name, function (err, collection) {
       cb(db.collection.find()[0]);
   });
}
  

module.exports.save = save;
module.exports.fetch = fetch;