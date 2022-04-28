const {Schema,model}  =require('mongoose');

const linkSchema = new Schema({
        link:String,
        user:{
            type:Schema.Types.ObjectId,
            ref:'User',
            required:(true,"el id de usuario es requerido")
        },
        title: String,
        description:String,
        nameCategory:{
            type:String,
            required:true
        },
        category:{
            type:Schema.Types.ObjectId,
            ref:'Category',
        }
},
{
    versionKey: false, // You should be aware of the outcome after set to false
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
});

module.exports = model ('Link',linkSchema);