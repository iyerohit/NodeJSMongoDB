const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userschema = new Schema({

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
,
message:{

    type:String,
    default:"Record Created Manually"
}

});

module.exports = mongoose.model('users', userschema);
