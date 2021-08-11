import React, { useState, useEffect } from "react";
import AllPost from "../Homepage/AllPost";
import NavbarSection from "../Basics/Header"
import "../../Css/Layout/Profile.css";
import faker from "faker";
import { v4 as uuid } from "uuid";
import StarsIcon from "@material-ui/icons/Stars";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import DraftsIcon from "@material-ui/icons/Drafts";
import RoomIcon from "@material-ui/icons/Room";
import axios from "axios"
import { useCookies } from 'react-cookie';
import { useHistory, useParams } from "react-router-dom";
import SpinnerLoad from "../Basics/SpinnerLoad"
import { Button } from "reactstrap";

const Profile = () => {

  const connUrlForGeneral = "http://" + process.env.REACT_APP_ROUTE + "/api/profile/user";
  const connUrlForToken = "http://" + process.env.REACT_APP_ROUTE + "/api/profile/fetch";
  const [cookies, setCookie] = useCookies(['user']);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userData, setUserData] = useState();
  const [userBlogData, setUserBlogData] = useState([]);
  const [userBlogDataLoaded, setUserBlogDataLoaded] = useState(false);
  let history = useHistory();
  let { userId } = useParams();
  useEffect(() => {
    (async () => {
      const token = cookies.jwtToken;
      if (token) {
        const response = await axios.post(connUrlForToken, { token });
        setUserData(response.data.data);
        setUserBlogData(response.data.data.posts);
        setUserBlogDataLoaded(true);
        setDataLoaded(true);
      }
      else {
        const response = await axios.post(connUrlForGeneral, { userId });
        setUserData(response.data.data);
        setUserBlogData(response.data.data.posts);
        setUserBlogDataLoaded(true);
        setDataLoaded(true);
      }
    })();
  }, [])

  return (
    <div>
      <NavbarSection />
      {dataLoaded ? <div> <div className="profile_container">
        <div className="profile_metadata">
          <div className="profile_photo_container">
            <img
              src={`https://avatars.dicebear.com/4.5/api/male/${uuid()}.svg?mood[]=happy`}
              alt="Author Profile"
              className="profile_img"
            />
          </div>
        </div>
        <div className="profile_info">
          <div className="profile_stats">
            <div className="profile_followers">
              <GroupAddIcon /> &nbsp; 0 followers
            </div>
            <div className="profile_stars">
              <StarsIcon /> &nbsp; 0 stars
            </div>
            <div className="profile_email">
              <DraftsIcon /> &nbsp; {userData.email}
            </div>
            <div className="profile_location">
              <RoomIcon /> &nbsp; {faker.address.state()},
              {faker.address.country()}
            </div>
          </div>
          <div className="profile_username_metadata">
            <div className="profile_username">{userData.firstName}&nbsp;{userData.lastName}</div>
            <div className="profile_tag">@{userData.username}</div>
            <div className="profile_donate">
              {faker.random.boolean() ? "Donate" : "Edit Profile"}
            </div>
            <div className="profile_highlight">
              Creator | Programmer | Indian
            </div>
          </div>
        </div>
      </div>
        {!userBlogDataLoaded ? <div>
          <Button color="success" size="sm">
            Retry
          </Button><SpinnerLoad /></div> :
          userBlogData.map((data, index) => {
            return <AllPost key={index} data={data} />
          })
        }
      </div> : <SpinnerLoad message={"Blog "} />}

    </div>
  );
};

export default Profile;
