import React from 'react';
import { Button, Col, Input, Row } from "antd";

const Form = ({handleChange, handleSignIn}) => {
  return (
    <Row justify="center">
      <Col>
        <h1>Sign In</h1>
      </Col>
      <Col xs={24} className="mb8">
        <p>Username</p>
        <Input
          autoComplete="off"
          placeholder="Username"
          onChange={handleChange('userName')}
        />
      </Col>
      <Col xs={24} className="mb8">
        <p>Password</p>
        <Input
          autoComplete="off"
          type="password"
          placeholder="Password"
          onChange={handleChange('password')}
        />
      </Col>
      <Col>
        <Button
          type="primary"
          onClick={handleSignIn}
        >
          Log In
        </Button>
      </Col>
    </Row>
  );
};

export default Form;