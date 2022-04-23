const {Schema,model} = require('mongoose');
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    }
})
module.exports = model('User',userSchema);