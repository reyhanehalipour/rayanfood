import React ,{useEffect,useState}from 'react'
import Helmet from '../components/Helme/Helmet'
import { Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import hero from '../assets/images/hero.png'
import '../../src/style/hero-section.css'
import {Link} from 'react-router-dom'
import Category from '../components/UI/Category/Category'
import '../style/home.css'
import featureimg01 from'../../src/assets/images/service-01.png'
import featureimg02 from'../../src/assets/images/service-02.png'
import featureimg03 from'../../src/assets/images/service-03.png'

import products from '../assets/fake-data/project'
import foodcategoryimg1 from '../assets/images/hamburger.png'
import foodcategoryimg2 from '../assets/images/pizza.png'
import foodcategoryimg3 from '../assets/images/bread.png'
import ProductCard from '../components/UI/Product-card/ProductCard'
import networkimg from '../assets/images/network.png'
import whyimg from '../assets/images/location.png'
import Testimonial from '../components/UI/Slider/Testimonial'

const featureData=[
  {
    id:1,
    title: 'Quick Delivery',
    imgURL:  featureimg01,
    describe:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi labore suscipit quas temporibus magnam deserunt voluptates provident',
  },

  {
    id:2,
    title: 'Super Din in',
    imgURL:  featureimg02,
    describe:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi labore suscipit quas temporibus magnam deserunt voluptates provident',
  },

  {
    id:3,
    title: 'Easy pick up',
    imgURL:  featureimg03,
    describe:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi labore suscipit quas temporibus magnam deserunt voluptates provident',
  },
]

export default function Home() {

  const[category,setcategory]=useState('ALL')
  const[allproducts,setallproducts]=useState(products)



  useEffect(()=>{
    if(category==='ALL'){
      setallproducts(products)
    }
    if(category==='BURGER'){
      const filtereproduct = products.filter(item=> item.category==='Burger')
      setallproducts(filtereproduct)
    }

    if(category==='PIZZA'){
      const filtereproduct=products.filter(item=> item.category==='Pizza')
      setallproducts(filtereproduct)
    }

    if(category==='BREAD'){
      const filtereproduct=products.filter(item=> item.category==='Bread')
      setallproducts(filtereproduct)
    }


  },[category])
  return (
    <Helmet title='home'>
      <section>
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className='hero-content'>
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='hero-title mb-4 ' >
                  <span>hungry?</span> just wait <br></br>food at<span> your door</span>
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Et, corrupti. Ipsum illum adipisci fugit,
                   ea suscipit veritatis nemo necessitatibus autem error tenetur itaque, sequi nisi numquam.
                    </p>
                    <div className='hero-btns'>
                   
                      <button><Link to='/foods' className='order-btn'>order now</Link></button>
                    </div>
                    <div className='hero-service   d-flex align-items-center gap-5 mt-5'>
                      <p className='d-flex align-items-center gap-2'><span className='shipping-icon'>
                        <i className="ri-car-line"></i></span> no shipping charge</p>

                        <p className='d-flex align-items-center gap-2'><span className='shipping-icon'>
                        <i className="ri-shield-check-line"></i></span> 100% secure checkout</p>
                    </div>
                    </div>
                   
            </Col>

            <Col lg={6} md={6}>
              <div className='img-content'>
                <img src={hero} alt='hero' className='w-100'/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Category/>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg={12} className='text-center'>
              <h5 className='feature-subtitle mb-4'>whate we serve</h5>
              <h2 className='feature-title'>just sit back at home</h2>
              <h2 className='feature-title'>
                we will <span>take care</span>
              </h2>
              <p className='mb-1 mt-4 feature-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quam nisi magnam non neque, cum totam laborum animi voluptatibus et voluptatem at sapiente natus quod ratione alias laboriosam minima nostrum?</p>
              <p className='feature-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corporis!</p>
            </Col>

            {featureData.map((item )=>(
                <Col key={item.id} lg={4} md={6} sm={6}>
                   <div className='feature-item  text-center p-4'>
                     <img src={item.imgURL} alt='img' className='w-25 mb-3'/>
                     <h5 className='fw-bold mb-3'>{item.title}</h5>
                     <p>{item.describe}</p>
                   </div>
                </Col>
            ))}
           
           
           
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={12} className='text-center'>
              <h2>popular foods</h2>
            </Col>
            <Col lg={12}>
              <div className='food-category d-flex align-items-center justify-content-center gap-5'>
                <button className={`all-btns ${ category==='ALL' ? 'foodbtnactive' :''}`} onClick={()=> setcategory('ALL')}>All</button>

                <button className={`d-flex align-items-center gap-2 ${category==='BURGER' ? 'foodbtnactive': ''}`} onClick={()=> setcategory('BURGER')}>

                <img src={foodcategoryimg1} alt="" />burger</button>
                <button className={`d-flex align-items-center gap-2 ${category==='PIZZA'? 'foodbtnactive' :''}`} onClick={()=> setcategory('PIZZA')}>
                  <img src={foodcategoryimg2} alt="" />pizza</button>
                <button  className={`d-flex align-items-center gap-2  ${category==='BREAD'? 'foodbtnactive' :''}`} onClick={()=> setcategory('BREAD')}>
                  <img src={foodcategoryimg3} alt="" />bread</button>
              </div>
            </Col>
            {allproducts.map(item=>(

              <Col key={item.id} lg={3} md={4} sm={6}  xs={6} className='mt-5'>
                <ProductCard   item={item}/>
              </Col>
            ))
            }
          </Row>

        </Container>
        
      </section>



      <section>
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <img src={whyimg} alt='' className='w-100' ></img>
            </Col>

            <Col lg={6} md={6}>
              <div className='why-tasy-tread'>
                <h2 className='tasty-tread-title  mb-4'> why <span>Rayan food?</span></h2>
                <p className='tasty-tread-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sapiente nobis. Modi ducimus quo sequi, magnam unde tempore aut doloremque architecto fuga iure ipsam fugiat impedit repellendus ab rerum explicabo.</p>
              </div>

              <ListGroup className='mt-3'>
              <ListGroupItem className='border-0'>
                <p className=' choose-use-title  d-flex align-items-center gap-2'>
              <i class="ri-checkbox-circle-line"></i>fresh and tasty foods
              </p>
              <p className='chose-use-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero asperiores fugit eligendi officiis fugiat veritatis voluptas placeat possimus vel?</p>
              </ListGroupItem>

              <ListGroupItem  className='border-0'>
              <p className='choose-use-title d-flex align-items-center gap-2'>
              <i className="ri-checkbox-circle-line "></i>Quality support
              </p>
              <p  className='chose-use-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero asperiores fugit eligendi officiis fugiat veritatis voluptas placeat possimus vel?</p>
              </ListGroupItem>


              <ListGroupItem   className='border-0'>
                <p className='choose-use-title d-flex align-items-center gap-2'>
              <i className="ri-checkbox-circle-line"></i>order from any location
              </p>
              <p className='chose-use-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero asperiores fugit eligendi officiis fugiat veritatis voluptas placeat possimus vel?</p>
              </ListGroupItem>

            </ListGroup>
            </Col>

         
          </Row>
        </Container>
      </section>



      <section className='pt-0'>
        <Container>
          <Row >
            <Col lg={6} md={6} >
              <div className='testimonial'>
                <h5 className='Testimonial-subtitle'>Testimonial</h5>
                <h2 className='testimonial-title'>
                  what our <span>customers</span> are saying
                </h2>
                <p className='testimonial-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nostrum laudantium nemo architecto iste in, omnis, laboriosam neque sunt veritatis dolore sint! Blanditiis fugiat assumenda porro maiores laboriosam veritatis beatae.</p>
              </div>
              <Testimonial/>
            </Col>

            <Col lg={6} md={6} >
              <img src={networkimg} alt='' className='w-50 '/>
            </Col>
          </Row>
        </Container>
      </section>
   </Helmet>
 
  )
}
