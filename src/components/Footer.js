import React from 'react'
import { Container, Row, Col, Card, CardTitle, CardText, CardBody } from 'reactstrap';


export default function Footer() {
  return (
    <Container className="footer fixed-bottom" fluid>
      <Row className="bg-light">
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
                  <a className="nav-link" href="#">Addrtess</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
