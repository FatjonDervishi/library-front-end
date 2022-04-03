import React from "react";
import { Col, Row } from "antd";
import Form from "./components/form";

const SignIn = ({handleChange, handleSignIn}) => {
  return (
    <>
      <Row justify="center" align="middle" className="logIn_container">
        <Col className="logIn_wrapper">
          <Form
            handleSignIn={handleSignIn}
            handleChange={handleChange}
          />
        </Col>
      </Row>
    </>
  );
}

export default SignIn;