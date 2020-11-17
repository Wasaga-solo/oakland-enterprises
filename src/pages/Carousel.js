import React from "react";
import Sitting from '../images/sitting.jpg'
import Sitting1 from '../images/sitting1.jpg'
import Sitting3 from '../images/sitting3.jpg'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";

const CarouselPage = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={Sitting}
              alt="Our Vision"
              style={{width:"100%",maxHeight:"450px"}}
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h1 className="h3-responsive">Our Vision</h1>
            <h6>"To have our products in every home in Kenya"</h6>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={Sitting1}
              alt="Our Mission"
              style={{width:"100%",maxHeight:"450px"}}
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h1 className="h3-responsive">Our Mission</h1>
            <h6> “Improving people’s lives through the best furniture"</h6>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={Sitting3}
              alt="Core Values"
              style={{width:"100%",maxHeight:"450px"}}
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h1 className="h3-responsive">Core Values</h1>
            <h6>Integrity,honesty and openness.</h6>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;