import React from 'react'
import { MDBContainer } from 'mdbreact'
import Available from '../../components/Available'
import DesksGallery from '../../components/DesksGallery'


const Office = () => {
    return (
      <MDBContainer>
       <Available/>
       <DesksGallery/>
      </MDBContainer>
    )
}

export default Office
