import React, { useContext, useEffect, useState } from 'react';
import { ForumContext } from '../contexts/ForumContextProvider';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {

  const { forums, getForumTextById } = useContext(ForumContext);

  const forumList = () => {
    if (forums !== undefined) {
      return (
        forums.map((forum, index) => {
          return (
            <Container className="bg-dark text-light">
            <div key={"res" + index + forum.id}>
            <Row className="bg-warning text-danger">
             <Link to={`/${forum.id}`} onClick={() => getForumTextById(forum.id)}>
                <Col  className="mt-1 col" >             
                  <Card outline color="light">
                    <CardBody>
                      <CardTitle className="text-muted">Title {forum.title} </CardTitle>
                    </CardBody>
                  </Card>
                </Col>
               
              </Link>
            </Row>
            </div>
            </Container>
          )
        })
      )
    }
  }


  return (
    <Container className="mb-3">
        <h1>Forums</h1>
        {forumList()}

    </Container>
  )

}


export default Home;