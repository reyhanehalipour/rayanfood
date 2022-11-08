import React,{useState} from 'react'
import CommonSection from '../components/UI/CommonCe/CommonSection';
import { Container,Row,Col } from 'reactstrap';
import Helmet from './../components/Helme/Helmet';

import products from './../assets/fake-data/project';
import ProductCard from './../components/UI/Product-card/ProductCard';
import '../style/All-foods.css'
import ReactPaginate from 'react-paginate'
import '../style/pagination.css'
export default function AllFoods() {


  const[searchTrem, setsearchTrem]=useState('')
  const[pageNumber,setpagenumber]=useState(0)

  const searchedProducts= products.filter((item)=>{
    if(searchTrem.value==='') return item;
    if(item.title.toLowerCase().includes(searchTrem.
     toLowerCase()))
     return item;
  })


  const productPerPage = 8
  const visitedPage= pageNumber * productPerPage
  const displayPage= searchedProducts.slice(visitedPage, visitedPage +
    productPerPage)

  const pageCount=Math.ceil(searchedProducts.length/productPerPage)

  const changepage=({selected})=>{
    setpagenumber(selected)
  }
  return (
    <Helmet title='AllFoods'>
      <CommonSection  title='AllFoods'/>


      <section>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className='search-widget d-flex justify-content-between align-items-center  w-50 mb-10'>
                <input type='text' placeholder='im looking for...'
                 value={searchTrem}
                 onChange={(e)=> setsearchTrem(e.target.value)}/>
                <span><i class='ri-search-line'></i></span>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}  xs={12} className='mb-5'>
           
            </Col>
            {displayPage
            
            
            .map((item) => (
            
            <Col lg={3} md={4} sm={6} xs={6}  key={item.id} className='mb-4 mt-5'>
            
            <ProductCard item={item} />

            </Col>

          ) )}


          <div>
            <ReactPaginate
            pageCount={pageCount}
            onPageChange={changepage}
            previousAriaLabel='prev'
            nextLabel='next'
            containerClassName='paginationsBttns'/>
          </div>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}
