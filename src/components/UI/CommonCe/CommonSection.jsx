import React from 'react'
import { Container } from 'reactstrap'
import '../../../style/Common-section.css'
export default function CommonSection(props) {
  return (
    <section className='common-section'>
     
        <Container>
            <h2 className='text-commensection'>{props.title}</h2>
        </Container>
        
    </section>
  )
}
