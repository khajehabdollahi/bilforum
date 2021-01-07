import React from 'react'
import { Container, Row, Col, Card, CardTitle, CardText, CardBody } from 'reactstrap';


export default function Footer() {
  return (
    <div  class="d-flex align-items-center fixed-bottom" >
     <ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="https://www.facebook.com/khajehabdollahi/">Facebook</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Instagram</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://www.youtube.com/c/SvenskaSwedish">Youtube</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">Addrtess</a>
  </li>
</ul>
    </div>
  )
}
