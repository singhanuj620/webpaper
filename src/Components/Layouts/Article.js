import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import "../../Css/Layout/Article.css";
import SpinnerLoad from '../Basics/SpinnerLoad'
import faker from "faker";
import { v4 as uuid } from "uuid";
import QRCode from "qrcode.react";
import axios from "axios";
import NotFound from '../Basics/NotFound'
import MDEditor from "@uiw/react-md-editor";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import NavbarSection from "../Basics/Header"
import { useCookies } from 'react-cookie';
import {
  Button,
} from "reactstrap";

const Article = () => {
  let { blogId } = useParams();
  const [linkCopied, setLinkCopied] = useState("Or, Click to copy URL !!!");
  const [blogData, setBlogData] = useState([]);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [ApiError, setApiError] = useState(false);
  const [userCheck, setUserCheck] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectPath, setRedirectPath] = useState(true);
  const [connUrl, setConnUrl] = useState(`http://${process.env.REACT_APP_ROUTE}/api/article/${blogId}`);
  const [cookies, setCookie] = useCookies(['user']);
  const [generalUser, setGeneralUser] = useState(false);


  useEffect(() => {
    (async () => {
      await axios.get(connUrl).then((response) => {
        setBlogData(response.data.result);
        setDataLoaded(true);
        setPosterLoaded(true);
        (async () => {
          const token = cookies.jwtToken;
          if (token) {
            const profileConnUrl = `http://${process.env.REACT_APP_ROUTE}/api/profile`;
            const cookieResponse = await axios.post(profileConnUrl, { token });
            if (cookieResponse.status === 200) {
              if (cookieResponse.data.data._id === response.data.result.author._id) {
                setUserCheck(true);
              }
              else {
                setUserCheck(false);
                setGeneralUser(true);
              }
            }
            else {
              setUserCheck(false);
              setGeneralUser(true);
            }
          }
          else {
            setUserCheck(false);
          }
        })();
      }).catch((err) => {
        setApiError(true);
      });
    })();

  }, []);

  const editArticle = (id) => {
    setRedirectPath(`/article/edit/${id}`);
    setRedirect(true);
  }

  return (
    <div>
      <NavbarSection />
      {dataLoaded ?
        <div className="article_container">
          <div className="article_poster_container">
            {posterLoaded ? <img
              className="article_poster"
              src={blogData.poster}
              alt="article poster"
            /> : <SpinnerLoad message={"Poster"} />
            }
          </div>
          <br />
          <div className="article_title">{blogData.title}</div>
          <br />
          <div className="article_metadata">
            <div className="article_content">
              <MDEditor.Markdown source={blogData.content} />
            </div>
            <div className="article_info">
              <div className="article_author">
                <div className="article_author_img_container">
                  <img
                    src={`https://avatars.dicebear.com/4.5/api/male/${uuid()}.svg?mood[]=happy`}
                    alt={blogData.author.username}
                    className="article_author_img"
                  />
                </div>
                <div className="article_author_name">{blogData.author.firstName}&nbsp;{blogData.author.lastName}</div>
                <div className="article_author_connect">
                  {userCheck ? <div className="article_author_profile" onClick={() => editArticle(blogData._id)}>
                    Edit the article
                  </div> : <div style={{ "width": "100%" }}>
                    <div className="article_author_profile">
                      <a className="link" href={`http://${process.env.REACT_APP_WEBPAPER_URL}/user/${blogData.author._id}`}>
                        View more from this author
                      </a>
                    </div>
                    {generalUser ?
                      <div className="article_actions">
                        <div>
                          <FavoriteBorderIcon />&nbsp;{blogData.likes}
                        </div>
                        <div>
                          <TurnedInNotIcon />&nbsp;{blogData.saves}
                        </div>
                      </div> :
                      <div>
                        <div className="article_actions">
                          <Button color="success" size="sm" style={{ "width": "100%" }}>
                            <a className="link" href={`http://${process.env.REACT_APP_WEBPAPER_URL}/login`}>
                              Log in to like or save !!
                            </a>
                          </Button>
                        </div>
                        <div className="article_actions">
                          <div>
                            <FavoriteBorderIcon />&nbsp;{blogData.likes}
                          </div>
                          <div>
                            <TurnedInNotIcon />&nbsp;{blogData.saves}
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                  }
                </div>
              </div>
              <div className="article_qr">
                <p>Share this article :</p>
                <QRCode value={`http://${process.env.REACT_APP_WEBPAPER_URL}/article/${blogId}`} />
                <span
                  className="linktocopy"
                  onClick={() => {
                    setLinkCopied("Link Copied !!!");
                    var t = document.getElementsByClassName("linktocopy")[0];
                    t.style.setProperty("background-color", "#31D2F2");
                    navigator.clipboard.writeText(
                      `http://${process.env.REACT_APP_WEBPAPER_URL}/article/${blogId}`
                    );
                  }}
                >
                  {linkCopied}
                </span>
              </div>
            </div>
          </div>
        </div> : <div>{ApiError ? <NotFound /> : <SpinnerLoad message={"Blog "} />}</div>
      }
      {redirect ? <Redirect to={redirectPath} /> : <> </>}</div>
  );
};

export default Article;
