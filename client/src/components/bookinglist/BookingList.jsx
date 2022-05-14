import { useEffect ,useState} from "react";
import { useSelector,useDispatch} from "react-redux";
import { Box,makeStyles,Typography,Button,TextField} from "@material-ui/core";
import {useHistory} from 'react-router-dom';

import BookingListItem from './BookingListItem';
import {removeVenueFromBookingList,removePhotographerFromBookingList,removeDecoratorFromBookingList} from '../../redux/actions/bookingListActions';
import TotalView from "./TotalView";

import {saveBooking,cancelBooking} from '../../service/api.js';
import UserProfile from "../../context/UserProfile";

const useStyle=makeStyles({
    component:{
        marginTop:60,
        padding:'30px 135px',
        display:'flex'
    },
    leftComponent:{
        width:'67%'
    },
    header:{
        padding:'15px 24px'
    },
    bookNow:{
        background:'deeppink',
        color:'white',
        borderRadius:2,
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto'
    },
    cancel:{
        background:'white',
        color:'red',
        borderRadius:2,
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto',
        marginTop:20,
    },
    bottom:{
        padding:'16px 22px',
    }
})

const BookingList =() =>{

    const classes=useStyle();
    const {bookingListItems} =useSelector(state=>state.bookingList);

    const dispatch=useDispatch();

    useEffect(()=>{

    })

    const removeItemFromBookingList=(id)=>{
        dispatch(removeVenueFromBookingList(id))
        dispatch(removePhotographerFromBookingList(id))
        dispatch(removeDecoratorFromBookingList(id))
    }

    const history=useHistory();

    const addBooking=()=>{
        history.push('/');
    }

    const [bookingdate,setBookingdate]=useState(null);
    const onInputChange=(e)=>{
        setBookingdate(e.target.value);
    }
    var date=new Date(new Date());
    var booking={
        id:'',
        userName:'',
        category:'',
        Name:'',
        location:'',
        fee:0,
        time:'',
        bookingDate:'',
    }
    const bookNow=()=>{
        bookingListItems.map(item=>{
            booking.id=item.id;
            booking.userName=UserProfile.getName();
            booking.category=item.category;
            booking.Name=item.name;
            booking.location=item.location;
            booking.fee=item.fee;
            booking.time=date.toDateString();
            booking.bookingDate=bookingdate;
            saveBooking(booking);
        });
    }

    const cancellation=()=>{
        bookingListItems.map(item=>{
            booking.id=item.id;
            booking.userName=UserProfile.getName();
            booking.category=item.category;
            booking.Name=item.name;
            booking.location=item.location;
            booking.fee=item.fee;
            booking.time=date.toDateString();
            booking.bookingDate=bookingdate;
            cancelBooking(booking);
        });
    }

    return(
        <>
            {
                bookingListItems.length ?
                <Box className={classes.component}>
                    <Box className={classes.leftComponent}>

                        <Box className={classes.header} style={{fontWeight:600,fontSize:18}}>
                            My BookingList ({bookingListItems.length})
                        </Box>

                        {
                            bookingListItems.map(item=>(
                                <BookingListItem item={item} removeItemFromBookingList={removeItemFromBookingList}/>
                            ))
                        }

                        <Box className={classes.bottom}>
                            <TextField onChange={(e)=>onInputChange(e)} name='bookingdate' label='BookingDate'/>
                            <Button variant="contained" className={classes.bookNow} onClick={()=>bookNow()} >Book Now</Button>
                            <Button variant="contained" className={classes.cancel} onClick={()=>cancellation(booking)}>Cancel Booking</Button>
                        </Box>

                    </Box>

                    <TotalView bookingListItems={bookingListItems} />
                </Box>
                :
                <Box style={{textAlign:'center',paddingTop:70,margin:'80px 140px'}}>
                    <Typography style={{fontSize:20,fontWeight:'bolder'}}>Your BookingList is Empty</Typography>
                    <Typography>Add Bookings to it now</Typography>
                    <Button onClick={()=>addBooking()} style={{background:'deeppink',color:'white',padding:'12px 70px',marginTop:20}}>Book Now</Button>
                </Box>

            }
        </>

        
    )
}

export default BookingList;