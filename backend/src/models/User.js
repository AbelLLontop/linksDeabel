const {mongoose } = require('mongoose');
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
module.exports = mongoose.models.User || model('User',userSchema);
