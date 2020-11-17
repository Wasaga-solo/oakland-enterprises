import React from 'react'
import { MDBContainer } from 'mdbreact'
import Available from '../../components/Available'
import DesksGallery from '../../components/DesksGallery'


const OfficeDesks = () => {
    return (
      <MDBContainer>
       <Available/>
       <DesksGallery/>
      </MDBContainer>
    )
}

export default OfficeDesks
