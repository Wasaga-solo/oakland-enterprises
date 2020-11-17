import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Desk1 from '../images/desk1.jpeg'
import Desk2 from '../images/desk2.jpg'
import Desk3 from '../images/desk3.jpeg'
import Desk4 from '../images/desk4.jpg'
import Desk5 from '../images/desk5.jpeg'
import Desk6 from '../images/desk6.jpg'
import Desk7 from '../images/desk7.jpg'
import Desk8 from '../images/desk8.jpg'
import Desk9 from '../images/desk9.jpg'
import Desk10 from '../images/desk10.jpg'
import Desk11 from '../images/desk11.jpg'
import Desk12 from '../images/desk12.jpg'


class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
        <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk1} className="img-fluid z-depth-1" alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk2}  className="img-fluid z-depth-1-half"
              alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk3} style={{maxHeight:"200px"}}  className="img-fluid z-depth-2" alt=""/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk4} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk5} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk6} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk7} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk8} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk9} style={{maxHeight:"200px"}}   className="img-fluid z-depth-2" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk10} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk11} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Desk12} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;