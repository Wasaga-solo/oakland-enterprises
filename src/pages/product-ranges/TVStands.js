import React from 'react'
import { MDBContainer } from 'mdbreact'
import Available from '../../components/Available'
import TVsGallery from '../../components/TVsGallery'

const TVStands = () => {
    return (
        <MDBContainer>
            <Available/>
            <TVsGallery/>
        </MDBContainer>
    )
}

export default TVStands
