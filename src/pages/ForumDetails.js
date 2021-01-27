import React, {useContext, useState} from 'react'
import { ForumContext } from '../contexts/ForumContextProvider';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label, Fade } from 'reactstrap';

const ForumDetails = (props) => {
  const [fadeIn, setFadeIn] = useState(false);
  const toggle = () => setFadeIn(!fadeIn);
  const { thread, comments } = useContext(ForumContext);
  const [editTitle, setEditTitle] = useState('')
  const [editText, setEditText] = useState('')


  const deleteForum = (id) => {
    fetch('/api/threads/' + id, {
      method: 'DELETE',
    })
      .then(res => {
      props.history.push('/')
    })
  }

  const editForum = (e) => {
    e.preventDefault();
    
    fetch('/api/threads/' + thread.threadID, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({title:editTitle, text:editText}) 
    })
      .then(res => {
        if (res.ok) {
          setEditTitle('')
          setEditText('')
          props.history.push('/')
        }
    })
  }

  const showEditForm = () => {
    return (
      <Row className="mt-5">
        <Col lg="12">     
        <Form onSubmit={editForum}>
          <FormGroup>
            <Label for="exampleEmail">Ämne</Label>
              <Input type="text" name="text" id="exampleEmail" placeholder="Write title"
                defaultValue={thread.topic} onChange={e=>setEditTitle(e.target.value)} required/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" defaultValue={thread.text}  onChange={e=>setEditText(e.target.value)} required/>
          </FormGroup>
          <Button className="btn-success">Skicka</Button>
          </Form>
        </Col>
      </Row>
    )
  }

  const dispForumDetails = () => {
    return (
        <Col lg="12" key={"key"+ thread.threadID}>
          <h4 className="text-secondary">Ämne:<span className="text-info"> {thread.topic} </span></h4>
                <p>Skribent: {thread.name}</p>  
          <p className="mt-3" style={{fontSize: "18px"}}>{thread.text}</p>
          <div className="mt-5">
            <Button color="success" className="mr-2">Comment</Button>
            <Button color="primary" className="mr-2" onClick={toggle}>Edit</Button>
            <Button color="danger" onClick={()=>deleteForum(thread.id)}>Delete</Button>
          </div>
          <Fade in={fadeIn} tag="h5" className="mt-3">
              {fadeIn&&showEditForm()}
          </Fade>       
        </Col>
      )
  } 
  
   const dispComments = () => {
    return (
        <Col lg="12"  key={"key"+ comments.commentID} className="mt-3">
          <span>Commentator: <h4 className="text-info">{comments.name}</h4></span>  
          <p className="mt-3 text-dark" style={{fontSize: "18px"}}>{comments.commentText}</p>      
        </Col>
      )
  }   
      
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          {thread && dispForumDetails()}
        </Col>
      </Row>
      <hr/>
      <Row className="mt-3">
        <Col>
        <h5 className="ml-3">Comments</h5>
        <hr/>
          {comments && dispComments()}
        </Col>
      </Row>
    </Container>
  )
}

export default ForumDetails
