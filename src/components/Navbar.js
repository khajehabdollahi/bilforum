import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md" className="px-5">
        <Link className="nav-brand" to="/"><h3>Bil Forum</h3></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-lg-3">
              <Link to="/signup" >Sign up</Link>
            </NavItem>
            <NavItem>
              <Link  to="/signin">Sign in</Link>
            </NavItem>            
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default TopNavbar;