import {makeStyles,InputBase,List,ListItem} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import {getProducts as listProducts} from '../../redux/actions/productActions';
import {getVenues as listVenues} from '../../redux/actions/bookingAction';
import {getPhotographers as listPhotographers} from '../../redux/actions/bookingAction';
import {getDecorators as listDecorators} from '../../redux/actions/bookingAction';

const useStyle=makeStyles({
    searchmenu:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:'pink'     
    },
    searchIcon:{
        float:'left',
        marginLeft:60,
        marginTop:5
    },
    inputBase:{
        marginLeft:10,
        background:'white',
        borderRadius:5
    },
    list:{
        position:'absolute',
        color:'black',
        background:'white',
        margin:'10px 100px'
    }
})

const SearchBar=()=>{
    const classes=useStyle();

    const [text,setText]=useState();

    const getText = (text) =>{
        setText(text);
    }

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
        <div clasName={classes.searchmenu}>
            <div className={classes.searchIcon}>
                <Search />
            </div>
            <InputBase placeholder="search"
                className={classes.inputBase}
                onChange={(e)=>getText(e.target.value)}
            />
            {
                text &&
                <List className={classes.list}>
                    {
                        products.filter(product=>product.type.toLowerCase().includes(text.toLowerCase())).map(product=>(
                        
                    <ListItem>
                        <Link to={`product/${product.id}`} style={{color:'inherit',textDecoration:'none'}}>
                            {product.name}
                        </Link>
                    </ListItem>
                        ))
                    }

                    {
                    venues.filter(venue=>venue.location.toLowerCase().includes(text.toLowerCase())).map(venue=>(
 
                    <ListItem>
                        <Link to={`venue/${venue.id}`} style={{color:'inherit',textDecoration:'none'}}>
                            {venue.name}
                        </Link>
                    </ListItem>
                        ))
                    }

                    {
                    photographers.filter(photographer=>photographer.location.toLowerCase().includes(text.toLowerCase())).map(photographer=>(
  
                    <ListItem>
                        <Link to={`photographer/${photographer.id}`} style={{color:'inherit',textDecoration:'none'}}>
                            {photographer.name}
                        </Link>
                    </ListItem>
                        ))
                    }

                    {
                    decorators.filter(decorator=>decorator.location.toLowerCase().includes(text.toLowerCase())).map(decorator=>(
  
                    <ListItem>
                        <Link to={`decorator/${decorator.id}`} style={{color:'inherit',textDecoration:'none'}}>
                            {decorator.name}
                        </Link>
                    </ListItem>
                        ))
                    }
                </List>
            }
        </div>
    )
}

export default SearchBar;