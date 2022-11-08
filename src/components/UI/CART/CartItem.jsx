import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { useDispatch } from 'react-redux'
import '../../../style/cart-item.css'
import { cartActions } from '../../../Store/Shopping-cart/cartSlice'
export default function CartItem({item}) {

    const{id,title ,price,image01,quantity,totalprice}=item
    const dispatch= useDispatch()

    const incrementItem=()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }

    const decreaseItem=()=>{
        dispatch(cartActions.removeItem(id))
    }

    const deletItem =()=>{
        dispatch(cartActions.deletItem(id))
    }
  return (
    
    <ListGroupItem className='border-0 cart-item'>
        <div className='cart-item-info d-flex gap-2'>
            <img src={image01} alt=''/>
        </div>
        <div className='cart-product-info  w-100 d-flex align-items-center gap-4 justify-content-between'>
            <div>
                <h6 className='product-cart-title'>{title}</h6>
                <p className='d-flex align-items-center gap-5  cart-product-price'>{quantity}X <span>{totalprice}</span></p>


                <div className='d-flex align-items-center gap-3  justify-content-between increase-decrease-btn'>


                <span className='increase-btn' onClick={incrementItem}>
                    <i className="ri-add-line"></i></span>
                <span className='qunatityd'>{quantity}</span>
                <span  className='decrease-btn'  onClick={decreaseItem}>
                    <i className='ri-subtract-line'></i>
                </span>
                </div>


            </div>
            <span className='delete-btn' onClick={deletItem }>
                <i className="ri-close-line"></i>
            </span>
        </div>
    </ListGroupItem>
  )
}
