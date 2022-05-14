import {Box,makeStyles,Typography,Card} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

import { getBookings } from '../../redux/actions/bookingAction';

const useStyle=makeStyles({
    component:{
        marginTop:'120px',
    },
    productText:{
        fontSize:14,
        marginTop:5,
        color:'black',
        marginLeft:80,
    }
})

const ViewBookings = () =>{

    const classes=useStyle();

    const {bookings}=useSelector(state=>state.getBookings);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getBookings())
    },[dispatch])

    var bookedBooking=1;

    return(
        <Box className={classes.component}>
            {
            bookings.map(booking=>(
            
                <Card style={{margin:20,backgroundColor:'lightpink',width:'800px'}}>    
                <Box>
                    BOOKED BOOKING {bookedBooking++}:
                    <Typography className={classes.productText} style={{fontWeight:'bolder',color:'purple'}}>Booking Id: {booking.id}</Typography>
                    <Typography className={classes.productText}>Username: {booking.userName}</Typography>
                    <Typography className={classes.productText}>Category: {booking.category}</Typography>
                    <Typography className={classes.productText}>Name: {booking.Name}</Typography>
                    <Typography className={classes.productText}>Location: {booking.location}</Typography>
                    <Typography className={classes.productText}>Fee: Rs.{booking.fee}</Typography>
                    <Typography className={classes.productText}>Date of Booking: {booking.time}</Typography>
                    <Typography className={classes.productText}>Booked Booking Date: {booking.bookingDate}</Typography>
                </Box>
                </Card>
            ))
            }
        </Box>
    )
}

export default ViewBookings;