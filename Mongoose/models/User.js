const mongoose = require ('mongoose');


const users = mongoose.model('users',{

firstName:{
    type:String,
    required: true,
    minLength: 4
},
lastName :{

    type:String,
    required:true,
    minLength:3
}


});

module.exports = users;
