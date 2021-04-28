import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../Css/Layout/NewArticle.css";
import axios from "axios";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewArticle = () => {
  const [content, setContent] = useState("It's a **markdown editor** !!");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/");

  const submitData = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:8000/api/article/create",
      {
        title: title,
        author: author,
        content: content,
      }
    );
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
    <div className="create_container">
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
          <Label for="author" className="create_lable">
            Author
          </Label>
          <Input
            required
            type="text"
            name="author"
            id="author"
            placeholder="Author Name"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
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
      {redirect ? <Redirect to={`/article/${redirectPath}`} /> : <> </>}
    </div>
  );
};

export default NewArticle;
