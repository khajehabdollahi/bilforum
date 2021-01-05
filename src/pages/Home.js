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
            <>
             <Link to={`/${forum.id}`} onClick={() => getForumTextById(forum.id)}>
                <Col key={"res" + index + forum.id} className="mt-2 mb-4 col" xs={12} md={6} lg={4}>             
                <Card outline color="light">
                  <CardBody>
                    <CardTitle className="text-muted">Title {forum.title} </CardTitle>
                    <CardText className="text-dark">Text {forum.text} </CardText>
                  </CardBody>
                </Card>
                </Col>
              </Link>
            </>
          )
        })
      )
    }
  }


  return (
    <Container className="mb-3">
      <Row>
        {forumList()}
      </Row>
    </Container>
  )

}


export default Home;