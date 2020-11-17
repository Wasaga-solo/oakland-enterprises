import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Table1 from '../images/table1.jpg'
import Table2 from '../images/table2.jpg'
import Table3 from '../images/table3.jpg'
import Table4 from '../images/table4.jpg'
import Table5 from '../images/table5.jpg'
import Table6 from '../images/table6.jpg'
import Table7 from '../images/table7.jpg'
import Table8 from '../images/table8.jpg'
import Table9 from '../images/table9.jpg'
import Table10 from '../images/table10.jpg'
import Table11 from '../images/table11.jpg'
import Table12 from '../images/table12.jpg'


class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
        <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table1} className="img-fluid z-depth-1" alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table2}  className="img-fluid z-depth-1-half"
              alt="" style={{maxHeight:"200px"}}/>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table3} style={{maxHeight:"200px"}}  className="img-fluid z-depth-2" alt=""/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table4} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table5} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table6} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table7} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table8} style={{maxHeight:"200px"}}   className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table9} style={{maxHeight:"200px"}}   className="img-fluid z-depth-2" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table10} style={{maxHeight:"200px"}}   className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table11} style={{maxHeight:"200px"}}   className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={Table12} style={{maxHeight:"200px"}}   className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;