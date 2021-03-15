import React from "react";
import "../../Css/Homepage/Trending.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import faker from "faker";

const Trending = () => {
  return (
    <div className="trending_container">
      <div className="trending_headline">
        <WhatshotIcon style={{ fontSize: 40 }} />
        <div className="trending_headline_text">Trending on WebPaper Today</div>
      </div>
      <div className="trending_list">
        {/* 1 */}
        <div className="trending_post">
          <div className="trending_post_index">01</div>
          <div className="trending_post_info">
            <div className="trending_post_metadata">
              <AccountCircleOutlinedIcon />
              <div className="trending_post_author">
                {faker.name.findName()}
              </div>
            </div>
            <div className="trending_post_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="trending_post_duration">
              <div className="trending_post_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="trending_post_time">
                {" "}
                {faker.random.number().toString().slice(0, 2)} min read
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="trending_post">
          <div className="trending_post_index">02</div>
          <div className="trending_post_info">
            <div className="trending_post_metadata">
              <AccountCircleOutlinedIcon />
              <div className="trending_post_author">
                {faker.name.findName()}
              </div>
            </div>
            <div className="trending_post_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="trending_post_duration">
              <div className="trending_post_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="trending_post_time">
                {" "}
                {faker.random.number().toString().slice(0, 2)} min read
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="trending_post">
          <div className="trending_post_index">03</div>
          <div className="trending_post_info">
            <div className="trending_post_metadata">
              <AccountCircleOutlinedIcon />
              <div className="trending_post_author">
                {faker.name.findName()}
              </div>
            </div>
            <div className="trending_post_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="trending_post_duration">
              <div className="trending_post_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="trending_post_time">
                {" "}
                {faker.random.number().toString().slice(0, 2)} min read
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="trending_post">
          <div className="trending_post_index">04</div>
          <div className="trending_post_info">
            <div className="trending_post_metadata">
              <AccountCircleOutlinedIcon />
              <div className="trending_post_author">
                {faker.name.findName()}
              </div>
            </div>
            <div className="trending_post_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="trending_post_duration">
              <div className="trending_post_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="trending_post_time">
                {" "}
                {faker.random.number().toString().slice(0, 2)} min read
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="trending_post">
          <div className="trending_post_index">05</div>
          <div className="trending_post_info">
            <div className="trending_post_metadata">
              <AccountCircleOutlinedIcon />
              <div className="trending_post_author">
                {faker.name.findName()}
              </div>
            </div>
            <div className="trending_post_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="trending_post_duration">
              <div className="trending_post_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="trending_post_time">
                {" "}
                {faker.random.number().toString().slice(0, 2)} min read
              </div>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="trending_post">
          <div className="trending_post_index">06</div>
          <div className="trending_post_info">
            <div className="trending_post_metadata">
              <AccountCircleOutlinedIcon />
              <div className="trending_post_author">
                {faker.name.findName()}
              </div>
            </div>
            <div className="trending_post_title">
              <Link to={`/article/${uuid()}`} className="link">
                {faker.random.words()}
              </Link>
            </div>
            <div className="trending_post_duration">
              <div className="trending_post_date">
                {faker.date.past().toDateString().split(" ").slice(1).join(" ")}
              </div>
              <div className="trending_post_time">
                {" "}
                {faker.random.number().toString().slice(0, 2)} min read
              </div>
            </div>
          </div>
        </div>
        {/* Ends Trending list */}
      </div>
    </div>
  );
};

export default Trending;
