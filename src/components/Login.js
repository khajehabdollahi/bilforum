import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState('')
  const [error, setError] = useState('')

  const userLogin= async (e) => {
    e.preventDefault();
    
    const credentials = {email, password, userRole }
  
    let res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });
    try {
      res = await res.json()
      if (res == null) {
        setError("Fel email eller lösenord!");
      } else {
        props.history.push('/')
      }
    } catch {
      console.log("Error!");
    }
  }


  return (
    <div className="d-flex justify-content-center mt-5 flex-direction-column">
      <Form onSubmit={userLogin}>
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
          <Input  type="text"  name="email" id="email" placeholder="admin"
           value={userRole} onChange={e=>setUserRole(e.target.value)} required />
        </FormGroup>
        <Button>Submit</Button>
        <p>{ error }</p>
      </Form>
    </div>
  )
}

export default Login
