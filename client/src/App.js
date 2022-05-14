import {BrowserRouter,Switch,Route} from 'react-router-dom';

//components
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Cart from './components/cart/Cart.jsx';
import BookingList from './components/bookinglist/BookingList.jsx';
import DetailView from './components/product/DetailView';
import {DetailViewVenue,DetailViewPhotographer,DetailViewDecorator} from './components/booking/DetailViewBooking';
import { TemplateProvider } from './templates/TemplateProvider.js';
import ContextProvider from './context/ContextProvider.jsx';

import ProductAddition from './components/header/ProductAddition.jsx';
import BookingAddition from './components/header/BookingAddition.jsx';
import ViewOrders from './components/header/ViewOrders.jsx';
import ViewBookings from './components/header/ViewBookings.jsx';
import UpdateProfile from './components/header/UpdateProfile.jsx';

import {AHeader} from './components/header/AHeader.jsx';

function App() {

  return (
    <TemplateProvider>
      <ContextProvider>
    <BrowserRouter>
      <Header/>
      <AHeader/> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/bookinglist" component={BookingList}/>
        <Route exact path="/product/:id" component={DetailView}/>
        <Route exact path="/venue/:id" component={DetailViewVenue}/>
        <Route exact path="/photographer/:id" component={DetailViewPhotographer} />
        <Route exact path="/decorator/:id" component={DetailViewDecorator} />
        <Route exact path="/productAdd" component={ProductAddition} />
        <Route exact path="/bookingAdd" component={BookingAddition} />
        <Route exact path="/vieworder" component={ViewOrders} />
        <Route exact path="/viewbooking" component={ViewBookings} />
        <Route exact path="/updateprofile" component={UpdateProfile} />
      </Switch>
    </BrowserRouter>
   </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
