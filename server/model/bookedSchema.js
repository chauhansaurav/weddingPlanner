import mongoose from 'mongoose';

const bookedSchema=new mongoose.Schema({
    id: String,
    userName:String,
    category:String,
    Name:String,
    location:String,
    fee:Number,
    time:String,
    bookingDate:String
})

export const booked=mongoose.model('bookedBooking',bookedSchema);