import React from 'react'
import { MDBContainer } from 'mdbreact'
import Available from '../../components/Available'
import ChairsGallery from '../../components/ChairsGallery'

const Chairs = () => {
    return (
        <MDBContainer>
            <Available/>
            <ChairsGallery/>
        </MDBContainer>
    )
}

export default Chairs
