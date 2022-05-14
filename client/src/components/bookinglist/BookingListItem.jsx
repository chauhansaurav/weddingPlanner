import {Card,makeStyles,Box,Typography,Button} from '@material-ui/core';

const useStyle= makeStyles({
    component:{
        display:'flex',
        borderRadius:0,
        background:'pink'
    },
    leftComponent:{
        margin:20,
        display:'flex',
        flexDirection:'column'
    },
    rightComponent:{
        margin:20
    },
    image:{
        height:150,
        width:200
    },
    remove:{
        marginTop:20,
        fontSize:16
    }
})

const BookingListItem =({item,removeItemFromBookingList})=>{

    const classes=useStyle();
    return(
        <Card style={{margin:5}}>
            <Box className={classes.component}>
                <Box className={classes.leftComponent}>
                    <img src={item.image} alt="bookingimage" className={classes.image}></img>
                </Box>

                <Box className={classes.rightComponent}>
                    <Typography>{item.name}</Typography>
                    <Typography style={{marginTop:6,color:'grey',fontSize:14}}>{item.category}</Typography>
                    <Typography style={{marginTop:6,color:'deeppink',fontSize:14}}>{item.location}</Typography>
                    <Typography style={{margin:'20px 0',fontWeight:'bolder'}}>Rs.{item.fee}</Typography>
                    <Button classname={classes.remove} onClick={()=>removeItemFromBookingList(item.id)}>Remove</Button>
                </Box>
            </Box>

        </Card>
    )
}

export default BookingListItem;