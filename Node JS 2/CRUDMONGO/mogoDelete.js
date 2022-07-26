const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) throw err

const db=client.db("mongoNodejs");
db.collection('Example').deleteOne( {
    _id : new ObjectId("62a0621b31d6d03721119abc")
  }).then((result=>{

    console.log(result);

  })).catch((err)=> {

    console.log("error is"+err);

  });

});