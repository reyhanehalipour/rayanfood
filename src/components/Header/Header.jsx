import React,{useRef,useEffect} from 'react'
import { Container} from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import {NavLink,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import './Header.css'

import { cartUiActions } from '../../Store/Shopping-cart/cartUiSlice'


const nav_links=[
    {
        display: 'Home',
        path: '/'
    },

    
    {
        display: 'foods',
        path: '/foods'
    },

    {
        display: 'cart',
        path: '/cart'
    },


]

export default function Header() {

    const menuref=useRef(null)
    const headerRef= useRef(null)
    const totalQuantity= useSelector(state=>state.cart.totalQuantity)
    const dispatch= useDispatch()

    const togglemenu=()=> menuref.current.classList.toggle('show-menu')

    const togglecart=()=>{
        dispatch(cartUiActions.toggle())
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop >80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('header-shrink')
            }
            else{
                headerRef.current.classList.remove('header-shrink')
            }
            return()=> window.removeEventListener('scroll')
        })
    })
  return (
   <header className='header' ref={headerRef}>
        <Container>
            <div className='nav-wrapper'>
                <div className='logo'>
                    <img src={logo} alt='logo'></img>
                    <h5>Rayan Food</h5>
                </div>
                <div className='navigation' ref={menuref}   onClick={togglemenu}>
                    <div className='menu'>
                        {nav_links.map((item, index)=>(
                            <NavLink 
                           
                            to={item.path} key={index}
                            className={navClass=> navClass.isActive ? 'active-menu': ''}>
                                {item.display}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className='nav-right'>
                    <span className='cart-icon' onClick={togglecart}>
                    <i className="ri-shopping-basket-line" ></i>
                    <span className='cart-badge'>{totalQuantity}</span>
                    </span>

                    <span className='user'>
                   <Link to='login'> <i className="ri-user-line"></i></Link> 
                    </span>

                    <span className='menu-mobile' onClick={togglemenu} >
                    <i className="ri-menu-line" ></i>
                    </span>
                </div>
            </div>
        </Container>
   </header>
  )
}
