import {TextField,Box,makeStyles,Button} from '@material-ui/core';
import { useState } from 'react';
import { updateProfile } from '../../service/api.js';

const useStyle=makeStyles({
    container:{
        display:'flex',
        alignItems:'center',
        marginTop:90,
        backgroundImage:`url(${''})`,
        backgroundRepeat:'no-repeat',
    },
    updateprofile:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& >*':{
            marginTop:20,
        },
        alignItems:'center',
        paddingBottom:130
    }
})

var updateProfileInitial={
    category:'',
    oldvalue:'',
    newvalue:''
}

const UpdateProfile =()=>{

    const classes=useStyle();

    const [change,setChange]=useState(updateProfileInitial);

    const onInputChange=(e)=>{
        setChange({...change,[e.target.name]:e.target.value});
    }
    const Change=async()=>{
        let response=await updateProfile(change);
        if(!response) return;
    }

    return(

    <Box className={classes.container}>    
        <Box className={classes.updateprofile}>

            <TextField onChange={(e)=>onInputChange(e)} name='category' label='first/lastname/email ?'/>
            <TextField onChange={(e)=>onInputChange(e)} name='oldvalue' label='Old value'/>
            <TextField onChange={(e)=>onInputChange(e)} name='newvalue' label='New value'/>

            <Button variant="contained" onClick={()=>Change()} classname={classes.button} style={{background:'skyblue'}}>Update Profile</Button>
        </Box>
    </Box>
)
}

export default UpdateProfile;