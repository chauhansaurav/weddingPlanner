import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { Typography,Box,makeStyles,Divider } from '@material-ui/core';
import {Link} from 'react-router-dom';

const responsive={
    desktop:{
        breakpoint:{max:3000,min:1024},
        items:2
    },
    tablet:{
        breakpoint:{max:1024,min:464},
        items:2
    },
    mobile:{ 
        breakpoint:{max:464,min:0},
        items:1
    },
};

const useStyle=makeStyles({
    component:{
        paddingBottom:20
    },
    text:{
        padding:'15px 20px',
        display:'flex',
        fontWeight:'bold',
        fontSize:20,
    },
    image:{
        height:200,
        width:350,
        border:'2px solid grey',
    },
    venueText:{
        fontSize:14,
        marginTop:5,
        color:'black'
    },
})

const VenueSlide= ({venues}) =>{
    const classes=useStyle();
    return(
        <Box className={classes.component}>
            <Typography className={classes.text}>Trending In Venues</Typography>
            <Divider />
        <Carousel 
        responsive={responsive}
        infinite={true} 
        centerMode={true}
        autoPlay={false}
        >
            {
                venues.sort((a,b)=>b.rating - a.rating).map(venue=>(
                    <Link to={`venue/${venue.id}`} style={{textDecoration:'none'}}>
                        <Box textAlign="center">
                            <img src={venue.image} alt="venue_image" className={classes.image} />
                        <Typography className={classes.venueText} style={{fontWeight:'bolder',color:'purple'}}>{venue.name}</Typography>
                        <Typography className={classes.venueText}>{venue.location}</Typography>
                        <Typography className={classes.venueText}>Rs.{venue.fee}</Typography>
                        </Box>
                    </Link>
                ))
            }

        </Carousel>
        </Box>

    )

}

export default VenueSlide;