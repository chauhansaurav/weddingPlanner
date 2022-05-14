import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import HeaderButtons from './HeaderButtons';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar'; 

const useStyle =makeStyles({
    header:{
        background:'deeppink',
        height:50,
    },
    AppName:{
        textDecoration:'false',
        color:'white',
        fontSize:30,
        fontStyle:'italic',
        marginRight:40
    },
})

const Header =() =>{
    const classes=useStyle();
    return(
        <AppBar className={classes.header}>
           
           <Toolbar>
               <Link to='/' style={{textDecoration:'none'}}>
              <p className={classes.AppName}>Vivaah</p>
              </Link>
              <SearchBar />
              <HeaderButtons></HeaderButtons>
           </Toolbar>
       
        </AppBar>
    )
}

export default Header;