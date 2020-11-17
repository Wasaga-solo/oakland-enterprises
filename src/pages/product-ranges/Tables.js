import React from 'react'
import { MDBContainer } from 'mdbreact'
import Available from '../../components/Available'
import TablesGallery from '../../components/TablesGallery'

const Tables = () => {
    return (
        <MDBContainer>
            <Available/>
            <TablesGallery/>
        </MDBContainer>
    )
}

export default Tables
