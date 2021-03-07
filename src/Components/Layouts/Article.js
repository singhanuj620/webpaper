import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../Css/Layout/Article.css";
import NavbarSection from "../Basics/Header";
import faker from "faker";
import { v4 as uuid } from "uuid";
import QRCode from "qrcode.react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

const Article = () => {
  let { articleId } = useParams();
  const [linkCopied, setLinkCopied] = useState("Or, Click to copy !!!");
  return (
    <div>
      <NavbarSection />
      <div className="article_container">
        <div className="article_poster_container">
          <img
            className="article_poster"
            src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="article poster"
          />
        </div>
        <br />
        <div className="article_title">{faker.random.words()}</div>
        <br />
        <div className="article_metadata">
          <div className="article_content">
            <p>
              {faker.lorem.paragraphs()}
              {faker.lorem.paragraphs()}
            </p>
            <p>
              {faker.lorem.paragraphs()}
              {faker.lorem.paragraphs()}
            </p>
            <p>
              {faker.lorem.paragraphs()}
              {faker.lorem.paragraphs()}
            </p>
            <p>
              {faker.lorem.paragraphs()}
              {faker.lorem.paragraphs()}
            </p>
            <p>
              {faker.lorem.paragraphs()}
              {faker.lorem.paragraphs()}
            </p>
          </div>
          <div className="article_info">
            <div className="article_author">
              <div className="article_author_img_container">
                <img
                  src={`https://avatars.dicebear.com/4.5/api/male/${uuid()}.svg?mood[]=happy`}
                  alt="Author Profile"
                  className="article_author_img"
                />
              </div>
              <div className="article_author_name">{faker.name.findName()}</div>
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
              <QRCode value={`https://localhost:3000/article/${articleId}`} />
              <span
                className="linktocopy"
                onClick={() => {
                  setLinkCopied("Link Copied !!!");
                  var t = document.getElementsByClassName("linktocopy")[0];
                  t.style.setProperty("background-color", "#31D2F2");
                  navigator.clipboard.writeText(
                    `https://localhost:3000/article/${articleId}`
                  );
                }}
              >
                {linkCopied}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
