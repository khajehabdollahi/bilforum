import React, { useContext, useState } from 'react';
import { ForumContext } from '../contexts/ForumContextProvider';
import { UserContext } from '../contexts/UserContextProvider';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';

const MyPage = (props) => {

  const { getForumText } = useContext(ForumContext);
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')


  const submitForum = (e) => {
    e.preventDefault();
    
    fetch('/api/forums', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({title, text, authorId:user.id}) 
    })
      .then(res => {
        getForumText()
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
        <Col lg="6" className="mx-auto">
          <h4 className="text-center">Write a post</h4>
        <Form onSubmit={submitForum} className="mt-4">
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
