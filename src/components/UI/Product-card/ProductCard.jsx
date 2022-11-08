import React from 'react'
import {Link} from 'react-router-dom'
import '../../../style/Product-card.css'
import {useDispatch} from 'react-redux'
import { cartActions } from '../../../Store/Shopping-cart/cartSlice'


export default function ProductCard(props) {

    const{id,title,image01,price} =props.item
    const dispatch=useDispatch()

    

    const AddToCart=()=>{
      dispatch(cartActions.addItem({
        id,
        title,
        image01,
        price
      }))
    }

  return (
    <div className='product-item'>
        <div className='product-img'>
            <img src={image01} alt='' className='w-50'></img>
        </div>
        <div className='product-content'>
            <h5>
                <Link to={`/foods/${id}`}>{title}</Link>
            </h5>
            <div className=' d-flex  align-items-center  justify-content-between mt-5'>
              <span className='product-price'>${price}</span>
              <button className='addtocart-button' onClick={AddToCart}  >Add to cart</button>
             
            </div>
        </div>
    </div>
  )
}
