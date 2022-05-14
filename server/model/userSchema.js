import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:20,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:20,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    pwd:{
        type:String,
        required:true,
    }
})

const user=mongoose.model('user',userSchema);

export default user;