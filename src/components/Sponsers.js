import React from "react";
import Vision from '../images/vision.jpg'
import Mission from '../images/mission.jpg'
import Corevalues from '../images/corevalues.jpg'
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBContainer, MDBLink } from "mdbreact";

const Sponsers = () => {
  return (
      <MDBContainer>
          <br/>
    <MDBCardGroup>
      <MDBCard style={{margin:"2%"}}>
        <MDBCardImage src={Vision} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Our Vision</MDBCardTitle>
          <MDBCardText>
          "To have our products in every home in Kenya"
          </MDBCardText>
          <MDBBtn color="#e91e63 pink" size="sm">
          <MDBLink  to="/vision"><h6 style={{color:"white",fontSize:"12px"}}>READ MORE</h6></MDBLink>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard style={{margin:"2%"}}>
        <MDBCardImage src={Mission} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Our Mission</MDBCardTitle>
          <MDBCardText>
          “Improving people’s lives through the best furniture"
          </MDBCardText>
          <MDBBtn color="#e91e63 pink" size="sm">
          <MDBLink  to="/mission"><h6 style={{color:"white",fontSize:"12px"}}>READ MORE</h6></MDBLink>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard style={{margin:"2%"}}>
        <MDBCardImage src={Corevalues} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Core Values</MDBCardTitle>
          <MDBCardText>
          Integrity,honesty and openness.
          </MDBCardText>
          <MDBBtn color="#e91e63 pink" size="sm">
            <MDBLink to="/corevalues"><h6 style={{color:"white",fontSize:"12px"}}>READ MORE</h6></MDBLink>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
    </MDBContainer>
  );
}

export default Sponsers;