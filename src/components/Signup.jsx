import React, {useState} from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {Link} from 'react-router-dom';
import {useUserAuth} from '../context/UserAuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const {signUp} = useUserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
      await signUp(email, password);
    }catch(e){
      console.log(e.message);
      setError(e.message);
    }
  }

  return (
    <>
    <div className="p-4 box">
      <h2 className="mb-3">Firebase Auth SignUp</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.targetvalue)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.targetvalue)}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="Submit">
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
    <div className="p-4 box mt-3 text-center">
      Already have an account? <Link to="/">Log in</Link>
    </div>
  </>
  )
}

export default Signup
