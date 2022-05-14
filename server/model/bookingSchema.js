import mongoose from 'mongoose';

const bookingSchema=new mongoose.Schema({
    id: String,
    category:String,
    image: String,
    name:String,
    rating:Number,
    location:String,
    fee:Number,
    email:String
})

export const venue=mongoose.model('venue',bookingSchema);

export const photographer=mongoose.model('photographer',bookingSchema);

export const decorator=mongoose.model('decorator',bookingSchema);