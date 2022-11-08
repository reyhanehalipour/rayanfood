import React from 'react'

import { Container,Row,Col } from 'reactstrap';

import categoryimg01 from '../../../assets/images/category-01.png'
import categoryimg02 from '../../../assets/images/category-02.png'
import categoryimg03 from '../../../assets/images/category-03.png'
import categoryimg04 from '../../../assets/images/category-04.png'

import '../../../style/Category.css'
const caregoryData=[
    {
        display:'Fastfood',
        imgURL:categoryimg01
    },

    {
        display:'Pizza',
        imgURL:categoryimg02
    },

    {
        display:'Asian food',
        imgURL:categoryimg03
    },

    {
        display:'Row meat',
        imgURL:categoryimg04
    },
]
export default function Category() {
  return (
    <div>
        <Container>
            <Row>

                {caregoryData.map((item , index)=>(
                  <Col lg={3} md={4} sm={6} xs={6} className="mb-3">
                      <div key={item.display} className='category-item  d-flex align-items-center 
                      gap-3'>
                          <div className='category-img'>
                              <img src={item.imgURL} alt='category-item'/>
                          </div>
                          <h6>{item.display}</h6>
                      </div>
                  </Col>

                ))}
            </Row>
        </Container>
      
    </div>
  );
};
