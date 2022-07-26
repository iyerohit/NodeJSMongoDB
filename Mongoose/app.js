const mongoose = require("mongoose");
const users = require("./models/User");

mongoose.connect("mongodb://localhost:27017/mongoose");

mongoose.connection.once('open',() => {console.log("conencted via mongoose");


const newUser = new users({
    firstName:"Rohit",
    lastName:"Iyer"
    
    
    });
    
    newUser.save((err,data)=>{
    
    
        if(err){
            console.log("error in saving"+err);
        }else{
    
            console.log("data Saved is"+data);
        }
    
    });


    
const newUserSchema = new users({
    firstName:"Ramchandran",
    lastName:"Subramanian"
    
    
    });
    
    newUserSchema.save((err,data)=>{
    
    
        if(err){
            console.log("error in saving"+err);
        }else{
    
            console.log("data Saved is"+data);
        }
    
    });

})
.on("error",(err)=> {

    console.log("mongooose connection giving error"+error);
});

