

import AllFoods from './pages/AllFoods';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import FoodDetails from './pages/FoodDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';




let routes=[
    
    
   
    {path: '/' , element: <Home/>},
    {path: '/login' , element: <Login/>},
    {path: '/foods' , element: <AllFoods/>},
    {path: '/cart' , element:<Cart/>},
    {path: '/checkout' , element: <Checkout/>},
    {path: '/foods/:id' , element: <FoodDetails/>},
    {path: '/register' , element: <Register/>},
    
    
   
  
]

export default routes