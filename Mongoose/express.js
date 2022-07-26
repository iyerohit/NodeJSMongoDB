const mongoose = require("mongoose");
const express =  require('express');
const app= express();
const users =  require('./models/UserSchema');
const bodyParser = require('body-parser');
const port = 8004 || process.eventNames.PORT;

app.listen(port, ()=>{
console.log(`listening on ${port}`    );


});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect("mongodb://localhost:27017/mongoose");

app.get("/", (req,res)=>{

res.send("Hi THis is from Node js Mongo DB Integration APp");

});

app.post("/usersSample",(req,res)=>{

const user = new users({

firstName:"Rajashree",
lastName:"Sekharan" 

});

user.save().then(data =>{
console.log(data);
res.send(data);
});

});

app.get("/users",(req,res)=>{

    users.find({}).then(users => {

        const data ={
            "message":"Data got from Mongo DB via Moongoose",
            "data":users,
            "user":"iyerro"
        }
        res.send(data);

    });


});

app.put("/users",(req,res)=>{

    const id =  req.body.id;
    let user = users.findById(id).then(user =>{

        const firstName = req.body.firstName ;
        console.log(req.body.firstName+"firstname var"+firstName);
        const lastName = req.body.lastName;
        user.firstName = firstName;
        user.lastName =lastName;
        console.log(user +"firstname last name "+firstName+" "+lastName);
        user.message = "Data Update in Mongo DB By mongoose";
        user.save().then(data =>{
            console.log(data);
            res.send(data);

        });
    });


});


app.patch("/users/:id",(req,res)=>{

const id = req.params.id;
const firstName= req.body.firstName;

users.findByIdAndUpdate({_id:id},{$set:{firstName:firstName, message : "Record FirstName Patched by API Call"}}, {new:true}).then(data=>{
res.send(data);

});

});


app.delete("/users/:id",(req,res)=>{

    const id = req.params.id;
    
    users.findByIdAndDelete({_id:id},(data)=>{
        console.log(data);
        res.send(data);
    });
    
    
    
    });

app.post("/users",(req,res)=>{

    const user = new users({
    
    firstName:req.body.firstName,
    lastName:req.body.lastName ,
    message:"Record Created by API Call"
    
    });
    
    user.save().then(data =>{

        console.log(data);
    res.send(data);
    });
    
    });