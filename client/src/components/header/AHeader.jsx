import {AppBar,Toolbar,makeStyles,Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {LoginContext} from '../../context/ContextProvider.jsx';

const useStyle =makeStyles({
    header:{
        background:'white',
        height:50,
        marginTop:50,
        border:'2px solid pink'
    },
    container:{
        marginRight:50,
        marginBottom:10,
        display:'flex',
        alignItems:'center',
        textDecoration:'none',
        color:'deeppink',
        fontWeight:'bolder'
    }
})

export const AHeader =() =>{
    const classes=useStyle();

    const {profile,setProfile}=useContext(LoginContext);

    return(
      <>{  profile==="admin"?
        <AppBar className={classes.header}>
           
           <Toolbar>
                <Link to='/productAdd' className={classes.container}><Typography>Add Product</Typography></Link>
                <Link to='/bookingAdd' className={classes.container}><Typography>Add Booking</Typography></Link>
                <Link to='/vieworder' className={classes.container}><Typography>Orders</Typography></Link>
                <Link to='/viewbooking' className={classes.container}><Typography>Booked Bookings</Typography></Link>
           </Toolbar>
       
        </AppBar> 
        : null
    }</>
    )
}