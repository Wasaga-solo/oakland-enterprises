import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5" style={{color:"#e91e63"}}>
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Oakland Enterprises is a company that deals in furniture of all kinds and does
        door to door deliveries around Nairobi city in Kenya.We are open 24 hours and
        you can always pay us a visit at any time.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header accent-1">
                <h3 className="mt-2" style={{color:"#e91e63"}}>
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                Let us know how we can improve our sevices to you.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Write here"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center" style={{color:"white"}}>
                <MDBBtn floating color="#e91e63 pink">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;
              height=600&amp;hl=en&amp;q=Nairobi+(My%20Business%20Name)&amp;
              t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="#e91e63 pink" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Oakland Enterprises Ltd, P.O. Box 20154 – 00100 Nairobi</p>
              <p className="mb-md-0">Kenya</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="#e91e63 pink" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+245 718635460</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="#e91e63 pink" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>rodgersotieno127@gmail.com</p>
              <p className="mb-md-0">rodgersotieno646@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default ContactPage;