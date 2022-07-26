const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/animals");

mongoose.connection.once('open',() => console.log("conencted via mongoose"))
.on("error",(err)=> {

    console.log("mongooose connection giving error"+error);
});