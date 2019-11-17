import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function QuestionNavBar() {
  return (
    <Navbar className={"fixed-top"} color="info" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand href="/" id="navbar-brand">
            Share With me
          </NavbarBrand>
        </div>
        <Nav navbar>
          <NavItem>
            <NavLink to="/index" tag={Link}>
              Back to Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              id="twitter-tooltip"
            >
              <i className="fab fa-twitter"></i>
              <p className="d-lg-none d-xl-none">Twitter</p>
            </NavLink>
            <UncontrolledTooltip target="#twitter-tooltip">
              Follow us on Twitter
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              id="facebook-tooltip"
            >
              <i className="fab fa-facebook-square"></i>
              <p className="d-lg-none d-xl-none">Facebook</p>
            </NavLink>
            <UncontrolledTooltip target="#facebook-tooltip">
              Like us on Facebook
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              id="instagram-tooltip"
            >
              <i className="fab fa-instagram"></i>
              <p className="d-lg-none d-xl-none">Instagram</p>
            </NavLink>
            <UncontrolledTooltip target="#instagram-tooltip">
              Follow us on Instagram
            </UncontrolledTooltip>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default QuestionNavBar;
