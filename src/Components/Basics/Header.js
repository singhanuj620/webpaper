import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "../../Css/Basics/Header.css";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

const NavbarSection = (props) => {

  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [userPresent, setUserPresent] = useState(false);
  const [userData, setUserData] = useState()
  let history = useHistory();

  useEffect(() => {
    (async () => {
      const token = cookies.jwtToken;
      if (token) {
        const response = await axios.post(`http://${process.env.REACT_APP_ROUTE}/api/profile`, { token });
        setUserData(response.data.data)
        setUserPresent(true)
      }
      else {
        setUserPresent(false)
      }
    })();
  }, [])

  const removeToken = () => {
    removeCookie("jwtToken");
    setUserPresent(false);
    history.push("/login");
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar_container">
      <Navbar color="#ffc017" light expand="md">
        <NavbarBrand href="/">
          <Link to={`/`} className="link">
            WebPaper
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {userPresent ?
              <NavItem>
                <NavLink>
                  <Link to={`/user/${userData._id}`} className="link header_button" >
                    Profile
                  </Link>
                </NavLink>
              </NavItem> : <></>
            }
            <NavItem>
              <NavLink
                href="https://github.com/singhanuj620/webpaper"
                target="_blank"
                className="header_button"
              >
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={`/article/60a7d0ab155a4657f037e72b`} className="link header_button">
                  Random Blog
                </Link>
              </NavLink>
            </NavItem>
            {userPresent ?
              <NavItem>
                <NavLink>
                  <Link to={`/create`} className="link header_button">
                    New blog
                  </Link>
                </NavLink>
              </NavItem> : <></>
            }
          </Nav>
          {userPresent ? <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Button color="success" size="sm" id="navbar_auth_buttons" onClick={() => (removeToken())}>
                  Logout
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
            : <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to={`/login`}>
                    <Button color="success" size="sm" id="navbar_auth_buttons" >
                      Log In
                    </Button>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to={`/signup`}>
                    <Button
                      outline
                      color="primary"
                      size="sm"
                      id="navbar_auth_buttons"
                    >
                      Register
                    </Button>
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          }


        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
