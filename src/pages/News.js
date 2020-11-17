import React from 'react'
import Reviews from '../components/Reviews'
import Offers from '../components/Offers'
import { MDBContainer } from 'mdbreact'

const News = () => {
    return (
        <MDBContainer>
      <h3 className="h1-responsive font-weight-bold text-center my-5" style={{color:"#e91e63"}}>
        News
      </h3>
           <Offers/>    
      <h3 className="h1-responsive font-weight-bold text-center my-5" style={{color:"#e91e63"}}>
        Feeds and Reviews
      </h3>
            <Reviews/>
        </MDBContainer>
    )
}

export default News
