import mongoose from 'mongoose';

const orderSchema=new mongoose.Schema({
    id: String,
    userName:String,
    price:Number,
    shipping:String,
    time:String
})

const orders=mongoose.model('order',orderSchema);

export default orders;