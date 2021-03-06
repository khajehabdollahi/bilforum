import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { UserContext } from '../contexts/UserContextProvider'

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { user, setUser} = useContext(UserContext)

  const logoutUser = async () => {
    await fetch('/logout')
    setUser(null)
    localStorage.removeItem('token');
  }

  return (
    <Container className="px-0 mx-0 bg-light" fluid>
      <Container className="mx-auto px-2" >
      <Navbar light expand="md" className=" px-3">
        <Link className="nav-brand" to="/"><h3>Bil Forum</h3></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-lg-3">
              <Link to="/about" >Om oss</Link>
            </NavItem>         
            {!user?(
            <>
            <NavItem className="mr-lg-3">
              <Link to="/signup" >Bli medlem</Link>
            </NavItem>
            <NavItem>
              <Link  to="/signin">Logga in</Link>
            </NavItem> 
            </>
            ):(
            <>
            <NavItem className="mr-lg-3">
              <Link to="/mypage" >Mina sidor</Link>
            </NavItem>
            <NavItem>
              <Link onClick={logoutUser} to="/">Logga ut</Link>
            </NavItem>
            </>
            )}
          </Nav>
        </Collapse>
        </Navbar>
        </Container>
      </Container>
  );
}

export default TopNavbar;