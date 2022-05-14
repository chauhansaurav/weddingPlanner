import orders from '../model/orderSchema.js';

export const userOrder =async(request,response)=>{

    try{
        const order=request.body;
        const newOrder=new orders(order);
        await newOrder.save();

        response.status(200).json('Order is successfully received');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const cancelOrder =async(request,response)=>{

    try{
        orders.deleteOne({id:request.body.id,username:request.body.username,time:request.body.time},function(err){});

        response.status(200).json('Order is successfully cancelled');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const getOrders = async(request,response)=>{
    try{
        const order=await orders.find({});
        response.json(order);
    }catch(error){
        console.log('Error: ',error.message);
    }
}