import React from "react";
import classNames from "classnames";
// reactstrap components
import { Container } from "reactstrap";
function Footer({ color, className }) {
  return (
    <footer
      className={classNames("footer", className)}
      style={{ backgroundColor: color }}
    >
      <Container style={{ color: "#FFF" }}>
        <nav>
          <ul>
            <li>
              <a href="/">Share with me</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
