import React, { useState, useEffect } from "react";
import AllPost from "../Homepage/AllPost";
import NavbarSection from "../Basics/Header"
import "../../Css/Layout/Profile.css";
import faker from "faker";
import { Table } from "reactstrap";
import { v4 as uuid } from "uuid";
import StarsIcon from "@material-ui/icons/Stars";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import DraftsIcon from "@material-ui/icons/Drafts";
import RoomIcon from "@material-ui/icons/Room";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import axios from "axios"
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import SpinnerLoad from "../Basics/SpinnerLoad"

const Profile = () => {

  const connUrl = "http://" + process.env.REACT_APP_ROUTE + "/api/profile";
  const [cookies, setCookie] = useCookies(['user']);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userData, setUserData] = useState()
  let history = useHistory();

  useEffect(() => {
    (async () => {
      const token = cookies.jwtToken;
      try {
        const response = await axios.post(connUrl, { token });
        setUserData(response.data.data);
        setDataLoaded(true);
      } catch (err) {
        history.push("/login");
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
            <div className="profile_toppick">
              <LocalActivityIcon style={{ fontSize: 50 }} />{" "}
              <span className="bestpick_text">Author's Best Pick</span>
            </div>
            <div className="profile_picktable">
              <Table striped="true">
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      {faker.random.words()} {faker.random.words()}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      {faker.random.words()} {faker.random.words()}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      {faker.random.words()} {faker.random.words()}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
        <AllPost /></div> : <SpinnerLoad message={"Blog "} />}

    </div>
  );
};

export default Profile;
