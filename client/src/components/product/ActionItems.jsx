import { Box,Button } from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';
import { addToCart } from "../../redux/actions/cartActions";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import UserProfile from '../../context/UserProfile';

const ActionItems =({product})=>{

        const dispatch=useDispatch();

        const history=useHistory();

        const addItemToCart =()=>{
            dispatch(addToCart(product.id));
            history.push('/cart');
        }

        const username=UserProfile.getName();
        

        return(

        <Box>
            <img src={product.image} alt="productimage" style={{width:350,height:480,border:'1px solid purple'}}></img>
            <div>
            <Button onClick={() => addItemToCart()} variant="contained" style={{width:'40%',color:'deeppink',backgroundColor:'white',marginRight:10}} disabled={!username}><ShoppingCart />Add to Cart</Button>
            <Button onClick={() => addItemToCart()} variant="contained" style={{width:'40%',color:'white', backgroundColor:'deeppink'}} disabled={!username}>Buy Now</Button>
            </div>
        </Box>
    )
}

export default ActionItems;