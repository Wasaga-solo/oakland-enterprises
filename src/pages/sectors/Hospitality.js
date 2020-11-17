import React from 'react'
import { MDBContainer } from 'mdbreact'
import Available from '../../components/Available'
import SofasGallery from '../../components/SofasGallery'

const Hospitality = () => {
    return (
        <MDBContainer>
            <Available/>
            <SofasGallery/>
        </MDBContainer>
    )
}

export default Hospitality