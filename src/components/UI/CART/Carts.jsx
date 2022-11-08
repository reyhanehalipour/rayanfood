import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import '../../../style/ShoppingCart.css'
import { useDispatch ,useSelector} from 'react-redux'
import { cartUiActions } from '../../../Store/Shopping-cart/cartUiSlice'

export default function Carts() {
   const dispatch = useDispatch()
     const cartproducts= useSelector(stete=> stete.cart.cartItems)
     const totalAmount= useSelector(state => state.cart.totalAmount)

    const toggleCart=()=>{
       dispatch(cartUiActions.toggle())
    }

  return (
    <div className='cart-container'>
        <ListGroup className='cart'>
            
            <div className='cart-close'>

                <span onClick={ toggleCart}>
                <i className="ri-close-line"></i>
                </span>
                
                

            </div>
            
            <div className='cart-item-list'>

            
                {cartproducts.length ===0 ?(
                <h6 className='text-center mt-5'>no item add to the cart</h6>)
                :(
                    cartproducts.map((item ,index)=>(
                        <CartItem  item={item} key={index}/>
                    ))
                )
                }
               

               
            </div>
            <div className='cart-bottom'>
                <h6>subTitle Amount : <span>  ${totalAmount}</span></h6>
                <button><Link to='/checkout'>checkout</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}
