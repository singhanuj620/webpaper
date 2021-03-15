import React from "react";
import { useRouteMatch } from "react-router-dom";
import LogIn from "../LogInSignUp/LogIn";
import SignUp from "../LogInSignUp/SignUp";

const LogInSignUp = () => {
  const { url } = useRouteMatch();
  console.log(url.slice(1));

  return <div>{url.slice(1) === "login" ? <LogIn /> : <SignUp />}</div>;
};

export default LogInSignUp;
