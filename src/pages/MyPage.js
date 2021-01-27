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
    let data = {
      topic: title,
      text,
      writer: user.userID
    }
    fetch('/api/threads', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data) 
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
          <h3>{ user.name.toUpperCase() }</h3>
          <h4 className="text-center">Skriv en post</h4>
        <Form onSubmit={submitForum} className="mt-4">
          <FormGroup>
            <Label for="exampleEmail">Ämne</Label>
              <Input type="text" name="text" id="exampleEmail" placeholder="Skriv ämne"
                value={title} onChange={e=>setTitle(e.target.value)} required/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" value={text}  onChange={e=>setText(e.target.value)} required/>
          </FormGroup>
          <Button className="btn-success">Skicka</Button>
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
