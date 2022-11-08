import React ,{useState}from 'react'

import Helmet from './../components/Helme/Helmet';
import { Container,Row,Col } from 'reactstrap';
import CommonSection from './../components/UI/CommonCe/CommonSection';
import { useSelector } from 'react-redux';
import '../style/checkout.css'
export default function Checkout() {

const[EnterName,SetEnterName]=useState('')
const[EnterEmail,SetEnterEmail]=useState('')
const[EnterNumber,SetEnterNumber]=useState('')
const[EnterCountry,SetEnterCountry]=useState('')
const[EnterCity,SetEnterCity]=useState('')
const[postalCode,Setpostcode]=useState('')

const ShoppingInfo=[]
const cartTotalAmount= useSelector(state=> state.cart.totalAmount)
const shoppingcart =30
const totalAmount = cartTotalAmount+ Number(shoppingcart)


const SubmitHandler=e=>{
  

  e.preventDefault()

  const useShoppingAddress={
    name:EnterName,
    email:EnterEmail,
    phone:EnterNumber,
    country:EnterCountry,
    city:EnterCity,
    postalCode:postalCode
  }
  ShoppingInfo.push(useShoppingAddress)
  console.log(ShoppingInfo)
}
  return (
    <Helmet title='checkout'>
      <CommonSection title='checkout'/>
      <section>
      <Container>
        <Row>
          <Col lg={8} md={6}>
            <h6 className='mb-4'> shopping address</h6>
            <form  className='checkout-form' onSubmit={SubmitHandler}>
                 <div className='form-group'>
                   <input type='text' placeholder='enter your name'
                   required onChange={ e=>SetEnterName(e.target.value)}/>
                 </div>

                 <div className='form-group'>
                   <input type='email' placeholder='enter your email'
                   required onChange={ e=>SetEnterEmail(e.target.value)}/>
                 </div>

                 
                 <div className='form-group'>
                   <input type='number' placeholder='phone number'
                   required onChange={ e=>SetEnterNumber(e.target.value)}
                   />
                 </div>

                 <div className='form-group'>
                   <input type='text' placeholder=' country'
                   required onChange={ e=>SetEnterCountry(e.target.value)}/>
                 </div>

                 <div className='form-group'>
                   <input type='text' placeholder=' city'
                    required onChange={ e=>SetEnterCity(e.target.value)}/>
                 </div>

                 <div className='form-group'>
                   <input type='number' placeholder='postal code'
                    required onChange={ e=>Setpostcode(e.target.value)}/>
                 </div>
                 <button type='submit' className='addtocart-button' >Payment</button>
            </form>
           
          </Col>

          <Col md={6} lg={4}>
            <div className='chekout-bill'>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>
                SubTotal:$<span>{cartTotalAmount}</span></h6>
              <h6 className='d-flex align-items-center justify-content-between mb-5'>
                Shipping:$<span>{shoppingcart}</span></h6>

                <div className='total-chekout'>
              <h5 className='d-flex align-items-center justify-content-between'>
                Total:$<span>{totalAmount}</span></h5>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}
