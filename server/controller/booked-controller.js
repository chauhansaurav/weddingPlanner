import {booked} from '../model/bookedSchema.js';

export const userBooking =async(request,response)=>{

    try{
        const booking=request.body;
        const newBooking=new booked(booking);
        await newBooking.save();

        response.status(200).json('Booking is successfully booked');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const cancelBooking =async(request,response)=>{

    try{
        booked.deleteOne({id:request.body.id,username:request.body.username,time:request.body.time,bookingDate:request.body.bookingDate},function(err){});

        response.status(200).json('Booking is successfully cancelled');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const getBookings = async(request,response)=>{
    try{
        const booking=await booked.find({});
        response.json(booking);
    }catch(error){
        console.log('Error: ',error.message);
    }
}