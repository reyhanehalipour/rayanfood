import React from 'react'
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import '../../../style/Slider.css'
export default function Testimonial() {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
  return (
    <Slider{...settings}>
         <div className='text-review'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quod, nisi, dolorem assumenda laudantium, asperiores distinctio sapiente totam eaque saepe iusto laboriosam aperiam labore deserunt quis illum exercitationem. Veritatis, quisquam.</p>
            <div className='slider-content  d-flex align-items-center gap-3'>
              <img src={ava01} alt='' />
              <h6>sadra</h6>
            </div>
          </div>
          <div className='text-review'>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quod, nisi, dolorem assumenda laudantium, asperiores distinctio sapiente totam eaque saepe iusto laboriosam aperiam labore deserunt quis illum exercitationem. Veritatis, quisquam.</p>
            <div className='slider-content   d-flex align-items-center gap-3'>
              <img src={ava02} alt=''  />
              <h6>Reyhane</h6>
            </div>
          </div>
          <div className='text-review'>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quod, nisi, dolorem assumenda laudantium, asperiores distinctio sapiente totam eaque saepe iusto laboriosam aperiam labore deserunt quis illum exercitationem. Veritatis, quisquam.</p>
            <div className='slider-content   d-flex align-items-center gap-3'>
              <img src={ava03} alt='' />
              <h6>alireza</h6>
            </div>
          </div>
    </Slider>
  )
}
