import React from 'react'
import Helmet from '../components/Helme/Helmet'
import CommonSection from '../components/UI/CommonCe/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { useSelector ,useDispatch} from 'react-redux';
import { cartActions } from '../Store/Shopping-cart/cartSlice';

import '../style/cartPage.css'
import { Link } from 'react-router-dom';
const Cart=() =>{

  const cartItems =useSelector(state =>state.cart.cartItems)
  const totalAmount= useSelector(state=>state.cart.totalAmount)
  return (
   <Helmet title='cart'> 

     <CommonSection  title='your cart'/>

     <section>
       <Container>
         <Row>
           <Col lg={12}>
             { cartItems.length ===0  ? <h5 className='text-center'>cart is empty</h5> :
                <table className='table table-bordered'>
                <thead>
                  <tr className='text-center'>
                    <th>Image</th>
                    <th>Product title</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Delet</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map(item => <Tr item={item} key={item.id}/>)
                  }
                </tbody>
              </table>

             }
             <div className='mt-5'>
               <h5>subTotal:<span className='cart-subtotal'>${totalAmount}</span></h5>
               <p>taxes and shipping will calculate at checkout</p>

               <div className='cart-page-btn'>
                 <button className='addtocart-button'><Link to='/foods'>continue Shopping</Link></button>
                 <button className='addtocart-button'><Link to='/checkout'>checkout</Link></button>
               </div>
             
             </div>
           </Col>
         </Row>
       </Container>
     </section>
   </Helmet>
  )


}

const Tr = props =>{

const{id,image01, price,title,quantity}= props.item
const dispatch = useDispatch()
const deletItem =()=>{
  dispatch(cartActions.deletItem(id))
}

  return <tr >
    <td className=' cart-img-box  text-center '><img src={image01} alt=''/></td>
    <td  className='text-center'>{title}</td>
    <td className='text-center'>${price}</td>
    <td  className='text-center'>{quantity}px</td>
    <td  className='text-center  cart-item-del' onClick={deletItem}><i className='ri-delete-bin-line'></i></td>
  
  </tr>
}

export default Cart
