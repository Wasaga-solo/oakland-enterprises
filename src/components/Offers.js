import React from 'react';
import { MDBMedia } from 'mdbreact';
import Items from '../images/items.webp'
import Delivery from '../images/delivery.jpg'
import Customize from '../images/customize.jpg'

const Offers = () => {
  return (
    <MDBMedia list className="mt-3">
      <MDBMedia tag="li">
        <MDBMedia left>
          <MDBMedia object src={Items} alt="Generic placeholder image" className="newsimages" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Items on offer today!!
          </MDBMedia>
          Everyone who buys an item from us today before noon will get a discount of 10% upto Ksh.5000.This offer is available for the first 20 lucky customers
          </MDBMedia>
      </MDBMedia>
      <br/>
      <MDBMedia tag="li">
        <MDBMedia left>
          <MDBMedia object src={Delivery} alt="Generic placeholder image" className="newsimages"/>
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Weekend Deliveries
          </MDBMedia>
          On effect from December 2020 we will be doing upcountry deliveries over the weekend so if you need any of our items just make your order now and wait till weekend..
        </MDBMedia>
      </MDBMedia>
      <br/>
      <MDBMedia tag="li">
        <MDBMedia left>
          <MDBMedia object src={Customize} alt="Generic placeholder image" className="newsimages"/>
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Customized Furniture
          </MDBMedia>
          Let us make your furniture exactly as you would like them to be.Just come with the idea and we will turn it into furniture.
        </MDBMedia>
      </MDBMedia>
      <br/>
    </MDBMedia>
  );
}

export default Offers;