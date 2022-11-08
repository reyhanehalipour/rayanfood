import React,{useRef} from 'react'
import Helmet from '../components/Helme/Helmet'
import CommonSection from '../components/UI/CommonCe/CommonSection'
import { Container,Row,Col } from 'reactstrap'

import { Link } from 'react-router-dom';
export default function Register() {
  const signUpNameRef =useRef()
  const signUpPassword =useRef()
  const signUpName =useRef()

  
const SubmitHandler=e=>{
  

  e.preventDefault()
}
  return (
    <Helmet title='register'>
      <CommonSection title='register'/>

      <section>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} className='m-auto text-center'>
              <form className='form mb-5'onSubmit={SubmitHandler}>
                 <div className='form-group'>
                   <input  type='text'  placeholder='fullname' required ref={signUpName}/>
                 </div>

                 <div className='form-group'>
                   <input  type='email'  placeholder='Email' required ref={signUpNameRef}/>
                 </div>

                 <div className='form-group'>
                   <input  type='password'  placeholder='password' required   ref={signUpPassword }/>
                 </div>
                 <button type='submit' className='addtocart-button'>SignUp</button>
              </form>
              <Link to='/login'>
                all ready have account ? login
              </Link>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

