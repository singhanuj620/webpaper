import React from "react";
import "../../Css/LogInSignUp/LogIn.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import login_photo from "../../Assests/Images/LogInSignUp/login.svg";
const LogIn = () => {
  return (
    <div>
      <div className="login_container">
        <div className="login_svg_container">
          <img
            src={login_photo}
            alt="Web Paper | Login"
            className="login_svg"
          />
        </div>
        <div className="login_form_container">
          <Form className="login_form">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter your password"
              />
            </FormGroup>
            <Button color="success">Enter</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
