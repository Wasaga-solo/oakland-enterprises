import React from 'react'
import { MDBContainer } from 'mdbreact'
import Available from '../../components/Available'
import KitchenGallery from '../../components/KitchenGallery'

const Kitchen = () => {
    return (
        <MDBContainer>
            <Available/>
            <KitchenGallery/>
        </MDBContainer>
    )
}

export default Kitchen
