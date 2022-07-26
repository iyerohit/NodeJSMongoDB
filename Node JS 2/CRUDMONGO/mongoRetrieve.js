const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) throw err

const db=client.db("mongoNodejs");
db.collection('Example').find().toArray((err, result) => {
    if (err) throw err

    console.log(result);
  })

});