import { Box,Button } from "@material-ui/core";
import { addVenueToBookingList,addPhotographerToBookingList,addDecoratorToBookingList} from "../../redux/actions/bookingListActions";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import UserProfile from '../../context/UserProfile';

export const ActionVenues =({venue})=>{

    const dispatch=useDispatch();

    const history=useHistory();

    const addVToBookingList =()=>{
        dispatch(addVenueToBookingList(venue.id));
        history.push('/bookinglist');
    }


    return(
        <Box>
            <img src={venue.image} alt="venueimage" style={{width:700,height:450,border:'1px solid purple'}}></img>
            <p>
            <Button onClick={() => addVToBookingList()} variant="contained" style={{width:'40%',color:'deeppink',backgroundColor:'white'}} disabled={!UserProfile.getName()}>Add to BookingList</Button>
            <Button onClick={() => addVToBookingList()} variant="contained" style={{width:'40%',color:'white', backgroundColor:'deeppink'}} disabled={!UserProfile.getName()}>Book Now</Button>
            </p>
        </Box>
    )
}

export const ActionPhotographers =({photographer})=>{

    const dispatch=useDispatch();

        const history=useHistory();

        const addPToBookingList =()=>{
            dispatch(addPhotographerToBookingList(photographer.id));
            history.push('/bookinglist');
        }
    return(
        <Box>
            <img src={photographer.image} alt="photographerimage" style={{width:700,height:450,border:'1px solid purple'}}></img>
            <p>
            <Button onClick={() => addPToBookingList()} variant="contained" style={{width:'40%',color:'deeppink',backgroundColor:'white'}} disabled={!UserProfile.getName()}>Add to BookingList</Button>
            <Button onClick={() => addPToBookingList()} variant="contained" style={{width:'40%',color:'white', backgroundColor:'deeppink'}} disabled={!UserProfile.getName()}>Book Now</Button>
            </p>
        </Box>
    )
}

export const ActionDecorators =({decorator})=>{

    const dispatch=useDispatch();

        const history=useHistory();

        const addDToBookingList =()=>{
            dispatch(addDecoratorToBookingList(decorator.id));
            history.push('/bookinglist');
        }
    return(
        <Box>
            <img src={decorator.image} alt="decoratorimage" style={{width:700,height:450,border:'1px solid purple'}}></img>
            <p>
            <Button onClick={() => addDToBookingList()} variant="contained" style={{width:'40%',color:'deeppink',backgroundColor:'white'}} disabled={!UserProfile.getName()}>Add to BookingList</Button>
            <Button onClick={() => addDToBookingList()} variant="contained" style={{width:'40%',color:'white', backgroundColor:'deeppink'}} disabled={!UserProfile.getName()}>Book Now</Button>
            </p>
        </Box>
    )
}