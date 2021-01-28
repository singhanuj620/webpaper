import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../Css/Homepage/FromFollowing.css";

const FromFollowing = () => {
  const [changePerson, setChangePerson] = useState(false);
  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    var conn = "https://randomuser.me/api/";
    axios
      .get(conn, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        },
        responseType: "json",
      })
      .then((data) => {
        var face = data.data.results[0].picture.large;
        var name =
          data.data.results[0].name.first +
          " " +
          data.data.results[0].name.last;
        setPersonData([face, name]);
      });
  }, [changePerson]);

  const getPersonData = () => {
    var tempPerson = [...personData];
    console.log(tempPerson);
    setChangePerson(!changePerson);
    return tempPerson;
  };

  return (
    <div className="FromFollowing">
      <div className="latestFollowing">
        <div className="latest_title">LATEST FROM FOLLOWING</div>
        <div className="following_peoples">
          <div className="people_face">{getPersonData[1]}</div>
          <img src={getPersonData[0]} alt="A" />
        </div>
      </div>
    </div>
  );
};

export default FromFollowing;
