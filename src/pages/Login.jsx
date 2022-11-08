import React,{useRef} from 'react'
import Helmet from '../components/Helme/Helmet'
import CommonSection from '../components/UI/CommonCe/CommonSection'
import { Container,Row,Col } from 'reactstrap'

import { Link } from 'react-router-dom';
export default function Login() {
  const loginNameRef =useRef()
  const loginPassword =useRef()

  
const SubmitHandler=e=>{
  

  e.preventDefault()
}
  return (
    <Helmet title='login'>
      <CommonSection title='login'/>

      <section>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} className='m-auto text-center'>
              <form className='form mb-5'onSubmit={SubmitHandler}>
                 <div className='form-group'>
                   <input  type='text'  placeholder='Email' required ref={loginNameRef}/>
                 </div>

                 <div className='form-group'>
                   <input  type='password'  placeholder='password' required   ref={loginPassword}/>
                 </div>
                 <button type='submit' className='addtocart-button'>Login</button>
              </form>
              <Link to='/register'>
                all ready have account ? create an acount
              </Link>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
