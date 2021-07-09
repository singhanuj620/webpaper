import React, { useState, useEffect } from "react";
import "../../Css/LogInSignUp/SignUp.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import signup_photo from "../../Assests/Images/LogInSignUp/signup.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect, useHistory } from "react-router-dom";
import NavbarSection from "../Basics/Header"
import { useCookies } from 'react-cookie';


const SignUp = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const connUrl = "http://" + process.env.REACT_APP_ROUTE + "/api/auth/register";
  const [redirect, setRedirect] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/");
  const [cookies, setCookie] = useCookies(['user']);
  let history = useHistory();

  useEffect(() => {
    const token = cookies.jwtToken;
    if (token) {
      history.push("/")
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userData = {
      firstName,
      lastName,
      username,
      email,
      password
    }
    const response = await axios.post(connUrl, userData);
    if (response.status === 200) {
      toast.success("🦄 User Registered Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setRedirectPath(`/login`);
      setTimeout(() => setRedirect(true), 4000);
    }
    else {
      toast.success("🦄 Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>
      <NavbarSection />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="signup_container">
        <div className="signup_svg_container">
          <img
            src={signup_photo}
            alt="Web Paper | signup"
            className="signup_svg"
          />
        </div>
        <div className="signup_form_container">
          <Form className="signup_form" onSubmit={(e) => handleSubmit(e)}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="success" type="submit" >Join Us</Button>
          </Form>
        </div>
      </div>
      {redirect ? <Redirect to={redirectPath} /> : <> </>}
    </div>
  );
};

export default SignUp;
