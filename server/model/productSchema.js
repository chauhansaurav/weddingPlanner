import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
    id: String,
    image: String,
    name:String,
    rating:Number,
    type:String,
    price:Number
})

const products=mongoose.model('product',productSchema);

export default products;