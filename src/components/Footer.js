import React from "react";
import { MDBCol, MDBContainer, MDBRow,MDBIcon, MDBFooter, MDBLink } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="#e91e63 pink" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">OAKLAND<br/>ENTERPRISES</h5>
            <p>
            Where cheap is more and beauty is key!<br/>
            We offer free deliveries within Nairobi.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Important Links</h5>
            <ul>
              <li className="list-unstyled">
                <MDBLink to="/">
                  <div className="d-md-inline"><MDBIcon icon="home" className="d-inline-inline" />{" "}Home</div>
                </MDBLink>
              </li>
              <li className="list-unstyled">
                <MDBLink to="/history">
                  <div className="d-md-inline"><MDBIcon icon="address-card" className="d-inline-inline" />{" "}About Us</div>
                </MDBLink>
              </li>
              <li className="list-unstyled">
                <MDBLink to="/contact">
                  <div className="d-md-inline"><MDBIcon icon="envelope" className="d-inline-inline" />{" "}Contact</div>
                </MDBLink>
              </li>
              <li className="list-unstyled">
                <MDBLink to="/news">
                  <div className="d-md-inline"><MDBIcon icon="newspaper" className="d-inline-inline" />{" "}News</div>
                </MDBLink>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <MDBLink to="/">Oakland Enterprises</MDBLink>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;