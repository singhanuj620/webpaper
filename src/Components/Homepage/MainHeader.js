import React, { useState, useEffect } from "react";

import ConfigData from "../../Config";
import axios from "axios";
import faker from "faker";

import "../../Css/Homepage/MainHeader.css";

import FromFollowing from "./FromFollowing";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const MainHeader = () => {
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

  return (
    <div className="MainHeader">
      <div className="leftArea">
        <div className="bigPost">
          {/* Big Post Photo */}
          {stockImage.length === 0 ? (
            <div
              className="bigPost_photo"
              style={{
                backgroundImage: `url(${bg_photo()})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div
              className="bigPost_photo"
              style={{
                backgroundImage: `url(${bg_photo("medium")})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          )}

          <div className="bigPost_info">
            <div className="mainHeader_info">
              <div className="mainHeader_avatar">
                <AccountCircleOutlinedIcon />
              </div>
              <div className="mainHeader_author">
                {faker.name.findName()} in {faker.random.word()} Space
              </div>
            </div>
            <div className="mainHeader_title">{faker.random.words()}</div>
            <div className="mainHeader_datetime">
              <div className="mainHeader_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="mainHeader_time">
                {faker.random.number().toString().slice(0, 2)} min read
              </div>
            </div>
          </div>
          {/* bigPost_info */}
        </div>
        {/* bigPost */}

        <div className="smallPost_container">
          {/* Small Post 1 */}

          <div className="smallPosts">
            <div className="mainHeader_smallPost">
              <div className="mainHeader_sm_info">
                <div className="mainHeader_sm_avatar">
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="mainHeader_sm_author">
                  {faker.name.findName()} in {faker.random.word()} Space
                </div>
              </div>
              {/* smallPost_info */}
              <div className="mainHeader_sm_title">{faker.random.words()}</div>
              <div className="mainHeader_sm_datetime">
                <div className="mainHeader_date">
                  {faker.date
                    .past()
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </div>
                <div className="mainHeader_time">
                  {faker.random.number().toString().slice(0, 2)} min read
                </div>
              </div>
              {/* smallPost_datetime */}
            </div>
            {/* mainHeader_smallPost */}

            {/* Small Post Photo */}

            {stockImage.length === 0 ? (
              <div
                className="smallPost_photo"
                style={{
                  backgroundImage: `url(${bg_photo()})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ) : (
              <div
                className="smallPost_photo"
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

          <div className="smallPosts">
            <div className="mainHeader_smallPost">
              <div className="mainHeader_sm_info">
                <div className="mainHeader_sm_avatar">
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="mainHeader_sm_author">
                  {faker.name.findName()} in {faker.random.word()} Space
                </div>
              </div>
              {/* smallPost_info */}
              <div className="mainHeader_sm_title">{faker.random.words()}</div>
              <div className="mainHeader_sm_datetime">
                <div className="mainHeader_date">
                  {faker.date
                    .past()
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </div>
                <div className="mainHeader_sm_time">
                  {faker.random.number().toString().slice(0, 2)} min read
                </div>
              </div>
              {/* smallPost_datetime */}
            </div>
            {/* mainHeader_smallPost */}

            {/* Small Post Photo */}

            {stockImage.length === 0 ? (
              <div
                className="smallPost_photo"
                style={{
                  backgroundImage: `url(${bg_photo()})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ) : (
              <div
                className="smallPost_photo"
                style={{
                  backgroundImage: `url(${bg_photo("small")})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            )}
          </div>

          {/* Small Post 3 */}
          <div className="smallPosts">
            <div className="mainHeader_smallPost">
              <div className="mainHeader_sm_info">
                <div className="mainHeader_sm_avatar">
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="mainHeader_sm_author">
                  {faker.name.findName()} in {faker.random.word()} Space
                </div>
              </div>
              {/* smallPost_info */}
              <div className="mainHeader_sm_title">{faker.random.words()}</div>
              <div className="mainHeader_sm_datetime">
                <div className="mainHeader_date">
                  {faker.date
                    .past()
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </div>
                <div className="mainHeader_time">
                  {faker.random.number().toString().slice(0, 2)} min read
                </div>
              </div>
              {/* smallPost_datetime */}
            </div>
            {/* mainHeader_smallPost */}

            {/* Small Post Photo */}

            {stockImage.length === 0 ? (
              <div
                className="smallPost_photo"
                style={{
                  backgroundImage: `url(${bg_photo()})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ) : (
              <div
                className="smallPost_photo"
                style={{
                  backgroundImage: `url(${bg_photo("small")})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            )}
          </div>

          {/* End of small post 3 */}
        </div>

        {/* .smallPosts */}
      </div>
      <div className="rightArea">
        <FromFollowing />
      </div>
    </div>
  );
};

export default MainHeader;
