import React, { useState, useEffect } from "react";
import "../../Css/Homepage/AllPost.css";
import ConfigData from "../../Config";
import axios from "axios";
import faker from "faker";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
const AllPost = () => {
  const [stockImage, setStockImage] = useState([]);

  const getPhoto = () => {
    var apiKey = ConfigData.Pexels.Api;
    var conn = "https://api.pexels.com/v1/search?query=blog";
    axios
      .get(conn, {
        headers: {
          Authorization: apiKey,
        },
      })
      .then((data) => {
        setStockImage(data.data.photos);
      });
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const getRandomPhoto = (size) => {
    const randomIndex = Math.ceil(Math.random() * 10);
    let photostr = "";
    if (size === "medium") {
      photostr = stockImage[randomIndex].src.large;
    } else if (size === "small") {
      photostr = stockImage[randomIndex].src.medium;
    } else {
      photostr = "https://via.placeholder.com/310";
    }
    return photostr;
  };

  const bg_photo = (size) => getRandomPhoto(size);

  const post_description = (paragraph) => {
    var temp = paragraph.split(" ");
    if (temp.length > 40) {
      temp[41] = ".....";
      return temp.slice(0, 42).join(" ");
    } else {
      return paragraph;
    }
  };

  return (
    <div className="allPost_rc_container">
      <div className="allPost_container">
        {/* Small Post 1 */}

        <div className="allPost">
          <div className="allPost_allPost">
            <div className="allPost_sm_info">
              <div className="allPost_sm_avatar">
                <AccountCircleOutlinedIcon />
              </div>
              <div className="allPost_sm_author">
                {faker.name.findName()} in {faker.random.word()} Space
              </div>
            </div>
            {/* allPost_info */}
            <div className="allPost_sm_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="allPost_sm_description">
              {post_description(faker.lorem.paragraph())}
            </div>

            <div className="allPost_sm_datetime">
              <div className="allPost_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="allPost_time">
                {faker.random.number().toString().slice(0, 2)} min read &nbsp;
                &nbsp;
                {faker.random.boolean() ? (
                  <TurnedInNotIcon />
                ) : (
                  <TurnedInIcon />
                )}
              </div>
            </div>
            {/* allPost_datetime */}
          </div>
          {/* allPost_allPost */}

          {/* Small Post Photo */}

          {stockImage.length === 0 ? (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo()})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo("small")})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          )}
        </div>

        {/* Small Post 2 */}
        <div className="allPost">
          <div className="allPost_allPost">
            <div className="allPost_sm_info">
              <div className="allPost_sm_avatar">
                <AccountCircleOutlinedIcon />
              </div>
              <div className="allPost_sm_author">
                {faker.name.findName()} in {faker.random.word()} Space
              </div>
            </div>
            {/* allPost_info */}
            <div className="allPost_sm_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="allPost_sm_description">
              {post_description(faker.lorem.paragraph())}
            </div>

            <div className="allPost_sm_datetime">
              <div className="allPost_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="allPost_time">
                {faker.random.number().toString().slice(0, 2)} min read &nbsp;
                &nbsp;
                {faker.random.boolean() ? (
                  <TurnedInNotIcon />
                ) : (
                  <TurnedInIcon />
                )}
              </div>
            </div>
            {/* allPost_datetime */}
          </div>
          {/* allPost_allPost */}

          {/* Small Post Photo */}

          {stockImage.length === 0 ? (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo()})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo("small")})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          )}
        </div>

        {/* Small Post 3 */}
        <div className="allPost">
          <div className="allPost_allPost">
            <div className="allPost_sm_info">
              <div className="allPost_sm_avatar">
                <AccountCircleOutlinedIcon />
              </div>
              <div className="allPost_sm_author">
                {faker.name.findName()} in {faker.random.word()} Space
              </div>
            </div>
            {/* allPost_info */}
            <div className="allPost_sm_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="allPost_sm_description">
              {post_description(faker.lorem.paragraph())}
            </div>

            <div className="allPost_sm_datetime">
              <div className="allPost_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="allPost_time">
                {faker.random.number().toString().slice(0, 2)} min read &nbsp;
                &nbsp;
                {faker.random.boolean() ? (
                  <TurnedInNotIcon />
                ) : (
                  <TurnedInIcon />
                )}
              </div>
            </div>
            {/* allPost_datetime */}
          </div>
          {/* allPost_allPost */}

          {/* Small Post Photo */}

          {stockImage.length === 0 ? (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo()})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo("small")})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          )}
        </div>

        {/* Small Post 4 */}
        <div className="allPost">
          <div className="allPost_allPost">
            <div className="allPost_sm_info">
              <div className="allPost_sm_avatar">
                <AccountCircleOutlinedIcon />
              </div>
              <div className="allPost_sm_author">
                {faker.name.findName()} in {faker.random.word()} Space
              </div>
            </div>
            {/* allPost_info */}
            <div className="allPost_sm_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="allPost_sm_description">
              {post_description(faker.lorem.paragraph())}
            </div>

            <div className="allPost_sm_datetime">
              <div className="allPost_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="allPost_time">
                {faker.random.number().toString().slice(0, 2)} min read &nbsp;
                &nbsp;
                {faker.random.boolean() ? (
                  <TurnedInNotIcon />
                ) : (
                  <TurnedInIcon />
                )}
              </div>
            </div>
            {/* allPost_datetime */}
          </div>
          {/* allPost_allPost */}

          {/* Small Post Photo */}

          {stockImage.length === 0 ? (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo()})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo("small")})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          )}
        </div>

        {/* Small Post 5 */}
        <div className="allPost">
          <div className="allPost_allPost">
            <div className="allPost_sm_info">
              <div className="allPost_sm_avatar">
                <AccountCircleOutlinedIcon />
              </div>
              <div className="allPost_sm_author">
                {faker.name.findName()} in {faker.random.word()} Space
              </div>
            </div>
            {/* allPost_info */}
            <div className="allPost_sm_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="allPost_sm_description">
              {post_description(faker.lorem.paragraph())}
            </div>

            <div className="allPost_sm_datetime">
              <div className="allPost_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="allPost_time">
                {faker.random.number().toString().slice(0, 2)} min read &nbsp;
                &nbsp;
                {faker.random.boolean() ? (
                  <TurnedInNotIcon />
                ) : (
                  <TurnedInIcon />
                )}
              </div>
            </div>
            {/* allPost_datetime */}
          </div>
          {/* allPost_allPost */}

          {/* Small Post Photo */}

          {stockImage.length === 0 ? (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo()})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo("small")})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          )}
        </div>
        {/* Small Post 6 */}
        <div className="allPost">
          <div className="allPost_allPost">
            <div className="allPost_sm_info">
              <div className="allPost_sm_avatar">
                <AccountCircleOutlinedIcon />
              </div>
              <div className="allPost_sm_author">
                {faker.name.findName()} in {faker.random.word()} Space
              </div>
            </div>
            {/* allPost_info */}
            <div className="allPost_sm_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="allPost_sm_description">
              {post_description(faker.lorem.paragraph())}
            </div>

            <div className="allPost_sm_datetime">
              <div className="allPost_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="allPost_time">
                {faker.random.number().toString().slice(0, 2)} min read &nbsp;
                &nbsp;
                {faker.random.boolean() ? (
                  <TurnedInNotIcon />
                ) : (
                  <TurnedInIcon />
                )}
              </div>
            </div>
            {/* allPost_datetime */}
          </div>
          {/* allPost_allPost */}

          {/* Small Post Photo */}

          {stockImage.length === 0 ? (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo()})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div
              className="allPost_photo"
              style={{
                backgroundImage: `url(${bg_photo("small")})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          )}
        </div>
        {/* Small Post ENDS */}
      </div>
    </div>
  );
};

export default AllPost;
