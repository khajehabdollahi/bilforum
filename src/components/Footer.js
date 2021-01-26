import React from 'react'
import { Container, Row, Col } from 'reactstrap';

export default function Footer() {
  return (
    <Container className="footer" fluid>
      <Row className="bg-light mt-5">
        <Col lg="123" className="mx-auto py-5">
          <div style={{textAlign:"center"}}>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/khajehabdollahi/">Facebook</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Instagram</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/c/SvenskaSwedish">Youtube</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Address</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
