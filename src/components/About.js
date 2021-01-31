import React from 'react'
import { Container, Row, Col } from 'reactstrap';

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-5">OM OSS</h1>
          <div className="about-bg" style={{border: "2px solid #ddd"}}>
            <h2 className="text-center mt-5 text-light om-oss">Hi! Come here and discuss about CARS</h2>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
