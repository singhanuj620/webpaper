import React from "react";
import NavbarSection from "../Basics/Header";
import "../../Css/LogInSignUp/SignUp.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import signup_photo from "../../Assests/Images/LogInSignUp/signup.svg";
const SignUp = () => {
  return (
    <div>
      <NavbarSection />
      <div className="signup_container">
        <div className="signup_svg_container">
          <img
            src={signup_photo}
            alt="Web Paper | signup"
            className="signup_svg"
          />
        </div>
        <div className="signup_form_container">
          <Form className="signup_form">
            <FormGroup>
              <Label for="exampleEmail">First Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your first name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Last Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your last name"
              />
            </FormGroup>
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
              <Label for="exampleEmail">Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your username"
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
            <Button color="success">Join Us</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
