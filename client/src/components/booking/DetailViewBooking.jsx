import {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getVenueDetails,getPhotographerDetails,getDecoratorDetails} from '../../redux/actions/bookingAction';

import {Box,makeStyles,Typography} from '@material-ui/core';
import { Star } from '@material-ui/icons';

import {ActionVenues,ActionPhotographers,ActionDecorators} from './ActionBookings.jsx';
import Rating from '../rating/Rating.js';
import { useContext } from 'react';
import {LoginContext} from '../../context/ContextProvider.jsx';


const useStyle=makeStyles({
    component:{
        marginTop:55,
        background:'white',
    },
    container:{
        margin:'0 80px',
        background:'pink',
        display:'flex',
    },
    rightContainer:{
        marginTop:50,
        '&>*':{
            marginTop:10,
        },
        marginLeft:30,
    },
    smallText:{
        fontSize:14,
        color:'deeppink',
        fontWeight:'bolder',
    }
})

export const DetailViewVenue=({match})=>{

    const classes=useStyle();

    const {venue} =useSelector(state=>state.getVenueDetails);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getVenueDetails(match.params.id));
    },[dispatch, match.params]);

    const {profile,setProfile}=useContext(LoginContext);

    return(
        <Box className={classes.component}>
            {venue && Object.keys(venue).length &&
            <Box className={classes.container}>
                <Box style={{minWidth:'40%'}}>
                    <ActionVenues venue={venue}></ActionVenues>
                </Box>
                    
                <Box className={classes.rightContainer}>
                    <Typography style={{fontSize:25}}> {venue.name} </Typography>
                    <Typography style={{fontSize:15,fontWeight:'lighter'}}>{venue.category} in {venue.location}</Typography>
                    <Typography className={classes.smallText}>{venue.rating}<Star style={{fontSize:18,marginBottom:-3}}></Star> Rating</Typography>
                    <Typography style={{fontSize:20}}>Rs. {venue.fee}</Typography>
                    <Typography style={{fontSize:15,fontWeight:'lighter',color:'purple'}}>For booking query:{venue.email}</Typography>

                    <Typography style={{color:'green',fontWeight:'bolder'}}>Fully Vaccinated Staff</Typography>
                    <>{ profile ?
                    <Box>
                    <Typography style={{fontSize:17,color:'purple',fontWeight:'bold'}}> Rate this Venue : </Typography>
                    <Rating type={"venue"} part={venue.id}/> 
                </Box> : null
                }</>
                </Box>
            </Box>
            }
        </Box>
    )
}

export const DetailViewPhotographer=({match})=>{

    const classes=useStyle();

    const {photographer} =useSelector(state=>state.getPhotographerDetails);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPhotographerDetails(match.params.id));
    },[dispatch, match.params]);

    const {profile,setProfile}=useContext(LoginContext);

    return(
        <Box className={classes.component}>
            {photographer && Object.keys(photographer).length &&
            <Box className={classes.container}>
                <Box style={{minWidth:'40%'}}>
                    <ActionPhotographers photographer={photographer}></ActionPhotographers>
                </Box>
                    
                <Box className={classes.rightContainer}>
                    <Typography style={{fontSize:25}}> {photographer.name} </Typography>
                    <Typography style={{fontSize:15,fontWeight:'lighter'}}>{photographer.category} in {photographer.location} </Typography>
                    <Typography className={classes.smallText}>{photographer.rating}<Star style={{fontSize:18,marginBottom:-3}}></Star> Rating</Typography>
                    <Typography style={{fontSize:20}}>Rs. {photographer.fee}</Typography>
                    <Typography style={{fontSize:15,fontWeight:'lighter',color:'purple'}}>For booking query:{photographer.email}</Typography>

                    <Typography style={{color:'green',fontWeight:'bolder'}}>Fully Vaccinated Team</Typography>
                    <>{ profile ?
                    <Box>
                    <Typography style={{fontSize:17,color:'purple',fontWeight:'bold'}}> Rate this Photographer : </Typography>
                    <Rating type={"photographer"} part={photographer.id}/>
                    </Box> : null
                }</>
                </Box>
            </Box>
            }
        </Box>
    )
}

export const DetailViewDecorator=({match})=>{

    const classes=useStyle();

    const {decorator} =useSelector(state=>state.getDecoratorDetails);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getDecoratorDetails(match.params.id));
    },[dispatch, match.params]);

    const {profile,setProfile}=useContext(LoginContext);

    return(
        <Box className={classes.component}>
            {decorator && Object.keys(decorator).length &&
            <Box className={classes.container}>
                <Box style={{minWidth:'40%'}}>
                    <ActionDecorators decorator={decorator}></ActionDecorators>
                </Box>
                    
                <Box className={classes.rightContainer}>
                    <Typography style={{fontSize:25}}> {decorator.name} </Typography>
                    <Typography style={{fontSize:15,fontWeight:'lighter'}}>{decorator.category} in {decorator.location}</Typography>
                    <Typography className={classes.smallText}>{decorator.rating}<Star style={{fontSize:18,marginBottom:-3}}></Star> Rating</Typography>
                    <Typography style={{fontSize:20}}>Rs. {decorator.fee}</Typography>
                    <Typography style={{fontSize:15,fontWeight:'lighter',color:'purple'}}>For booking query:{decorator.email}</Typography>

                    <Typography style={{color:'green',fontWeight:'bolder'}}>Fully Vaccinated Staff</Typography>
                    <>{ profile ?
                    <Box>
                    <Typography style={{fontSize:17,color:'purple',fontWeight:'bold'}}> Rate this Decorator : </Typography>
                    <Rating type={"decorator"} part={decorator.id}/>
                    </Box> : null
                }</>
                </Box>
            </Box>
            }
        </Box>
    )
}