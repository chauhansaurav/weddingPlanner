import mongoose from 'mongoose';

const Connection=async()=>{
    try{
    const URL='mongodb://localhost:27017/vivaah_db';
    await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log('database connected successfully');
    }
    catch(error){
        console.log('Error:',error.message);
    }
}

export default Connection;