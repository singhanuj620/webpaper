import React, { useState } from "react";
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

const NavbarSection = (props) => {
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
            <NavItem>
              <NavLink>
                <Link to={`/user/${uuid()}`} className="link">
                  Profile
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/singhanuj620/webpaper"
                target="_blank"
              >
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={`/article/${uuid()}`} className="link">
                  Random Blog
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to={`/login`}>
                  <Button color="success" size="sm" id="navbar_auth_buttons">
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
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
