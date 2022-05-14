import {Box,Dialog,Button, DialogContent,makeStyles,TextField,Typography} from '@material-ui/core';
import { useState } from 'react';
import {authenticateSignup,authenticateLogin} from '../../service/api.js';
import UserProfile from '../../context/UserProfile';

const useStyle=makeStyles({
    component:{
        height:'70vh',
        width:'90vh',
    },
    image:{
        backgroundImage:`url(${'https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`,
        height:'auto',
        backgroundRepeat:'none',
        width:'40%',
        backgroundPosition:'center 85%',
        padding:'45px 35px',
        '& >*':{
            color:'white',
            fontWeight:600,
        }
    },
    login:{
        padding:'10px 35px',
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& >*':{
            marginTop:20,
        }
    },
    text:{
        fontSize:12,
        color:'deeppink',
    },
    button:{
        height:48,
        borderRadius:2
    },
    createText:{
        textAlign:'center',
        marginTop:135,
        fontSize:14,
        color:'purple',
        fontWeight:600,
        cursor:'pointer'
    },
    error:{
        fontSize:10,
        color:'red',
    }
})

const initialValue ={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your orders and bookings'
    },
    signup:{
        view:'signup',
        heading:'SignUp',
        subHeading:'Join To The Vivaah Family'
    }
}

const signupInitialValue={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    pwd:'',
}

const loginInitialValue={
    username:'',
    pwd:''
}


const Login=({open,setOpen,setProfile})=>{

    const classes=useStyle();

    const [profile,toggleProfile]=useState(initialValue.login);
    const [signup,setSignup]=useState(signupInitialValue);
    const [login,setLogin]=useState(loginInitialValue);
    const [error,setError]=useState(false);

    const handleClose=()=>{
        setOpen(false);
        toggleProfile(initialValue.login);
    }

    const toggleUserProfile = () =>{
        toggleProfile(initialValue.signup);
    }

    const signupUser=async()=>{
        let response=await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setProfile(signup.username);
        UserProfile.setName(signup.username);
    }

    const loginUser=async()=>{
        let response=await authenticateLogin(login);
        if(!response) {
            setError(true);
            return;
        }
        handleClose();
        setProfile(login.username);
        UserProfile.setName(login.username);
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        console.log(signup);
    }

    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{profile.heading}</Typography>
                        <Typography style={{marginTop:'20px'}}>{profile.subHeading}</Typography>
                    </Box>

                    {
                        profile.view === 'login' ?

                    <Box className={classes.login}>
                        <TextField onChange={(e)=>onValueChange(e)} name='username' label='Enter Username'/>
                        <TextField onChange={(e)=>onValueChange(e)} name='pwd' label='Enter Password'/>
                        {error && <Typography className={classes.error}>Invalid username or password</Typography>}
                        
                        <Typography className={classes.text}>
                            By continuing,you agree to the Vivaah's terms of use.
                        </Typography>
                        <Button variant="contained" classname={classes.button} style={{background:'violet'}} onClick={()=>loginUser()}>Login</Button>
                        <Typography onClick={()=>toggleUserProfile()} className={classes.createText}>New to Vivaah? Create a profile</Typography>
                    </Box>   :

                        <Box className={classes.login}>
                        <TextField onChange={(e)=>onInputChange(e)} name='firstname' label='Enter Firstname'/>
                        <TextField onChange={(e)=>onInputChange(e)} name='lastname' label='Enter Lastname'/>
                        <TextField onChange={(e)=>onInputChange(e)} name='username' label='Enter Username' />
                        <TextField onChange={(e)=>onInputChange(e)} name='email' label='Enter Email' />
                        <TextField onChange={(e)=>onInputChange(e)} name='pwd' label='Enter Password' />
                        
                        <Button variant="contained" onClick={()=>signupUser()} classname={classes.button} style={{background:'violet'}}>SignUp</Button>
                    </Box>

                    }
                </Box>
                
            </DialogContent>

        </Dialog>
    )
}

export default Login;