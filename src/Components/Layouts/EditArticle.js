import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import { Redirect, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../Css/Layout/NewArticle.css";
import axios from "axios";
import SpinnerLoad from '../Basics/SpinnerLoad'
import NotFound from '../Basics/NotFound'
import NavbarSection from "../Basics/Header"

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const EditArticle = () => {
    let { blogId } = useParams();
    const [content, setContent] = useState("It's a **markdown editor** !!");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [poster, setPoster] = useState(null);
    const [posterType, setPosterType] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [redirectPath, setRedirectPath] = useState("/");
    const [blogData, setBlogData] = useState({});
    const [connUrl, setConnUrl] = useState(`http://${process.env.REACT_APP_ROUTE}/api/article/${blogId}`);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [posterLoaded, setPosterLoaded] = useState(false);
    const [ApiError, setApiError] = useState(false);
    const [changePoster, setChangePoster] = useState(false);
    const [userId, setUserId] = useState();

    const fetchData = async () => {
        var response = await axios.get(connUrl);
        if (response.status === 200) {
            setBlogData(response.data.result);
            setTitle(response.data.result.title);
            setAuthor(response.data.result.author.firstName + " " + response.data.result.author.lastName);
            setContent(response.data.result.content);
            setPosterLoaded(true);
            setDataLoaded(true);
            setUserId(response.data.result.author._id)
        }
        else {
            setApiError(true);
        }
    }

    useEffect(() => {
        async function fetch() {
            await fetchData();
        }
        fetch();
    }, []);

    const changePosterImage = () => {
        if (changePoster) {
            setChangePoster(false);
        }
        else {
            setChangePoster(true);
        }
    }

    const submitData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', userId);
        formData.append('content', content);
        if (changePoster) {
            formData.append('poster', poster);
            formData.append('posterType', posterType)
        }
        else {
            formData.append('posterType', "")
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const result = await axios.post(`http://${process.env.REACT_APP_ROUTE}/api/article/edit/${blogId}`, formData, config)

        toast.success("🦄 Blog Updated", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setRedirectPath(`/article/${result.data.data.blogId}`);
        if (result.status === 200) {
            setTimeout(() => setRedirect(true), 4000);
        }
    }

    const deleteBlog = async () => {
        const result = await axios.get(`http://${process.env.REACT_APP_ROUTE}/api/article/delete/${blogId}`)

        toast.success("🦄 Blog Deleted, Redirecting", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setRedirectPath("");
        if (result.status === 200) {
            setTimeout(() => setRedirect(true), 4000);
        }
    }

    return (
        <div><NavbarSection />
            {dataLoaded ?
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
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}

                            />
                        </FormGroup>

                        <FormGroup className="create_formgroup">
                            <Label for="poster" className="create_lable">
                                Poster Image
                            </Label>
                            <br />
                            <Label className="checkbox_poster">
                                <Input type="checkbox" name="checkbox_changePoster" onClick={() => changePosterImage()} />
                                &nbsp;Change Poster
                            </Label>
                            {changePoster ? <Input
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
                            /> : <> </>}

                        </FormGroup>
                        <br />
                        {posterLoaded ? <div className="edit_poster"><img
                            className="article_poster"
                            src={blogData.poster}
                            alt="article poster"
                        /></div> : <SpinnerLoad message={"Poster"} />
                        }
                        <br />
                        <FormGroup className="create_formgroup">
                            <Label for="author" className="create_lable">
                                Author
                            </Label>
                            <Input
                                required
                                type="text"
                                name="author"
                                id="author"
                                value={author}
                                disabled
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
                        <div className="create_post_btn_container">
                            <div className="create_post_btn">
                                <Button color="warning" type="submit" size="lg" block>
                                    Update
                                </Button>
                            </div>
                            <div className="create_post_btn delete_btn">
                                <Button color="info" size="lg" block onClick={() => deleteBlog()}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div> : <div>{ApiError ? <NotFound /> : <SpinnerLoad message={"Blog "} />}</div>
            }
            {redirect ? <Redirect to={redirectPath} /> : <> </>}
        </div>
    );
};

export default EditArticle;
