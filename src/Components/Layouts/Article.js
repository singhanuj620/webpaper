import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../Css/Layout/Article.css";
import SpinnerLoad from '../Basics/SpinnerLoad'
import faker from "faker";
import { v4 as uuid } from "uuid";
import QRCode from "qrcode.react";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

const Article = () => {
  let { blogId } = useParams();
  const [linkCopied, setLinkCopied] = useState("Or, Click to copy URL !!!");
  const [blogData, setBlogData] = useState({});
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [posterSrc, setPosterSrc] = useState("");
  const [connUrl, setConnUrl] = useState(`http://${process.env.REACT_APP_ROUTE}/api/article/${blogId}`);

  const fetchData = async () => {
    const { data } = await axios.get(connUrl);
    setBlogData(data.result);
    setDataLoaded(true);
  }

  useEffect(() => {
    async function fetch() {
      await fetchData();
      arrayBufferToBase64();
    }
    fetch();
  }, []);


  const arrayBufferToBase64 = () => {
    if (blogData.poster === undefined) {
      return;
    }
    const buffer = blogData.poster.data.data;
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    var resultImg = window.btoa(binary);
    setPosterSrc(resultImg);
    setPosterLoaded(true);
  };

  return (
    <div>{dataLoaded ?
      <div className="article_container">
        <div className="article_poster_container">
          {posterLoaded ? <img
            className="article_poster"
            src={`data:image/${blogData.poster.posterType};base64,${posterSrc}`}
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
                  alt={blogData.author}
                  className="article_author_img"
                />
              </div>
              <div className="article_author_name">{blogData.author}</div>
              <div className="article_author_connect">
                <div className="article_author_profile">
                  View more from this author
                </div>
                <div className="article_actions">
                  {faker.random.boolean() ? (
                    <FavoriteBorderIcon />
                  ) : (
                    <FavoriteIcon />
                  )}
                  <ChatIcon />
                  {faker.random.boolean() ? (
                    <TurnedInNotIcon />
                  ) : (
                    <TurnedInIcon />
                  )}
                </div>
              </div>
            </div>
            <div className="article_qr">
              <p>Share this article :</p>
              <QRCode value={`https://localhost:3000/article/${blogId}`} />
              <span
                className="linktocopy"
                onClick={() => {
                  setLinkCopied("Link Copied !!!");
                  var t = document.getElementsByClassName("linktocopy")[0];
                  t.style.setProperty("background-color", "#31D2F2");
                  navigator.clipboard.writeText(
                    `https://localhost:3000/article/${blogId}`
                  );
                }}
              >
                {linkCopied}
              </span>
            </div>
          </div>
        </div>
      </div> : <SpinnerLoad />
    }</div>
  );
};

export default Article;
