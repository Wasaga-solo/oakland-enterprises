import React from 'react';
import { MDBMedia, MDBIcon } from 'mdbreact';

const Reviews = () => {
  return (
    <MDBMedia list className="mt-3">       
      <MDBMedia tag="li">
        <MDBMedia left>
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Anna Smith
            </MDBMedia>
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="grey-text" />
          <p>I received an office desk from you and i am just so exited and psyched up for work now.</p>
        </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left>
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            John Wolf
            </MDBMedia>
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="grey-text" />
          <MDBIcon icon="star" className="grey-text" />
          <p>I ordered sofas from you guys and it was exactly what i wanted.</p>
        </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left>
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Natalie Doe
            </MDBMedia>
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="grey-text" />
          <p>I am specfically exited about how fast you guys deliver and your customer care services are perfect.Please give me a discount next time.</p>
        </MDBMedia>
      </MDBMedia>
    </MDBMedia>
  );
}

export default Reviews;