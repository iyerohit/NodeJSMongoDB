const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) throw err

const db=client.db("mongoNodejs");
db.collection('Example').findOneAndUpdate( {
    _id : new ObjectId("62a061c37a917168021864f2")
  },{

$set:{

        "changed":"updated",
        "firstName":"Rahul"

    }

  });

});