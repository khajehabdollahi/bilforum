import React, { useContext, useEffect, useState } from 'react';
import { ForumContext } from '../contexts/ForumContextProvider';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label, Fade } from 'reactstrap';

const MyPage = (props) => {

  const [fadeIn, setFadeIn] = useState(false);
  const toggle = () => setFadeIn(!fadeIn);
  const { forum } = useContext(ForumContext);
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')



  const submitForum = (e) => {
    e.preventDefault();
    
    fetch('/api/forums', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({title, text}) 
    })
      .then(res => {
        if (res.ok) {
          setTitle('')
          setText('')
          props.history.push('/')
        }
    })
  }

  const showForm = () => {
    return (
      <Row className="mt-5">
        <Col>     
        <Form onSubmit={submitForum}>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
              <Input type="text" name="text" id="exampleEmail" placeholder="Write title"
                value={title} onChange={e=>setTitle(e.target.value)} required/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" value={text}  onChange={e=>setText(e.target.value)} required/>
          </FormGroup>
          <Button className="btn-success">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }

  return (
    <Container>
      {showForm()}
    </Container>
  )
}

export default MyPage
