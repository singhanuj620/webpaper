import React from "react";
import AllPost from "../Homepage/AllPost";
import NavbarSection from "../Basics/Header";
import "../../Css/Layout/Profile.css";
import faker from "faker";
import { Table } from "reactstrap";
import { v4 as uuid } from "uuid";
import StarsIcon from "@material-ui/icons/Stars";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import DraftsIcon from "@material-ui/icons/Drafts";
import RoomIcon from "@material-ui/icons/Room";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";

const Profile = () => {
  return (
    <div>
      <NavbarSection />
      <div className="profile_container">
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
              <GroupAddIcon /> &nbsp; {faker.random.number()} followers
            </div>
            <div className="profile_stars">
              <StarsIcon /> &nbsp; {faker.random.number()} stars
            </div>
            <div className="profile_email">
              <DraftsIcon /> &nbsp; {faker.internet.email()}
            </div>
            <div className="profile_location">
              <RoomIcon /> &nbsp; {faker.address.state()},
              {faker.address.country()}
            </div>
          </div>
          <div className="profile_username_metadata">
            <div className="profile_username">{faker.name.findName()}</div>
            <div className="profile_tag">@{faker.internet.userName()}</div>
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
      <AllPost />
    </div>
  );
};

export default Profile;
