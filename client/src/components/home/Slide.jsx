import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { Typography,Box,makeStyles,Divider } from '@material-ui/core';
import {Link} from 'react-router-dom';

const responsive={
    desktop:{
        breakpoint:{max:3000,min:1024},
        items:4
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
        height:300,
        width:200,
        border:'2px solid grey'
    },
    productText:{
        fontSize:14,
        marginTop:5,
        color:'black'
    },
})

const Slide= ({products}) =>{
    const classes=useStyle();
    return(
        <Box className={classes.component}>
            <Typography className={classes.text}>Trending In Shopping</Typography>
            <Divider />
        <Carousel 
        responsive={responsive}
        infinite={true} 
        centerMode={true}
        autoPlay={false}
        >
            {
                products.sort((a,b)=>b.rating - a.rating).map(product=>(
                    <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                        <Box textAlign="center">
                            <img src={product.image} alt="product_image" className={classes.image} />
                        <Typography className={classes.productText} style={{fontWeight:'bolder',color:'purple'}}>{product.name}</Typography>
                        <Typography className={classes.productText}>{product.type}</Typography>
                        <Typography className={classes.productText}>Rs.{product.price}</Typography>
                        </Box>
                    </Link>
                ))
        }

        </Carousel>
        </Box>

    )

}

export default Slide;