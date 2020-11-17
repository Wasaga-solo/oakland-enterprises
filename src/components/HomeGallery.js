import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Home1 from '../images/home1.jpg'
import Home2 from '../images/home2.jpg'
import Home3 from '../images/home3.jpg'
import Home4 from '../images/home4.jpg'
import Home5 from '../images/home5.jpg'
import Home6 from '../images/home6.jpg'
import Home7 from '../images/home7.jpg'
import Home8 from '../images/home8.jpg'
import Home9 from '../images/home1.jpg'
import Home10 from '../images/home6.jpg'
import Home11 from '../images/home4.jpg'
import Home12 from '../images/home2.jpg'


class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
        <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home1} className="img-fluid z-depth-1" alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home2}  className="img-fluid z-depth-1-half"
              alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home3} style={{maxHeight:"200px"}}  className="img-fluid z-depth-2" alt=""/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home4} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home5} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home6} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home7} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home8} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home9} style={{maxHeight:"200px"}}   className="img-fluid z-depth-2" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home10} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home11} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Home12} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;