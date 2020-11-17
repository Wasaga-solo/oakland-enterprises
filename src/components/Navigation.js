import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,MDBIcon, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="#e91e63 pink" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text logo">OAKLAND<br/>ENTERPRISES</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem active>
                <MDBNavLink to="/">
                  <div className="d-md-inline"><MDBIcon icon="home" className="d-inline-inline" />{" "}Home</div>
                </MDBNavLink>
              </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"><MDBIcon icon="radiation" className="d-inline-inline" />{" "}Product Range</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                  <MDBNavLink to="/chairs"><div className="dropdowntext">Chairs</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavLink to="/tables"><div className="dropdowntext">Tables</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavLink to="/officedesks"><div className="dropdowntext">Office Desks</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavLink to="/sofas"><div className="dropdowntext">Sofas</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                  <MDBNavLink to="/tvstands"><div className="dropdowntext">TV Stands</div></MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"><MDBIcon icon="bezier-curve" className="d-inline-inline" />{" "}Sectors</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                  <MDBNavLink to="/hospitality"><div className="dropdowntext">Hospitality</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                  <MDBNavLink to="/office"><div className="dropdowntext">Office</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavLink to="/education"><div className="dropdowntext">Education</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavLink to="/kitchen"><div className="dropdowntext">Kitchen</div></MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/news">
                  <div className="d-md-inline"><MDBIcon icon="newspaper" className="d-inline-inline" />{" "}News & Feeds</div>
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"><MDBIcon icon="address-card" className="d-inline-inline" />{" "}About Us</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                  <MDBNavLink to="/vision"><div className="dropdowntext">Vision</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavLink to="/mission"><div className="dropdowntext">Mission</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                  <MDBNavLink to="/corevalues"><div className="dropdowntext">Core Values</div></MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavLink to="/history"><div className="dropdowntext">History</div></MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/contact">
                  <div className="d-md-inline"><MDBIcon icon="envelope" className="d-inline-inline" />{" "}Contact</div>
                </MDBNavLink>
              </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
                  <MDBNavItem className="social">
                  <MDBIcon fab icon="youtube" style={{color:"white"}}/>
                  </MDBNavItem >
                  <MDBNavItem className="social">
                  <MDBIcon fab icon="facebook-f" style={{color:"white"}}/>
                  </MDBNavItem>
                  <MDBNavItem className="social">
                  <MDBIcon fab icon="twitter" style={{color:"white"}}/>
                  </MDBNavItem>
                  <MDBNavItem className="social">
                  <MDBIcon fab icon="instagram" style={{color:"white"}}/>
                  </MDBNavItem>
                </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;