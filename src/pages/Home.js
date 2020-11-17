import React from 'react'
import Carousel from './Carousel'
import { MDBContainer } from 'mdbreact'
import Available from '../components/Available'
import HomeGallery from '../components/HomeGallery'


const Home = () => {
    return (
        <div>
           <Carousel/> 
           <MDBContainer>
                <Available/>
                <HomeGallery/>
            </MDBContainer>
        </div>
        
    )
}

export default Home
