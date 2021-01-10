import React, {useContext} from 'react'
import { ForumContext } from '../contexts/ForumContextProvider';
import { Container, Row, Col, Button } from 'reactstrap';

const ForumDetails = (props) => {
  const { forum } = useContext(ForumContext);

  const deleteForum = (id) => {
    fetch('/api/forums/' + id, {
      method: 'DELETE',
    })
      .then(res => {
      props.history.push('/')
    })
  }

  const dispForumDetails = () => {
    return (
        <Col key={"key"+forum.id}>
          <h1 className="text-secondary">Ttitle:<span className="text-info"> {forum.title} </span></h1>
        <p>{ forum.writer }</p>  
        <p className="mt-3">{forum.text}</p>
        <div className="mt-5">
          <Button color="success" className="mr-2">Comment</Button>
          <Button color="primary" className="mr-2">Edit</Button>
          <Button color="danger" onClick={()=>deleteForum(forum.id)}>Delete</Button>
        </div>
        </Col>
      )
  }        
      
  return (
    <Container>
      <Row className="mt-5 thread-details">
        {forum && dispForumDetails()}
      </Row>
    </Container>
  )
}

export default ForumDetails
