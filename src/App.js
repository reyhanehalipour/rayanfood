import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import routes from "./routes";
import { ToastContainer} from 'react-toastify';
import { useRoutes } from 'react-router-dom';
import Carts from "./components/UI/CART/Carts";

import { useSelector } from 'react-redux';

function App() {

const showCart=useSelector(state=>state.cartui.cartIsvisible)

  let router = useRoutes(routes)
  return (
    
    <div className="App">
       <ToastContainer/>
    <Header/>
    {showCart && <Carts/>}
     {router}
    <Footer/>
    </div>
  );
}

export default App;
