import React from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <div className="p-4 box">
      <h2 className="mb-3">Firebase Auth SignUp</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
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
