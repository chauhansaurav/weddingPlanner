import Slide from './Slide.jsx';
import VenueSlide from './VenueSlide.jsx';
import PhotographerSlide from './PhotographerSlide.jsx';
import DecoratorSlide from './DecoratorSlide.jsx';
import {Box,makeStyles} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

import {getProducts as listProducts} from '../../redux/actions/productActions';
import {getVenues as listVenues} from '../../redux/actions/bookingAction';
import {getPhotographers as listPhotographers} from '../../redux/actions/bookingAction';
import {getDecorators as listDecorators} from '../../redux/actions/bookingAction';

const useStyle=makeStyles({
    homepage:{
        background:'pink',
    },
    component:{
        marginRight:40,
        marginLeft:40,
    },
    welcome:{
        position:'relative',
        textAlign:'center',
        paddingTop:'25px',
    },
    welcomeimage:{
        marginTop:20,
        width:'100%',
        height:'100%',
    },
    heading:{
        fontSize:'2em',
        position:'absolute',
        top:250,
        left:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
        color:'white',
    }
})

const Home=()=>{
    const classes=useStyle();

    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    const {venues}=useSelector(state=>state.getVenues);
    const dispatchV=useDispatch();
    useEffect(()=>{
        dispatchV(listVenues())
    },[dispatchV])

    const {photographers}=useSelector(state=>state.getPhotographers);
    const dispatchP=useDispatch();
    useEffect(()=>{
        dispatchP(listPhotographers())
    },[dispatchP])

    const {decorators}=useSelector(state=>state.getDecorators);
    const dispatchD=useDispatch();
    useEffect(()=>{
        dispatchD(listDecorators())
    },[dispatchD])


    return(
        <div className={classes.homepage}>
        <div className={classes.welcome}>
            <img src="https://images.herzindagi.info/image/2019/Sep/destination-wedding-cost-in-india-SOCIAL.jpg" alt="welcomeimage" className={classes.welcomeimage}></img>
                <div className={classes.heading}>
                    <h3>Welcome to Vivaah</h3>
                    <p>Your most loved wedding planner</p>
                </div>
        </div>    

        <Box className={classes.component}>
            <VenueSlide venues={venues}></VenueSlide>
        </Box>

        <Box className={classes.component}>
            <PhotographerSlide photographers={photographers}></PhotographerSlide>
        </Box>

        <Box className={classes.component}>
            <DecoratorSlide decorators={decorators}></DecoratorSlide>
        </Box>

        <Box className={classes.component}>
            <Slide products={products}></Slide>
        </Box>
        
        </div>
        );
}

export default Home;