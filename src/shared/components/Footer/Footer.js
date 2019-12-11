/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer({ color }) {
  return (
    <footer className="footer" data-background-color={color}>
      <Container>
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
