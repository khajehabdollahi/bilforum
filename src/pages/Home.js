import React, { useContext } from 'react';
import { ForumContext } from '../contexts/ForumContextProvider';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {

  const { threads, getForumTextById } = useContext(ForumContext);

  const threadsList = () => {
    if (threads !== undefined) {
      return (
        threads.map((thread, index) => {
          return (
            <div key={"res" + index + thread.theadID}>     
              <Link to={`/${thread.topic}`} onClick={() => 
                  getForumTextById(thread.threadID)
              }
                  style={{textDecoration: "none"}}>
        
                  <div>
                      <h4 className="text-muted">{thread.topic} </h4>
                      <p>Skribent : { thread.name }</p>
                  </div>
      
              </Link>
            </div>
          )
        })
      )
    }
  }


  return (
    <Container>
      <Row className="my-3 mx-5">
        <Col className="my-3 mx-4" lg="12">
          <h3 className="text-secondary text-center">Välkommen till min</h3>
          <h1 className="text-info text-center">FORUM</h1>
        </Col>
     
      </Row>
         <hr/>
      <Row>
        <Col className="mt-1 px-0" lg="12" style={{marginLeft: "25px"}}>      
          {threadsList()}
        </Col>
      </Row>
    </Container>
  )

}


export default Home;