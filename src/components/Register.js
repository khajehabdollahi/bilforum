import React, {useState} from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userName, setUserName] = useState('')

  const userRegister = async (e) => {
    e.preventDefault();
    
    const credentials = {email, password, userRole, name: userName }
  
    let res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });
    try {
      res = await res.json()
      props.history.push('/')
    } catch {
      console.log("Error!");
    }
  }


  return (
    <Container className="mt-5">
      <Row>   
        <Col lg="5" className="mx-auto">
          <h4>Sign up</h4>
          <Form onSubmit={userRegister}>
            <FormGroup>
              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
              <Input  type="email"  name="email" id="email" placeholder="something@idk.cool"
              value={email} onChange={e=>setEmail(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" value={password} 
                onChange={e=>setPassword(e.target.value)} required/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail" className="mr-sm-2">Name</Label>
              <Input  type="text"  name="text" id="text" placeholder="Name"
              value={userName} onChange={e=>setUserName(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail" className="mr-sm-2">Role</Label>
              <Input  type="text"  name="text" id="text" placeholder="role"
              value={userRole} onChange={e=>setUserRole(e.target.value)} required />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
