import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#'>
              <Link to="/">Userdata</Link>
            </MDBNavbarLink>
            
            <MDBNavbarLink active aria-current='page' href='#'>
              <Link to='/Useredit'>Useredit</Link>
            </MDBNavbarLink>
            
            <MDBNavbarLink active aria-current='page' href='#'>
              <Link to='/Useradd'>Useradd</Link>
            </MDBNavbarLink>

            <MDBNavbarLink active aria-current='page' href='#'>
              <Link to='/Userdetails'>Userdetails</Link>
            </MDBNavbarLink>
            

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
