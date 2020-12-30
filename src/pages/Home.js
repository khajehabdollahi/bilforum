import React, { useContext, useEffect, useState } from 'react';
import { ForumContext } from '../contexts/ForumContextProvider';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody } from 'reactstrap';


const Home = () => {

  const { forums, getForumText } = useContext(ForumContext);

  const forumList = () => {
    if (forums !== undefined) {
      return (
        forums.map((forum, index) => {
          return (
            <Col
              key={"res" + index + forum.id}
              className="mt-2 mb-4 col" xs={12} md={6} lg={4}
              style={{ cursor: "pointer" }}>
              <Card outline color="light">
                <CardBody>
                  <CardTitle className="text-muted">Title {forum.title} </CardTitle>
                  <CardText className="text-dark">Text {forum.text} </CardText>
                </CardBody>
              </Card>
            </Col>
          )
        })
    )
    }
  }


  useEffect(() => {
    getForumText()
    console.log(forums);
  }, [])


  return (
    <Container className="mb-3">
      {forumList}
    </Container>
  )

}


export default Home;