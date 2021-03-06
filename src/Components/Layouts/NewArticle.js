import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../Css/Layout/NewArticle.css";
import axios from "axios";
import { useCookies } from 'react-cookie';
import SpinnerLoad from "../Basics/SpinnerLoad"
import NavbarSection from "../Basics/Header"

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewArticle = () => {
  const [content, setContent] = useState("It's a **markdown editor** !!");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [poster, setPoster] = useState(null);
  const [posterType, setPosterType] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userId, setUserId] = useState();
  const [cookies, setCookie] = useCookies(['user']);
  let history = useHistory();
  const connUrl = "http://" + process.env.REACT_APP_ROUTE + "/api/profile";
  useEffect(() => {
    const token = cookies.jwtToken;
    if (!token) {
      history.push("/")
    }
    else {
      (async () => {
        const response = await axios.post(connUrl, { token });
        if (response.status === 200) {
          setAuthor(response.data.data.firstName + " " + response.data.data.lastName);
          setUserId(response.data.data._id);
          setDataLoaded(true);
        }
      })();
    }
  }, [])


  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', userId);
    formData.append('content', content);
    formData.append('poster', poster);
    formData.append('posterType', posterType)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    const result = await axios.post("http://localhost:8000/api/article/create", formData, config)

    toast.success("🦄 Blog Posted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setRedirectPath(result.data.data.blogId);
    if (result.status === 200) {
      setTimeout(() => setRedirect(true), 4000);
    }
  };

  return (
    <div>

      <NavbarSection />
      <div className="create_container">
        {dataLoaded ?
          <div>
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
            <Form onSubmit={(e) => submitData(e)}>
              <FormGroup className="create_formgroup">
                <Label for="title" className="create_lable">
                  Title
                </Label>
                <Input
                  required
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Article Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup className="create_formgroup">
                <Label for="poster" className="create_lable">
                  Poster Image
                </Label>
                <Input
                  required
                  type="file"
                  name="poster"
                  id="poster"
                  accept="image/*"
                  placeholder="Select an image for poster"
                  onChange={(e) => {
                    setPosterType(e.target.files[0].type.split("/")[1]);
                    setPoster(e.target.files[0]);
                  }}
                />
              </FormGroup>

              <FormGroup className="create_formgroup">
                <Label for="author" className="create_lable">
                  Author
                </Label>
                <Input
                  required
                  type="text"
                  name="author"
                  id="author"
                  disabled
                  value={author}
                />
              </FormGroup>

              <div className="create_note">
                <span>
                  <strong>NOTE :</strong> &nbsp;
                </span>
                It's a markdown editor . To know markdown language rules click :
                &nbsp;
                <a
                  href="https://www.markdownguide.org/basic-syntax/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Markdown Language
                </a>
              </div>
              <div className="create_markdown_box">
                <MDEditor
                  value={content}
                  onChange={setContent}
                  className="create_markdown_editor"
                />
              </div>
              <div className="create_post_btn">
                <Button color="warning" type="submit" size="lg" block>
                  Post
                </Button>
              </div>
            </Form>
            {redirect ? <Redirect to={`/article/${redirectPath}`} /> : <> </>} </div> : <SpinnerLoad />}

      </div>
    </div>
  );
};

export default NewArticle;
