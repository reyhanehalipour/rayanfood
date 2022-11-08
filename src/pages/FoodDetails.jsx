import React,{useEffect,useState} from 'react'
import products from '../assets/fake-data/project'
import Helmet from '../components/Helme/Helmet'
import { useParams } from 'react-router-dom'
import CommonSection from '../components/UI/CommonCe/CommonSection'

import { Container,Row,Col } from 'reactstrap'
import '../style/productDetails.css'
import ProductCard from '../components/UI/Product-card/ProductCard'

import { cartActions } from '../Store/Shopping-cart/cartSlice'
import { useDispatch } from 'react-redux';

export default function FoodDetails() {

  const[EnterName,setEnterName]=useState('')
  const[EnterEmail,setEnterEmail]=useState('')
  const[reviewMSG,setreviwMSG]=useState('')
  
  

  const[tab,settab] =useState('desc')
  const {id}= useParams()
  const dispach= useDispatch()
  const product= products.find(product=> product.id ===id)
  const [previewimg,setpreviwimg] =useState(product.image01)
  const{title,price,category,desc,image01}= product

  const relatedproduct=products.filter(item => category ===item.category)

  const AddItem=()=>{
    dispach(cartActions.addItem({
      id,
      title,
      price,
      image01,
    }))
  }

  const submitHandler=e=>{
  e.preventDefault()
  }

  useEffect(() => {
  setpreviwimg(product.image01);
  }, [product]);

  useEffect(()=>{
    window.scroll(0,0)
  },[product])
 
  return (
   <Helmet title='products-Drtails'>
     <CommonSection title={title}/>

      <section>
        <Container>
          <Row>
          <Col lg={2} md={2}>
             <div className='products-imags'>

                 <div className='img-item mb-2' onClick={()=>setpreviwimg(product.image01)}>
                   <img src={product.image01} alt='' className='w-50'/>
                 </div>

                 <div className='img-item mb-2'  onClick={()=>setpreviwimg(product.image02)}>
                   <img src={product.image02} alt='' className='w-50'/>
                 </div>
                 <div className='img-item mb-2' onClick={()=>setpreviwimg(product.image03)}>
                   <img src={product.image03} alt='' className='w-50'/>
                 </div>
                 
              </div>
           </Col>
           <Col lg={4} md={4}>

             <div className='products-image-main'>

               <img src={previewimg} alt='' className='w-100'/>
      
             </div>


           </Col>

          <Col lg={6} md={6}>
            <div className='single-product-content'>
              <h2 className='product-title'>{title}</h2>
              <p className='product-price'> price :<span>${price}</span></p>

              <p className='category mb-5'>category: <span>{category}</span></p>

              <button className='addtocart-button' onClick={AddItem}>Add to cart</button>
            </div>
          </Col>

          <Col lg={12} mg={12}>
            <div className='tabs d-flex align-items-center gap-3 py-2'>
              <h6 className={`${tab==='desc'? 'tab-active':''}`}
               onClick={()=>settab('desc')}>Description</h6>
              
              <h6 className={`${tab==='rev'? 'tab-active':''}`}
               onClick={()=>settab('rev')}>Reveiw</h6>
            </div>


             {
               tab === 'desc'? <div className='tab-content'>
              <p>{desc}</p> 
              </div> :  <div className='tab-form mb-3'>

               <div className='review-text'>
                <br></br>
               </div>

              <form className='form 'onSubmit={submitHandler}>
                <div className='form-group'>
                  <input type='text' placeholder='enter your name'
                  onChange={e=>setEnterName(e.target.value)} required/>
                </div>

                <div className='form-group'>
                  <input type='email' placeholder='enter your email'
                  onChange={e=>setEnterEmail(e.target.value)} required/>
                </div>

                <div className='form-group'>
                  <textarea rows={8} type='text' placeholder='enter your name'
                  onChange={e=>setreviwMSG(e.target.value)} required/>
                </div>

                <button type='submit' className='addtocart-button'>Submit</button>
              </form>
            </div>
             }
           

           
          </Col>
          <Col lg={12}  className='mb-5 mt-4 text-center'>
            <h2>You might also like</h2>
          </Col>

          {relatedproduct.map((item)=>(
              <Col lg={3} md={4} sm={6} xs={6}>
              <ProductCard  item={item}/>
            </Col>
             
          ))}
          </Row>
        </Container>
      </section>

   </Helmet>
  )
}
