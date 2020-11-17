import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import TV1 from '../images/tv1.jpg'
import TV2 from '../images/tv2.jpg'
import TV3 from '../images/tv3.jpg'
import TV4 from '../images/tv4.jpg'
import TV5 from '../images/tv5.jpg'
import TV6 from '../images/tv6.jpg'
import TV7 from '../images/tv7.jpg'
import TV8 from '../images/tv8.jpg'
import TV9 from '../images/tv9.jpg'
import TV10 from '../images/tv10.jpg'
import TV11 from '../images/tv11.jpg'
import TV12 from '../images/tv12.jpg'


class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
        <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV1} className="img-fluid z-depth-1" alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV2}  className="img-fluid z-depth-1-half"
              alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV3} style={{maxHeight:"200px"}}  className="img-fluid z-depth-2" alt=""/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV4} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV5} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV6} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV7} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV8} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV9} style={{maxHeight:"200px"}}   className="img-fluid z-depth-2" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV10} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV11} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={TV12} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;