import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../../Css/Layout/Article.css";
import NavbarSection from "../Basics/Header";
import faker from "faker";

const Article = () => {
  let { articleId } = useParams();
  let article_metadata = useRef(null);
  useEffect(() => {
    console.log("RR");
    console.log(document.getElementsByClassName("article_info")[0]);
    console.log("OfO");
  }, []);
  return (
    <div>
      <NavbarSection />
      <div className="article_container">
        <img
          className="article_poster"
          src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="article poster"
        />
        <div className="article_title">{faker.random.words()}</div>
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
          <div className="article_info" ref={article_metadata}>
            <div className="article_author">Anuj Singh</div>
            <div className="article_qr">jfbsfbshfb</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
