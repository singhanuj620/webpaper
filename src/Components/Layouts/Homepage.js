import React from "react";
import BookIcon from "@material-ui/icons/Book";
import MainHeader from "../Homepage/MainHeader";
import Trending from "../Homepage/Trending";
import AllPost from "../Homepage/AllPost";
import NavbarSection from '../Basics/Header';
import "../../Css/Layout/Homepage.css";
import { useCookies } from 'react-cookie';
import main_header_side_poster from "../../Assests/Images/Homepage/main_header_side_poster.svg";

const Homepage = () => {
  const [cookies, setCookie] = useCookies(['user']);
  // console.log("from homepage" + cookies.jwtToken);
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
      <AllPost />
    </div>
  );
};

export default Homepage;
