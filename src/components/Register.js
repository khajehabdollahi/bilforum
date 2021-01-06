import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState('')

  const userRegister = async (e) => {
    e.preventDefault();
    
    const credentials = {email, password, userRole }
  
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
    <div className="d-flex justify-content-center mt-5 flex-direction-column">
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
          <Label for="exampleEmail" className="mr-sm-2">Role</Label>
          <Input  type="email"  name="email" id="email" placeholder="admin"
           value={userRole} onChange={e=>setUserRole(e.target.value)} required />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default Register
