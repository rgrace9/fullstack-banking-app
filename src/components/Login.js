import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { validateFields } from "utils/common";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    const fieldsToValidate = [{ email }, { password }];
    const allFieldsEntered = validateFields(fieldsToValidate);
    console.log({ allFieldsEntered });
    if (!allFieldsEntered) {
      // login error
      setErrorMsg({
        signin_error: "Please enter all the fields.",
      });
    } else {
      // login success
      setErrorMsg({
        signin_error: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div className="login-page">
      <h1>Banking Application</h1>
      <div className="login-form">
        <Form onSubmit={handleLogin}>
          {errorMsg && errorMsg.signin_error && (
            <p className="errorMsg centered-message">{errorMsg.signin_error}</p>
          )}
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="action-items">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Link to="/register" className="btn btn-secondary">
              Create account
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default connect()(Login);
