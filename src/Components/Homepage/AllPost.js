import React, { useState, useEffect } from "react";
import "../../Css/Homepage/AllPost.css";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import SpinnerLoad from "../Basics/SpinnerLoad"
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FavoriteIcon from "@material-ui/icons/Favorite";

const AllPost = ({ data = {} }) => {

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      setDataLoaded(true);
    }
  }, []);



  const post_description = (paragraph) => {
    var temp = paragraph.split(" ");
    if (temp.length > 70) {
      temp[41] = ".....";
      return temp.slice(0, 70).join(" ") + "....... **Read More**";
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
              <div className="allPost_sm_author">{dataLoaded ? <div>By : <a className="link user_title" href={`http://${process.env.REACT_APP_WEBPAPER_URL}/user/${data.author._id}`}>{data.author.firstName + " " + data.author.lastName + " ( @" + data.author.username + " ) "} </a> </div> : <div>Unknown User</div>}
              </div>
            </div>
            {/* allPost_info */}
            <Link to={`/article/${data._id}`} className="link">
              <div className="allPost_sm_title">
                {data.title}
              </div>
              <div className="allPost_sm_description">
                <MDEditor.Markdown source={post_description(data.content)} />
              </div>
            </Link>
            <div className="allPost_sm_datetime">
              <div className="allPost_date">
                <EventAvailableIcon />&nbsp;&nbsp;{data.createdAt.substr(0, 10).toString().split("-").reverse().join("-")}
              </div>
              <div className="allPost_time">
                <FavoriteIcon /> {data.likes} &nbsp; &nbsp; <TurnedInIcon /> {data.saves}
              </div>
            </div>
            {/* allPost_datetime */}
          </div>
          {/* allPost_allPost */}

          {/* Small Post Photo */}
          {dataLoaded ?
            <div
              className="allPost_photo"
            >
              <img className="allPost_poster" alt={data.title} src={data.poster} />
            </div> : <SpinnerLoad />}

        </div>

      </div>
    </div>
  );
};

export default AllPost;
