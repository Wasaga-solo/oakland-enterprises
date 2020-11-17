import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Kitchen1 from '../images/kitchen1.jpg'
import Kitchen2 from '../images/kitchen2.jpg'
import Kitchen3 from '../images/kitchen3.jpg'
import Kitchen4 from '../images/kitchen4.jpg'
import Kitchen5 from '../images/kitchen5.jpeg'
import Kitchen6 from '../images/kitchen6.jpg'
import Kitchen7 from '../images/kitchen7.jpg'
import Kitchen8 from '../images/kitchen8.jpg'
import Kitchen9 from '../images/kitchen9.jpg'
import Kitchen10 from '../images/kitchen10.jpg'
import Kitchen11 from '../images/kitchen11.jpg'
import Kitchen12 from '../images/kitchen12.jpeg'


class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
        <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen1} className="img-fluid z-depth-1" alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen2}  className="img-fluid z-depth-1-half"
              alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen3} style={{maxHeight:"200px"}}  className="img-fluid z-depth-2" alt=""/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen4} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen5} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen6} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen7} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen8} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen9} style={{maxHeight:"200px"}}   className="img-fluid z-depth-2" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen10} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen11} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Kitchen12} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;