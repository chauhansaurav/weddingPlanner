import {Box,makeStyles,Typography,Card} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

import { getOrders } from '../../redux/actions/productActions';

const useStyle=makeStyles({
    component:{
        marginTop:'120px',
    },
    orderText:{
        fontSize:14,
        marginTop:5,
        color:'black',
        marginLeft:80
    }
})

const ViewOrders = () =>{

    const classes=useStyle();

    const {orders}=useSelector(state=>state.getOrders);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getOrders())
    },[dispatch])

    var counter=1;
    return(
        <Box className={classes.component}>
            {
            orders.map(order=>(
                    
                <Card style={{margin:20,backgroundColor:'lightpink',width:'800px'}}>
                    <Box>
                    ORDER {counter++}:
                    <Typography className={classes.orderText} style={{fontWeight:'bolder',color:'purple'}}>Product Id: {order.id}</Typography>
                    <Typography className={classes.orderText}>Username: {order.userName}</Typography>
                    <Typography className={classes.orderText}>Price: Rs.{order.price}</Typography>
                    <Typography className={classes.orderText}>Shipping: {order.shipping}</Typography>
                    <Typography className={classes.orderText}>Order date: {order.time}</Typography>
                    </Box>
                </Card>
            ))
            }
        </Box>
    )
}

export default ViewOrders;