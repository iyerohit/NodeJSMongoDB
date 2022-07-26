const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
  if (err) throw err

  console.log(ObjectId());
  const db=client.db("mongoNodejs");
  db.collection("Example").insertOne({

    "name":"Abhishek Kulkarni 333",
    "department":"IT",
    "EMployeeID":"1888888893456"
  },(err,result)=>{
      if(err){
          console.log("error"+err);
      }

      else{
          console.log("result is"+result.insertedId);
      }
  })
console.log("connected");
  //db.collection('mammals').find().toArray((err, result) => {
   // if (err) throw err

   // console.log(result)
 // })
})