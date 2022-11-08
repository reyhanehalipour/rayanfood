import React from 'react'
import logo from '../../assets/images/res-logo.png'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import'./Footer.css'

export default function Footer() {
  return (
   <footer className='footer'>
     <Container>
       <Row>
         <Col lg='3'  md='4'  sm='6'>
         <div className=' footer-logo text-start'>
                    <img src={logo} alt='logo'></img>
                    <h5>Rayan food</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                      Provident adipisci, illo necessitatibus fuga iure mollitia aliquam. 
                    </p>
                </div>
         </Col>

         <Col lg='3'  md='4'  sm='6'>
           <h5 className='footer-title'>delivery time</h5>
           <ListGroup className='dlivery-list' >
             <ListGroupItem className='delivey-time-item   border-0 ps-0'>
               <span>sunday-thursday</span>
               <p>10:00 am -11:00 pm</p>
             </ListGroupItem>

             <ListGroupItem className='delivey-time-item    border-0 ps-0'>
               <span>friday-saturday</span>
               <p>10:00 am -11:00 pm</p>
             </ListGroupItem>

           
           </ListGroup>
         </Col>

         <Col lg='3'  md='4'  sm='6'>
         <h5 className='footer-title'>contact</h5>

           <ListGroup className='dlivery-list' >

           <ListGroupItem className='delivey-time-item   border-0 ps-0'>
               <span>location: Iran,TEHRAN,damavad streed</span>
               
             </ListGroupItem>

             <ListGroupItem className='delivey-time-item   border-0 ps-0'>
               <span>phone: 02145852369</span>
               
             </ListGroupItem>

             <ListGroupItem className='delivey-time-item    border-0 ps-0'>
               <span> Email:foods@gmail.com</span>
             
             </ListGroupItem>

           
           </ListGroup>
         </Col>

         <Col lg='3'  md='4'  sm='6'>
         <h5 className='footer-title'>newLetters</h5>
         <p>subscribe  our newLetters</p>
         <div className='newLetters'>
           <input type='email' placeholder='Enter your email'/>
           <span><i className="ri-send-plane-line"></i></span>
         </div>
         </Col>
       </Row>

       <Row className='mt-5'>
         <Col lg='6' md='6'>
           <p className='text-copy'>copyright -2022 website made by reyhane alipour.</p>
         </Col>
        
       </Row>
     </Container>
   </footer>
  )
}
