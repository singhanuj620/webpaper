import React, { useState, useEffect } from "react";
import BookIcon from "@material-ui/icons/Book";
import MainHeader from "../Homepage/MainHeader";
import Trending from "../Homepage/Trending";
import AllPost from "../Homepage/AllPost";
import NavbarSection from '../Basics/Header';
import "../../Css/Layout/Homepage.css";
import { useCookies } from 'react-cookie';
import axios from "axios";
import SpinnerLoad from '../Basics/SpinnerLoad'
import main_header_side_poster from "../../Assests/Images/Homepage/main_header_side_poster.svg";

const Homepage = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const [allPostDataLoaded, setAllPostDataLoaded] = useState(false)
  const [allPostData, setAllPostData] = useState([]);
  // console.log("from homepage" + cookies.jwtToken);

  useEffect(() => {
    (async () => {
      const conn_url = `http://${process.env.REACT_APP_ROUTE}/api/article/top10`;
      try {
        const response = await axios.get(conn_url);
        // console.log(response.data.data)
        setAllPostData(response.data.data);
        setAllPostDataLoaded(true);
      }
      catch (e) {
        console.log(e);
      }
    })()
  }, [])

  return (
    <div>
      <NavbarSection />
      <div className="Homepage">
        <div className="poster_div">
          <div className="poster_metadata">
            <div className="poster_title">WEB PAPER</div>
            <div className="poster_description">
              The New Gen Newspaper <BookIcon style={{ fontSize: 40 }} />
            </div>
          </div>
          <img
            src={main_header_side_poster}
            alt="Web Paper"
            className="poster_svg"
          />
        </div>
        <Trending />
        <MainHeader />
      </div>
      {allPostDataLoaded ?
        allPostData.map((item, index) => (<AllPost key={index} data={item} />)) : <SpinnerLoad />}

    </div>
  );
};

export default Homepage;
