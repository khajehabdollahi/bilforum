import React, { useContext, useEffect, useState } from 'react';
import { ForumContext } from '../contexts/ForumContextProvider';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {

  const { forums, getForumTextById, getForumComments } = useContext(ForumContext);

  const forumList = () => {
    if (forums !== undefined) {
      return (
        forums.map((forum, index) => {
          return (
            <div key={"res" + index + forum.id}>     
              <Link to={`/${forum.id}`} onClick={() => 
                  getForumTextById(forum.id)
              }
                  style={{textDecoration: "none"}}>
        
                  <div>
                      <h4 className="text-muted">Title: {forum.title} </h4>
                      <p>Writer : { forum.name }</p>
                  </div>
      
              </Link>
            </div>
          )
        })
      )
    }
  }


  return (
    <Container className="my-3 mx-5">
      <Row>
        <Col className="my-3 mx-4" lg="12">
            <h3>Forums</h3>
        </Col>
      </Row>
      <Row>
        <Col className="mt-1" lg="12" style={{marginLeft: "25px"}}>      
          {forumList()}
        </Col>
      </Row>
    </Container>
  )

}


export default Home;