import User from '../model/userSchema.js';

export const userSignup =async(request,response)=>{

    try{
        const exist=await User.findOne({username:request.body.username});
        if(exist)
        {
            return response.status(401).json('Username already exist');
        }
        const user=request.body;
        const newUser=new User(user);
        await newUser.save();

        response.status(200).json('User is successfully registered');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const userLogin =async (request,response)=>{
    try{
        let user=await User.findOne({username:request.body.username,pwd:request.body.pwd});

        if(user){
            return response.status(200).json(`${request.body.username} login successful`);
        }
        else{
            return response.status(401).json('invalid login');
        }
    }catch(error){
        console.log('Error: ',error.message);
    }

}

export const updateProfile = async(request,response)=>{

    try{
        const change =request.body;
        var category=change.category;
        if(category=="firstname"){
            var query={firstname:change.oldvalue};
            var updatequery={$set:{firstname:change.newvalue}}
        }
        if(category=="lastname"){
            var query={lastname:change.oldvalue};
            var updatequery={$set:{lastname:change.newvalue}}
        }
        if(category=="email"){
            var query={email:change.oldvalue};
            var updatequery={$set:{email:change.newvalue}}
        }
        
        User.updateOne(query,updatequery,function(err){});
    }catch(error){
        console.log('Error: ',error.message);
    }
}