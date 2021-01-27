import React, { useState } from "react";
import axios from "axios";

import "../../Css/Homepage/FromFollowing.css";

const FromFollowing = () => {
  const [person, setPerson] = useState([]);

  const getPerson = () => {
    var conn = "https://randomuser.me/api/";
    axios.get(conn).then((data) => {
      setPerson(data.data.results);
      console.log(data);
    });
  };

  const getPersonData = () => {
    getPerson();
    let face =
      person.length === 0
        ? "https://via.placeholder.com/150/"
        : person[0].picture.large;
    let name =
      person.length === 0
        ? "John Doe"
        : person[0].name.first + " " + person[0].name.last;
    return [face, name];
  };

  const getData = () => getPersonData();

  return (
    <div className="FromFollowing">
      <div className="latestFollowing">
        <div className="latest_title">LATEST FROM FOLLOWING</div>
        <div className="following_peoples">
          <div className="people_face">{getData()[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default FromFollowing;
