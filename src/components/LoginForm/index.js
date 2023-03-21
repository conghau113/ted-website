import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.scss';

function LoginForm(props) {
  return (
    <div className="login-form bg-light rounded p-3 w-auto">
      <Form>
        <h4 className="text-primary text-center">
          <b>TED TEAM</b>
        </h4>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" required/>
        </Form.Group>
        <div className="mb-3">
          <a className="small" href="#forgot-password">Forgot password</a>
        </div>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
