import React, { useState, useEffect } from "react";
import "../../Css/LogInSignUp/LogIn.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import login_photo from "../../Assests/Images/LogInSignUp/login.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import { useCookies } from 'react-cookie';
import NavbarSection from "../Basics/Header"
import { useHistory } from "react-router-dom";

const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const connUrl = "http://" + process.env.REACT_APP_ROUTE + "/api/auth/login";
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
      email,
      password
    }
    await axios.post(connUrl, userData).then((response) => {
      if (response.status === 200) {
        // console.log(response.data.token)
        setCookie('jwtToken', response.data.token, {
          maxAge: 432000
        });
        toast.success("🦄 Login Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setRedirectPath("/");
        setTimeout(() => setRedirect(true), 4000);
      }
    }).catch((err) => {
      toast.error("Login Failed : " + err.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
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
      <div className="login_container">
        <div className="login_svg_container">
          <img
            src={login_photo}
            alt="Web Paper | Login"
            className="login_svg"
          />
        </div>
        <div className="login_form_container">
          <Form className="login_form" onSubmit={(e) => handleSubmit(e)}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="success" type="submit">Enter</Button>
          </Form>
        </div>
      </div>
      {redirect ? <Redirect to={redirectPath} /> : <> </>}
    </div>
  );
};

export default LogIn;
