
import './App.css';

import Foods from './Components/Foods/Foods';

import Header from './Components/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopBanner from './Components/Header/TopBanner';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import SignUp from './Components/Signup/SignUp';
import { useState } from 'react';
import Shipment from './Components/Checkout/Shipment';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext= createContext();
function App() {

  const [loggedinUser,setLoggedinUser]= useState({
    name:'',
    email:'',
    password:'',
    error:'',
    success: false,
  });

  const [cart , setCart] = useState([]);
  const [deliveryDetails , setDeliveryDetails] = useState({
    todoor:null,road:null, flat:null, businessname:null, address: null
  });
  const deliveryDetailsHandler = (data) => {
    setDeliveryDetails(data)
}
  const cartHandler = (data) => {

    const alreadyAdded = cart.find(crt => crt.id == data.id );
    const newCart = [...cart,data]
    setCart(newCart);
    if(alreadyAdded){
      const reamingCarts = cart.filter(crt => cart.id != data);
      setCart(reamingCarts);
    }else{
      const newCart = [...cart,data]
      setCart(newCart);
    }
   
  }
  const clearCart =  () => {
    const orderedItems = cart.map(cartItem => {
      return {food_id : cartItem.id, quantity: cartItem.quantity}
    })
  }

  


    const checkOutItemHandler = (productId, productQuantity) => {
      const newCart = cart.map(item => {
        if(item.id == productId){
            item.quantity = productQuantity;
        }
        return item;
      })

      const filteredCart = newCart.filter(item => item.quantity > 0)
      setCart(filteredCart)
    }

  
  return (
    <userContext.Provider value={[loggedinUser,setLoggedinUser]}>
<Router>
<Switch>
<Route exact path="/" >
  <Header cart={cart}/>
  <TopBanner/>
  <Foods/>
  <Footer/>
  </Route>
  <Route path="/food/:id">
                <Header cart={cart}/>
                <FoodDetails cart={cart} cartHandler={cartHandler} />
                <Footer/>
            </Route>


 

  <Route path="/login">
 
  
    
    <Login/>
  </Route>
  <Route path="/signup">
 
  
    
    <SignUp/>
  </Route>
  <PrivateRoute path="/checkout">
                <Header cart={cart}/>
                <Shipment  cart={cart} clearCart={clearCart} checkOutItemHandler={checkOutItemHandler} cartHandler={cartHandler} />
                <Footer/>
            </PrivateRoute>


</Switch>
</Router>
</userContext.Provider>




  );
}

export default App;
